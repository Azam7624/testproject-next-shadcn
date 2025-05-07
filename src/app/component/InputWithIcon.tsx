import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import cacheRtl from "@/app/utils/rtl-cache";
import theme from "@/app/utils/rtl-theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, prefix } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type InputProps = {
  prefix?: string;
  prefixIcon?: IconProp;
  showPassword?: boolean;
  onClickIcon?: (event: any) => void;
  error?: boolean | undefined,
  errorText?: React.ReactNode

};
const InputWithIcon: React.FC<InputProps> = ({
  error,
  onClickIcon,
  showPassword,
  prefix,
  prefixIcon,
  errorText
}) => {
  //   const handleMouseDownPassword = (
  //     event: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     event.preventDefault();
  //   };

  //   const handleMouseUpPassword = (
  //     event: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     event.preventDefault();
  //   };
  console.log(showPassword);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <FormControl  sx={{
            'label':{

                fontSize:'10px'
            }
             }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
            کد پستی محل سکونتdfsfsfsfsdf
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
             // size="small"
             fullWidth 
            
              error={error}
              type={!showPassword ? "text" : "password"}
              endAdornment={
                ( prefixIcon && 
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={onClickIcon}
                      //   onMouseDown={handleMouseDownPassword}
                      //   onMouseUp={handleMouseUpPassword}
                      edge="end"
                     
                      
                    >
                      {prefixIcon?<FontAwesomeIcon icon={prefixIcon} className="text-[18px]" />:<span className="text-[15px] font-bold">{prefix}</span>}
                    </IconButton>
                  </InputAdornment>
                )
                ||
                (prefix&&<InputAdornment position="end" className="w-[35px] h-[40px] flex justify-center !rounded-l-lg !max-h-12 bg-[#d8d8d8]"><p className="text-15px] font-bold">{prefix}</p></InputAdornment>)
              }
              label="Password"
              className={`${prefix?'!p-0':''}`}
            />
          </FormControl>
          {/* <div className="h-[20px] text-[9px] text-error pt-1">{errorText}</div> */}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default InputWithIcon;
