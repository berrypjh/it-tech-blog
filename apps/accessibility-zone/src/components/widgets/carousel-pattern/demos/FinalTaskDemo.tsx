'use client';

import { useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Carousel } from '../Carousel';
import { guides } from '../slides';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '표시할 안내를 고르고, 세부 설명을 펼친 뒤, 다음 안내로 옮기세요. 고른 개수를 하나와 없음으로도 바꿔 봅니다.',
    legend: '표시할 안내',
    label: '고른 행사 안내',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Choose the guides to show, open the details, then move to the next guide. Also change the number chosen to one and to none.',
    legend: 'Guides to show',
    label: 'Chosen event guides',
  },
};

/**
 * 최종 과업의 조합: 표시할 안내를 고르는 checkbox 묶음, 고른 안내를 하나씩 넘기는 수동 캐러셀, 안내마다의 details.
 * 자동 넘김은 넣지 않는다. 고른 안내가 하나면 이동 버튼이, 없으면 캐러셀의 조작이 사라진다.
 */
export const FinalTaskDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const all = guides[locale];
  const [chosen, setChosen] = useState([0, 1]);

  const toggle = (index: number) =>
    setChosen((previous) =>
      previous.includes(index) ? previous.filter((i) => i !== index) : [...previous, index],
    );

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <fieldset className="flex flex-wrap gap-md text-xsm">
        <legend className="mb-xs font-semiBold text-text-default">{c.legend}</legend>
        {all.map((guide, index) => (
          <label key={guide.title} className="flex items-center gap-sm">
            <input
              type="checkbox"
              checked={chosen.includes(index)}
              onChange={() => toggle(index)}
            />
            {guide.title}
          </label>
        ))}
      </fieldset>
      <Carousel label={c.label} slides={all.filter((_, index) => chosen.includes(index))} />
    </PracticeFrame>
  );
};
