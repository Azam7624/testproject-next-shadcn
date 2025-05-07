import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import React from "react";
import s from "@/../public/assets/images/logo/customer-club.svg";

const Wellcome = () => {
  return (
    <Card className="w-full flex flex-col justify-center items-center gap-[35px] max-w-md mx-auto p-3">
      <img
        src="/assets/images/logo/Frame 1236.svg"
        alt="log"
        className="w-[290px]"
      />
      <CardTitle className="text-[#454545]">مینای عزیز به داشبور بازار اجتماعی نخل خوش آمدید. </CardTitle>
      <Button type="button" className="w-full mb-5 bg-[#0d61a4] text-white">
        ادامه
      </Button>
    
    </Card>
  );
};

export default Wellcome;
