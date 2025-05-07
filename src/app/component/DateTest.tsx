// import * as React from 'react';
// import { prefixer } from 'stylis';
// import rtlPlugin from 'stylis-plugin-rtl';
// import createCache from '@emotion/cache';
// import { CacheProvider } from '@emotion/react';
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

// // Create rtl cache
// const cacheRtl = createCache({
//   key: 'adapter-date-fns-jalali-demo',
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// export default function AdapterJalali() {
//   // Inherit the theme from the docs site (dark/light mode)
//   const existingTheme = useTheme();

//   const theme = React.useMemo(
//     () => createTheme(existingTheme, { direction: 'rtl' }),
//     [existingTheme],
//   );

//   return (
//     <CacheProvider value={cacheRtl}>
//       <ThemeProvider theme={theme}>
//         <div dir="rtl">
//           <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
//             <DateTimePicker
//               label="AdapterDateFnsJalali"
//               defaultValue={new Date(2022, 1, 1, 12)}
//               // Setting `dir="rtl"` on the paper is needed if the `<div dir="rtl />` does not contain the portaled element.
//               // If you set `dir="rtl"` on the `<body />`, you can skip it.
//               slotProps={{
//                 desktopPaper: {
//                   dir: 'rtl',
//                 },
//                 mobilePaper: {
//                   dir: 'rtl',
//                 },
//               }}
//             />
//           </LocalizationProvider>
//         </div>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }
// "use client";
// import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
// import { createTheme } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
// import moment, { Moment } from "moment-jalaali";
// import React, { useCallback, useState } from "react";
// import { prefixer } from "stylis";
// import rtlPlugin from "stylis-plugin-rtl";
// import createCache from "@emotion/cache";
// type DatePickerComponentProps = {
//   label: string;
//   value: Moment;
//   size?: "small" | "medium";
//   name?:string;
//   onChange: (e: any) => void;
//   inputStyles?: {
//     radius?: number;
//     fontSize?: number;
//     borderColor?: string;
//     padding?: string;
//     fontColor?: string;
//   };
//   labelStyles?: {
//     fontSize?: number;
//     color?: string;
//   };
//   className?: string;
//   errorText?:React.ReactNode;
// };

// const cacheRtl = createCache({
//   key: "adapter-date-fns-jalali-demo",
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
//   label,
//   value,
//   onChange,
//   inputStyles,
//   labelStyles,
//   className,
//   name,
//   errorText
// }) => {
//   moment.loadPersian({ dialect: "persian", usePersianDigits: true });

//   //   let defVal = value ? moment();

//   const existingTheme = useTheme();

//   const theme = React.useMemo(
//     () => createTheme(existingTheme, { direction: "rtl" }),
//     [existingTheme]
//   );

//   const handleInputChange = useCallback(
//     (e: any) => {
//       onChange(e);
//       console.log("azam", e);
//     },
//     [onChange]
//   );

//   return (
//     <CacheProvider value={cacheRtl}>
//       <ThemeProvider theme={theme}>
//         <div dir="rtl">
//           <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
//             <DatePicker
//               label={label}
//               className={`iransans-font ${className} `}
//               defaultValue={value ?? moment()}
//               onChange={handleInputChange}
//               name={name}
//               slotProps={{
//                 desktopPaper: {
//                   dir: "rtl",
//                 },
//                 mobilePaper: {
//                   dir: "rtl",
//                 },
//                 // textField:{size:"small"}
//               }}
//               sx={{
//                 label: {
//                   fontSize: labelStyles?.fontSize ?? 12,
//                   color: labelStyles?.color,
//                 },
//                 div: {
//                   borderRadius: inputStyles?.radius ?? "8px",
//                   fontSize: inputStyles?.fontSize ?? 10,
//                   color: inputStyles?.fontColor,
//                 },
//                 "div>fieldset": {
//                   borderColor: inputStyles?.borderColor ?? "black",
//                 },
//                 "div>input": {
//                   padding: inputStyles?.padding,
//                 },
//               }}
//             />
//             <div className="h-[20px] text-[9px] text-error pt-1">
//               {errorText}
//             </div>
//           </LocalizationProvider>
//         </div>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// };

// export default DatePickerComponent;
// components/StepProgress.js

export default function StepProgress({ currentStep,setCurrentStep }) {
    const steps = [
      "تأیید شماره موبایل",
      "تکمیل اطلاعات فردی",
      "گذرواژه و روابط",
      "پایان"
    ];
    // setCurrentStep(0)
    return (
      <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse my-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center 
                ${index <= currentStep ? "bg-yellow-400" : "bg-gray-300"}`}
            ></div>
            {index !== steps.length - 1 && (
              <div className={`w-8 h-1 ${index <= currentStep ? "bg-yellow-400" : "bg-gray-300"} mx-2`}></div>
            )}
          </div>
        ))}
      </div>
    );
  }
  