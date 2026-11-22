'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { moveIndex } from '@/components/widgets/shared/moveIndex';
import { cardClass, cardTitleClass, controlClass } from '@/components/widgets/shared/styles';

type Activation = 'manual' | 'automatic';
type TabItem = { title: string; text: string };

const content = {
  ko: {
    practice: '실습',
    instructions:
      '위 순서대로 두 탭 목록을 키보드로 조작하고, 선택된 탭과 초점이 있는 탭을 관찰 값에서 견주어 보세요. 가상의 행사 안내입니다.',
    single: '탭을 하나만 두기',
    sets: {
      manual: { title: '수동 활성화', label: '행사 안내 (수동 활성화)' },
      automatic: { title: '자동 활성화', label: '행사 안내 (자동 활성화)' },
    },
    tabs: [
      { title: '일정', text: '토요일과 일요일, 하루 세 회차로 진행합니다.' },
      { title: '장소', text: '본관 2층 A홀과 B홀입니다. 동쪽 입구로 들어옵니다.' },
      { title: '준비물', text: '신청 확인 메일과 신분증을 준비합니다.' },
    ],
    observed: '이 탭 목록에서 읽은 DOM',
    selected: 'aria-selected="true"인 탭',
    panel: 'hidden이 아닌 패널이 가리키는 탭',
    stop: 'tabindex="0"인 탭',
    focusTitle: '페이지가 읽은 초점',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Operate both tab lists with the keyboard in the order above, and compare the selected tab with the focused tab in the observed values. The event guide is fictional.',
    single: 'Keep only one tab',
    sets: {
      manual: { title: 'Manual activation', label: 'Event guide (manual activation)' },
      automatic: { title: 'Automatic activation', label: 'Event guide (automatic activation)' },
    },
    tabs: [
      { title: 'Schedule', text: 'Saturday and Sunday, three sessions a day.' },
      {
        title: 'Venue',
        text: 'Halls A and B on the second floor. Enter through the east entrance.',
      },
      { title: 'What to bring', text: 'Bring the confirmation email and an ID.' },
    ],
    observed: 'DOM read from this tab list',
    selected: 'Tab with aria-selected="true"',
    panel: 'Tab that the non-hidden panel points to',
    stop: 'Tab with tabindex="0"',
    focusTitle: 'Focus the page read',
    focus: 'document.activeElement',
    none: 'None',
  },
};

/**
 * 탭 목록 하나와 그 패널. 선택된 탭 · roving tabindex · 보이는 패널은 같은 값 하나에서 나온다.
 * 좌우 화살표와 Home · End는 초점을 옮기고, 자동 활성화일 때만 선택도 함께 바꾼다.
 * 수동 활성화의 선택은 버튼의 기본 동작인 Enter · Space와 클릭이 맡는다. Tab은 가로채지 않는다.
 */
const TabSet = ({ activation, tabs }: { activation: Activation; tabs: TabItem[] }) => {
  const c = useLang(content);
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const [read, setRead] = useState({ selected: '', panel: '', stop: '' });
  const current = Math.min(selected, tabs.length - 1);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const shown = el.querySelector('[role="tabpanel"]:not([hidden])');
    setRead({
      selected: el.querySelector('[role="tab"][aria-selected="true"]')?.textContent ?? '',
      panel:
        document.getElementById(shown?.getAttribute('aria-labelledby') ?? '')?.textContent ?? '',
      stop: el.querySelector('[role="tab"][tabindex="0"]')?.textContent ?? '',
    });
  }, [current, tabs.length]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const next = moveIndex(event.key, index, tabs.length, 'horizontal');
    if (next === null) return;
    event.preventDefault();
    document.getElementById(`${id}-tab-${next}`)?.focus();
    if (activation === 'automatic') setSelected(next);
  };

  return (
    <div ref={box} className={cardClass}>
      <h3 className={cardTitleClass}>{c.sets[activation].title}</h3>
      <div role="tablist" aria-label={c.sets[activation].label} className="flex flex-wrap gap-xs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={index === current}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={index === current ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={controlClass}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.title}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={0}
          hidden={index !== current}
          className="rounded-sm border border-stroke-light p-md"
        >
          {tab.text}
        </div>
      ))}
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.selected, read.selected || c.none],
          [c.panel, read.panel || c.none],
          [c.stop, read.stop || c.none],
        ]}
      />
    </div>
  );
};

/** 같은 내용의 탭을 수동 활성화와 자동 활성화로 나란히 조작한다. 탭이 하나뿐일 때의 동작도 확인할 수 있다. */
export const TabsDemo = () => {
  const c = useLang(content);
  const [active] = useActiveElement();
  const [single, setSingle] = useState(false);
  const tabs = single ? c.tabs.slice(0, 1) : c.tabs;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={single} onChange={() => setSingle(!single)} />
        {c.single}
      </label>
      <div className="grid gap-lg md:grid-cols-2">
        <TabSet activation="manual" tabs={tabs} />
        <TabSet activation="automatic" tabs={tabs} />
      </div>
      <ObservedPanel title={c.focusTitle} rows={[[c.focus, <code key="f">{active}</code>]]} />
    </PracticeFrame>
  );
};
