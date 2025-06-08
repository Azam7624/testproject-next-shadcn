import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LuSlash } from "react-icons/lu";
import BreadCrumb from "../bread-crumb/bread-crumb";
import { Button } from "@/components/ui/button";

const FacilitiesRequest = () => {
  const data = [
    {
      name: "امکانات",
      link: "/f",
    },
    {
      name: "درخواست تسهیلات",
      link: "/s",
    },
  ];
  return (
    <div className="w-full">
      <Breadcrumb>
        <BreadcrumbList>
          {data.map((item, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  href={item.link}
                  className={`${
                    index === data.length - 1 ? "font-bold" : "font-normal"
                  } text-[12px] text-[#454545] `}
                >
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== data.length - 1 && (
                <LuSlash color="#0D61A4" size={15} />
              )}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      {/* <div className="flex items-center text-[12px] mb-2">
        امکانات<span className="text-[14px] text-[#0D61A4]">/</span>
        <span className="font-bold">درخواست تسهیلات </span>
      </div> */}
      <Alert
        dir="rtl"
        className="mt-2 "
        style={{
          background:
            "linear-gradient(90deg, rgba(253, 230, 203, 0.84) 0%, rgba(243, 190, 130, 0.6048) 0.01%)",
        }}
      >
        <IoWarningOutline color="#F89521" className="text-base" />
        <AlertDescription className="inline-block text-[#F89521] font-bold text-xs">
          برای درخواست وام لطفا ثبت استعلام انجام دهید .
        </AlertDescription>
      </Alert>
      <div className="w-full flex gap-4 justify-center my-7">
        <Button className="w-[120px] text-[12px]">ثبت استعلام </Button>
        <Button className="w-[120px] text-[12px]">درخواست تسهیلات </Button>
      </div>
      <Tabs defaultValue="account" dir="rtl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">گزارش استعلام ها </TabsTrigger>
          <TabsTrigger value="password">گزارش درخواست تسهیلات ها</TabsTrigger>
        </TabsList>
        <TabsContent value="account"></TabsContent>
        <TabsContent value="password"></TabsContent>
      </Tabs>
      <div className="flex flex-col">
        <div className="w-full border-b border-[#EEEEEE] text-sm font-bold text-[#454545] py-2.5">
          درخواست وام
        </div>
        <div className="w-full text-[#454545] text-[10px] py-4">
        شما می‌توانید با توجه به امتیاز خود تا سقف 4000,000,000ریال درخواست تسهیلات داشته باشید.
        </div>
      </div>
    </div>
  );
};

export default FacilitiesRequest;
