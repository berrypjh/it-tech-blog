import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '03장 · 6 / 6',
    title: '교육용 모델 · 브라우저 검사값 · 실제 보조기술 결과 구별하기',
    lead: (
      <>
        &quot;체크됨으로 나온다&quot;는 말은 어디서 본 것이냐에 따라 뜻이 다릅니다. 이 장의 마지막
        페이지는 컨트롤 하나를{' '}
        <strong className="text-text-default">DOM · 개발자 도구 · 실제 보조기술</strong>에서
        관찰하고, 결과마다 출처를 적는 기록을 씁니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '교육용 모델 · 실제 DOM 관찰 · 브라우저 도구 검사 · 실제 보조기술 구별하기',
      '개발자 도구나 테스트 도구의 접근성 표현이 증명하지 못하는 것',
      '컨트롤 하나를 세 관점에서 관찰하기',
      '01장 재현 기록에 관찰 출처를 더해 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 03 · 6 of 6',
    title: 'Telling teaching models, browser inspection values, and real AT results apart',
    lead: (
      <>
        &quot;It shows as checked&quot; means different things depending on where you saw it. The
        last page of this chapter observes one control in{' '}
        <strong className="text-text-default">
          the DOM, developer tools, and real assistive technology
        </strong>
        , and writes a record that notes the source of each result.
      </>
    ),
    readingTime: 'About 10 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Telling apart teaching models, real DOM observation, browser tool inspection, and real assistive technology',
      'What accessibility views in developer tools and test tools cannot prove',
      'Observing one control from three points of view',
      'Extending the chapter 01 reproduction record with the source of each observation',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
