import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { KWCAG_CITE, KWCAG_REGISTRY } from '@/components/shared/kwcag';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="reading-criteria" hash="case-target-size" />의 2.5.8은 WCAG
        2.2에서 새로 생긴 기준입니다. KWCAG 2.2는 WCAG 2.1을 기초로 했으므로 2.5.8을 옮긴 항목이
        아니고, 컨트롤 크기는 6.1.3이 다룹니다.
      </>
    ),
    caption: '컨트롤 크기 항목의 비교',
    head: ['구분', 'KWCAG 2.2 — 6.1.3', 'WCAG 2.2 — 2.5.8 (AA)'],
    rows: [
      [
        '문장의 힘',
        '본문은 "충분한 크기로 제공해야 한다". 6.0mm 수치와 안쪽 여백은 "바람직하다"',
        '"at least … except when" — 예외가 아니면 24 CSS 픽셀을 충족해야 함',
      ],
      ['크기 기준', '대각선 6.0mm 이상', '24 × 24 CSS 픽셀 이상'],
      ['단위', '물리 길이(mm)', 'CSS 픽셀'],
      [
        '예외',
        '이 항목 본문에서는 찾지 못함',
        '간격 · 동등 · 인라인 · 사용자 에이전트 제어 · 필수',
      ],
      [
        '더 있는 것',
        '컨트롤 안쪽 1픽셀 이상 여백을 두고 그곳에서는 반응하지 않게 하는 것이 바람직함',
        '겹친 대상의 크기를 재는 방법(대상 정의)',
      ],
      [
        '확인 증거',
        '기기에서 잰 실제 길이, 잰 기기와 배율',
        '개발자 도구에서 잰 CSS 픽셀 크기와 중심 거리, 잰 창 크기',
      ],
    ],
    after: (
      <>
        두 항목은 같은 문제를 다루지만 숫자 · 단위 · 문장의 힘 · 예외가 모두 다릅니다. 같은 버튼이
        한쪽 기준으로 충족이고 다른 쪽으로 미충족일 수 있으므로, 판정 기록에는 어느 문서의 어느 판본
        어느 항목으로 판정했는지를 함께 적습니다. KWCAG 원문의 부속서 A(참고)는 WCAG 2.1의
        2.5.5(AAA, 44 × 44 CSS 픽셀)를 국제표준 지표로 설명하지만, 부속서는 참고이고 검사항목이
        아닙니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        2.5.8 from <PageLink locale="en" id="reading-criteria" hash="case-target-size" /> is new in
        WCAG 2.2. KWCAG 2.2 is based on WCAG 2.1, so it has no item carried over from 2.5.8; control
        size is covered by 6.1.3.
      </>
    ),
    caption: 'Comparing the control size items',
    head: ['Aspect', 'KWCAG 2.2 — 6.1.3', 'WCAG 2.2 — 2.5.8 (AA)'],
    rows: [
      [
        'Force of the sentence',
        'The body says controls "must be provided at a sufficient size"; the 6.0mm figure and inner margin are "desirable" (바람직하다)',
        '"at least … except when" — 24 CSS pixels must be met unless an exception applies',
      ],
      ['Size', 'Diagonal of 6.0mm or more', 'At least 24 × 24 CSS pixels'],
      ['Unit', 'Physical length (mm)', 'CSS pixels'],
      [
        'Exceptions',
        'None found in the body of this item',
        'Spacing, Equivalent, Inline, User agent control, Essential',
      ],
      [
        'Also covers',
        'An inner margin of at least 1 pixel inside controls that does not respond to pointers is desirable',
        'How to measure overlapping targets (definition of target)',
      ],
      [
        'Evidence',
        'Actual length measured on a device, with the device and zoom',
        'CSS pixel size and center distance measured in developer tools, with the window size',
      ],
    ],
    after: (
      <>
        The two items address the same problem but differ in number, unit, force, and exceptions.
        The same button can meet one and fail the other, so a judgment record notes which document,
        which edition, and which item it was judged against. Annex A (informative) of the KWCAG
        original describes WCAG 2.1&apos;s 2.5.5 (AAA, 44 × 44 CSS pixels) as an international
        indicator, but the annex is informative and not a checklist item.
      </>
    ),
  },
};

export const SizeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.size.id}>
      <DocH2 {...toc.size} />
      <p>{c.intro}</p>
      <NormativeQuote locale={locale} href={KWCAG_REGISTRY} cite={KWCAG_CITE[locale]} lang="ko">
        <p>
          <strong>6.1.3. (조작 가능)</strong> 사용자 입력 및 콘트롤은 조작 가능하도록 제공되어야
          한다.
        </p>
        <p className="mt-xs">
          웹 페이지에서 제공하는 모든 이웃한 콘트롤은 개별적으로 선택하고 사용할 수 있도록 충분한
          크기로 제공해야 한다.
        </p>
        <p className="mt-xs">
          콘트롤의 크기: 콘텐츠에 포함된 모든 콘트롤은 대각선 방향의 길이를 6.0mm 이상으로 제공하는
          것이 바람직하다.
        </p>
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
