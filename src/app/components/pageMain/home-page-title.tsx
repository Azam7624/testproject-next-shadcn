import Image from "next/image";
import Link from "next/link";
import chevronImg from "@/../../public/assets/images/home-sections/list-custom/double-chevron.svg";
import { FC } from "react";

export type HomePageTitleProps = {
  title: string;
  moreTitle?: string;
  url?: string;
  target?: "_blank" | "_self";
};

const HomePageTitle: FC<HomePageTitleProps> = ({
  title,
  moreTitle = "مشاهده همه",
  url,
  target,
}) => {
  return (
    <div
      className="relative flex justify-between 
        before:content before:absolute before:top-1/2
        before:w-full md:before:h-[0.5px] before:bg-[#CCCCCC] text-[#454545] items-center"
    >
      <h3 className="bg-white relative pl-3 text-sm sm:text-base md:text-xl lg:text-2xl font-bold">{title}</h3>
      {url && (
        <Link
          className="bg-white relative pr-2 md:pr-3 text-[10px] md:text-sm font-bold h-fit flex items-center gap-x-1 md:gap-x-2"
          href={url}
          target={target}
        >
          <span>{moreTitle}</span>
          <Image src={chevronImg} className="w-3 h-3 sm:w-[15px] sm:h-[14px]" width={15} height={14} alt="مشاهده" />
        </Link>
      )}
    </div>
  );
};

export default HomePageTitle;
