import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '11장 · 3 / 7',
    title: '필드 오류 · 오류 요약 · 수정 제안을 연결하기',
    lead: (
      <>
        오류가 두 곳에 났는데 화면 위쪽에 “입력을 확인하세요”만 보이면, 사용자는 어느 칸이 왜
        틀렸는지 폼 전체를 다시 훑어야 합니다. 이 페이지는{' '}
        <strong className="text-text-default">오류 요약 → 정확한 칸 → 수정 → 재제출</strong>을
        끊기지 않는 한 경로로 만듭니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '무엇이 틀렸는지와 어떻게 고칠지를 나눠 쓰기',
      '검증한 뒤에 aria-invalid · 보이는 오류 글 · 설명 관계를 연결하기',
      '처음 실패했을 때 초점을 옮길 한 곳을 정하고 같은 오류를 거듭 알리지 않기',
    ],
  },
  en: {
    eyebrow: 'Chapter 11 · 3 of 7',
    title: 'Connecting field errors, an error summary, and correction suggestions',
    lead: (
      <>
        If two fields are wrong and the top of the screen only says “check your input”, the user has
        to scan the whole form again to learn which field is wrong and why. This page makes{' '}
        <strong className="text-text-default">error summary → exact field → fix → resubmit</strong>{' '}
        one unbroken path.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Writing what is wrong and how to fix it as separate things',
      'Connecting aria-invalid, visible error text, and the description after validating',
      'Choosing one place for focus on the first failure and not repeating the same error',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
