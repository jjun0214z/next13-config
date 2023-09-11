import { IApi } from '@/types/api';

const API: { [key: string]: IApi } = Object.assign({
  getPosts: {
    method: 'get',
    url: '/posts',
  },
});

export default API;
