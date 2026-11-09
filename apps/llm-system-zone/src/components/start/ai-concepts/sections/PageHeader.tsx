import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '01장 · 2 / 7',
    title: 'AI · ML · Deep Learning · Generative AI · LLM과 지도 · 자기지도 학습',
    lead: (
      <>
        01.1에서 담당 큐를 제안한 모델을 다시 봅니다.{' '}
        <strong className="text-text-default">
          AI 관련 용어는 한 가지 기준으로 나눈 상호 배타적인 제품 종류가 아닙니다.
        </strong>{' '}
        이 페이지는 기술 범주, 생성 과업과 모델 관점, 학습 신호를 서로 다른 축으로 나눕니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    learnItems: [
      'AI · ML · DL의 통상 포함 관계와 규칙 기반 AI 사례를 설명하기',
      'Generative AI, Foundation Model, LM, LLM, Multimodal이 기술 범주와 다른 축임을 구별하기',
      '사람이 붙인 큐 라벨(지도 학습)과 원문에서 얻는 다음 토큰 표적(자기지도 학습)을 비교하기',
      '용도(큐 분류)와 학습 신호를 따로 보고 한 기능을 두 축에 놓기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 2 of 7',
    title:
      'AI, ML, deep learning, generative AI, LLMs, and supervised vs. self-supervised learning',
    lead: (
      <>
        We return to the model that suggested a queue in 01.1.{' '}
        <strong className="text-text-default">
          AI-related terms are not mutually exclusive kinds of product split by a single criterion.
        </strong>{' '}
        This page separates technology category, generative task and model view, and learning signal
        as different axes.
      </>
    ),
    readingTime: 'About 10 min read',
    learnItems: [
      'Explain the usual containment of AI, ML, and DL, and rule-based AI examples',
      'Tell that generative AI, foundation model, LM, LLM, and multimodal sit on axes other than technology category',
      'Compare a human-assigned queue label (supervised) with a next-token target from raw text (self-supervised)',
      'Look at the use (queue classification) and the learning signal separately, and place one feature on two axes',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} />
);
