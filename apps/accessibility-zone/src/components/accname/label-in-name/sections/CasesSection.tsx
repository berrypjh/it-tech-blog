import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { type VerdictId, VerdictLabel } from '@/components/shared/VerdictLabel';

import { getToc } from '../toc';

type Case = { code: string; name: string; verdict: VerdictId; reason: string };

const cases: Record<Locale, Case[]> = {
  ko: [
    {
      code: '<button>예약 변경</button>',
      name: '"예약 변경"',
      verdict: 'pass',
      reason: '충족 — 이름이 보이는 텍스트와 같음',
    },
    {
      code: '<button aria-label="예약 수정하기">예약 변경</button>',
      name: '"예약 수정하기"',
      verdict: 'fail',
      reason: '미충족 — 보이는 텍스트가 이름에 없음 (F96)',
    },
    {
      code: '<button id="b" aria-labelledby="b room">예약 변경</button>',
      name: '"예약 변경 객실 A"',
      verdict: 'pass',
      reason: '충족 — 보이는 텍스트를 맨 앞에 포함 (권장 방식)',
    },
    {
      code: '<button aria-label="객실 A 예약 변경">예약 변경</button>',
      name: '"객실 A 예약 변경"',
      verdict: 'pass',
      reason: '충족 — 포함함. 맨 앞이 아니라 권장 방식은 아님',
    },
    {
      code: '<button aria-describedby="date">예약 변경</button>',
      name: '"예약 변경" (설명 "3월 12일")',
      verdict: 'pass',
      reason: '충족 — 이름만으로 판정. 설명은 합치지 않음',
    },
    {
      code: '<button aria-label="예약 날짜 변경">예약 변경</button>',
      name: '"예약 날짜 변경"',
      verdict: 'unconfirmed',
      reason: '해석 필요 — 이어진 "예약 변경"이 없음. Understanding은 실패 후보로만 적음',
    },
  ],
  en: [
    {
      code: '<button>Change booking</button>',
      name: '"Change booking"',
      verdict: 'pass',
      reason: 'Met — the name equals the visible text',
    },
    {
      code: '<button aria-label="Edit reservation">Change booking</button>',
      name: '"Edit reservation"',
      verdict: 'fail',
      reason: 'Not met — the visible text is not in the name (F96)',
    },
    {
      code: '<button id="b" aria-labelledby="b room">Change booking</button>',
      name: '"Change booking Room A"',
      verdict: 'pass',
      reason: 'Met — contains the visible text at the start (best practice)',
    },
    {
      code: '<button aria-label="Room A change booking">Change booking</button>',
      name: '"Room A change booking"',
      verdict: 'pass',
      reason: 'Met — contained, case aside. Not at the start, so not the best practice',
    },
    {
      code: '<button aria-describedby="date">Change booking</button>',
      name: '"Change booking" (description "March 12")',
      verdict: 'pass',
      reason: 'Met — judged on the name only. The description is not added',
    },
    {
      code: '<button aria-label="Change the booking">Change booking</button>',
      name: '"Change the booking"',
      verdict: 'unconfirmed',
      reason:
        'Needs interpretation — no contiguous "Change booking." Understanding lists it only as a potential failure',
    },
  ],
};

const content = {
  ko: {
    intro: (
      <>
        여섯 버튼은 모두 화면에 &quot;예약 변경&quot;을 보입니다. 이름은{' '}
        <PageLink locale="ko" id="labelledby-and-label" />의 방법으로 계산한 예상값입니다.
      </>
    ),
    caption: '"예약 변경" 사례의 판정',
    head: ['코드', '예상 이름', '판정'],
    after: (
      <>
        마지막 줄처럼 원문만으로 결론이 나지 않으면, 판정에 해석과 그 근거를 함께 적습니다. 다른
        평가자가 같은 결론에 이를 수 있게 하기 위해서입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        All six buttons show &quot;Change booking&quot; on screen. The names are expected values
        computed with the method from <PageLink locale="en" id="labelledby-and-label" />.
      </>
    ),
    caption: 'Judging the "Change booking" cases',
    head: ['Code', 'Expected name', 'Verdict'],
    after: (
      <>
        When the text alone does not settle it, as in the last row, write the interpretation and its
        basis with the verdict, so that another evaluator can reach the same conclusion.
      </>
    ),
  },
};

export const CasesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.cases.id}>
      <DocH2 {...toc.cases} />
      <p>{c.intro}</p>
      <p className="flex flex-wrap gap-sm">
        <SourceTag locale={locale} id="example" />
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={cases[locale].map((item) => [
          <code key="c">{item.code}</code>,
          item.name,
          <VerdictLabel key="v" id={item.verdict}>
            {item.reason}
          </VerdictLabel>,
        ])}
      />
      <p>{c.after}</p>
    </section>
  );
};
