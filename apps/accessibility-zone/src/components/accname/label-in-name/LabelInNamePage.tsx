import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { understanding, wcag22 } from '@/components/shared/wcag';

import { CasesSection } from './sections/CasesSection';
import { CriterionSection } from './sections/CriterionSection';
import { PageHeader } from './sections/PageHeader';
import { TaskSection } from './sections/TaskSection';
import { getToc } from './toc';

const points = {
  ko: [
    'WCAG 2.2 SC 2.5.3은 텍스트가 있는 라벨을 가진 컴포넌트의 이름이 보이는 텍스트를 포함하라고 요구합니다. 완전 일치는 요구하지 않습니다.',
    '라벨 텍스트를 이름 맨 앞에 두는 것은 Note의 권장 방식이고, 지키지 않았다고 실패가 되지 않습니다.',
    '설명은 이름이 아니므로 판정에 합치지 않고, 대소문자 · 문장 부호 차이는 따지지 않습니다. 단어가 끼어든 이름처럼 원문으로 결론이 나지 않으면 해석과 근거를 적습니다.',
    '판정 기록에는 이름의 출처, 브라우저 검사값, 음성 입력 · 화면 낭독기처럼 해 본 것과 해 보지 않은 것을 나눠 적습니다.',
  ],
  en: [
    'WCAG 2.2 SC 2.5.3 requires that the name of a component with a text label contain the visible text. An exact match is not required.',
    'Putting the label text at the start of the name is the Note’s best practice; not following it is not a failure.',
    'The description is not the name, so it is not added for judging, and case and punctuation differences do not matter. When the text does not settle a case, such as a name with interspersed words, write the interpretation and its basis.',
    'In the judgment record, separate the name source, browser values, and what you did and did not try with voice input and screen readers.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('label-in-name'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 2.5.3 Label in Name'),
    note: {
      ko: '판정의 규범 근거 (W3C Recommendation, 2024-12-12)',
      en: 'The normative basis (W3C Recommendation, 2024-12-12)',
    },
  },
  {
    href: understanding('label-in-name'),
    source: same('W3C WAI'),
    title: same('Understanding SC 2.5.3: Label in Name'),
    note: {
      ko: '라벨 식별 · 대소문자 · 설명 · 실패 사례 (보충 자료)',
      en: 'Identifying labels, case, descriptions, and failures (supporting material)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Techniques/failures/F96',
    source: same('W3C WAI'),
    title: same('F96: Failure due to the accessible name not containing the visible label text'),
    note: {
      ko: '대표 실패 사례 (보충 자료)',
      en: 'The main failure technique (supporting material)',
    },
  },
];

export const LabelInNamePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <CriterionSection locale={locale} />
      <CasesSection locale={locale} />
      <TaskSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
    </DocLayout>
  );
};
