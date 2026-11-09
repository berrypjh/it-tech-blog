import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { PageHeader } from './sections/PageHeader';
import { RecordSection } from './sections/RecordSection';
import { SourcesSection } from './sections/SourcesSection';
import { TaskSection } from './sections/TaskSection';
import { ToolsSection } from './sections/ToolsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '관찰 출처는 교육용 모델 · 실제 DOM 관찰 · 브라우저 도구 검사 · 실제 보조기술 네 가지이고, 증명하는 범위가 다릅니다.',
    '개발자 도구나 테스트 도구의 접근성 표현은 운영체제 접근성 API 전체나 실제 발화와 같지 않습니다.',
    '일반 페이지의 스크립트는 DOM · 계산된 스타일 · 포커스를 읽을 수 있지만, 접근성 트리 전체나 발화는 읽을 수 없습니다.',
    '기록에는 과업 · 환경 · 버전 · 관찰 위치 · 수행 절차 · 기대 의미 · 실제 결과 · 차이 · 미확인 사항을 적고, 해 보지 않은 것은 미실행으로 남깁니다.',
  ],
  en: [
    'The four sources — teaching model, real DOM observation, browser tool inspection, real assistive technology — prove different things.',
    'Accessibility views in developer tools and test tools are not the same as the whole OS accessibility API or real speech.',
    'A regular page’s script can read the DOM, computed styles, and focus, but not the whole accessibility tree or speech.',
    'Record task, environment and versions, place of observation, steps, expected meaning, actual result, difference, and unconfirmed items, and leave what you did not do as not run.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/',
    source: same('Firefox Source Docs'),
    title: same('Accessibility Inspector'),
    note: {
      ko: '검사기는 플랫폼 접근성 계층이 아니라 Gecko의 접근성 트리를 보여 줌',
      en: 'The inspector shows Gecko’s accessibility tree, not the platform accessibility layer',
    },
  },
  {
    href: 'https://developer.chrome.com/docs/devtools/accessibility/reference',
    source: same('Chrome for Developers'),
    title: same('Accessibility features reference'),
    note: {
      ko: '개발자 도구가 키보드 · 화면 낭독기 사용 가능성을 답하지 못한다는 설명',
      en: 'Notes that developer tools cannot answer keyboard and screen reader usability',
    },
  },
  {
    href: 'https://www.w3.org/TR/core-aam-1.2/',
    source: same('W3C'),
    title: same('Core Accessibility API Mappings 1.2'),
    note: {
      ko: '브라우저가 플랫폼 접근성 API로 내보내는 방법 (Candidate Recommendation Draft, 2026-11-05)',
      en: 'How browsers expose information to platform accessibility APIs (Candidate Recommendation Draft, 2026-11-05)',
    },
  },
  {
    href: 'https://download.nvaccess.org/documentation/userGuide.html',
    source: same('NV Access'),
    title: same('NVDA User Guide'),
    note: { ko: '실제 보조기술로 확인할 때 (2026.3)', en: 'For checking with real AT (2026.3)' },
  },
  {
    href: 'https://support.apple.com/guide/voiceover/welcome/mac',
    source: same('Apple'),
    title: same('VoiceOver User Guide for Mac'),
    note: {
      ko: '실제 보조기술로 확인할 때 (macOS 27)',
      en: 'For checking with real AT (macOS 27)',
    },
  },
];

export const ObservationSourcesPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <SourcesSection locale={locale} />
      <ToolsSection locale={locale} />
      <TaskSection locale={locale} />
      <RecordSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="wcag-structure" />
    </DocLayout>
  );
};
