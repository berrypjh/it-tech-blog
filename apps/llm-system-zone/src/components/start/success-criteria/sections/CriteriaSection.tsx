import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const ANTHROPIC = 'https://platform.claude.com/docs/en/test-and-evaluate/define-success';

const content = {
  ko: {
    intro: '성공을 판정하려면 "이렇게 생긴 결과"와 "이 조건을 만족하는 결과"를 나눠 적어야 합니다.',
    labels: ['무엇인가', '한계'],
    items: [
      [
        'Expected Output',
        '결과의 형식과 내용을 보여 주는 예',
        '정확한 문자열 하나로 쓰면 표현이 다른 올바른 답이 실패한다',
      ],
      [
        'Acceptance Criteria',
        '결과가 통과하려면 만족해야 하는 조건의 목록',
        '조건이 모호하면 사람마다 통과 여부가 갈린다',
      ],
    ],
    after: (
      <>
        그래서 허용 출력은 문자열 하나가 아니라 조건으로 씁니다.{' '}
        <ExternalLink href={ANTHROPIC}>Anthropic의 성공 기준 정의 문서</ExternalLink>는 성공 기준이
        구체적이고 측정 가능하며 달성 가능하고 목적에 맞아야 하고, 한 가지 지표가 아니라 여러 기준을
        함께 보는 것이 보통이라고 서술합니다.
      </>
    ),
    relation:
      '01-02의 Validation(명시 제약 확인)은 이 조건 가운데 코드로 단언할 수 있는 것이고, Evaluation(정의한 기준과 데이터에 따른 품질 평가)은 같은 조건을 사례 집합에 적용해 측정하는 일입니다.',
  },
  en: {
    intro:
      'To judge success, write "what a result looks like" and "what a result must satisfy" separately.',
    labels: ['What it is', 'Limit'],
    items: [
      [
        'Expected Output',
        'An example showing the form and content of a result',
        'Written as one exact string, a correct answer worded differently would fail',
      ],
      [
        'Acceptance Criteria',
        'A list of conditions a result must satisfy to pass',
        'When conditions are vague, people disagree on pass or fail',
      ],
    ],
    after: (
      <>
        So an allowed output is written as conditions, not as one string.{' '}
        <ExternalLink href={ANTHROPIC}>
          Anthropic’s document on defining success criteria
        </ExternalLink>{' '}
        describes good criteria as specific, measurable, achievable, and relevant, and usually
        looking at several criteria together rather than one metric.
      </>
    ),
    relation:
      'Validation (checking stated constraints) in 01-02 is the part of these conditions that code can assert, and Evaluation (assessing quality against defined criteria and data) is applying the same conditions to a set of cases and measuring.',
  },
};

export const CriteriaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.items.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.criteria.id}>
      <DocH2 {...toc.criteria} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
      <p>{c.after}</p>
      <p>{c.relation}</p>
    </section>
  );
};
