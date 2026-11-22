'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { VerdictLabel } from '@/components/shared/VerdictLabel';

import entrance from '../images/entrance.svg';

type Choice = 'missing' | 'empty' | 'info' | 'function';
type CaseId = 'decorative' | 'informative' | 'iconLink' | 'textLink';

const cases: CaseId[] = ['decorative', 'informative', 'iconLink', 'textLink'];
const expected: Record<CaseId, Choice> = {
  decorative: 'empty',
  informative: 'info',
  iconLink: 'function',
  textLink: 'empty',
};

const content = {
  ko: {
    practice: '실습',
    instructions: '자리마다 대체 텍스트를 하나씩 고르고 확인을 누르세요.',
    alts: { info: '입구 변경', function: '동쪽 입구 길찾기' },
    choices: {
      missing: 'alt 생략',
      empty: 'alt=""',
      info: 'alt="입구 변경"',
      function: 'alt="동쪽 입구 길찾기"',
    },
    legends: {
      decorative: '1. “동쪽 입구로 들어오세요” 문장 앞',
      informative: '2. 일요일 3회차 옆, 아이콘만',
      iconLink: '3. 아이콘만 있는 링크',
      textLink: '4. “동쪽 입구 길찾기” 글자가 있는 링크',
    },
    sentence: '동쪽 입구로 들어오세요',
    session: '일요일 3회차 15:30',
    linkText: '동쪽 입구 길찾기',
    preview: '예시 화면 (교육 예시)',
    observed: '페이지가 읽은 img 속성',
    noAlt: 'alt 속성 없음',
    check: '확인',
    reasons: {
      decorative: '문장이 이미 같은 말을 하므로 빈 alt가 의도입니다.',
      informative: '아이콘만 입구 변경을 알리므로 그 정보를 글로 줍니다.',
      iconLink: '링크 이름이 그림에서만 오므로 목적지를 적습니다.',
      textLink: '링크 글자가 이름을 주므로 그림은 비워 중복을 피합니다.',
    },
    match: '의도와 같음',
    differ: '의도와 다름',
    result: (n: number) => `4곳 중 ${n}곳이 예제의 의도와 같습니다.`,
  },
  en: {
    practice: 'Exercise',
    instructions: 'Choose one text alternative for each place, then press Check.',
    alts: { info: 'Entrance changed', function: 'Directions to the east entrance' },
    choices: {
      missing: 'No alt',
      empty: 'alt=""',
      info: 'alt="Entrance changed"',
      function: 'alt="Directions to the east entrance"',
    },
    legends: {
      decorative: '1. Before the sentence “Enter by the east entrance”',
      informative: '2. Next to Sunday Session 3, icon only',
      iconLink: '3. A link with only the icon',
      textLink: '4. A link with the text “Directions to the east entrance”',
    },
    sentence: 'Enter by the east entrance',
    session: 'Sunday, Session 3 at 15:30',
    linkText: 'Directions to the east entrance',
    preview: 'Example screen (teaching example)',
    observed: 'img attributes the page read',
    noAlt: 'No alt attribute',
    check: 'Check',
    reasons: {
      decorative: 'The sentence already says it, so an empty alt is the intent.',
      informative: 'Only the icon tells that the entrance changed, so give that in text.',
      iconLink: 'The link name comes only from the image, so write the destination.',
      textLink: 'The link text gives the name, so leave the image empty to avoid repeats.',
    },
    match: 'Matches the intent',
    differ: 'Differs from the intent',
    result: (n: number) => `${n} of 4 places match the example’s intent.`,
  },
};

const directions = '/complex-images#route-description';

/** 같은 입구 아이콘을 네 자리에 두고, 고른 alt로 다시 그린 뒤 실제 img의 alt 속성을 읽는다. */
export const AltChoiceDemo = () => {
  const c = useLang(content);
  const [choices, setChoices] = useState<Record<CaseId, Choice>>({
    decorative: 'missing',
    informative: 'missing',
    iconLink: 'missing',
    textLink: 'missing',
  });
  const [checked, setChecked] = useState(false);
  const preview = useRef<HTMLDivElement>(null);
  const [read, setRead] = useState<string[]>([]);

  useEffect(() => {
    const images = [...(preview.current?.querySelectorAll('img') ?? [])];
    setRead(
      images.map((img) => (img.hasAttribute('alt') ? `alt="${img.getAttribute('alt')}"` : '')),
    );
  }, [choices]);

  const altOf = (id: CaseId) => {
    const choice = choices[id];
    if (choice === 'missing') return undefined;
    return choice === 'empty' ? '' : c.alts[choice];
  };

  const icon = (id: CaseId) => {
    const alt = altOf(id);
    if (alt === undefined) {
      // eslint-disable-next-line jsx-a11y/alt-text -- alt 생략을 의도적으로 재현
      return <img src={entrance.src} width={24} height={24} className="inline-block" />;
    }
    return (
      <Image src={entrance} alt={alt} width={24} height={24} unoptimized className="inline-block" />
    );
  };

  const matches = cases.filter((id) => choices[id] === expected[id]).length;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="grid gap-md sm:grid-cols-2">
        {cases.map((id) => (
          <div key={id} className="rounded-sm border border-stroke-light p-md text-xsm">
            <RadioGroup
              label={c.legends[id]}
              value={choices[id]}
              onValueChange={(value) => setChoices((prev) => ({ ...prev, [id]: value as Choice }))}
              className="flex flex-col gap-2xs"
            >
              {(Object.keys(c.choices) as Choice[]).map((choice) => (
                <Radio key={choice} value={choice} className="text-xsm">
                  <code>{c.choices[choice]}</code>
                </Radio>
              ))}
            </RadioGroup>
            {checked && (
              <p className="mt-xs">
                <VerdictLabel id={choices[id] === expected[id] ? 'pass' : 'fail'}>
                  {choices[id] === expected[id] ? c.match : c.differ}
                </VerdictLabel>{' '}
                <span className="text-text-light">{c.reasons[id]}</span>
              </p>
            )}
          </div>
        ))}
      </div>
      <div ref={preview} className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm font-semiBold text-text-default">{c.preview}</p>
        <ul className="flex flex-col gap-sm">
          <li className="flex items-center gap-sm">
            {icon('decorative')} {c.sentence}
          </li>
          <li className="flex items-center gap-sm">
            {c.session} {icon('informative')}
          </li>
          <li>
            <Link href={directions} className="inline-flex items-center">
              {icon('iconLink')}
            </Link>
          </li>
          <li>
            <Link href={directions} className="inline-flex items-center gap-sm">
              {icon('textLink')} {c.linkText}
            </Link>
          </li>
        </ul>
      </div>
      <ObservedPanel
        title={c.observed}
        rows={cases.map((id, i) => [c.legends[id], <code key={id}>{read[i] || c.noAlt}</code>])}
      />
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
