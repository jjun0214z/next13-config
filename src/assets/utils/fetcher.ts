import { IApi } from '@/types/api';
import axios from 'axios';

interface IFetcehr {
  api: IApi;
  params?: { [key: string]: any };
  data?: { [key: string]: any };
}

const axiosInstance = () => {
  return axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 100000,
    withCredentials: false,
  });
};

const fetcher = async ({ api, params, data }: IFetcehr) => {
  const ax = axiosInstance();

  if (api.method === 'get') {
    return await ax.request({
      ...api,
      params,
    });
  } else {
    return await ax.request({
      ...api,
      data,
    });
  }
};

export default fetcher;
