import ky from "ky";

const sendLogin = (sms: string) => {
  const url = `https://localhost:8000/login/sms?search=${sms}`;
  ky.get(url);
};
const useLoginQuery = (a: string) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => sendLogin,
    queryKey: ["login"],
  });
  return { data, isLoading, error };
};
export default useLoginQuery;
