import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


export default function RadioButtonsGroup() {
  return (
    <div dir="rtl" className="w-full">
      <FormControl className="flex flex-row w-full items-center">
        <FormLabel id="demo-radio-buttons-group-label"className="w-[20%]">جواز کسبی صنف:</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          className="flex flex-row w-[50%]"
          onChange={(e)=>console.log(e.target.value)}
        >
          <FormControlLabel value="100" control={<Radio />} label="دارد" />
          <FormControlLabel value="200" control={<Radio />} label="ندارد" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
