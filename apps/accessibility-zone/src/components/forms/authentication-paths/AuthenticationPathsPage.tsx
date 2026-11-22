import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { AssistSection } from './sections/AssistSection';
import { CaptchaSection } from './sections/CaptchaSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { TestSection } from './sections/TestSection';
import { getToc } from './toc';

const points = {
  ko: [
    '인증의 어느 단계든 기억 · 전사 · 문제 풀이를 요구하면 조건이 따릅니다. 3.3.8(AA)은 대체 방법 · 보조 메커니즘 · 객체 인식 · 개인 콘텐츠를, 3.3.9(AAA)는 대체 방법 · 보조 메커니즘만 허용합니다.',
    '붙여넣기 · 비밀번호 관리자 · 자동 완성 · 직접 편집을 막지 않습니다. 코드를 직접 옮겨 적게만 하는 단계는 대체 방법이 없으면 충족하지 못합니다.',
    'CAPTCHA는 인증 기준과 별개로 1.1.1의 비텍스트 콘텐츠 조항을 따로 검토합니다. 화면만 보고 위반이나 통과로 단정하지 않습니다.',
    '이 모형은 합성 값만 쓰고 아무것도 전송 · 저장하지 않습니다. 비밀번호 관리자와 코드 자동 제안은 쓰는 브라우저와 기기에서 확인합니다.',
  ],
  en: [
    'Any authentication step that requires memory, transcription, or solving comes with conditions. 3.3.8 (AA) allows alternative, mechanism, object recognition, and personal content; 3.3.9 (AAA) allows only alternative and mechanism.',
    'Do not block paste, password managers, autocomplete, or direct editing. A step that only allows manual transcription of a code does not satisfy it without an alternative.',
    'Review CAPTCHA against the non-text content clause of 1.1.1 separately from the authentication criterion. Do not conclude failure or pass from the screen alone.',
    'This model uses only synthetic values and sends or stores nothing. Check password managers and code suggestions on the browser and device in use.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('accessible-authentication-minimum'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.8 Accessible Authentication (Minimum) (Level AA)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('accessible-authentication-enhanced'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.9 Accessible Authentication (Enhanced) (Level AAA)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('non-text-content'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.1.1 Non-text Content (Level A)'),
    note: { ko: 'CAPTCHA 조항 (2024-12-12)', en: 'The CAPTCHA clause (2024-12-12)' },
  },
  {
    href: understanding('accessible-authentication-minimum'),
    source: same('W3C WAI'),
    title: same('Understanding SC 3.3.8: Accessible Authentication (Minimum)'),
    note: {
      ko: '붙여넣기 · 인증 코드 · 객체 인식의 해설 (보충 자료)',
      en: 'Explains paste, verification codes, and object recognition (supporting)',
    },
  },
  {
    href: whatwg('form-control-infrastructure', 'autofill'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Autofill'),
    note: {
      ko: 'username · current-password · one-time-code 토큰',
      en: 'The username, current-password, and one-time-code tokens',
    },
  },
];

export const AuthenticationPathsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <TestSection locale={locale} />
      <AssistSection locale={locale} />
      <CaptchaSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="timeouts-and-confirmation" />
    </DocLayout>
  );
};
