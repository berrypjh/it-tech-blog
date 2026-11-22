import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { understanding } from '@/components/shared/wcag';

import { FlowSection } from './sections/FlowSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { ProgressSection } from './sections/ProgressSection';
import { ToastSection } from './sections/ToastSection';
import { getToc } from './toc';

const points = {
  ko: [
    '상태마다 결과 영역 · 알림 · busy를 먼저 표로 정하고, 알림 문구와 화면 요약을 같은 결정에서 만듭니다.',
    '잴 수 없는 작업은 value 없는 진행 표시를 쓰고, 숫자를 지어내지 않습니다.',
    '빈 결과와 오류도 결과 영역에 남는 요약과 다시 시도 같은 복구 조작을 둡니다.',
    'Toast에만 있는 중요한 결과 · 조작을 두지 않고, 입력의 초점은 필요할 때만 옮깁니다.',
  ],
  en: [
    'Decide the results area, announcement, and busy for each state in a table, and build the announcement and on-screen summary from the same decision.',
    'Use a progress indicator without value for work that cannot be measured, and do not make up numbers.',
    'Empty results and errors also get a lasting summary in the results area and recovery actions such as Try again.',
    'Do not keep important results or actions only in a toast, and move focus from the input only when needed.',
  ],
};

const references: DocReference[] = [
  {
    href: understanding('status-messages'),
    source: same('W3C WAI'),
    title: same('Understanding SC 4.1.3: Status Messages'),
    note: {
      ko: '결과 · 대기 · 진행 알림 예 (보충 자료)',
      en: 'Examples for results, waiting, progress (supporting)',
    },
  },
  {
    href: aria12('progressbar'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — progressbar role'),
    note: {
      ko: '값을 모를 때 aria-valuenow를 두지 않음',
      en: 'No aria-valuenow when the value is unknown',
    },
  },
  {
    href: 'https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element',
    source: same('WHATWG'),
    title: same('HTML Living Standard — The progress element'),
    note: { ko: '값 없는(indeterminate) 진행 표시', en: 'Indeterminate progress' },
  },
];

export const LoadingAndResultsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <FlowSection locale={locale} />
      <ProgressSection locale={locale} />
      <PracticeSection locale={locale} />
      <ToastSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="stale-responses" />
    </DocLayout>
  );
};
