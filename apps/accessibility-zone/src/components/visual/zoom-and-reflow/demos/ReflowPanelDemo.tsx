'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { TableScroll } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

type Reading = { width: number; overflow: boolean; clipped: boolean };

const content = {
  ko: {
    practice: '실습',
    instructions:
      '패널 폭을 320px까지 줄이고 글자 크기를 200%까지 키워 보세요. 그다음 의도한 결함을 켜서 어떤 값이 바뀌는지 비교합니다.',
    width: '패널 폭',
    size: '패널 글자 크기',
    defect: '의도한 결함: 고정 폭 · 고정 높이 · 줄바꿈 금지',
    region: '폭과 글자 크기를 바꾸는 예제 패널',
    heading: '배송 안내',
    body: '주문 뒤 배송 준비가 시작되면 주소를 바꿀 수 없습니다. 변경이 필요하면 고객 센터로 문의해 주세요.',
    card: '안내 카드: 배송 예정일은 지역과 재고에 따라 달라질 수 있습니다.',
    button: '배송 조회 페이지로 이동하기',
    tableLabel: '요금 표 (자기 영역에서 스크롤)',
    head: ['지역', '일반 배송', '빠른 배송', '도서 지역 추가'],
    row: ['수도권', '3,000원', '5,000원', '해당 없음'],
    observed: '패널 모형의 값',
    actual: '패널의 실제 폭',
    overflow: '패널 가로 넘침',
    clipped: '카드 내용 잘림',
    yes: '있음',
    no: '없음',
    none: '(측정 전)',
    note: '패널 안의 측정값입니다. 실제 브라우저 확대 결과가 아닙니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Narrow the panel to 320px and raise the text size to 200%. Then turn on the intentional defect and compare which values change.',
    width: 'Panel width',
    size: 'Panel text size',
    defect: 'Intentional defect: fixed width, fixed height, no wrapping',
    region: 'Example panel with adjustable width and text size',
    heading: 'Shipping information',
    body: 'Once shipping preparation starts, the address cannot be changed. If you need a change, contact customer support.',
    card: 'Info card: the expected delivery date can vary by region and stock.',
    button: 'Go to the delivery tracking page',
    tableLabel: 'Rates table (scrolls in its own area)',
    head: ['Region', 'Standard', 'Express', 'Island surcharge'],
    row: ['Metro area', '$3', '$5', 'Not applicable'],
    observed: 'Values from the panel model',
    actual: 'Actual panel width',
    overflow: 'Horizontal overflow in the panel',
    clipped: 'Card content clipped',
    yes: 'Yes',
    no: 'No',
    none: '(not measured)',
    note: 'Measured inside the panel. This is not a real browser zoom result.',
  },
};

/** 영역 안에서만 폭과 글자 크기를 바꿔, 넘침과 잘림을 DOM 크기로 잰다. 실제 확대로 크기가 바뀌어도 다시 잰다. 표는 자기 영역에서만 스크롤한다. */
export const ReflowPanelDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [width, setWidth] = useState(640);
  const [size, setSize] = useState(100);
  const [defect, setDefect] = useState(false);
  const [reading, setReading] = useState<Reading | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const card = cardRef.current;
    if (!panel || !card) return;
    const measure = () =>
      setReading({
        width: panel.clientWidth,
        overflow: panel.scrollWidth > panel.clientWidth + 1,
        clipped: card.scrollHeight > card.clientHeight + 1,
      });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    observer.observe(card);
    return () => observer.disconnect();
  }, [width, size, defect]);

  const yesNo = (value: boolean) => (value ? c.yes : c.no);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-md text-xsm sm:grid-cols-2">
        <div className="flex flex-col gap-xs">
          <label htmlFor={`${id}-width`}>
            {c.width}: {width}px
          </label>
          <input
            id={`${id}-width`}
            type="range"
            min={320}
            max={720}
            step={40}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-xs">
          <label htmlFor={`${id}-size`}>
            {c.size}: {size}%
          </label>
          <input
            id={`${id}-size`}
            type="range"
            min={100}
            max={200}
            step={25}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>
      </div>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={defect} onChange={(e) => setDefect(e.target.checked)} />
        {c.defect}
      </label>

      <div
        ref={panelRef}
        role="group"
        aria-label={c.region}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- 넘친 내용을 키보드로 스크롤할 수 있게 한다
        tabIndex={0}
        className="max-w-full overflow-x-auto rounded-sm border border-stroke-light"
        style={{ width, fontSize: `${size}%` }}
      >
        <div className="flex flex-col gap-md p-md" style={defect ? { width: 560 } : undefined}>
          <h3 className="font-bold text-text-default">{c.heading}</h3>
          <p>{c.body}</p>
          <div
            ref={cardRef}
            className="overflow-hidden rounded-sm border border-stroke-light p-sm"
            style={defect ? { height: 40 } : undefined}
          >
            {c.card}
          </div>
          <button
            type="button"
            className="w-fit max-w-full rounded-sm border border-stroke-light px-md py-xs font-semiBold"
            style={defect ? { whiteSpace: 'nowrap' } : undefined}
          >
            {c.button}
          </button>
          <TableScroll label={c.tableLabel}>
            <table className="w-full min-w-[28em] text-left">
              <caption className="mb-xs text-left">{c.tableLabel}</caption>
              <thead>
                <tr>
                  {c.head.map((heading) => (
                    <th key={heading} scope="col" className="py-xs pr-md font-semiBold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {c.row.map((cell) => (
                    <td key={cell} className="py-xs pr-md">
                      {cell}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </TableScroll>
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        source="model"
        rows={[
          [c.actual, reading ? `${reading.width}px` : c.none],
          [c.overflow, reading ? yesNo(reading.overflow) : c.none],
          [c.clipped, reading ? yesNo(reading.clipped) : c.none],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
