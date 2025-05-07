"use client";

import cacheRtl from '@/app/utils/rtl-cache'
import theme from '@/app/utils/rtl-theme'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TextField } from '@mui/material';
import React from 'react'


type InputProps = {
    id?: string;
    label: string;
    value?: string;
    name?: string;
    divStyle?:{
      bgColor?:string,
      radius?:string
    }
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    borderradius?: string;
    bgColor?: string;
    borderColor?: string;
    inputFontSize?: string;
    defaultValue?: string;
    size?: "small" | "medium";
    lableFontSize?: string;
    fieldClassName?: string;
    error?: boolean | undefined;
    errorText?: React.ReactNode;
    prefix?: string;
    prefixIcon?: IconProp;
    showPassword?: boolean;
    onClickIcon?: (event: any) => void;
    height?:number;
    multiline?:boolean;
    maxLenghth?:number;
    hideError?:boolean
  };
  
const TextFeild : React.FC<InputProps>= ({
    id,
    label,
    value,
    name,
    required,
    size,
    divStyle,
    disabled,
    lableFontSize,
    defaultValue,
    borderradius,
    bgColor,
    borderColor,
    inputFontSize,
    onChange,
    fieldClassName,
    error,
    errorText,
    onClickIcon,
    showPassword,
    prefix,
    prefixIcon,
    height,
    multiline,
    maxLenghth,
    hideError
}) => {
  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <TextField
          id={id}
          label={label}
          variant="outlined"
          onChange={onChange}
          //defaultValue={value}
          value={value}
          name={name}
          defaultValue={defaultValue}
          required={required}
          disabled={disabled}
          size={size}
          error={error}
          helperText='asdasd'
          className={`iransans-font ${fieldClassName} `}
         sx={{'& .MuiOutlinedInput-notchedOutline':{
          borderRadius:borderradius,backgroundColor:bgColor,borderColor:borderColor
         },
        '.MuiFormLabel-root':{
          fontSize:lableFontSize,color:'#CCCCCC'
        },
        '.MuiInputBase-input':{
          fontSize:inputFontSize,color:"#5E5B5B"
        }
        }}
        />
        
      </div>
    </ThemeProvider>
  </CacheProvider>
  )
}

export default TextFeild
