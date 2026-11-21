'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup, TableScroll } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

type Sample = 'short' | 'longKo' | 'longEn';
type Layout = 'flexible' | 'rigid';

const sampleIds: Sample[] = ['short', 'longKo', 'longEn'];
const layouts: Layout[] = ['flexible', 'rigid'];

const samples: Record<
  Sample,
  { lang: string; action: string; card: string; column: string; cell: string }
> = {
  short: {
    lang: 'ko',
    action: '저장',
    card: '기본 배송지입니다.',
    column: '상태',
    cell: '사용 중',
  },
  longKo: {
    lang: 'ko',
    action: '선택한 주소를 기본 배송지로 저장하기',
    card: '기본 배송지를 바꾸면 진행 중인 주문을 뺀 다음 주문부터 새 주소가 적용됩니다.',
    column: '배송지 사용 상태',
    cell: '다음 주문부터 사용 예정',
  },
  longEn: {
    lang: 'en',
    action: 'Save the selected address as your default delivery address',
    card: 'Changing your default address applies to future orders, excluding orders in progress.',
    column: 'Delivery address status',
    cell: 'Scheduled for use from your next order',
  },
};

const content = {
  ko: {
    practice: '실습',
    instructions:
      '문구와 간격을 바꾸고 배치를 비교해 보세요. 잘린 요소 수와 화면을 함께 확인한 뒤 되돌립니다.',
    sample: '문구',
    samples: { short: '짧은 문구', longKo: '긴 한국어', longEn: '긴 영어' },
    layout: '배치',
    layouts: { flexible: '유연한 배치', rigid: '고정 배치 (의도한 결함)' },
    spacing: '1.4.12 간격 적용 (이 영역만)',
    reset: '원래대로',
    region: '간격을 적용하는 예제 영역',
    tableLabel: '배송지 표',
    address: '서울시 예시로 12',
    observed: '지금 관찰한 값',
    clipped: '내용이 잘린 요소',
    count: (n: number) => `${n}개`,
    note: '요소의 내용 크기와 보이는 크기를 비교한 값입니다. 겹침과 조작 가능 여부는 화면에서도 확인합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Change the strings and spacing and compare the layouts. Check the clipped count and the screen, then restore.',
    sample: 'Strings',
    samples: { short: 'Short strings', longKo: 'Long Korean', longEn: 'Long English' },
    layout: 'Layout',
    layouts: { flexible: 'Flexible layout', rigid: 'Rigid layout (intentional defect)' },
    spacing: 'Apply 1.4.12 spacing (this area only)',
    reset: 'Restore',
    region: 'Example area receiving the spacing',
    tableLabel: 'Address table',
    address: '12 Example Road, Seoul',
    observed: 'Observed now',
    clipped: 'Elements with clipped content',
    count: (n: number) => `${n}`,
    note: 'This compares each element’s content size with its visible size. Check overlap and operability on the screen too.',
  },
};

const spacingStyle = { lineHeight: 1.5, letterSpacing: '0.12em', wordSpacing: '0.16em' };

const rigid = {
  action: { width: 128, height: 32, overflow: 'hidden', whiteSpace: 'nowrap' },
  card: { height: 48, overflow: 'hidden' },
  cell: { maxWidth: 96, overflow: 'hidden', whiteSpace: 'nowrap' },
} as const;

const flexible = {
  action: { minHeight: 44, maxWidth: '100%', overflowWrap: 'anywhere' },
  card: { overflowWrap: 'anywhere' },
  cell: { overflowWrap: 'anywhere' },
} as const;

/** 글이 요소 밖으로 나갔는지 본다. 카드는 문단 뒤 여백을 빼고 글의 끝만 비교한다. */
const isClipped = (el: HTMLElement) => {
  const text = el.firstElementChild;
  const below = text
    ? text.getBoundingClientRect().bottom > el.getBoundingClientRect().bottom + 1
    : el.scrollHeight > el.clientHeight + 1;
  return below || el.scrollWidth > el.clientWidth + 1;
};

/** 데모 영역에만 간격과 긴 문구를 적용해, 고정 배치와 유연한 배치의 잘림을 비교한다. */
export const TextSpacingDemo = () => {
  const c = useLang(content);
  const [sample, setSample] = useState<Sample>('short');
  const [layout, setLayout] = useState<Layout>('flexible');
  const [spacing, setSpacing] = useState(false);
  const [clipped, setClipped] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const text = samples[sample];
  const styles = layout === 'rigid' ? rigid : flexible;

  useEffect(() => {
    const elements = stageRef.current?.querySelectorAll<HTMLElement>('[data-clip-check]') ?? [];
    setClipped([...elements].filter(isClipped).length);
  }, [sample, layout, spacing]);

  const reset = () => {
    setSample('short');
    setLayout('flexible');
    setSpacing(false);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-md">
        <RadioGroup
          label={c.sample}
          value={sample}
          onValueChange={(value) => setSample(value as Sample)}
          className="flex-row flex-wrap gap-x-xl"
        >
          {sampleIds.map((value) => (
            <Radio key={value} value={value} className="text-xsm">
              {c.samples[value]}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label={c.layout}
          value={layout}
          onValueChange={(value) => setLayout(value as Layout)}
          className="flex-row flex-wrap gap-x-xl"
        >
          {layouts.map((value) => (
            <Radio key={value} value={value} className="text-xsm">
              {c.layouts[value]}
            </Radio>
          ))}
        </RadioGroup>
        <div className="flex flex-wrap items-center gap-md">
          <label className="flex items-center gap-sm text-xsm">
            <input
              type="checkbox"
              checked={spacing}
              onChange={(e) => setSpacing(e.target.checked)}
            />
            {c.spacing}
          </label>
          <Button type="button" variant="outlined" size="sm" onClick={reset}>
            {c.reset}
          </Button>
        </div>
      </div>

      <div
        ref={stageRef}
        role="group"
        aria-label={c.region}
        lang={text.lang}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
        style={spacing ? spacingStyle : undefined}
      >
        <button
          type="button"
          data-clip-check
          className="w-fit rounded-sm border border-stroke-light px-md font-semiBold"
          style={{ ...styles.action, ...(spacing ? spacingStyle : {}) }}
        >
          {text.action}
        </button>
        <div
          data-clip-check
          className="rounded-sm border border-stroke-light p-sm"
          style={styles.card}
        >
          <p style={spacing ? { marginBlockEnd: '2em' } : undefined}>{text.card}</p>
        </div>
        <TableScroll label={c.tableLabel}>
          <table className="w-full text-left">
            <caption className="mb-xs text-left">{c.tableLabel}</caption>
            <thead>
              <tr>
                <th scope="col" className="py-xs pr-md font-semiBold">
                  {text.column}
                </th>
                <th scope="col" className="py-xs pr-md font-semiBold">
                  {c.address}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-clip-check className="py-xs pr-md" style={styles.cell}>
                  {text.cell}
                </td>
                <td className="py-xs pr-md">{c.address}</td>
              </tr>
            </tbody>
          </table>
        </TableScroll>
      </div>

      <ObservedPanel title={c.observed} rows={[[c.clipped, c.count(clipped)]]}>
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
