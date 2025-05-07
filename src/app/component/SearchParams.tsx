"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, SelectChangeEvent } from "@mui/material";

import Table from "@/components/Table";

import PriceModifier from "@/components/PriceModifier";
import { api } from "@/services/axios-client";

import { TransectionListItemsDto } from "@/objects/dto/admin/transection-list-dto";
import PaginationDTO from "@/objects/globals/pagination-dto";

import icon from "@/../public/assets/images/adminPanel/icon/Vector(12).svg";
import LayoutAdmin from "@/components/LayoutAdmin";
import { ToJalaaliShortString } from "@/utils/date-time-provider/to-jalaali-date";
import Pagination from "@/components/Pagination";
import filterIcon from "@/../public/assets/images/adminPanel/icon/filter-solid 1.svg";
import TextInputComponent from "@/components/FormFields/text-input.component";
import SelectTextFields from "@/components/FormFields/select-text-fields";
import DatePickerComponent from "@/components/FormFields/date-picker.component";
import { number, string } from "yup";

const TransactionList = () => {
  const pathName = usePathname();
  
  const axiosInstance = api();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showFilter, setShowFilter] = useState(false);
  const searchParams = useSearchParams();
  const [selecteTypeOfTransaction, setSelecteTypeOfTransaction] = useState<{
    id: number;
    name: string;
  }>({
    id: 0,
    name: "",
  });
  const [selectePaymentTypes, setSelectePaymentTypes] = useState<{
    id: number;
    name: string;
  }>({
    id: 0,
    name: "",
  });
  const [transectionList, setTransectionList] = useState<
    PaginationDTO<TransectionListItemsDto>
  >({
    totalRecords: 0,
    pageIndex: 0,
    totalPages: 0,
    pageSize: 0,
    items: [],
  });

  const [filterParams, setFilterParams] = useState<{
    shopName: string;
    shopTerminal: string;
    amount: string;
    date: string;
  }>({
    shopName: "",
    shopTerminal: "",
    amount: "",
    date: "",
  });
  const typeOfTransaction: { id: number; name: string }[] = [
    { id: 100, name: "واریز" },
    { id: 200, name: "برداشت" },
  ];
  const typeOfPayment: { id: number; name: string }[] = [
    { id: 100, name: "درگاه پرداخت" },
    { id: 101, name: "تخفیف نخل" },
    { id: 200, name: "دستگاه کارت خوان" },
    { id: 500, name: "کارمزد" },
    { id: 800, name: "درخواست برداشت" },
    { id: 1001, name: "لغو درخواست برداشت" },
    { id: 1002, name: "سند اصلاحیه واریزی" },
    { id: 1003, name: "سند اصلاحیه برداشتی" },
  ];
  const handleSelectTypeTransactoinChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    const selectType = typeOfTransaction.find((item) => item.name === value);
    if (selectType) {
      setSelecteTypeOfTransaction({ id: selectType.id, name: selectType.name });
    }
  };
  const handleSelectTypePayment = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    const selectType = typeOfPayment.find((item) => item.name === value);
    if (selectType) {
      setSelectePaymentTypes({ id: selectType.id, name: selectType.name });
    }
  };

  const fetchTransectionsList = async ({
    currentPage,
    shopName,
    shopTerminal,
    amount,
    type,
    paymentTypes,
    date,
  }: {
    currentPage?: number;
    shopName?: string | "";
    shopTerminal?: string;
    amount?: number | null;
    type?: number | null;
    paymentTypes?: number | null;
    date?: string;
  }) => {
    setIsLoading(true);
    try {
      // if(amount)
      const response = await axiosInstance.get<
        PaginationDTO<TransectionListItemsDto>
      >(`/Admin/TransactionList?page=${currentPage}`);
      setTransectionList(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    const queryParams = new URLSearchParams({
      page: "1", // فرض کنید صفحه اول است، این باید در صورت لزوم تغییر کند
      searchShopName: filterParams.shopName || "", // اگر چیزی وارد نشده باشد، یک رشته خالی قرار می‌دهیم
      searchShopTerminal: filterParams.shopTerminal || "",
      searchAmount: filterParams.amount.toString() || "",
      searchTypes: selecteTypeOfTransaction.id.toString(),
      searchPaymentTypes: selectePaymentTypes.id.toString(),
      searchFrom: filterParams.date || "", // اگر تاریخ وارد نشده باشد، یک رشته خالی می‌شود
    }).toString();

    const url = `/admin/transections?${queryParams}`;
    router.push(url); // تغییر مسیر به URL جدید با فیلترها
  };

  const createUrlVerificated = () => {
    const params = new URLSearchParams();

    if (filterParams.shopName) params.set("shopName", filterParams.shopName);
    else params.delete("shopName");
    if (filterParams.shopTerminal)
      params.set("shopTerminal", filterParams.shopTerminal);
    else params.delete("shopTerminal");
    if (filterParams.amount) params.set("amount", filterParams.amount);
    else params.delete("amount");
    if (selecteTypeOfTransaction.id)
      params.set("types", selecteTypeOfTransaction.id.toString());
    else params.delete("types");
    if (selectePaymentTypes.id)
      params.set("paymentTypes", selectePaymentTypes.id.toString());
    else params.delete("paymentTypes");
    if (filterParams.date) params.set("date", filterParams.date);
    else params.delete("date");

    const url = `/admin/transections?${params}`;
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    // navigate(`${location.pathname}?${params}`);
  };

  useEffect(() => {
    // const currentPage = Number(searchParams.get("page") || 1);
    // const shopName = searchParams.get("shopName") || "";
    // const shopTerminal = searchParams.get("shopTerminal") || "";
    // const amount = Number(searchParams.get("amount"));
    // const type = Number(searchParams.get("types") || 100);
    // const paymentTypes = Number(searchParams.get("paymentTypes") || 100);
    // const date = searchParams.get("date") || "";
    console.log(pathName);
    

    // const params = useSearchParams()// دریافت پارامترها از URL
    console.log(Object.fromEntries(searchParams.entries()));
    const { shopName: shopNameParameter, shopTerminal: shopTerminalParameter, amount: amountParameter, types: typesParameter, paymentType, date: dateParameter } =
      Object.fromEntries(searchParams.entries());

    const currentPage = Number(searchParams.get("page")) || 1;
    const shopName = searchParams.get("shopName") || "";
    console.log(shopName);

    const shopTerminal = searchParams.get("shopTerminal") || "";
    const amount = Number(searchParams.get("amount")) || null;
    const type = Number(searchParams.get("types")) || null;
    const paymentTypes = Number(searchParams.get("paymentTypes")) || null;
    const date = searchParams.get("date") || "";
    fetchTransectionsList({
      currentPage,
      shopName,
      shopTerminal,
      amount,
      type,
      paymentTypes,
      date,
    });
  }, [searchParams]);

  const itemsOfTable = [
    {
      lable: "ردیف",
      render: (item: TransectionListItemsDto, index: number) =>
        (transectionList.pageIndex - 1) * transectionList.pageSize + index + 1,
    },
    {
      lable: "واریز کننده",
      render: (item: TransectionListItemsDto) => (
        <span dir="ltr">{item.payerData}</span>
      ),
    },
    {
      lable: "نام فروشگاه ",
      render: (item: TransectionListItemsDto) => item.shopName,
    },
    {
      lable: "مبلغ  واریزی",
      render: (item: TransectionListItemsDto) => (
        <PriceModifier amount={item.amount.toString()} hideUnit={true} />
      ),
    },
    {
      lable: "شماره ترمینال",
      render: (item: TransectionListItemsDto) => item.shopTerminal,
    },
    {
      lable: "روش تراکنش",
      render: (item: TransectionListItemsDto) => item.shopTerminal,
    },
    {
      lable: "تاریخ درخواست ",
      render: (item: TransectionListItemsDto) =>
        ToJalaaliShortString(item.createdAt),
    },
    {
      lable: "",
      render: (item: TransectionListItemsDto) => (
        <Link href={`${pathName}/${item.id}`}>
          <Image
            src={icon}
            alt=""
            className="bg-nakhllDarkGray w-9 h-9 p-2 rounded-full"
            priority
          />
        </Link>
      ),
    },
  ];

  return (
    <div>
      <LayoutAdmin header={{ header: "تراکنش ها", text: "" }}>
        <div className="mx-6"></div>
        <div className="flex justify-between mx-10 my-5">
          <Button
            onClick={() => router.push("/admin/transections/add")}
            style={{ backgroundColor: "#E89B00" }}
            variant="contained"
            className="py-2 rounded-xl"
          >
            افزودن تراکنش دستی
          </Button>
          <Image
            alt="filter"
            src={filterIcon}
            onClick={() => setShowFilter(!showFilter)}
          />
          {/* <image src={filterIcon}/> */}
        </div>
        <div
          className={`${
            showFilter ? "flex" : "hidden"
          } mx-11 border border-[#D5D5D5] rounded-2xl py-3 px-[10px]`}
        >
          <div className="flex gap-4">
            <TextInputComponent
              label="نام فروشگاه"
              value={filterParams.shopName}
              onChange={handleChange}
              name="shopName"
              // height={40}
              // inputFontSize="12px"
              borderradius="16px"
              borderColor="#E4E4E4"
              bgColor="#E9E9E9"
              // lableFontSize="12px"
              fieldClassName="w-[160px]"
            />
            <TextInputComponent
              label="شماره ترمینال"
              value={filterParams.shopTerminal}
              onChange={handleChange}
              name="shopTerminal"
              // height={40}
              // inputFontSize="12px"
              borderradius="16px"
              borderColor="#E4E4E4"
              bgColor="#E9E9E9"
              fieldClassName="w-[160px]"
            />
            <SelectTextFields
              label="نوع تراکنش"
              data={typeOfTransaction}
              value={selecteTypeOfTransaction.name}
              onChange={handleSelectTypeTransactoinChange}
              borderradius="16px"
              classSelect="w-[160px] "
              borderColor="#E4E4E4"
              bgColor="#E9E9E9"
            />
            <SelectTextFields
              label="روش تراکنش"
              data={typeOfPayment}
              value={selectePaymentTypes.name}
              onChange={handleSelectTypePayment}
              borderradius="16px"
              classSelect="w-[160px] "
              borderColor="#E4E4E4"
              bgColor="#E9E9E9"
            />
            <TextInputComponent
              label="مبلغ"
              value={filterParams.amount}
              onChange={handleChange}
              name="mobileNumber"
              // height={40}
              // inputFontSize="12px"
              borderradius="16px"
              borderColor="#E4E4E4"
              bgColor="#E9E9E9"
              fieldClassName="w-[160px]"
            />
          </div>
          <div className="w-full text-end">
            <button
              className="w-[109px] bg-[#0D61A7] py-3 rounded-2xl text-white"
              onClick={createUrlVerificated}
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center my-[25%] min-h-screen">
            <p className="font-bold text-xl">در حال بارگذاری ...</p>
          </div>
        ) : (
          <div>
            <Table<TransectionListItemsDto>
              data={transectionList.items}
              renderContent={itemsOfTable}
              classNameHeader="bg-oilPaint text-white"
              classNameThHeader="first:rounded-r-2xl last:rounded-l-2xl p-5 text-sm"
              classNameTdBody="first:rounded-r-2xl last:rounded-l-2xl"
              evenColor="bg-darkGray"
              oddColor="bg-lightGray"
            />
            {transectionList.items.length > 0 && (
              <Pagination
                keyPage="page"
                totalPages={transectionList.totalPages}
              />
            )}
          </div>
        )}
      </LayoutAdmin>
    </div>
  );
};

export default TransactionList;
