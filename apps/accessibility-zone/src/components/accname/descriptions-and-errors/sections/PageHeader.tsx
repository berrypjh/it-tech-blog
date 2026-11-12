import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '06장 · 5 / 6',
    title: 'aria-describedby · aria-description · 오류 메시지의 관계',
    lead: (
      <>
        &quot;YYYY-MM-DD 형식&quot; 같은 도움말과 &quot;날짜를 다시 확인하세요&quot; 같은 오류는
        모두 이름 밖의 정보입니다. 하지만 도움말은 설명 계산으로, 오류는{' '}
        <strong className="text-text-default">상태와 별도의 관계</strong>로 전해집니다. 이 페이지는
        두 경로를 따로 추적합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    learnItems: [
      '이름과 설명의 출처를 서로 다른 경로로 추적하기',
      '보이는 도움말 참조(aria-describedby)와 직접 적은 설명(aria-description)의 차이와 문서 상태',
      '안내 · 오류 표시 · aria-invalid · aria-errormessage를 나눠 보기',
    ],
  },
  en: {
    eyebrow: 'Chapter 06 · 5 of 6',
    title: 'How aria-describedby, aria-description, and error messages relate',
    lead: (
      <>
        A hint such as &quot;Format: YYYY-MM-DD&quot; and an error such as &quot;Check the date
        again&quot; are both information outside the name. But the hint reaches users through the
        description computation, and the error through{' '}
        <strong className="text-text-default">a state and a separate relation</strong>. This page
        traces the two paths separately.
      </>
    ),
    readingTime: 'About 12 min read',
    learnItems: [
      'Tracing the sources of names and descriptions on separate paths',
      'How referencing visible help (aria-describedby) differs from a direct description (aria-description), and their document status',
      'Separating hints, error display, aria-invalid, and aria-errormessage',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
