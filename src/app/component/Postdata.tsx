// import React from 'react'

// const Postdata = () => {
//     const userTerminal=[{
//         terminalNumber:12121212,
//         isActive:true,
//         blockedAmount:4000000000
//     },{
//         terminalNumber:12121212,
//         isActive:true,
//         blockedAmount:4000000000
//     },{
//         terminalNumber:12121212,
//         isActive:true,
//         blockedAmount:4000000000
//     },{
//         terminalNumber:12121212,
//         isActive:false,
//         blockedAmount:400002121212100000
//     },{
//         terminalNumber:12121212,
//         isActive:true,
//         blockedAmount:4000000000
//     }]
//   return (
//     <div className="" dir='rtl'>
//     {userTerminal.map((item,index)=>(
//       <div className="flex gap-8">
//         <div>{index+1}</div>
//         <div>{item.terminalNumber}</div>
//         <div>{item.isActive===true?'فعال':'غیرفعال'}</div>
//         <div><p className="w-[185px] flex gap-2 justify-between">مبلغ بلوکه شده: <span>{item.blockedAmount}</span></p></div>
//       </div>
//     ))}
    
//   </div>
//   )
// }

// export default Postdata
"use client";

import { useState } from "react";
import num2persian from "num2persian";
import { digitsToWords } from "persian-tools";
export default function NumberToText() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // فقط عدد بپذیرد
      setNumber(value);
      setText(value ? digitsToWords(value) : "");
    }
  };
  console.log(digitsToWords(1234)); 

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="یک عدد وارد کنید..."
        className="border p-2 rounded"
      />
      {text && <p className="text-lg font-semibold">{text}</p>}
    </div>
  );
}
validate:(value)=>{
    try {
      schema.validateSync(value,{abortEarly:false});
   
    } catch (error) {
    
     window.scrollTo( 0, 0);
    }
   },