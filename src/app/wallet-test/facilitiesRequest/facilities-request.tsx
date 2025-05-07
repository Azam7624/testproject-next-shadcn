import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const FacilitiesRequest = () => {
  return (
    <div className="w-full">
      <div className="flex items-center text-[12px] mb-2">
        امکانات<span className="text-[14px] text-[#0D61A4]">/</span>
        <span className="font-bold">درخواست تسهیلات </span>
      </div>
      <Alert dir="rtl">
        <IoWarningOutline color="#F89521"/>
        <AlertDescription>
        برای درخواست وام لطفا ثبت استعلام انجام دهید .
        </AlertDescription>
      </Alert>
      <Tabs defaultValue="account" dir="rtl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">هزینه ها</TabsTrigger>
          <TabsTrigger value="password">درآمد</TabsTrigger>
        </TabsList>
        <TabsContent value="account"></TabsContent>
        <TabsContent value="password"></TabsContent>
      </Tabs>
    </div>
  );
};

export default FacilitiesRequest;
