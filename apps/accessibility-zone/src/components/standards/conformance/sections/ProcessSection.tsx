import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';
import { ThemedFigure } from '@/components/shared/ThemedFigure';
import { type VerdictId, VerdictLabel } from '@/components/shared/VerdictLabel';

import bookingProcessDark from '../images/booking-process-dark.webp';
import bookingProcessLight from '../images/booking-process-light.webp';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 판정: 목록 · 예약 입력 · 예약 확인 모두 이 과정에서는 적합성을 주장할 수 없다. */
const rowVerdicts: VerdictId[] = ['fail', 'fail', 'fail'];

const content = {
  ko: {
    figure: {
      alt: '세 브라우저 화면이 화살표로 이어집니다. 첫 화면 구석의 상담 말풍선에는 강조된 순환 화살표가 붙어 있고, 둘째 화면 옆 좁은 화면 변형에서는 버튼 하나가 점선 테두리입니다. 셋째 화면에는 큰 확인 표시가 있습니다. 세 화면을 묶은 괄호는 두 군데가 끊겨 있고 아래에 엑스 표시가 있습니다.',
      caption:
        '과정의 한 페이지라도 부적합하면, 기준을 충족한 마지막 페이지까지 그 과정의 적합성을 주장할 수 없습니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        강의실 예약 서비스의 세 페이지가 하나의 과정을 이룹니다. 목표는 WCAG 2.2 AA입니다. 아래
        관찰은 이 페이지가 만든 교육 예시입니다.
      </>
    ),
    caption: '예약 과정의 관찰과 요구별 판단',
    head: ['페이지', '관찰 (교육 예시)', '걸리는 요구', '판단'],
    rows: [
      [
        '1. 강의실 목록',
        '목록 · 필터 컴포넌트는 표본 검사에서 A · AA 기준을 충족. 오른쪽 아래 외부 상담 위젯에 Tab으로 들어가면 빠져나올 수 없음',
        '5. 비간섭 — 2.1.2는 기준 충족에 기대지 않은 콘텐츠에도 적용',
        '부적합',
      ],
      [
        '2. 예약 입력',
        '넓은 화면에서는 기준을 충족. 좁은 화면 변형에서 "다음" 아이콘 버튼에 이름이 없음',
        '2. 전체 페이지 — 화면 폭 변형도 페이지에 포함',
        '부적합',
      ],
      [
        '3. 예약 확인',
        '관찰한 상태에서 A · AA 기준을 충족',
        '3. 완전한 과정 — 앞 페이지가 부적합',
        '이 과정의 페이지로서는 적합성을 주장할 수 없음',
      ],
    ],
    after: (
      <>
        3번 페이지만 따로 보면 기준을 충족했지만, 과정의 한 페이지라도 부적합하면 과정에 속한 어느
        페이지도 그 수준의 적합성을 주장할 수 없습니다. 목록 페이지의 문제는 직접 만든 컴포넌트가
        아니라 끼워 넣은 위젯에서 나왔는데도, 비간섭 요구 때문에 페이지 판단에 들어갑니다.
      </>
    ),
    limitTitle: '이 판단의 미확인 범위',
    limit: (
      <>
        표본으로 고르지 않은 필터 조합, 예약 실패 같은 오류 상태, 4번 요구에 필요한 보조기술 지원
        증거는 이 사례에서 확인하지 않았습니다. 판정 기록에는 이것을 미확인으로 남깁니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'Three browser screens are linked by arrows. A chat bubble in the corner of the first has a highlighted looping arrow, and in the narrow-screen variant beside the second, one button has a dashed outline. The third shows a large check mark. The bracket spanning all three is broken in two places, with a cross mark below.',
      caption:
        'If any page in the process does not conform, the process cannot claim conformance, not even for the last page that met the criteria. A simplified teaching picture.',
    },
    intro: (
      <>
        Three pages of a room booking service form one process. The target is WCAG 2.2 AA. The
        observations below are teaching examples made by this page.
      </>
    ),
    caption: 'Observations and judgment by requirement in the booking process',
    head: ['Page', 'Observation (teaching example)', 'Requirement involved', 'Judgment'],
    rows: [
      [
        '1. Room list',
        'List and filter components met the A and AA criteria in a sample test. Tabbing into the third-party chat widget in the bottom right traps focus',
        '5. Non-interference — 2.1.2 applies even to content not relied upon',
        'Does not conform',
      ],
      [
        '2. Booking form',
        'Meets the criteria on wide screens. In the narrow-screen variation the "Next" icon button has no name',
        '2. Full pages — screen-width variations are part of the page',
        'Does not conform',
      ],
      [
        '3. Booking confirmation',
        'Meets the A and AA criteria in the states observed',
        '3. Complete processes — an earlier page does not conform',
        'Cannot claim conformance as a page of this process',
      ],
    ],
    after: (
      <>
        Page 3 meets the criteria on its own, but if any page in the process does not conform, no
        page in the process can claim conformance at that level. The list page&apos;s problem came
        from an embedded widget rather than a component the team built, yet the non-interference
        requirement brings it into the page judgment.
      </>
    ),
    limitTitle: 'What this judgment leaves unconfirmed',
    limit: (
      <>
        Filter combinations not sampled, error states such as a failed booking, and the assistive
        technology support evidence requirement 4 needs were not checked in this case. The judgment
        record leaves them as unconfirmed.
      </>
    ),
  },
};

export const ProcessSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.process.id}>
      <DocH2 {...toc.process} />
      <p>{c.intro}</p>
      <ThemedFigure light={bookingProcessLight} dark={bookingProcessDark} {...c.figure} />
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map(([page, observed, requirement, verdict], i) => [
          page,
          observed,
          requirement,
          <VerdictLabel key="verdict" id={rowVerdicts[i]}>
            {verdict}
          </VerdictLabel>,
        ])}
      />
      <p>{c.after}</p>
      <Callout variant="note" title={c.limitTitle}>
        <p>{c.limit}</p>
      </Callout>
    </section>
  );
};
