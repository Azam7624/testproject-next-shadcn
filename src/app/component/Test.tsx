"use client";

import { Theme } from "@emotion/react";
import {
  Box,
  Button,
  createTheme,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";
import TextInputComponent from "./TextInputComponent";

const UpdatePersonalInfo: React.FC<{ data: any }> = ({ data }) => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("این فیلد اجباریست"),
    lastName: Yup.string().required("این فیلد اجباریست"),
    identificationCode: Yup.string().min(10, "کد ملی باید 10 رقم باشد"),
    shopName: Yup.string().required("این فیلد اجباریست"),
    guildTitle: Yup.string().required("این فیلد اجباریست"),
    shopPhoneNumber: Yup.string()
      .matches(/^09\d{9}$/, "فرمت شماره وارد شده صحیح نمی باشد")
      .required("هیچ شماره ای وارد نشده")
      .min(11, "شماره تلفن باید 11 رقم باشد"),
    endRent: Yup.string().required("این فیلد اجباریست"),
    identificationNumber: Yup.string().required("این فیلد اجباریست"),
    taxCode: Yup.string().required("این فیلد اجباریست"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      identificationCode: data.identificationCode,
      shopName: data.shopName,
      guildTitle: data.guildTitle,
      shopPhoneNumber: data.shopPhoneNumber,
      endRent: data.endRent,
      identificationNumber: data.identificationNumber,
      taxCode: data.taxCode,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("azam");

      //console.log("ssss", values);
    },
  });
  const character = /^[\u0600-\u06FFa-zA-Z\s]*$/;
  const handleChangeIfCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (character.test(e.currentTarget.value)) {
      formik.handleChange(e);
    }
  };
  //   console.log(formik.values.firstName);
  console.log("Formik Errors:", formik.errors);
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="w-[90%] flex flex-col justify-center items-center py-2 px-2.5 gap-1.5 rounded-2xl border  border-[#CCCCCCA6]">
          <div className="w-full h-8 text-xs font-bold py-2 mb-2.5 border-b border-loanDetailActiveTitleColor">
            <p>ویرایش اطلاعات فردی </p>
          </div>
          <div className="flex flex-col w-full">
            <Box
              component="form"
              className="w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="w-full flex flex-col gap-5 justify-center items-center">
                <div className="w-full">
                  <TextInputComponent
                    label="نام"
                    disabled={false}
                    required={false}
                    //defaultValue ={data.firstName}
                    size="small"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full "
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="نام خانوادگی"
                    disabled={false}
                    required={false}
                    // defaultValue ={data.lastName}
                    size="small"
                    value={formik.values.lastName}
                    name="lastName"
                    onChange={formik.handleChange}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="کدملی"
                    disabled={false}
                    required={false}
                    size="small"
                    error={formik.touched.identificationCode && Boolean(formik.errors.identificationCode)}
                    name="identificationCode"
                    value={formik.values.identificationCode}
                    onChange={formik.handleChange}
                    // defaultValue ={data.identificationCode}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="نام فروشگاه"
                    disabled={false}
                    required={false}
                    size="small"
                    value={formik.values.shopName}
                    onChange={formik.handleChange}
                    name="shopName"
                    // defaultValue ={data.shopName}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="صنف"
                    disabled={false}
                    required={false}
                    size="small"
                    onChange={formik.handleChange}
                    name="guildTitle"
                    value={formik.values.guildTitle}
                    // defaultValue ={data.guildTitle}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="تلفن همراه"
                    disabled={false}
                    required={false}
                    size="small"
                    onChange={formik.handleChange}
                    //defaultValue ={data.shopPhoneNumber}
                    name="shopPhoneNumber"
                    value={formik.values.shopPhoneNumber}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="پایان اجاره نامه"
                    disabled={false}
                    required={false}
                    size="small"
                    onChange={formik.handleChange}
                    //defaultValue ={(data.endRent)}
                    name="endRent"
                    value={formik.values.endRent}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="شماره شناسنامه"
                    disabled={false}
                    required={false}
                    size="small"
                    onChange={formik.handleChange}
                    borderColor="#D8D8D8"
                    name="identificationNumber"
                    value={formik.values.identificationNumber}
                    //defaultValue ={data.identificationNumber}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
                <div className="w-full">
                  <TextInputComponent
                    label="کد مالیاتی"
                    disabled={false}
                    required={false}
                    size="small"
                    onChange={formik.handleChange}
                    name="taxCode"
                    value={formik.values.taxCode}
                    borderColor="#D8D8D8"
                    // defaultValue ={data.taxCode}
                    borderradius="8px"
                    lableFontSize="12px"
                    fieldClassName="w-full"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mt-2.5 rounded-lg mx-auto bg-loanDtailCartBorderColor shadow-9 w-16 h-6 border border-[#00000033]">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Save Changes
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdatePersonalInfo;
