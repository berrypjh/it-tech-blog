import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '11장 · 6 / 7',
    title: '비밀번호 · 붙여넣기 · OTP · CAPTCHA와 대체 인증 경로 검토하기',
    lead: (
      <>
        비밀번호를 외워서 치고, 다른 기기에 뜬 숫자를 옮겨 적고, 뒤틀린 글자를 읽어 내야만 들어갈 수
        있다면 어떤 사용자는 문 앞에서 멈춥니다. 이 페이지는 실제 계정 없이{' '}
        <strong className="text-text-default">합성 값과 시험용 코드</strong>만으로, 기억과 전사를
        덜어 주는 수단과 대체 경로가 있는지 검토합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '인지 기능 시험이 무엇인지와 3.3.8(AA) · 3.3.9(AAA)의 조건 나누기',
      '붙여넣기 · 비밀번호 관리자 · 자동 완성 · 직접 편집을 막는 구현 찾기',
      'CAPTCHA를 인증 기준과 비텍스트 콘텐츠 기준으로 따로 검토하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 11 · 6 of 7',
    title: 'Reviewing passwords, paste, OTP, CAPTCHA, and alternative authentication paths',
    lead: (
      <>
        If getting in requires typing a memorized password, copying digits shown on another device,
        and reading distorted characters, some users stop at the door. Without any real account,
        this page uses only{' '}
        <strong className="text-text-default">synthetic values and a test code</strong> to review
        whether there are means that reduce memory and transcription, and an alternative path.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Understanding cognitive function tests and separating the conditions of 3.3.8 (AA) and 3.3.9 (AAA)',
      'Finding implementations that block paste, password managers, autocomplete, or direct editing',
      'Reviewing CAPTCHA against the authentication criterion and the non-text content criterion separately',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
