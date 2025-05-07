import cacheRtl from "../utils/rtl-cache";
import theme from "../utils/rtl-theme";
import { CacheProvider } from "@emotion/react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface TypeSelectTextFields<T> {
  label: string;
  id?: string;
  value: string;
  name?: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  data: T[];
  classSelect?: string;
  borderradius?: string;
  bgColor?: string;
  borderColor?: string;
  inputFontSize?: string;
  lableFontSize?: string;
  defaultValue?: string;
  dropDownSize?: "small" | "medium";
  claasNameLabel?: string;
  classNameDropDown?:string;
  error?:boolean|undefined;
  errorText?:React.ReactNode;
}
interface SelectInput {
  [key: string]: any;
}

function SelectTextFields<T extends SelectInput>({
  label,
  error,errorText,
  id,
  value,
  name,
  onChange,
  data,
  classSelect,
  borderradius,
  bgColor,
  borderColor,
  inputFontSize,
  lableFontSize,
  defaultValue,
  dropDownSize,
  claasNameLabel,
  classNameDropDown
}: TypeSelectTextFields<T>) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <FormControl className={classSelect} size={dropDownSize} sx={{width:500}} error={error}>
            <InputLabel
              id="demo-simple-select-label"
              className={claasNameLabel}
            >
              {label}
            </InputLabel>
            <Select
              id={id}
              value={value}
              name={name}
              label={label}
              onChange={onChange}
              defaultValue={defaultValue}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: borderradius,
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                },
                ".MuiFormLabel-root": {
                  fontSize: lableFontSize,
                },
                ".MuiInputBase-input": {
                  fontSize: inputFontSize,
                },
              }}
              className={classNameDropDown}
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              {data.map((option, index) => (
                <MenuItem key={index} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
            <div>{errorText}</div>
          </FormControl>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default SelectTextFields;
