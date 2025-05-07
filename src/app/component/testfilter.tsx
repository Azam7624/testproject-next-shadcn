import { interfaceListVerifications } from "./../objects/dto/list-verifications";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getVerifications,
  typePropsVerificated,
} from "../services/verification.services";
import toast from "react-hot-toast";
import { interfacePaginationDto } from "../objects/globals/pagination.dto";
export const useVerification = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [verifications, setVerifications] =
    useState<interfaceListVerifications[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState<
    interfacePaginationDto<interfaceListVerifications>
  >({
    totalRecords: 0,
    pageIndex: 0,
    totalPages: 0,
    pageSize: 0,
    items: [],
    metaData: "",
  });
  const createUrlVerificated = ({
    page,
    type,
    status,
  }: typePropsVerificated) => {
    const params = new URLSearchParams(searchParams);
    if (page !== undefined) {
      params.set("page", page.toString());
    }
    if (type !== undefined) {
      params.set("type", type.toString());
    }
    if (status !== undefined) {
      params.set("status", status.toString());
      params.delete("page");
    }
    navigate(`${location.pathname}?${params}`);
  };
  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    const type = Number(searchParams.get("type"));
    const status = Number(searchParams.get("status")) || 1;
    const getData = async () => {
      setLoading(true);
      const { error, response } = await getVerifications({
        page,
        type,
        status,
      });
      if (response) {
        setLoading(false);
        setCurrentPage(page)
        setData(response.data);
        setVerifications(response.data.items);
      }
      if (error) {
        toast.error("خطایی در سرور رخ داده است");
      }
    };
    getData();
  }, [searchParams, location.pathname]);
  return { loading, verifications, createUrlVerificated, data,currentPage,setCurrentPage };
};