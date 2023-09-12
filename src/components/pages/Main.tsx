'use client';

import { useState } from 'react';
import useGetPosts from '@/hooks/queries/useGetPosts';
import Link from 'next/link';

interface IProps {
  id?: string;
}

export default function Main({ id }: IProps) {
  const [listKeys] = useState(['id', 'userId', 'title', 'body']);

  const { data, isLoading } = useGetPosts({
    queryKey: id,
    options: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {listKeys.map((key) => (
              <th key={key} scope="col" align="center">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td align="center">로딩중</td>
            </tr>
          )}
          {(data || []).map((row: { [key: string]: any }) => {
            return (
              <tr key={row.id}>
                {listKeys.map((key) => {
                  return (
                    <td key={key}>
                      {key === 'title' ? (
                        <Link href={`/detail/${String(row.id)}`}>
                          {row[key]}
                        </Link>
                      ) : (
                        row[key]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
