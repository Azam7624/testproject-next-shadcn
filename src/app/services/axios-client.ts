// // import { Logout } from "@/utils/authentication/server-logout";
// import axios from "axios";
// // import { getCookie } from "cookies-next";


// export function api() {
//   const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
//   let domain = "";
//   if (env == "DEVELOPMENT") domain = "https://uranus.nakhllab.ir/api/";

//   if (env == "PRODUCTION") domain = "https://uranus.nakhll.com/api/";

//   // create axios config
//   const axiosInstance = axios.create({
//     baseURL: domain,
//   });

//   axiosInstance.interceptors.request.use((config) => {
//     const token = getCookie("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   });

//   axiosInstance.interceptors.response.use(
//     (resp) => {
//       return resp;
//     },
//     (error) => {
//       if(error.response.status==401)
//        Logout();
//       // const router = useRouter();
//       // router.refresh()
//       return Promise.reject(error);
//     }
//   );

//   return axiosInstance;
// }
