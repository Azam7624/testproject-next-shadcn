import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import React from 'react'

const Otp = () => {
  return (
    <Card className="w-full max-w-md mx-auto ">
      <CardHeader className='flex items-center px-2'>
      <img src="/assets/images/logo/logo1698231068 1.svg" alt="log"className='w-[80px]' />
      <CardDescription className='text-[#454545] text-xs font-bold'>
      لطفا کدی که به شماره 0990902869 پیامک شده وارد نمایید .
        </CardDescription>
      </CardHeader>
      {/* {step === "send" ? (
        // <SendOtpForm
        //   phoneNumber={phoneNumber}
        //   timer={timer}
        //   dispatch={dispatch}
        // />
      ) : (
        // <VerifyOtpForm
        //   phoneNumber={phoneNumber}
        //   timer={timer}
        //   dispatch={dispatch}
        // />
      )} */}
    </Card>
  )
}

export default Otp
