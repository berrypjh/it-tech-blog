'use client';

import { useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { Kbd } from '@/components/shared/Kbd';

import { DefectiveHelpTip, HelpTip, type HelpTipState } from './HelpTip';

const content = {
  ko: {
    practice: '실습',
    instructions: (escape: React.ReactNode) => (
      <>
        도움말 버튼에 마우스를 올려 내용으로 옮기고, {escape}로 닫아 보세요. Tab으로도 열고, 터치
        기기에서는 눌러 봅니다.
      </>
    ),
    defect: '의도한 결함: 호버 전용 · 틈 있음 · 자동으로 사라짐',
    label: '배송비 도움말',
    text: '5만 원 이상 주문은 배송비가 없습니다. 도서 지역은 추가 요금이 있을 수 있습니다 (교육 예시).',
    observed: '지금 관찰한 값',
    open: '내용 표시',
    onContent: '포인터가 내용 위에 있음',
    focus: 'document.activeElement',
    yes: '예',
    no: '아니요',
  },
  en: {
    practice: 'Exercise',
    instructions: (escape: React.ReactNode) => (
      <>
        Hover the help button, move onto the content, and close it with {escape}. Also open it with
        Tab, and press it on a touch device.
      </>
    ),
    defect: 'Intentional defect: hover only, with a gap, disappears on its own',
    label: 'Shipping fee help',
    text: 'Orders of $50 or more ship free. Islands may have a surcharge (teaching example).',
    observed: 'Observed now',
    open: 'Content shown',
    onContent: 'Pointer on the content',
    focus: 'document.activeElement',
    yes: 'Yes',
    no: 'No',
  },
};

/** 고친 도움말과 결함 도움말을 같은 값으로 관찰한다. 아래에 공간을 두어 내용이 패널을 가리지 않게 한다. */
export const HelpTipDemo = () => {
  const c = useLang(content);
  const [defect, setDefect] = useState(false);
  const [state, setState] = useState<HelpTipState>({ open: false, pointerOnContent: false });
  const [active] = useActiveElement();
  const Tip = defect ? DefectiveHelpTip : HelpTip;
  const yesNo = (value: boolean) => (value ? c.yes : c.no);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions(<Kbd>Escape</Kbd>)}>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={defect} onChange={(e) => setDefect(e.target.checked)} />
        {c.defect}
      </label>
      <div className="rounded-sm border border-stroke-light p-md pb-[7rem]">
        <Tip key={String(defect)} label={c.label} text={c.text} onStateChange={setState} />
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.open, yesNo(state.open)],
          [c.onContent, yesNo(state.pointerOnContent)],
          [c.focus, <code key="a">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
