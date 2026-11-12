import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '06장 · 3 / 6',
    title: 'aria-labelledby · aria-label · 내용 기반 이름의 조건과 우선순위',
    lead: (
      <>
        &quot;aria-labelledby가 aria-label보다, aria-label이 내용보다 먼저&quot;라는 순서는 절반만
        맞습니다. 그 순서는 각 출처가{' '}
        <strong className="text-text-default">적용될 수 있을 때</strong>만 성립합니다. 이 페이지는
        순서 대신 출처 · 역할 · 참조 · 끝난 단계를 기록하는 법을 익힙니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '같은 버튼의 내용 · aria-label · 유효한 aria-labelledby를 비교하기',
      '적용 가능한 출처 · 역할의 이름 허용 · 참조의 유효성 · 끝난 단계를 기록하기',
      '작성자가 넣은 문자열이 화면 라벨을 덮어쓰는 경우',
    ],
  },
  en: {
    eyebrow: 'Chapter 06 · 3 of 6',
    title: 'Conditions and precedence of aria-labelledby, aria-label, and name from content',
    lead: (
      <>
        &quot;aria-labelledby before aria-label, aria-label before content&quot; is only half right.
        That order holds only{' '}
        <strong className="text-text-default">when each source can apply</strong>. Instead of the
        order, this page teaches you to record the source, the role, the reference, and the step
        that finished.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Comparing content, aria-label, and a valid aria-labelledby on the same button',
      'Recording the applicable source, whether the role allows a name, whether references are valid, and which step finished',
      'When a string the author added covers the visible label',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
