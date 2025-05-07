"use client";
import cacheRtl from "@/app/utils/rtl-cache";
import theme from "@/app/utils/rtl-theme";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Image from "next/image";
import React from "react";

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

const  TextInputComponent: React.FC<InputProps> = ({
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
          {/* <TextField
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
              className={`iransans-font ${fieldClassName} `}
              // sx={{
              //   "& .MuiOutlinedInput-notchedOutline": {
              //     borderRadius: borderradius,
              //     backgroundColor: bgColor,
              //     borderColor: borderColor,
              //   },
              //   ".MuiFormLabel-root": {
              //     fontSize: lableFontSize,
              //     color: "#CCCCCC",
              //   },
              //   ".MuiInputBase-input": {
              //     fontSize: inputFontSize,
              //     color: "#5E5B5B",
              //   },
              // }}
              sx={{
                label: {
                  fontSize: "12px",
                  color: "#777777",
                  // transform:'translate(-14px, 10px) scale(1)'
                },
                backgroundColor: divStyle?.bgColor,
                borderRadius: divStyle?.radius,
                height: height, // ارتفاع دلخواه
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: borderradius,
                  borderColor: borderColor,
                },
                input: {
                  fontSize: inputFontSize,
                  //padding: "8.5px 14px",
                  backgroundColor: bgColor,
                  borderRadius: borderradius,
                },
              }}
            /> */}
          <FormControl
            variant="outlined"
            fullWidth
            required
            sx={{
              label: {
                fontSize: "12px",
                color: "#777777",
                // transform:'translate(-14px, 10px) scale(1)'
              },
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              {label} {required && <span style={{ color: "red" }}>*</span>}
            </InputLabel>
            <OutlinedInput
              id={id}
              onChange={onChange}
              value={value}
              name={name}
              defaultValue={defaultValue}
              required
              disabled={disabled}
              error={error}
              multiline={multiline}
              slotProps={{ input: { maxLength: maxLenghth } }}
              rows={3}
              className={`iransans-font  ${fieldClassName} ${
                prefix ? "!p-0" : ""
              }`}
              sx={{
                backgroundColor: divStyle?.bgColor,
                borderRadius: divStyle?.radius,
                height: height, // ارتفاع دلخواه
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: borderradius,
                  borderColor: borderColor,
                },
                input: {
                  fontSize: inputFontSize,
                  //padding: "8.5px 14px",
                  backgroundColor: bgColor,
                  borderRadius: borderradius,
                },
              }}
              type={!showPassword ? "text" : "password"}
              endAdornment={
                (prefixIcon && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={onClickIcon}
                      edge="end"
                    >
                      {prefixIcon ? (
                        <FontAwesomeIcon
                          icon={prefixIcon}
                          className="text-[18px]"
                        />
                      ) : (
                        <span className="text-[15px] font-bold">{prefix}</span>
                      )}
                    </IconButton>
                  </InputAdornment>
                )) ||
                (prefix && (
                  <InputAdornment
                    position="end"
                    className="w-[35px] h-[40px] flex justify-center !rounded-l-lg !max-h-12 bg-[#d8d8d8]"
                  >
                    <p className="text-[15px] font-bold">{prefix}</p>
                  </InputAdornment>
                ))
              }
                label={label}
              // className={`${prefix ? "!p-0" : ""}`}
            />
          </FormControl>

          {!hideError && (
            <div className="h-[20px] text-[9px] text-error pr-[5px] pt-1">
              {errorText}
            </div>
          )}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default TextInputComponent;
