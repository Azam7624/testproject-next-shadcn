import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const CustomerClub = () => {
  return (
    <div className='w-full'>
        <div className='flex items-center text-[12px] mb-2'>امکانات<span className='text-[14px] text-[#0D61A4]'>/</span><span className='font-bold'>باشگاه مشتریان</span></div>
        <Tabs defaultValue="account" dir='rtl'>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">هزینه ها</TabsTrigger>
        <TabsTrigger value="password">درآمد</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
       
       <div className='w-full flex flex-col gap-4'>
        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-md shadow p-3.5 '>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>پیتزا</span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
        <div className='flex items-center justify-between bg-[#F7F7F7] border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>پیتزا</span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>پیتزا</span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
        <div className='flex items-center justify-between bg-[#F7F7F7] border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>پیتزا</span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
       </div>
      </TabsContent>
      <TabsContent value="password">
      <div className='w-full flex flex-col gap-4'>
        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='w-10 h-10 rounded-full bg-[#7AAFE3]'></div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>امین رضا عادی </span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>10روزقبل</span>
                <span className='text-[10px] text-[#4D4D4D]'>اخرین خرید</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
        <div className='flex items-center justify-between bg-[#F7F7F7] border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='w-10 h-10 rounded-full bg-[#7AAFE3]'></div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>امین رضا عادی </span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>10روزقبل</span>
                <span className='text-[10px] text-[#4D4D4D]'>اخرین خرید</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='w-10 h-10 rounded-full bg-[#7AAFE3]'></div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>امین رضا عادی </span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>10روزقبل</span>
                <span className='text-[10px] text-[#4D4D4D]'>اخرین خرید</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
        <div className='flex items-center justify-between bg-[#F7F7F7] border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='w-10 h-10 rounded-full bg-[#7AAFE3]'></div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>امین رضا عادی </span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>10روزقبل</span>
                <span className='text-[10px] text-[#4D4D4D]'>اخرین خرید</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
        <div className='flex items-center justify-between border border-[#EEEEEE] rounded-md shadow py-3.5 px-2'>
            <div className='w-10 h-10 rounded-full bg-[#7AAFE3]'></div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>امین رضا عادی </span>
                <span className='text-[10px] text-[#4D4D4D]'>20 فروردین 1404 </span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>300,000,000</span>
                <span className='text-[10px] text-[#4D4D4D]'>مبلغ</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>10روزقبل</span>
                <span className='text-[10px] text-[#4D4D4D]'>اخرین خرید</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='text-[12px] font-bold text-[#454545]'>50</span>
                <span className='text-[10px] text-[#4D4D4D]'>تعداد خرید</span>
            </div>
        </div>
       </div>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default CustomerClub
