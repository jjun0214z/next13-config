'use client';

import { historyIdAtom } from '@/atom/historyAtom';
import { useAtom } from 'jotai';

interface IProps {}

// Main 클라이언트 컴포넌트에서 data fetch
export default function HistoryId({}: IProps) {
  const [historyId] = useAtom(historyIdAtom);
  return (
    <div>
      <strong>client data</strong>
      <dl>
        <dt>HISTORY IDS</dt>
        <dd>{historyId}</dd>
      </dl>
    </div>
  );
}
