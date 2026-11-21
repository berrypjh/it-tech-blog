'use client';

import { useId, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

import {
  checkContrast,
  type ContrastTarget,
  formatRatio,
  isOpaqueHex,
} from '../../shared/contrast';

const targets: ContrastTarget[] = ['text', 'largeText', 'nonText'];

const presets = [
  { id: 'clear', foreground: '#1f2937', background: '#ffffff', target: 'text' },
  { id: 'boundary', foreground: '#358735', background: '#ffffff', target: 'text' },
  { id: 'large', foreground: '#767676', background: '#ffffff', target: 'largeText' },
] as const;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '적용할 기준을 고르고 두 색을 #RRGGBB로 적어 보세요. 예시 버튼의 "기준 경계" 값은 반올림하면 4.50으로 보이지만 기준에 못 미칩니다.',
    target: '적용할 기준 (사람이 판단)',
    targetLabels: {
      text: '일반 텍스트 4.5:1',
      largeText: '큰 텍스트 3:1',
      nonText: '비텍스트 3:1',
    },
    foreground: '앞쪽 색 (글자 · 표시)',
    background: '뒤쪽 색 (인접 배경)',
    pick: (name: string) => `${name} 고르기`,
    invalid: '#과 16진수 여섯 자리로 적어 주세요. 예: #1F2937',
    presetsLabel: '예시 값',
    presets: { clear: '충분한 대비', boundary: '기준 경계', large: '큰 텍스트' },
    preview: '미리보기',
    sample: '가나다 Aa 123',
    result: '계산 결과',
    shown: '표시값 (소수 셋째 자리에서 버림)',
    exact: '판정에 쓴 값',
    required: '적용한 기준',
    verdict: '이 두 색의 비교',
    pass: '기준 이상',
    fail: '기준 미달',
    waiting: '두 색을 올바른 형식으로 적으면 계산합니다.',
    note: '두 불투명 색의 계산입니다. 실제 화면의 색과 적용 기준이 맞는지는 따로 확인합니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Choose the requirement and enter two colors as #RRGGBB. The "At the boundary" example looks like 4.50 when rounded but falls short.',
    target: 'Requirement to apply (your judgment)',
    targetLabels: {
      text: 'Normal text 4.5:1',
      largeText: 'Large text 3:1',
      nonText: 'Non-text 3:1',
    },
    foreground: 'Foreground color (text or mark)',
    background: 'Background color (adjacent)',
    pick: (name: string) => `Pick ${name}`,
    invalid: 'Enter # and six hexadecimal digits, for example #1F2937',
    presetsLabel: 'Example values',
    presets: { clear: 'Clear contrast', boundary: 'At the boundary', large: 'Large text' },
    preview: 'Preview',
    sample: 'Aa Bb 123',
    result: 'Computed result',
    shown: 'Shown value (cut at two decimals)',
    exact: 'Value used for the judgment',
    required: 'Requirement applied',
    verdict: 'This pair of colors',
    pass: 'Meets the requirement',
    fail: 'Below the requirement',
    waiting: 'Enter both colors in the correct format to compute.',
    note: 'This computes two opaque colors. Check separately that they are the real on-screen colors and the right requirement.',
  },
};

const fieldClass =
  'w-full min-w-0 rounded-sm border border-stroke-light bg-background-surface px-md py-sm font-mono text-xsm';

/** 색 입력 한 칸. 글자 입력과 색 선택기가 같은 값을 쓰고, 형식이 틀리면 칸에 오류를 연결한다. */
const ColorField = ({
  label,
  pickLabel,
  error,
  value,
  onChange,
}: {
  label: string;
  pickLabel: string;
  error: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  const id = useId();
  const valid = isOpaqueHex(value);

  return (
    <div className="flex min-w-0 flex-col gap-xs text-xsm">
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center gap-sm">
        <input
          id={id}
          value={value}
          spellCheck={false}
          aria-invalid={!valid}
          aria-describedby={valid ? undefined : `${id}-error`}
          onChange={(e) => onChange(e.target.value.trim())}
          className={fieldClass}
        />
        <input
          type="color"
          aria-label={pickLabel}
          value={valid ? value.toLowerCase() : '#000000'}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 w-11 shrink-0 rounded-sm border border-stroke-light bg-background-surface"
        />
      </div>
      {!valid && (
        <p id={`${id}-error`} className="text-xxsm text-text-error">
          {error}
        </p>
      )}
    </div>
  );
};

/** 불투명한 두 색의 대비를 기존 getContrastRatio로 계산한다. 고른 색은 미리보기 칸 안에만 쓴다. */
export const ContrastDemo = () => {
  const c = useLang(content);
  const [target, setTarget] = useState<ContrastTarget>('text');
  const [foreground, setForeground] = useState<string>(presets[0].foreground);
  const [background, setBackground] = useState<string>(presets[0].background);
  const result = checkContrast(foreground, background, target);

  const applyPreset = (preset: (typeof presets)[number]) => {
    setForeground(preset.foreground);
    setBackground(preset.background);
    setTarget(preset.target);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <RadioGroup
        label={c.target}
        value={target}
        onValueChange={(value) => setTarget(value as ContrastTarget)}
        className="flex-row flex-wrap gap-x-xl"
      >
        {targets.map((value) => (
          <Radio key={value} value={value} className="text-xsm">
            {c.targetLabels[value]}
          </Radio>
        ))}
      </RadioGroup>

      <div className="grid gap-md sm:grid-cols-2">
        <ColorField
          label={c.foreground}
          pickLabel={c.pick(c.foreground)}
          error={c.invalid}
          value={foreground}
          onChange={setForeground}
        />
        <ColorField
          label={c.background}
          pickLabel={c.pick(c.background)}
          error={c.invalid}
          value={background}
          onChange={setBackground}
        />
      </div>

      <div role="group" aria-label={c.presetsLabel} className="flex flex-wrap gap-sm">
        {presets.map((preset) => (
          <Button
            key={preset.id}
            type="button"
            variant="outlined"
            size="sm"
            onClick={() => applyPreset(preset)}
          >
            {c.presets[preset.id]}
          </Button>
        ))}
      </div>

      {result && (
        <div className="rounded-sm border border-stroke-light p-md text-xsm">
          <p className="mb-sm font-semiBold text-text-default">{c.preview}</p>
          <p
            className="rounded-xs px-md py-sm"
            style={{ color: foreground, backgroundColor: background }}
          >
            {c.sample}
          </p>
        </div>
      )}

      <ObservedPanel
        title={c.result}
        source="computed"
        rows={
          result
            ? [
                [c.shown, `${formatRatio(result.ratio)}:1`],
                [c.exact, <code key="a">{result.ratio}</code>],
                [c.required, `${result.required}:1`],
                [c.verdict, result.passes ? c.pass : c.fail],
              ]
            : [[c.verdict, c.waiting]]
        }
      >
        <p className="mt-sm text-xxsm text-text-light">{c.note}</p>
      </ObservedPanel>
    </PracticeFrame>
  );
};
