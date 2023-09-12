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

export const getPosts = async (id?: string) => {
  return await fetcher({
    api: id
      ? {
          ...API.getPosts,
          url: `${API.getPosts.url}/${id}`,
        }
      : API.getPosts,
  }).then(({ data }) => {
    if (!Array.isArray(data)) {
      return [data];
    }
    return data;
  });
};

const useGetPosts = ({
  queryKey,
  options,
}: {
  queryKey?: string;
  options: UseQueryOptions<IPostData[], AxiosError, IPostData[], string[]>;
}) => {
  return useQuery(
    queryKey ? ['posts', queryKey] : ['posts'],
    () => getPosts(queryKey),
    options,
  );
};

export default useGetPosts;
