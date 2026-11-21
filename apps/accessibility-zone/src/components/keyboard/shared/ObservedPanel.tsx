'use client';

import { useLocale } from '@it-tech-blog/preferences';

import { type SourceId, SourceTag } from '@/components/shared/SourceTag';

/** 페이지가 읽거나 계산한 값을 이름 · 값 쌍으로 보여 준다. source는 값의 출처 꼬리표다(기본은 실제 DOM 관찰). */
export const ObservedPanel = ({
  title,
  rows,
  source = 'dom',
  children,
}: {
  title: string;
  rows: [string, React.ReactNode][];
  source?: SourceId;
  children?: React.ReactNode;
}) => {
  const { locale } = useLocale();

  return (
    <div className="rounded-sm border border-stroke-light p-md text-xsm">
      <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
        {title} <SourceTag locale={locale} id={source} />
      </p>
      <dl className="grid gap-x-lg gap-y-xs sm:grid-cols-[12rem_1fr]">
        {rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="text-text-light">{label}</dt>
            <dd className="break-words">{value}</dd>
          </div>
        ))}
      </dl>
      {children}
    </div>
  );
};
