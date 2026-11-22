'use client';

import { useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import { VerdictLabel } from '@/components/shared/VerdictLabel';

type Target = 'captions' | 'description' | 'neither';
const targets: Target[] = ['captions', 'description', 'neither'];
const expected: Target[] = ['captions', 'captions', 'description', 'neither'];

const content = {
  ko: {
    practice: '실습',
    instructions: '클립의 정보 네 가지를 각각 어느 대안이 맡는지 고르고 확인을 누르세요.',
    items: [
      '말소리: “마지막 3회차는 오후 3시 30분에 시작합니다.”',
      '0.6초 동안 울리는 안내음',
      '장면 2의 정문 엑스 표시와 동쪽 입구를 가리키는 화살표',
      '배경의 짙은 남색',
    ],
    targets: { captions: '자막', description: '오디오 설명', neither: '둘 다 필요 없음' },
    check: '확인',
    reasons: [
      '들리는 말이므로 자막이 맡습니다.',
      '말이 아닌 소리도 뜻이 있으면 [안내음]처럼 자막에 담습니다.',
      '화면에만 있는 과업 정보이므로 오디오 설명이 맡습니다.',
      '과업에 필요한 정보가 아니므로 어느 쪽에도 넣지 않습니다.',
    ],
    match: '맞음',
    differ: '다시 보기',
    result: (n: number) => `4개 중 ${n}개가 예제의 풀이와 같습니다.`,
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Choose which alternative carries each of the clip’s four pieces of information, then press Check.',
    items: [
      'Speech: “The last session, Session 3, starts at 3:30 p.m.”',
      'A chime that sounds for 0.6 seconds',
      'In scene 2, the X on the main gate and the arrow pointing to the east entrance',
      'The dark navy background',
    ],
    targets: { captions: 'Captions', description: 'Audio description', neither: 'Neither' },
    check: 'Check',
    reasons: [
      'It is heard speech, so captions carry it.',
      'A non-speech sound that means something goes into captions, as [chime].',
      'It is task information only on screen, so audio description carries it.',
      'It is not information the task needs, so it goes in neither.',
    ],
    match: 'Correct',
    differ: 'Look again',
    result: (n: number) => `${n} of 4 match the example’s solution.`,
  },
};

/** 클립의 정보를 자막 · 오디오 설명 · 둘 다 아님으로 나눈다. */
export const ClassifyDemo = () => {
  const c = useLang(content);
  const [choices, setChoices] = useState<(Target | '')[]>(['', '', '', '']);
  const [checked, setChecked] = useState(false);
  const matches = choices.filter((choice, i) => choice === expected[i]).length;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-md sm:grid-cols-2">
        {c.items.map((item, i) => (
          <div key={item} className="rounded-sm border border-stroke-light p-md text-xsm">
            <RadioGroup
              label={`${i + 1}. ${item}`}
              value={choices[i]}
              onValueChange={(value) =>
                setChoices((prev) => prev.map((p, j) => (j === i ? (value as Target) : p)))
              }
              className="flex flex-col gap-2xs"
            >
              {targets.map((t) => (
                <Radio key={t} value={t} className="text-xsm">
                  {c.targets[t]}
                </Radio>
              ))}
            </RadioGroup>
            {checked && choices[i] && (
              <p className="mt-xs">
                <VerdictLabel id={choices[i] === expected[i] ? 'pass' : 'fail'}>
                  {choices[i] === expected[i] ? c.match : c.differ}
                </VerdictLabel>{' '}
                <span className="text-text-light">{c.reasons[i]}</span>
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-md">
        <Button type="button" variant="outlined" size="sm" onClick={() => setChecked(true)}>
          {c.check}
        </Button>
        <p role="status" className="text-xsm">
          {checked ? c.result(matches) : ''}
        </p>
      </div>
    </PracticeFrame>
  );
};
