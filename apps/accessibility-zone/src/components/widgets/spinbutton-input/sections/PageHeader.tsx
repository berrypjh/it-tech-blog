import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 7 / 9',
    title: 'Spinbutton의 직접 입력 · 증감 · 잘못된 값 처리하기',
    lead: (
      <>
        “12”를 치려고 “1”을 눌렀는데 칸이 곧바로 다른 숫자로 바뀌면, 사용자는 원하는 값을 끝내 넣지
        못합니다. 이 페이지는 숫자를{' '}
        <strong className="text-text-default">직접 치는 길과 한 단계씩 바꾸는 길</strong>을 함께
        두고, 치는 도중에는 기다렸다가 칸을 떠날 때 검사합니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '치는 도중의 빈 값 · 불완전한 값과 확정한 값을 나눠 다루기',
      '범위 밖 · 소수 · 단계에 맞지 않는 값을 구분해 알리고 복구하기',
      '네이티브 number와 증감 버튼의 이름 · 한계를 맞추고 텍스트 편집 키를 남겨 두기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 7 of 9',
    title: 'Handling direct entry, stepping, and invalid values in a spinbutton',
    lead: (
      <>
        If you press “1” on the way to typing “12” and the field immediately changes to another
        number, you can never enter the value you want. This page offers both{' '}
        <strong className="text-text-default">typing a number and changing it step by step</strong>,
        waits while you type, and checks when you leave the field.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Treating empty and incomplete values while typing separately from the committed value',
      'Telling apart out-of-range, decimal, and off-step values, and reporting and recovering from them',
      'Aligning the names and limits of the native number input and stepping buttons, and leaving text-editing keys alone',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
