// components/Timer.tsx
'use client';

import { useEffect, useState } from 'react';

type Props = {
  duration: number; // in seconds
  onResend: () => void;
};

export default function Timer({ duration, onResend }: Props) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  if (timeLeft > 0) {
    return <p>Resend in {timeLeft} seconds</p>;
  }

  return <button onClick={onResend}>Resend Code</button>;
}
