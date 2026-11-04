import type { Locale } from '@it-tech-blog/preferences';

import { cx, List, ListItem } from '@berrypjh/react-ui';
import { Check, X } from 'lucide-react';

type Row = { label: string; titles: string[]; result: string; ok: boolean };

const content = {
  ko: {
    rows: [
      {
        label: '모두 같은 페이지 제목',
        titles: ['마켓', '마켓', '마켓'],
        result: '세 탭이 똑같아 구분할 수 없습니다.',
        ok: false,
      },
      {
        label: '공통 이름을 앞에 둔 페이지 제목',
        titles: ['마켓 — 주문 확인', '마켓 — 장바구니', '마켓 — 상품 상세'],
        result: '뒷부분이 잘리고 앞부분이 모두 같아, 한눈에 구분하기 어렵습니다.',
        ok: false,
      },
      {
        label: '구별되는 내용을 앞에 둔 페이지 제목',
        titles: ['주문 확인 — 마켓', '장바구니 — 마켓', '상품 상세 — 마켓'],
        result: '잘려도 앞부분으로 구분됩니다.',
        ok: true,
      },
    ] satisfies Row[],
    caption:
      '탭이 좁아지면 페이지 제목의 뒷부분이 잘립니다. 구별되는 내용이 앞에 있어야 잘려도 페이지를 구분할 수 있습니다.',
  },
  en: {
    rows: [
      {
        label: 'Every page has the same title',
        titles: ['Market', 'Market', 'Market'],
        result: 'The three tabs look the same and cannot be told apart.',
        ok: false,
      },
      {
        label: 'Shared name first',
        titles: ['Market — Order confirmation', 'Market — Cart', 'Market — Product details'],
        result:
          'The end is cut off and every start is the same, so they are hard to tell apart at a glance.',
        ok: false,
      },
      {
        label: 'Distinguishing content first',
        titles: ['Order confirmation — Market', 'Cart — Market', 'Product details — Market'],
        result: 'Even when cut off, the start tells them apart.',
        ok: true,
      },
    ] satisfies Row[],
    caption:
      'When tabs get narrow, the end of the page title is cut off. Put the distinguishing content first so pages can still be told apart.',
  },
} satisfies Record<Locale, unknown>;

/** 좁아진 브라우저 탭 세 개로 페이지 제목의 순서를 비교한다. 탭 폭을 고정해 뒷부분이 말줄임으로 잘리게 한다. */
export const TabTitlesDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-xl flex flex-col gap-xs">
      <List className="flex flex-col gap-md rounded-md border border-stroke-light bg-background-surface p-md">
        {c.rows.map((row) => {
          const ResultIcon = row.ok ? Check : X;
          return (
            <ListItem key={row.label} className="flex flex-col gap-xs">
              <span className="text-xxsm leading-xxsm font-semiBold text-text-default">
                {row.label}
              </span>
              <span className="flex gap-2xs border-b border-stroke-light">
                {row.titles.map((title, i) => (
                  <span
                    key={i}
                    className="w-[4.5rem] truncate rounded-t-sm border border-b-0 border-stroke-light bg-background-grey/20 px-sm py-2xs text-xxsm leading-xxsm text-text-default"
                  >
                    {title}
                  </span>
                ))}
              </span>
              <span
                className={cx(
                  'flex items-start gap-xs text-xxsm leading-xxsm',
                  row.ok ? 'text-text-success' : 'text-text-error',
                )}
              >
                <span className="flex h-[1lh] shrink-0 items-center">
                  <ResultIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {row.result}
              </span>
            </ListItem>
          );
        })}
      </List>
      <figcaption className="text-xxsm leading-xxsm text-text-light">{c.caption}</figcaption>
    </figure>
  );
};
