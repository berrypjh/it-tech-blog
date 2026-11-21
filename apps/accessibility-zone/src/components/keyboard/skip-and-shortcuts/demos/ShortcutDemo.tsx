'use client';

import { useId, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '../../shared/ObservedPanel';

type Binding = 'plain' | 'alt';
type Scope = 'box' | 'focus';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '메모 칸에 "stars"를 적어 보고, 메모 카드에 Tab으로 가서 단축키를 눌러 보세요. 세 설정을 바꿔 가며 별표 수와 오작동 수를 비교합니다.',
    enabled: '단축키 사용',
    binding: '단축키',
    bindings: { plain: 'S', alt: 'Alt+S' },
    scope: '동작 범위',
    scopes: { box: '이 실습 상자 전체 (의도한 결함)', focus: '메모 카드에 포커스가 있을 때만' },
    stage: '메모 작성 (교육 예시)',
    note: '메모 내용',
    card: '별표할 메모 카드',
    cardText: '메모 카드: 포커스를 두고 단축키를 누르면 별표가 붙습니다.',
    observed: '지금 관찰한 값',
    stars: '별표 수',
    accidental: '입력 칸에서 실행된 횟수',
    basis: '이 설정의 2.1.4 근거',
    bases: {
      off: '끄기: 단축키가 꺼져 있음',
      remap: '재지정: 글자가 아닌 키를 포함함',
      focus: '포커스 범위: 컴포넌트에 포커스가 있을 때만 동작',
      none: '세 조건 중 어느 것도 이 설정으로는 충족하지 않음',
    },
    limit: '단축키는 이 상자 안의 키만 듣습니다. 사이트 전역에는 등록하지 않습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Type "stars" in the note field, then Tab to the note card and press the shortcut. Change the three settings and compare the star count with the accidental count.',
    enabled: 'Use the shortcut',
    binding: 'Shortcut',
    bindings: { plain: 'S', alt: 'Alt+S' },
    scope: 'Where it works',
    scopes: {
      box: 'This whole exercise box (intentional defect)',
      focus: 'Only while the note card has focus',
    },
    stage: 'Writing a note (teaching example)',
    note: 'Note text',
    card: 'Note card to star',
    cardText: 'Note card: with focus here, the shortcut adds a star.',
    observed: 'Observed now',
    stars: 'Stars',
    accidental: 'Runs from the text field',
    basis: '2.1.4 basis of this setting',
    bases: {
      off: 'Turn off: the shortcut is off',
      remap: 'Remap: it includes a non-printable key',
      focus: 'Active only on focus: it works only while the component has focus',
      none: 'This setting meets none of the three conditions',
    },
    limit: 'The shortcut listens only inside this box. Nothing is registered site-wide.',
  },
};

const matches = (event: React.KeyboardEvent, binding: Binding) => {
  if (binding === 'alt') {
    return event.altKey && !event.ctrlKey && !event.metaKey && event.code === 'KeyS';
  }
  return event.key.toLowerCase() === 's' && !event.altKey && !event.ctrlKey && !event.metaKey;
};

const basisOf = (enabled: boolean, binding: Binding, scope: Scope) => {
  if (!enabled) return 'off';
  if (binding === 'alt') return 'remap';
  return scope === 'focus' ? 'focus' : 'none';
};

/** 끄기 · 재지정 · 포커스 범위를 바꿔 문자 단축키의 오작동을 비교한다. 키는 이 상자에서만 듣는다. */
export const ShortcutDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [enabled, setEnabled] = useState(true);
  const [binding, setBinding] = useState<Binding>('plain');
  const [scope, setScope] = useState<Scope>('box');
  const [text, setText] = useState('');
  const [stars, setStars] = useState(0);
  const [accidental, setAccidental] = useState(0);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!enabled || event.repeat || event.nativeEvent.isComposing) return;
    if (!matches(event, binding)) return;
    const target = event.target as HTMLElement;
    const onCard = target.dataset.shortcutCard === 'true';
    if (scope === 'focus' && !onCard) return;
    if (binding === 'alt' || onCard) event.preventDefault();
    setStars((n) => n + 1);
    if (target.tagName === 'INPUT') setAccidental((n) => n + 1);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-md">
        <label className="flex items-center gap-sm text-xsm">
          <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
          {c.enabled}
        </label>
        <RadioGroup
          label={c.binding}
          value={binding}
          onValueChange={(value) => setBinding(value as Binding)}
          className="flex-row flex-wrap gap-x-xl"
        >
          {(['plain', 'alt'] as const).map((value) => (
            <Radio key={value} value={value} className="text-xsm">
              {c.bindings[value]}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label={c.scope}
          value={scope}
          onValueChange={(value) => setScope(value as Scope)}
          className="flex-row flex-wrap gap-x-xl"
        >
          {(['box', 'focus'] as const).map((value) => (
            <Radio key={value} value={value} className="text-xsm">
              {c.scopes[value]}
            </Radio>
          ))}
        </RadioGroup>
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions -- 단축키 범위를 이 상자로 한정한다 */}
      <div
        onKeyDown={onKeyDown}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm"
      >
        <p className="text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <div className="flex flex-col gap-xs">
          <label htmlFor={`${id}-note`}>{c.note}</label>
          <input
            id={`${id}-note`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm"
          />
        </div>
        <div
          role="group"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- 포커스 범위 단축키의 대상
          tabIndex={0}
          aria-label={c.card}
          data-shortcut-card="true"
          className="rounded-sm border border-stroke-light p-md"
        >
          {c.cardText}
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.stars, stars],
          [c.accidental, accidental],
          [c.basis, c.bases[basisOf(enabled, binding, scope)]],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.limit}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
