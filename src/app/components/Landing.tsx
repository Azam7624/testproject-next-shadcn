import React from "react";

const Landing = () => {
  return (
    // <div className="flex flex-col gap-4 md:gap-2 max-w-7xl mx-auto  ">
    //   <div className="grid justify-items-center md:px-8 bg-[#f8f8f8] rounded-[8px] pt-6">
    //     <div className="w-full">
    //         <div className="w-[80%] bg-[#0D61A7] rounded-2xl"></div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-[1280px] mx-auto p-4 grid grid-cols-3 grid-rows-2 gap-4">
      <div className="bg-orange-500 text-white text-center p-6 rounded-lg col-span-1 flex items-center justify-center font-bold min-h-[200px]">
        همین الان ثبت‌نام کن
      </div>
      <div className="bg-blue-700 text-white text-center p-6 rounded-lg col-span-2 flex items-center justify-center font-bold min-h-[200px]">
        بازار اجتماعی نخل
      </div>
      <div className="bg-cyan-600 text-white text-center p-6 rounded-lg col-span-1 flex items-center justify-center font-bold min-h-[200px]">
        باشگاه مشتریان
      </div>
      <div className="bg-gray-400 text-white text-center p-6 rounded-lg col-span-1 flex items-center justify-center font-bold min-h-[200px]">
        کارخوان مجازی
      </div>
      <div className="bg-green-700 text-white text-center p-6 rounded-lg col-span-1 flex items-center justify-center font-bold min-h-[200px]">
        تسهیلات ویژه
      </div>
    </div>
  );
};

export default Landing;
