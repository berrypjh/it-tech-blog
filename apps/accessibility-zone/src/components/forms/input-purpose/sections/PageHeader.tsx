import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '11장 · 1 / 7',
    title: '입력 유형 · autocomplete · inputmode와 필수 · 형식 안내 설계하기',
    lead: (
      <>
        숫자 키보드가 뜬다고 값이 검사되는 것은 아니고, 이메일 형식을 검사한다고 자동 채움이 되는
        것도 아닙니다. 이 페이지는 작은 행사 신청서에서{' '}
        <strong className="text-text-default">키보드 힌트 · 값 검증 · 입력 목적</strong>을 나누고,
        필수 여부와 형식 예시를 언제나 보이는 자리에 둡니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'type · inputmode · autocomplete가 각각 하는 일과 하지 않는 일 나누기',
      '필수 표시와 형식 예시를 라벨과 도움말에 두고 입력 칸에 연결하기',
      '사용자 자신의 정보를 받는 칸에만 입력 목적을 표시하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 11 · 1 of 7',
    title: 'Designing input types, autocomplete, inputmode, and required and format instructions',
    lead: (
      <>
        A numeric keypad does not mean the value is checked, and checking the email format does not
        mean the field can be filled in automatically. This page separates the{' '}
        <strong className="text-text-default">keyboard hint, value check, and input purpose</strong>{' '}
        in a small event application, and keeps required and format instructions where they are
        always visible.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Separating what type, inputmode, and autocomplete do and do not do',
      'Putting the required mark and format example in the label and hint, connected to the field',
      'Marking the input purpose only on fields that collect the user’s own information',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
