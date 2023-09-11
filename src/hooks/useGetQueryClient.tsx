import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

const useGetQueryClient = cache(() => new QueryClient());
export default useGetQueryClient;
