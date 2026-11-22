import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        “현장 참석”을 고르면 식사 선택이 나타나고, “온라인 참석”을 고르면 사라집니다. 이런 조건부
        필드는 보이는지만 정하면 안 되고 네 가지를 함께 정해야 합니다. 이 예제의 정책은 아래와
        같습니다.
      </>
    ),
    caption: '조건부 필드 “식사 선택”의 상태마다 정책',
    head: ['참석 방식', 'DOM', '기억하는 값', '검증', '제출'],
    rows: [
      ['현장 참석', '칸이 있음', '유지', '필수로 검사', '보냄'],
      [
        '온라인 참석',
        '칸이 없음',
        '유지 (다시 현장으로 바꾸면 되살림)',
        '검사하지 않음',
        '보내지 않음',
      ],
    ],
    pitfallTitle: '보이지 않는 칸이 제출을 막지 않게 합니다',
    pitfall: (locale: Locale) => (
      <>
        칸을 CSS로만 감추고 <code>required</code>를 남겨 두면, 브라우저 기본 검사가 그 칸에서 제출을
        멈출 수 있습니다. 사용자에게는 멈춘 이유가 보이지 않습니다. 필요 없는 칸은 DOM에서 빼거나
        검증 대상에서 함께 뺍니다. <code>disabled</code>인 칸은 표준상 제약 검증 대상이 아니고 제출
        데이터에도 들어가지 않습니다(
        <PageLink locale={locale} id="disabled-and-required" />
        ).
      </>
    ),
    after: (
      <>
        조건을 바꾸는 것만으로 화면이 다른 곳으로 넘어가거나 초점이 옮겨 가지 않게 합니다. 이
        예제에서는 라디오를 바꾸면 그 아래에 칸이 나타나거나 사라질 뿐입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Choosing “On site” shows a meal choice; choosing “Online” removes it. For such a conditional
        field, deciding visibility alone is not enough: four things must be decided together. This
        example’s policy is below.
      </>
    ),
    caption: 'Policy for each state of the conditional field “Meal choice”',
    head: ['Attendance', 'DOM', 'Remembered value', 'Validation', 'Submission'],
    rows: [
      ['On site', 'Field present', 'Kept', 'Checked as required', 'Sent'],
      [
        'Online',
        'Field absent',
        'Kept (restored when switched back to on site)',
        'Not checked',
        'Not sent',
      ],
    ],
    pitfallTitle: 'Do not let an invisible field block submission',
    pitfall: (locale: Locale) => (
      <>
        If a field is hidden only with CSS and <code>required</code> remains, the browser’s built-in
        check can stop submission at that field, and the user cannot see why. Remove unneeded fields
        from the DOM, or remove them from validation too. A <code>disabled</code> field is barred
        from constraint validation by the standard and is not included in submitted data (
        <PageLink locale={locale} id="disabled-and-required" />
        ).
      </>
    ),
    after: (
      <>
        Changing the condition alone should not navigate elsewhere or move focus. In this example,
        changing the radio only makes a field appear or disappear below it.
      </>
    ),
  },
};

export const ConditionalSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.conditional.id}>
      <DocH2 {...toc.conditional} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall(locale)}
      </Callout>
    </section>
  );
};
