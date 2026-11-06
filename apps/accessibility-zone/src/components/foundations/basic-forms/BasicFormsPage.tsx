import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';

import { ReferencesSection, same, SummarySection } from '@/components/shared/DocPage';
import { NextPage } from '@/components/shared/PageLink';

import { ContactFormSection } from './sections/ContactFormSection';
import { GroupsSection } from './sections/GroupsSection';
import { LabelsSection } from './sections/LabelsSection';
import { PageHeader } from './sections/PageHeader';
import { TypesIdsSection } from './sections/TypesIdsSection';
import { getToc } from './toc';

const points = {
  ko: [
    '보이는 라벨을 for · id나 감싸기로 연결하면 접근 가능한 이름과 넓은 누름 영역이 함께 생깁니다.',
    'placeholder는 예시 힌트입니다. 입력하면 사라지고 이름으로 전달되는 방식도 환경마다 달라 라벨을 대신하지 못합니다.',
    'type · autocomplete · required는 필요한 것만 정확히 씁니다. WCAG 2.2 성공 기준 1.3.5(AA)는 사용자 본인 정보 칸의 목적을 프로그램이 알 수 있기를 요구하고, autocomplete 토큰은 그 방법입니다.',
    'id는 문서 안에서 하나여야 합니다. 같은 컴포넌트를 여러 번 그리면 useId 같은 방법으로 id를 만듭니다.',
    '한 질문에 속한 라디오 · 체크박스는 fieldset으로 묶고 legend에 질문을 씁니다.',
  ],
  en: [
    'Associating a visible label with for/id or by wrapping gives both an accessible name and a larger click target.',
    'A placeholder is an example hint. It disappears when you type, and how it is conveyed as a name varies, so it cannot replace a label.',
    'Use type, autocomplete, and required only where needed, accurately. WCAG 2.2 SC 1.3.5 (AA) requires that the purpose of fields about the user be programmatically determinable; an autocomplete token is how HTML does it.',
    'An id must be unique in the document. When rendering a component several times, create ids with something like useId.',
    'Group radio buttons and checkboxes that answer one question with fieldset and put the question in legend.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/tutorials/forms/labels/',
    source: same('W3C WAI'),
    title: same('Forms Tutorial — Labeling Controls'),
    note: { ko: 'label 연결 방법', en: 'How to associate labels' },
  },
  {
    href: 'https://www.w3.org/WAI/tutorials/forms/grouping/',
    source: same('W3C WAI'),
    title: same('Forms Tutorial — Grouping Controls'),
    note: { ko: 'fieldset · legend가 필요한 경우', en: 'When fieldset and legend are needed' },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html',
    source: same('W3C WAI'),
    title: same('Understanding SC 1.3.5: Identify Input Purpose'),
    note: {
      ko: 'autocomplete로 입력 목적 알리기',
      en: 'Identifying input purpose with autocomplete',
    },
  },
  {
    href: 'https://www.w3.org/TR/html-aam-1.0/#accessible-name-computations-by-html-element',
    source: same('W3C'),
    title: same('HTML-AAM — Accessible name computations by element'),
    note: {
      ko: 'label과 placeholder가 이름 계산에 쓰이는 순서',
      en: 'The order in which label and placeholder are used for the name',
    },
  },
  {
    href: 'https://react.dev/reference/react/useId',
    source: same('React'),
    title: same('useId'),
    note: { ko: '인스턴스마다 고유한 id 만들기', en: 'Generating unique ids per instance' },
  },
];

export const BasicFormsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <LabelsSection locale={locale} />
      <TypesIdsSection locale={locale} />
      <GroupsSection locale={locale} />
      <ContactFormSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="dom-order" />
    </DocLayout>
  );
};
