"use client";
import { type FC, useEffect, useRef, useState } from "react";

type CounterProps = {
  startValue: number;
  maximumValue: number;
  durationSeconds: number;
  description: string;
  isLast:any
};

export const Counter: FC<CounterProps> = ({
  description,
  maximumValue,
  startValue,
  durationSeconds,
  isLast
}) => {
  const el = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(startValue);

  const hasAnimated = useRef(false);
console.log(isLast);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);

          hasAnimated.current = true;

          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    if (el.current) obs.observe(el.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const diff = maximumValue - startValue;
    if (diff <= 0) return;

    const totalMs = durationSeconds * 1000;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / totalMs, 1);
      const value=Math.floor(startValue + diff * progress)
      setCounter(smartRound(value))
    //   if(value<100)
        
    //   setCounter(Math.floor((value/10)*10));
    //   if(value>100)
    //     setCounter(Math.floor((value/100)*100));
    // if(value>1000)
    //     setCounter(Math.ceil((value/1000))*100000);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
        }
    requestAnimationFrame(step);
  }, [isVisible, startValue, maximumValue, durationSeconds,isLast]);

  function smartRound(num: number): number {
    if (num < 100) {
      return Math.round(num / 10) * 10;
    }
  
    const magnitude = Math.pow(10, Math.floor(Math.log10(num)) - 1); // یک مرتبه پایین‌تر
   
    console.log('mmmmmmmmmmmmmm',Math.pow(10, Math.floor(Math.log10(175)) - 1));
    return Math.ceil(num / magnitude) * magnitude;
  }
  return (
    <div
      ref={el}
      className="justify-self-center max-w-[259px] w-full flex flex-col gap-y-4 py-5 items-center border border-[#CCCCCC] rounded-md"
    >
      <h1 className="border-b pb-4 px-5 border-[#CCCCCC] w-full text-3xl sm:text-3xl md:text-4xl text-center text-nakhllPrimary-40 font-bold">
        {counter}+
      </h1>
      <p className="md:font-bold px-5 text-[#454545]  text-[12px] sm:text-base lg:text-xl text-center">
        {description}
      </p>
    </div>
  );
};

export default Counter;
