import Main from '@/components/pages/Main';
import { getPosts } from '@/hooks/queries/posts/useGetPosts';
import useGetQueryClient from '@/hooks/useGetQueryClient';
import { dehydrate, Hydrate } from '@tanstack/react-query';

export default async function Home() {
  const queryClient = useGetQueryClient();
  await queryClient.prefetchQuery(['posts'], getPosts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Main />
    </Hydrate>
  );
}
