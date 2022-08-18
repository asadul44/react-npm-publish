import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://backend-bookings.herokuapp.com/api',
})

Api.interceptors.request.use(async (config: any) => {
  //   config.headers["Authorization"] = `${localStorage.getItem("token")}`;
  return config
})
