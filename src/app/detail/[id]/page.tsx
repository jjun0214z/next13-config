'use client';

import { setHistoryIdAtom } from '@/atom/historyAtom';
import HistoryId from '@/components/HistoryId';
// 클라이언트 컴포넌트에서 data fetch
import Main from '@/components/pages/Main';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

interface IProps {
  params: {
    id: string;
  };
}

export default function Home({ params }: IProps) {
  const [, setHistoryId] = useAtom(setHistoryIdAtom);

  useEffect(() => {
    setHistoryId({ id: params.id });
  }, [params.id]);

  return (
    <div>
      <HistoryId />
      <div>
        <strong>server data</strong>
        <dl>
          <dt>csr 에서 react-query 데이터 패칭 예제</dt>
          <dd>
            <Main id={params.id} />
          </dd>
          <dt>"/" 경로에서 넘어올경우 react-query ssr 데이터 캐시 예제</dt>
          <dd>
            <Main />
          </dd>
        </dl>
      </div>
    </div>
  );
}
