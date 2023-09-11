import API from '@/assets/api/posts';
import fetcher from '@/assets/utils/fetcher';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export interface IPostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const getPosts = async () => {
  return await fetcher({ api: API.getPosts }).then(({ data }) => data);
};

const useGetPosts = ({
  queryKey,
  options,
}: {
  queryKey?: number;
  options: UseQueryOptions<
    AxiosResponse<IPostData[]>,
    AxiosError,
    IPostData[],
    Array<string | number>
  >;
}) => {
  return useQuery(
    queryKey ? ['posts', queryKey] : ['posts'],
    getPosts,
    options,
  );
};

export default useGetPosts;
