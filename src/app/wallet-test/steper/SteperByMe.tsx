import React, { useState } from "react";
import StepStatus from "./components/steper.components";
import { Button } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

const SteperByMe = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(false);

  const getschema = Yup.object().shape({
    phone: Yup.string().required("please enter phone number"),
    // password: Yup.string().required("please enter password"),
    role: Yup.boolean().required("please check role"),
  });
  const schema = Yup.object().shape({
    // phone: Yup.string().required("please enter phone number"),
    // password: Yup.string().required("please enter password"),
    role: Yup.boolean().required("please check role"),
  });
  //   const handleNext = async (
  //     { chequeSerial, fileId }: FormikInquiryValues,
  //     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  //   ) => {
  //     if (isLastStep()) {
  //     //   await axiosInstance
  //     //     .post("/seller/inquiry", {
  //     //       chequeSerial,
  //     //       fileId,
  //     //     })
  //     //     .then((res) => {
  //     //       const paymentLink = res.data?.paymentLink;
  //     //       if (paymentLink) {
  //     //         router.replace(paymentLink);
  //     //         setSubmitting(false);
  //     //       } else {
  //     //         setSubmitting(false);
  //     //         setErrorSnackbar({
  //     //           isOpen: true,
  //     //           message: "خطا در دریافت لینک پرداخت",
  //     //         });
  //     //       }
  //     //     })
  //     //     .catch((err) => {
  //     //       setErrorSnackbar({
  //     //         isOpen: true,
  //     //         message: err.response?.data?.Message || "خطا در استعلام وام",
  //     //       });
  //     //     })
  //     //     .finally(() => {
  //     //       setSubmitting(false);
  //     //     });
  //     } else {
  //       setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     }
  //   };
  
  const steps = ["تکمیل اطلاعات ", "قوانین و ضوابط"];
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    if (activeStep !== 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
      role: false,
    },
    validationSchema:  activeStep === 0 ? getschema : schema,
    onSubmit: () => {
      if (isLastStep()) {
        console.log('last');
        
        //   await axiosInstance
        //     .post("/seller/inquiry", {
        //       chequeSerial,
        //       fileId,
        //     })
        //     .then((res) => {
        //       const paymentLink = res.data?.paymentLink;
        //       if (paymentLink) {
        //         router.replace(paymentLink);
        //         setSubmitting(false);
        //       } else {
        //         setSubmitting(false);
        //         setErrorSnackbar({
        //           isOpen: true,
        //           message: "خطا در دریافت لینک پرداخت",
        //         });
        //       }
        //     })
        //     .catch((err) => {
        //       setErrorSnackbar({
        //         isOpen: true,
        //         message: err.response?.data?.Message || "خطا در استعلام وام",
        //       });
        //     })
        //     .finally(() => {
        //       setSubmitting(false);
        //     });
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    },
  });
  console.log(formik.errors);

  const stepContentHandler = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <input
              value={formik.values.phone}
              name="phone"
              type="text"
              placeholder="phone"
              onChange={formik.handleChange}
              className="w-[200px] border border-[#c7b6b6] p-3 rounded-md"
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="text-red-600 ">{formik.errors.phone}</span>
            )}
          </>
        );
    //   case 1:
    //     return (
    //       <>
    //         <input
    //           value={formik.values.password}
    //           name="password"
    //           placeholder="password"
    //           onChange={formik.handleChange}
    //           className="w-[200px] border border-[#c7b6b6] p-3 rounded-md"
    //         />
    //         {formik.touched.password && formik.errors.password && (
    //           <span className="text-red-600 ">{formik.errors.password}</span>
    //         )}
    //       </>
    //     );
      case 1:
        return (
          <>
            <input
              type="checkbox"
              name="role"
              checked={formik.values.role}
              onChange={formik.handleChange}
              className="w-[200px] p-3 rounded-full"
            />
            {formik.touched.role && formik.errors.role && (
              <span className="text-red-600 ">{formik.errors.role}</span>
            )}
          </>
        );
      default:
        return null;
    }
  };
  const totalSteps = () => {
    return steps.length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[90%] flex flex-col justify-center items-center py-2 gap-y-5 md:gap-y-10"
    >
      <StepStatus steps={steps} activeStep={activeStep} />
      <div className="w-full border border-[#D9D6D6] rounded-md text-center px-3 py-6 text-[#454545]">
        <h6 className="font-bold">استعلام تسهیلات </h6>
        <hr className="bg-[#D9D6D6] mt-5 mb-9" />
        {stepContentHandler()}
      </div>
      <div className="w-full flex gap-x-3">
        {activeStep !== 0 && (
          <Button
            color="inherit"
            className="bg-[#F0EFEF] text-[#0D61A7] rounded-md"
            onClick={handleBack}
          >
            قبلی
          </Button>
        )}
        <Button
          className="bg-[#0D61A7] text-white w-full py-3 rounded-md"
          type="submit"
          //   disabled={isSubmitting}
        >
          {isLastStep() ? "پرداخت " : "ادامه"}
        </Button>
      </div>
    </form>
  );
};

export default SteperByMe;
