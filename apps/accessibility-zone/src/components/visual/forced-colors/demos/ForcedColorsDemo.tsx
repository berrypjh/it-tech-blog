'use client';

import { useEffect, useState } from 'react';

import { useTheme } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { cx } from '@berrypjh/react-ui';
import { Check } from 'lucide-react';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

type Version = 'before' | 'after';

const versions: Version[] = ['before', 'after'];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '각 묶음에서 한 항목을 눌러 선택해 보세요. 그다음 시스템 색 모형을 켜서 어느 쪽의 경계와 선택 상태가 남는지 비교합니다.',
    model: '시스템 색 모형 켜기 (이 상자만, 실제 Forced Colors 아님)',
    titles: { before: '배경 · 그림자에만 기댄 표시', after: '실제 테두리와 체크 표시' },
    options: ['일반 배송', '빠른 배송'],
    observed: '지금 브라우저에서 읽은 값',
    forced: 'forced-colors: active',
    contrast: 'prefers-contrast',
    scheme: 'prefers-color-scheme',
    theme: '이 사이트의 테마',
    yes: '일치',
    no: '일치하지 않음',
    themes: { light: '라이트', dark: '다크' },
    note: '미디어 쿼리 값은 이 브라우저의 실제 값이고, 모형 스위치는 이 값을 바꾸지 않습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Press one item in each group to select it. Then turn on the system color model and compare which boundaries and selected states remain.',
    model: 'Turn on the system color model (this box only; not real forced colors)',
    titles: {
      before: 'Indicated only by background and shadow',
      after: 'Real border and check mark',
    },
    options: ['Standard shipping', 'Express shipping'],
    observed: 'Values read from this browser now',
    forced: 'forced-colors: active',
    contrast: 'prefers-contrast',
    scheme: 'prefers-color-scheme',
    theme: 'This site’s theme',
    yes: 'Matches',
    no: 'Does not match',
    themes: { light: 'Light', dark: 'Dark' },
    note: 'Media query values are this browser’s real values; the model switch does not change them.',
  },
};

type Media = { forced: boolean; contrast: string; scheme: string };

const readMedia = (): Media => ({
  forced: window.matchMedia('(forced-colors: active)').matches,
  contrast:
    ['more', 'less', 'custom'].find(
      (value) => window.matchMedia(`(prefers-contrast: ${value})`).matches,
    ) ?? 'no-preference',
  scheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
});

/** 시스템 색 모형의 인라인 스타일. 강제 모드에서 사라지는 그림자와 배경을 이 상자에서만 흉내 낸다. */
const modelStyle = (version: Version, selected: boolean): React.CSSProperties => ({
  backgroundColor: 'Canvas',
  color: 'CanvasText',
  boxShadow: 'none',
  ...(version === 'after' ? { borderColor: selected ? 'Highlight' : 'ButtonBorder' } : {}),
});

/** 선택 묶음 하나. 수정 전은 배경과 그림자만, 수정 후는 실제 테두리와 체크 표시로 상태를 나타낸다. */
const ChoiceGroup = ({ version, model }: { version: Version; model: boolean }) => {
  const c = useLang(content);
  const [selected, setSelected] = useState(0);

  return (
    <div
      role="group"
      aria-label={c.titles[version]}
      className="flex min-w-0 flex-col gap-sm rounded-sm border border-stroke-light p-md text-xsm"
      style={model ? { backgroundColor: 'Canvas', color: 'CanvasText' } : undefined}
    >
      <p className="font-semiBold">{c.titles[version]}</p>
      {c.options.map((option, i) => {
        const isSelected = selected === i;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isSelected}
            onClick={() => setSelected(i)}
            style={model ? modelStyle(version, isSelected) : undefined}
            className={cx(
              'flex items-center gap-sm rounded-sm px-md py-sm text-left font-semiBold',
              version === 'before'
                ? cx('shadow-sm', isSelected && 'bg-[var(--ds-background-selected)]')
                : cx(
                    'border-2',
                    isSelected
                      ? 'border-stroke-primary forced-colors:border-[color:Highlight]'
                      : 'border-transparent',
                  ),
            )}
          >
            {version === 'after' && (
              <Check
                className={cx('h-4 w-4 shrink-0', !isSelected && 'invisible')}
                aria-hidden="true"
              />
            )}
            {option}
          </button>
        );
      })}
    </div>
  );
};

/** 배경 · 그림자 기반 표시와 실제 선 기반 표시를 시스템 색 모형에서 비교하고, 실제 미디어 값을 함께 읽는다. */
export const ForcedColorsDemo = () => {
  const c = useLang(content);
  const { resolvedTheme } = useTheme();
  const [model, setModel] = useState(false);
  const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
    const queries = [
      '(forced-colors: active)',
      '(prefers-contrast: more)',
      '(prefers-contrast: less)',
      '(prefers-contrast: custom)',
      '(prefers-color-scheme: dark)',
    ].map((query) => window.matchMedia(query));
    const update = () => setMedia(readMedia());
    update();
    queries.forEach((query) => query.addEventListener('change', update));
    return () => queries.forEach((query) => query.removeEventListener('change', update));
  }, []);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={model} onChange={(e) => setModel(e.target.checked)} />
        {c.model}
      </label>
      <div className="grid gap-md md:grid-cols-2">
        {versions.map((version) => (
          <ChoiceGroup key={version} version={version} model={model} />
        ))}
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.forced, media ? (media.forced ? c.yes : c.no) : '…'],
          [c.contrast, <code key="a">{media?.contrast ?? '…'}</code>],
          [c.scheme, <code key="a">{media?.scheme ?? '…'}</code>],
          [c.theme, c.themes[resolvedTheme]],
        ]}
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
