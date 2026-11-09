import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '01장 · 4 / 7',
    title: '규칙 · 검색 · 기존 ML · LLM 비교: 도입 타당성과 비LLM Baseline',
    lead: (
      <>
        <strong className="text-text-default">
          &quot;LLM을 쓸까?&quot;보다 &quot;LLM 없이 어디까지 되는가?&quot;를 먼저 확인합니다.
        </strong>{' '}
        01.3의 업무 계약에서 출발해, 같은 IT 문의를 규칙 · 검색 · 분류기 · LLM으로 풀어 보고 비LLM
        Baseline과 도입을 보류할 조건을 정합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    learnItems: [
      '같은 문의에 서비스 코드 규칙, 정책 검색, 분류기, LLM이 각각 무엇을 맡는지 구분하기',
      '단독 선택과 조합에서 각 방식의 역할을 나누기',
      '실패 비용 · 데이터 · 변경 빈도 · 품질 · 지연 · 비용 · 검증 가능성으로 비LLM Baseline을 정하기',
      '도입 보류 조건과 재평가 조건을 적고, 승인자가 있다는 사실만으로 자동화를 정당화하지 않기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 4 of 7',
    title:
      'Rules, search, classic ML, and LLMs compared: whether an LLM is justified, and the non-LLM baseline',
    lead: (
      <>
        <strong className="text-text-default">
          Before &quot;should we use an LLM?&quot;, check &quot;how far do we get without
          one?&quot;.
        </strong>{' '}
        Starting from the business contract in 01.3, this page solves the same IT request with
        rules, search, a classifier, and an LLM, and sets a non-LLM baseline and the conditions for
        holding off.
      </>
    ),
    readingTime: 'About 12 min read',
    learnItems: [
      'Tell what service-code rules, policy search, a classifier, and an LLM each take on for the same request',
      'Separate the role of each approach when used alone and in combination',
      'Set a non-LLM baseline using failure cost, data, change frequency, quality, latency, cost, and verifiability',
      'Write conditions for holding off and for re-evaluating, without treating the presence of an approver as a justification for automation',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} />
);
