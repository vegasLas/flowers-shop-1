import axios from 'axios'

export default () => {
  const config = useRuntimeConfig()
  const axiosClient = axios.create({
    baseURL: config.public.apiUrl as string
  })
  return axiosClient
}