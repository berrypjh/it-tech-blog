'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { controlClass } from '@/components/widgets/shared/styles';

const kinds = ['comments', 'mentions', 'notices'] as const;
type Kind = (typeof kinds)[number];
const frequencies = ['now', 'daily', 'weekly'] as const;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '위 순서대로 키보드로 조작하고 관찰 값을 읽으세요. 설정은 어디에도 저장하지 않습니다.',
    kindsLegend: '받을 알림',
    all: '모든 알림',
    kinds: { comments: '댓글', mentions: '멘션', notices: '공지' },
    frequencyLegend: '알림 빈도',
    frequencies: { now: '바로', daily: '하루 한 번', weekly: '주 한 번 (준비 중)' },
    quiet: '방해 금지',
    mute: '알림음 음소거',
    on: '켜짐',
    off: '꺼짐',
    observed: '페이지가 읽은 DOM',
    rows: {
      all: '“모든 알림”의 checked · indeterminate',
      kinds: '고른 알림 (checked인 칸)',
      frequency: '고른 빈도 (checked인 radio)',
      quiet: '“방해 금지”의 aria-checked',
      mute: '“알림음 음소거”의 aria-pressed',
      focus: 'document.activeElement',
    },
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Operate with the keyboard in the order above and read the observed values. The settings are not stored anywhere.',
    kindsLegend: 'Notifications to receive',
    all: 'All notifications',
    kinds: { comments: 'Comments', mentions: 'Mentions', notices: 'Notices' },
    frequencyLegend: 'Frequency',
    frequencies: { now: 'Immediately', daily: 'Once a day', weekly: 'Once a week (coming soon)' },
    quiet: 'Do not disturb',
    mute: 'Mute notification sound',
    on: 'On',
    off: 'Off',
    observed: 'DOM the page read',
    rows: {
      all: 'checked and indeterminate of “All notifications”',
      kinds: 'Chosen notifications (checked boxes)',
      frequency: 'Chosen frequency (checked radio)',
      quiet: 'aria-checked of “Do not disturb”',
      mute: 'aria-pressed of “Mute notification sound”',
      focus: 'document.activeElement',
    },
    none: 'none',
  },
};

/**
 * 한 설정 화면의 checkbox · radio · switch · toggle button. checkbox와 radio는 네이티브 요소이고 키 동작은 브라우저가 맡는다.
 * 관찰 값은 상태가 바뀐 뒤 실제 DOM의 프로퍼티와 속성에서 읽는다.
 */
export const SelectionContractsDemo = () => {
  const c = useLang(content);
  const box = useRef<HTMLDivElement>(null);
  const allRef = useRef<HTMLInputElement>(null);
  const [active] = useActiveElement();
  const [chosen, setChosen] = useState<Kind[]>([]);
  const [frequency, setFrequency] = useState<string>('now');
  const [quiet, setQuiet] = useState(false);
  const [mute, setMute] = useState(false);
  const [read, setRead] = useState({ all: '', kinds: '', frequency: '', quiet: '', mute: '' });
  const every = chosen.length === kinds.length;

  useEffect(() => {
    const el = box.current;
    const all = allRef.current;
    if (!el || !all) return;
    all.indeterminate = chosen.length > 0 && !every;
    const checked = (selector: string) =>
      [...el.querySelectorAll<HTMLInputElement>(selector)]
        .filter((input) => input.checked)
        .map((input) => input.value)
        .join(', ');
    setRead({
      all: `checked ${all.checked} · indeterminate ${all.indeterminate}`,
      kinds: checked('input[name="kind"]'),
      frequency: checked('input[type="radio"]'),
      quiet: el.querySelector('[role="switch"]')?.getAttribute('aria-checked') ?? '',
      mute: el.querySelector('[aria-pressed]')?.getAttribute('aria-pressed') ?? '',
    });
  }, [chosen, every, frequency, quiet, mute]);

  const toggleKind = (kind: Kind) =>
    setChosen((previous) =>
      previous.includes(kind) ? previous.filter((k) => k !== kind) : [...previous, kind],
    );

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div ref={box} className="flex flex-col gap-lg text-xsm">
        <fieldset className="flex flex-col gap-xs">
          <legend className="mb-xs font-semiBold text-text-default">{c.kindsLegend}</legend>
          <label className="flex items-center gap-sm">
            <input
              ref={allRef}
              type="checkbox"
              name="all"
              checked={every}
              onChange={() => setChosen(every ? [] : [...kinds])}
            />
            {c.all}
          </label>
          {kinds.map((kind) => (
            <label key={kind} className="ml-lg flex items-center gap-sm">
              <input
                type="checkbox"
                name="kind"
                value={kind}
                checked={chosen.includes(kind)}
                onChange={() => toggleKind(kind)}
              />
              {c.kinds[kind]}
            </label>
          ))}
        </fieldset>

        <fieldset className="flex flex-col gap-xs">
          <legend className="mb-xs font-semiBold text-text-default">{c.frequencyLegend}</legend>
          {frequencies.map((value) => (
            <label key={value} className="flex items-center gap-sm">
              <input
                type="radio"
                name="frequency"
                value={value}
                disabled={value === 'weekly'}
                checked={frequency === value}
                onChange={() => setFrequency(value)}
              />
              {c.frequencies[value]}
            </label>
          ))}
        </fieldset>

        <div className="flex flex-wrap gap-sm">
          <button
            type="button"
            role="switch"
            aria-checked={quiet}
            onClick={() => setQuiet(!quiet)}
            className={controlClass}
          >
            {c.quiet}
            <span aria-hidden="true" className="text-text-light">
              {quiet ? c.on : c.off}
            </span>
          </button>
          <button
            type="button"
            aria-pressed={mute}
            onClick={() => setMute(!mute)}
            className={controlClass}
          >
            {c.mute}
          </button>
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.rows.all, <code key="a">{read.all}</code>],
          [c.rows.kinds, <code key="k">{read.kinds || c.none}</code>],
          [c.rows.frequency, <code key="r">{read.frequency || c.none}</code>],
          [c.rows.quiet, <code key="q">{read.quiet}</code>],
          [c.rows.mute, <code key="m">{read.mute}</code>],
          [c.rows.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
