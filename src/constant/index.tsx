import axios from 'axios'

export const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_URL,
})

Api.interceptors.request.use(async (config: any) => {
  //   config.headers["Authorization"] = `${localStorage.getItem("token")}`;
  return config
})
