import ky from "ky";

const sendLogin = (sms: string) => {
  const url = "https://localhost:8000/login/sms";
  ky.post(url, { body: sms });
};

const useLoginMutation = () => {
  const { mutate, isPending, error } = useMutation({
    mutateFn: (sms: string) => sendLogin(sms),
    mutateKey: ["login"],
  });
  return { mutate, isPending, error };
};
export default useLoginMutation;
