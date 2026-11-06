import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '04장 · 6 / 6',
    title: '표준 · 초안 · 구현 지원과 법령 · 계약 · 인증 요구를 구분하기',
    lead: (
      <>
        &quot;이 서비스는 접근성 기준을 지켜야 하나?&quot;에는 하나의 답이 없습니다. 기술 기준의
        발행 상태, 실제 지원 증거, 계약 · 인증 요구, 법령 의무는{' '}
        <strong className="text-text-default">서로 다른 축</strong>입니다. 이 장의 마지막 페이지는
        네 축을 나누고, 한 서비스의 판정 기록을 끝까지 씁니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    learnItems: [
      '발행 상태 · 지원 증거 · 계약과 인증 · 법령 의무를 다른 축으로 나누기',
      '관할 · 대상 · 시점 · 적용 문서로 의무를 확인하는 절차',
      '통과 · 실패 · 해당 없음 · 미확인을 나누고 각각의 근거 남기기',
      '기준 · 버전 · 조항 · 범위 · 조건 · 증거 · 판정 · 미확인 · 후속 확인을 담은 기록 쓰기',
    ],
  },
  en: {
    eyebrow: 'Chapter 04 · 6 of 6',
    title:
      'Telling standards, drafts, and implementation support apart from legal, contract, and certification requirements',
    lead: (
      <>
        &quot;Does this service have to meet accessibility standards?&quot; has no single answer.
        The publication status of technical standards, evidence of real support, contract and
        certification requirements, and legal obligations are{' '}
        <strong className="text-text-default">different axes</strong>. The last page of this chapter
        separates the four axes and writes one service&apos;s judgment record to the end.
      </>
    ),
    readingTime: 'About 13 min read',
    learnItems: [
      'Separating publication status, support evidence, contracts and certification, and legal obligations as different axes',
      'A procedure for checking obligations by jurisdiction, subject, time, and applicable documents',
      'Separating pass, fail, not applicable, and unconfirmed, and leaving the basis for each',
      'Writing a record with standard, version, clause, scope, conditions, evidence, verdict, unconfirmed items, and follow-up',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
