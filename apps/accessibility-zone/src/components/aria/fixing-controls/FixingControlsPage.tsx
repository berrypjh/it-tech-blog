import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { APG_DISCLOSURE, aria12 } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { FixedSection } from './sections/FixedSection';
import { MismatchesSection } from './sections/MismatchesSection';
import { PageHeader } from './sections/PageHeader';
import { TaskSection } from './sections/TaskSection';
import { getToc } from './toc';

const points = {
  ko: [
    '화면에서 동작하는 컨트롤도 의미 · 이름 · 상태 · 관계 · 키보드 동작이 서로 어긋날 수 있습니다. 항목마다 따로 확인합니다.',
    '네이티브 button으로 포커스와 Enter · Space 실행을 지키고, 이름은 보이는 글자로 주고, 장식 아이콘은 숨깁니다.',
    '펼침 여부는 한 상태에 두고 화면(hidden)과 aria-expanded를 그 값에서 함께 만듭니다. aria-controls를 쓰면 대상 ID가 있는지 확인합니다.',
    'DOM으로 관찰한 사실과 실제 보조기술에서 확인할 항목을 나눠 기록하고, 들은 결과에는 조합과 버전을 함께 적습니다.',
  ],
  en: [
    'Even a control that works on screen can have meaning, name, state, relation, and keyboard behavior that disagree. Check each one separately.',
    'Keep focus and Enter and Space activation with a native button, give the name as visible text, and hide decorative icons.',
    'Keep expansion in one state and make the screen (hidden) and aria-expanded from that value. If you use aria-controls, check that the target ID exists.',
    'Record facts observed in the DOM separately from items to check with real assistive technology, and note the combination and versions with what you heard.',
  ],
};

const references: DocReference[] = [
  {
    href: aria12('aria-expanded'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-expanded'),
    note: {
      ko: '펼침 상태와 aria-controls 권고 (W3C Recommendation, 2023-06-06)',
      en: 'The expanded state and the aria-controls recommendation (W3C Recommendation, 2023-06-06)',
    },
  },
  {
    href: aria12('button'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — button role'),
    note: {
      ko: '이름이 필요한 역할 (Accessible Name Required: True)',
      en: 'A role that requires a name (Accessible Name Required: True)',
    },
  },
  {
    href: aria12('aria-controls'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-controls'),
    note: { ko: 'ID 참조 목록 값', en: 'An ID reference list value' },
  },
  {
    href: APG_DISCLOSURE,
    source: same('W3C WAI'),
    title: same('APG — Disclosure (Show/Hide) Pattern'),
    note: {
      ko: '상세 보기의 키 동작 · 상태 권장 패턴 (보충 자료)',
      en: 'Recommended keys and states for show/hide (supporting material)',
    },
  },
];

export const FixingControlsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <MismatchesSection locale={locale} />
      <FixedSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="name-and-label" />
    </DocLayout>
  );
};
