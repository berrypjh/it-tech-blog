import { ChevronDown } from 'lucide-react';

type Item = {
  name: string;
  /** 접어도 항상 보이는 한 줄 요약. */
  summary: string;
  fields: { label: string; value: string }[];
};

/** 이름과 요약만 보이고 라벨 · 값 쌍은 항목별로 펼쳐 보는 목록. 스크립트 없이 동작하는 서버 컴포넌트다. */
export const DetailsList = ({
  items,
  openFirst = false,
}: {
  items: Item[];
  openFirst?: boolean;
}) => (
  <div className="my-lg overflow-hidden rounded-md border border-stroke-light bg-background-surface leading-normal">
    {items.map((item, i) => (
      <details
        key={item.name}
        open={openFirst && i === 0}
        className="group border-t border-stroke-light first:border-t-0"
      >
        <summary className="flex cursor-pointer list-none items-start gap-md p-md hover:bg-primaryBtn-outlinedHover [&::-webkit-details-marker]:hidden">
          <span className="flex-1">
            <span className="block text-xsm font-semiBold text-text-default">{item.name}</span>
            <span className="mt-2xs block break-keep text-xxsm text-text-light">
              {item.summary}
            </span>
          </span>
          <ChevronDown
            className="mt-2xs h-4 w-4 shrink-0 text-text-light transition-transform group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <dl className="grid grid-cols-[auto_1fr] gap-x-md gap-y-xs border-t border-stroke-light px-md py-sm text-xxsm">
          {item.fields.map((field) => (
            <div key={field.label} className="contents">
              <dt className="text-text-light">{field.label}</dt>
              <dd className="break-keep text-text-default">{field.value}</dd>
            </div>
          ))}
        </dl>
      </details>
    ))}
  </div>
);
