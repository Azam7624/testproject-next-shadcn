import Image from "next/image";
import Link from "next/link";

import exit from "@/../public/assets/images/userProfile/exit.svg";
import pickedUpIcon from "@/../public/assets/images/userProfile/picked-up.svg";
import settingIcon from "@/../public/assets/images/userProfile/setting.svg";
import transactionIcon from "@/../public/assets/images/userProfile/Transactions.svg";
import dashbordIcon from "@/../public/assets/images/userProfile/Dashbord.svg";
import React from "react";

const Blur = () => {
  return (
    <div className="relative w-[90%] mx-auto top-32 left-[calc(50%-45%)]">
      {/* Glass background */}
      <div
        className="absolute inset-0 z-40 rounded-2xl backdrop-blur-md shadow-11"
        style={{ backgroundColor: "rgba(255,255,255,0.57)" }}
      ></div>

      {/* Main content */}
      <div className="relative z-50 flex flex-col items-center rounded-2xl p-2.5 shadow-11 bg-transparent">
        <div className="text-center p-2.5">
          <p className="text-sm font-bold">عملیات کیف پول</p>
        </div>
        <div className="w-[95%] rounded-2xl shadow-12">
          <div className="flex flex-wrap justify-center font-bold text-center gap-7 px-3 py-3">
            <Link
              className="w-20 h-16 flex flex-col items-center justify-evenly"
              href="/user-profile"
            >
              <Image alt="dashbordIcon" src={dashbordIcon} />
              <span className="text-[10px]">داشبورد</span>
            </Link>
            <Link
              className="w-20 h-16 flex flex-col items-center justify-evenly"
              href="/user-profile/withdraw"
            >
              <Image alt="pickedUpIcon" src={pickedUpIcon} />
              <span className="text-[10px]">برداشت</span>
            </Link>
            <Link
              className="w-20 h-16 flex flex-col items-center justify-evenly"
              href="/user-profile/transactions"
            >
              <Image alt="transactionIcon" src={transactionIcon} />
              <span className="text-[10px]">تراکنش‌ها</span>
            </Link>
            <Link
              className="w-20 h-16 flex flex-col items-center justify-evenly"
              href="/user-profile/setting"
            >
              <Image alt="scoreIcon" src={settingIcon} />
              <span className="text-[10px]">تنظیمات</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blur;
