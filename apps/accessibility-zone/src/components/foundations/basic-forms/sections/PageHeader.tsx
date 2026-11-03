import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '02장 · 4 / 7',
    title: 'label·input·fieldset·legend로 기본 입력 폼 만들기',
    lead: (
      <>
        입력 칸이 무엇을 묻는지, 어떤 선택지끼리 한 질문인지는 보는 사람에게는 배치로 전달되지만
        보조기술에는 <strong className="text-text-default">마크업의 연결</strong>로만 전달됩니다. 이
        페이지는 그 연결을 HTML로 만들고, 브라우저가 실제로 계산한 결과를 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '라벨을 for · id나 감싸기로 연결하고 placeholder의 역할 구분하기',
      '입력 유형 · autocomplete · required의 쓰임과 고유 ID가 필요한 이유 이해하기',
      'fieldset · legend가 필요한 그룹을 알아보고 작성하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 02 · 4 of 7',
    title: 'Building a basic form with label, input, fieldset, and legend',
    lead: (
      <>
        What an input asks, and which options belong to one question, reach sighted users through
        layout, but reach assistive technology only through{' '}
        <strong className="text-text-default">associations in the markup</strong>. This page builds
        those associations in HTML and checks what the browser actually computes.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Associating labels with for and id or by wrapping, and what placeholder is for',
      'What input types, autocomplete, and required give you, and why IDs must be unique',
      'Recognizing groups that need fieldset and legend, and writing them',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
