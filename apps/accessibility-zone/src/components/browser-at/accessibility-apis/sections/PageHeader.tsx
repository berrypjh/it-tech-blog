import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '03장 · 3 / 6',
    title: 'HTML-AAM · Core-AAM과 운영체제 접근성 API의 역할',
    lead: (
      <>
        브라우저가 만든 접근성 정보는 운영체제의 접근성 API를 거쳐 보조기술에 닿습니다. 이 흐름에서
        HTML 요소를 어떤 정보로 바꿀지 정하는 문서가{' '}
        <strong className="text-text-default">HTML-AAM</strong>
        이고, 그 바탕이 되는 문서가 <strong className="text-text-default">Core-AAM</strong>입니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    learnItems: [
      'HTML 의미 → 브라우저 정보 → 플랫폼 API → 보조기술 해석의 흐름',
      'HTML-AAM과 Core-AAM이 다루는 대상과 주된 독자',
      '두 문서의 발행 상태와 날짜를 확인하는 이유',
      '명세의 매핑이 모든 브라우저 · 운영체제의 결과를 보장하지 않는다는 것',
    ],
  },
  en: {
    eyebrow: 'Chapter 03 · 3 of 6',
    title: 'The roles of HTML-AAM, Core-AAM, and operating system accessibility APIs',
    lead: (
      <>
        The accessibility information a browser builds reaches assistive technology through the
        operating system&apos;s accessibility API. In that flow,{' '}
        <strong className="text-text-default">HTML-AAM</strong> says what information HTML elements
        become, and <strong className="text-text-default">Core-AAM</strong> is the document it
        builds on.
      </>
    ),
    readingTime: 'About 10 min read',
    learnItems: [
      'The flow HTML meaning → browser information → platform API → assistive technology',
      'What HTML-AAM and Core-AAM cover and who they are mainly for',
      'Why to check the publication status and date of both documents',
      'That spec mappings do not guarantee results in every browser and OS',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
