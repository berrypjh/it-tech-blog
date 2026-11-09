import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '01장 · 1 / 7',
    title: 'LLM 시스템 시작하기: 모델의 응답과 업무 완료 구별하기',
    lead: (
      <>
        모델이 그럴듯한 응답을 생성한 것과 사용자의 업무가 끝난 것은{' '}
        <strong className="text-text-default">다른 사실</strong>입니다. 이 페이지는 가상의 사내 IT
        문의를 담당 큐에 접수하는 일을 따라가며, 모델과 앱이 각각 무엇을 책임지는지 나눕니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'LLM을 텍스트를 생성하는 구성 요소로 보고, 모델 · 추론 API · 앱의 책임 나누기',
      '입력 → 라우팅 제안 → 검증 → 업무 시스템 기록 → 사용자 확인의 흐름 설명하기',
      '같은 요청의 접수 ID와 담당 큐 기록을 업무 완료의 증거로 판단하기',
      '모델이 "접수 완료"라고 썼지만 기록이 거절된 경우에 무엇을 확인할지 정하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 1 of 7',
    title: 'Getting started with LLM systems: telling a model response from a finished task',
    lead: (
      <>
        A model generating a plausible response and a user&apos;s task being finished are{' '}
        <strong className="text-text-default">different facts</strong>. This page follows a
        fictional internal IT request on its way to the right support queue, and separates what the
        model and the app are each responsible for.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Treat an LLM as a component that generates text, and split the duties of model, inference API, and app',
      'Explain the flow input → routing suggestion → validation → business system record → user confirmation',
      'Judge the ticket ID and queue record of the same request as evidence of a finished task',
      'Decide what to check when the model wrote "filed" but the write was rejected',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} />
);
