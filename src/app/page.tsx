// "use client";

// import React, { useState } from "react";
// import dayjs, { Dayjs } from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import InputAdornments from "./component/Password";
// import TextInputComponent from "./component/TextInputComponent";
// import SearchIcon from "@mui/icons-material/Search";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Visibility from "@mui/icons-material/Visibility";
// import InputWithIcon from "./component/InputWithIcon";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import moment, { Moment } from "moment";
// import RadioButtonsGroup from "./component/RadioGroup";
// import SelectTextFields from "./component/select";
// import * as Yup from "yup";
// import { useFormik } from "formik";
// import CustomizedSwitches from "./component/Switch";
// import LoanBenefits from "./component/TestComponents";
// import WhyUranusLoanSection from "./component/TestComponents";
// import MobileFeatures from "./component/TestComponents";
// import CheckOut from "./component/CheckOut";
// import MultiStepForm from "./component/CheckOut";
// import Postdata from "./component/Postdata";
// import NumberInput from "./component/NumberInput";
// import QuantityInput from "./component/NumberInput";
// import ComboBox from "./component/AutoComplete";

// export default function Home() {
//   return <div>kkkkk</div>
// }

// pages/register.js
"use client";

import StepProgress from "@/app/component/DateTest";
import { useState } from "react";
import ChooseLoanPlan from "./components/Slider";
import RequiredInput from "./component/TextInputComponent";
import InputFileUpload from "./components/UploadFile";
import Blur from "./components/Blur";
import Landing from "./components/Landing";
import MyListss from "./components/tsxt";
import TextInputComponent from "./component/TextInputComponent";
import Activities from "./components/pageMain/Activities";
import ProductList from "./components/Categories";
import CategoryMenu from "./components/Categories";
import DigikalaMenu from "./components/Categories";
import HoverMenu from "./components/Categories";
import NestedDropdown from "./components/Categories";
import BusinessCategories from "./components/Categories";
import DigiKalaStyleCategory from "./components/Categories";
import { Button } from "@/components/ui/button";
import Otp from "./wallet-test/login/otp";
import TableComponent from "./wallet-test/table/table";
import Wellcome from "./wallet-test/login/wellcome";
import CustomerClub from "./wallet-test/customerClub/customer-club";
import FacilitiesRequest from "./wallet-test/facilitiesRequest/facilities-request";
import Modal from "./wallet-test/modal/modal";
import SwiperExample from "./wallet-test/swiper/Swiper-Example";
// const queryClient = new QueryClient()

export default function App() {
  // const [currentStep, setCurrentStep] = useState(2);
  const formatPersianDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };
  console.log(formatPersianDate("2025-05-05T10:05:36"));

  return (
    <div dir="" className="mt-8 gap-x-12 text-center p-4">
      {/* <TextInputComponent label='a' fieldClassName="h-[50px]" required/> */}
      {/* <Activities />
      <ProductList /> */}
      {/* <DigiKalaStyleCategory/> */}
      {/* <Button className="bg-blue-400 w-32 mt-5 hover:bg-red-300 ">Click me</Button> */}
      {/* <Otp />
      <Wellcome/> */}
      <div dir="rtl" className="mt-9">
        {/* <TableComponent /> */}
      {/* <CustomerClub/> */}
      <FacilitiesRequest/>
      <SwiperExample/>
      {/* <Modal/> */}
      </div>
    </div>
  );
}
