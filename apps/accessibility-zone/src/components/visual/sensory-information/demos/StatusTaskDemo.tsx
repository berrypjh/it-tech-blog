'use client';

import { useId, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { cx } from '@berrypjh/react-ui';
import { CircleCheck, Clock, type LucideIcon, TriangleAlert } from 'lucide-react';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

type Status = 'paid' | 'pending' | 'failed';
type Action = 'keep' | 'retry';

const orders: { id: string; status: Status }[] = [
  { id: 'A-101', status: 'paid' },
  { id: 'A-102', status: 'failed' },
  { id: 'A-103', status: 'pending' },
];

const statusStyle: Record<Status, { icon: LucideIcon; tone: string; dot: string }> = {
  paid: { icon: CircleCheck, tone: 'text-text-success', dot: 'bg-success-su500' },
  pending: { icon: Clock, tone: 'text-text-warning', dot: 'bg-warning-wa500' },
  failed: { icon: TriangleAlert, tone: 'text-text-error', dot: 'bg-[var(--ds-text-error)]' },
};

const content = {
  ko: {
    practice: '실습',
    instructions:
      '아래 안내만 보고 주문 하나를 고른 뒤 버튼을 눌러 보세요. 설정을 바꿔 다시 해 봅니다.',
    defect: '의도한 결함: 색과 위치에만 기대기',
    grayscale: '흑백 보기 (색을 뺀 모형)',
    stacked: '좁은 화면처럼 버튼을 세로로 배치',
    stage: '주문 확인 (교육 예시)',
    instructionFixed: '결제 실패 주문을 고르고 다시 결제 버튼을 누르세요.',
    instructionDefect: '빨간 주문을 고르고 오른쪽 버튼을 누르세요.',
    legend: '주문',
    order: (id: string) => `주문 ${id}`,
    status: { paid: '결제 완료', pending: '결제 대기', failed: '결제 실패' },
    keep: '나중에 하기',
    retry: '다시 결제',
    observed: '과업 결과',
    selected: '고른 주문',
    pressed: '누른 버튼',
    result: '과업',
    none: '(아직 없음)',
    done: '완료',
    wrong: '다른 주문이나 버튼을 골랐습니다',
    waiting: '진행 전',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Using only the instruction below, choose one order and press a button. Change the settings and try again.',
    defect: 'Intentional defect: rely only on color and position',
    grayscale: 'Grayscale view (a model without color)',
    stacked: 'Stack the buttons as on a narrow screen',
    stage: 'Order review (teaching example)',
    instructionFixed: 'Choose the order with failed payment and press Retry payment.',
    instructionDefect: 'Choose the red order and press the button on the right.',
    legend: 'Orders',
    order: (id: string) => `Order ${id}`,
    status: { paid: 'Paid', pending: 'Payment pending', failed: 'Payment failed' },
    keep: 'Do it later',
    retry: 'Retry payment',
    observed: 'Task result',
    selected: 'Order chosen',
    pressed: 'Button pressed',
    result: 'Task',
    none: '(nothing yet)',
    done: 'Complete',
    wrong: 'A different order or button was chosen',
    waiting: 'Not attempted',
  },
};

const buttonClass = 'rounded-sm border border-stroke-light px-md py-xs text-xsm font-semiBold';

/** 같은 과업의 안내와 상태 표시를 결함 · 수정 상태로 바꿔 본다. 흑백은 이 상자 안에만 적용한다. */
export const StatusTaskDemo = () => {
  const c = useLang(content);
  const name = useId();
  const [defect, setDefect] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [stacked, setStacked] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [action, setAction] = useState<Action | null>(null);
  const correct = selected === 'A-102' && action === 'retry';

  const toggles = [
    { label: c.defect, checked: defect, set: setDefect },
    { label: c.grayscale, checked: grayscale, set: setGrayscale },
    { label: c.stacked, checked: stacked, set: setStacked },
  ];

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-xs text-xsm">
        {toggles.map(({ label, checked, set }) => (
          <label key={label} className="flex items-center gap-sm">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {
                set(e.target.checked);
                setSelected(null);
                setAction(null);
              }}
            />
            {label}
          </label>
        ))}
      </div>

      <div
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
        style={grayscale ? { filter: 'grayscale(1)' } : undefined}
      >
        <p className="text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <p className="font-semiBold text-text-default">
          {defect ? c.instructionDefect : c.instructionFixed}
        </p>
        <fieldset className="flex flex-col gap-sm">
          <legend className="mb-xs">{c.legend}</legend>
          {orders.map((order) => {
            const style = statusStyle[order.status];
            const Icon = style.icon;
            return (
              <label key={order.id} className="flex flex-wrap items-center gap-sm">
                <input
                  type="radio"
                  name={name}
                  checked={selected === order.id}
                  onChange={() => setSelected(order.id)}
                />
                {c.order(order.id)}
                {defect ? (
                  <span
                    className={cx('inline-block h-3 w-3 rounded-full', style.dot)}
                    aria-hidden="true"
                  />
                ) : (
                  <span className={cx('inline-flex items-center gap-xs', style.tone)}>
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {c.status[order.status]}
                  </span>
                )}
              </label>
            );
          })}
        </fieldset>
        <div className={cx('flex gap-sm', stacked ? 'flex-col items-start' : 'flex-row flex-wrap')}>
          <button type="button" onClick={() => setAction('keep')} className={buttonClass}>
            {c.keep}
          </button>
          <button type="button" onClick={() => setAction('retry')} className={buttonClass}>
            {c.retry}
          </button>
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.selected, selected ? c.order(selected) : c.none],
          [c.pressed, action ? c[action] : c.none],
          [c.result, !selected || !action ? c.waiting : correct ? c.done : c.wrong],
        ]}
      />
    </PracticeFrame>
  );
};
