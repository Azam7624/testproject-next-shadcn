import React, { useState } from "react";
// import { CacheProvider, ThemeProvider } from "@emotion/react";
// import cacheRtl from "@/utils/right-to-left/rtl-cache";
// import theme from "@/utils/right-to-left/rtl-theme";
import { Autocomplete, TextField } from "@mui/material";

type OptionType = { key: number; value: string };

type Props = {
  options: OptionType[];
  onChange: (event: React.SyntheticEvent, value: OptionType | null) => void;
};

const AutoComplete: React.FC<Props> = ({ options, onChange }) => {
  const [value, setValue] = useState<OptionType | null>(null);
  const [error, setError] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: OptionType | null) => {
    setValue(newValue);
    setError(newValue === null); // 👈 اگر مقدار انتخاب نشود، خطا بدهد
    onChange(event, newValue);
  };

  return (
          <Autocomplete
            disablePortal
            options={options}
            getOptionLabel={(option) => option.value}
            value={value}
            onChange={handleChange}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Movie"
                error={error} // 👈 نمایش خطا
                helperText={error ? "لطفاً یک گزینه انتخاب کنید!" : ""} // 👈 متن خطا
              />
            )}
          />
      
  );
};

export default AutoComplete;
