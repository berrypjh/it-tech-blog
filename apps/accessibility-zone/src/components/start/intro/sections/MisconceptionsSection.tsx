import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Check, X } from 'lucide-react';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '지금까지의 내용을 오해 교정 형태로 압축합니다.',
    tableCaption: '흔한 오해와 더 정확한 관점',
    tableHead: ['흔한 오해', '더 정확한 관점'],
    pairs: [
      [
        '접근성은 스크린 리더 대응이다',
        '다양한 능력 · 입력 방식 · 환경에서 생기는 장벽 전체를 다룹니다',
      ],
      ['ARIA를 붙이면 접근성이 좋아진다', '시맨틱 HTML과 상호작용 구조가 먼저 맞아야 합니다'],
      ['접근성은 QA 단계에서 검사한다', '설계와 구현 단계의 컴포넌트 계약에 포함되어야 합니다'],
      ['접근성은 사용성과 같다', '겹치지만 목적과 평가 관점이 다릅니다'],
      [
        '접근성은 소수만의 문제다',
        '장애가 있는 사용자의 동등한 사용이 핵심이며, 다른 환경에도 이점이 있습니다',
      ],
      ['WCAG는 법률이다', '기술 기준이며, 법적 적용은 관할과 정책에 따라 별도로 정해집니다'],
      [
        '접근성은 비용만 늘린다',
        '구조 · 상태 · 키보드 계약이 명확해져 구현과 테스트가 함께 정리됩니다',
      ],
    ],
  },
  en: {
    intro: 'Here is everything so far, condensed into misconceptions and corrections.',
    tableCaption: 'Common misconceptions and more accurate views',
    tableHead: ['Common misconception', 'More accurate view'],
    pairs: [
      [
        'Accessibility is screen reader support',
        'It covers every barrier arising from diverse abilities, input methods, and environments',
      ],
      [
        'Adding ARIA makes things accessible',
        'Semantic HTML and interaction structure must be right first',
      ],
      [
        'Accessibility is checked in QA',
        'It belongs in component contracts during design and implementation',
      ],
      [
        'Accessibility is the same as usability',
        'They overlap but differ in purpose and evaluation',
      ],
      [
        'Accessibility only concerns a few people',
        'Equal use for people with disabilities is the core, with benefits for other contexts too',
      ],
      [
        'WCAG is a law',
        'It is a technical standard; legal application is set separately by jurisdiction and policy',
      ],
      [
        'Accessibility only adds cost',
        'Clear structure, state, and keyboard contracts tidy up implementation and testing together',
      ],
    ],
  },
};

export const MisconceptionsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.pairs.map(([myth, fact]) => [
    <span key="myth" className="flex gap-sm">
      <X className="mt-xs h-4 w-4 shrink-0 text-text-error" aria-hidden="true" />
      {myth}
    </span>,
    <span key="fact" className="flex gap-sm text-text-default">
      <Check className="mt-xs h-4 w-4 shrink-0 text-text-success" aria-hidden="true" />
      {fact}
    </span>,
  ]);

  return (
    <section aria-labelledby={toc.misconceptions.id}>
      <DocH2 {...toc.misconceptions} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={rows} />
    </section>
  );
};
