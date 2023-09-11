import Main from '@/components/pages/Main';

interface IProps {
  params: {
    id: string;
  };
}

// Main 클라이언트 컴포넌트에서 data fetch
export default async function Home({ params }: IProps) {
  return <Main id={params.id} />;
}
