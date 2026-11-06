import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { FileCheck, FilePen, Scale, Wrench } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { PageLink } from '@/components/shared/PageLink';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import fourAxesDark from '../images/four-axes-dark.webp';
import fourAxesLight from '../images/four-axes-light.webp';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 발행 상태 · 구현 지원 증거 · 계약과 인증 · 법령 의무. */
const rowIcons = [FileCheck, Wrench, FilePen, Scale];

const content = {
  ko: {
    figure: {
      alt: '가운데 서비스 화면 하나를 네 개의 세로 눈금이 둘러쌉니다. 확인 표시가 붙은 문서, 렌치, 서명한 계약서, 저울입니다. 표시 높이는 눈금마다 다르고, 문서 눈금만 강조되어 채워져 있습니다. 계약서와 저울 눈금은 점선입니다.',
      caption:
        '발행 상태 · 구현 지원 · 계약과 인증 · 법령 의무는 서로 따로 움직이는 축입니다. 계약과 법령은 이 사이트가 답할 수 없습니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        <PageLink locale="ko" id="concept-boundaries" hash="conformance-vs-success" />
        에서 표준 적합성 · 과업 성공 · 법적 의무를 나눴습니다. 여기서는 &quot;무엇을 지켜야
        하나&quot;를 네 축으로 더 나눕니다. 한 축의 답이 다른 축의 답을 정하지 않습니다.
      </>
    ),
    caption: '네 가지 판단 축',
    head: ['축', '묻는 것', '근거', '이 사이트가 답할 수 있나'],
    rows: [
      [
        '기술 기준의 발행 상태',
        '그 문서가 Recommendation인지, 초안인지, 어느 판본인지',
        '각 문서의 공식 상태 표시(04.4의 표)',
        '확인한 날짜 기준으로 답함',
      ],
      [
        '구현 지원 증거',
        '그 기술 사용 방식이 실제 브라우저 · 보조기술에서 동작하는지',
        '직접 시험한 기록(03장), 접근성 지원의 정의',
        '시험한 조합에 대해서만',
      ],
      [
        '계약 · 조달 · 인증 요구',
        '계약서 · 제안요청서 · 인증 기준이 어느 문서 · 판본 · 수준을 지정했는지',
        '그 계약 · 인증 문서',
        '아니오 — 그 문서를 직접 봐야 함',
      ],
      [
        '법령 의무',
        '그 서비스가 어느 법령의 의무 대상인지, 언제부터인지',
        '관할 법령 원문과 담당 기관 안내',
        '아니오 — 법률 판단이 아님',
      ],
    ],
    after: (
      <>
        예를 들어 WCAG 2.2가 Recommendation이라는 것은 첫째 축의 답입니다. 그것만으로 어느 서비스가
        WCAG 2.2 AA를 지켜야 할 법적 의무가 생기지는 않고, 계약서가 KWCAG 2.2를 지정했다면 계약상
        판정 문서는 KWCAG입니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'Four vertical gauges surround one service screen: a document with a check, a wrench, a signed contract, and a balance scale. Each marker sits at a different height; only the document gauge is filled and highlighted. The contract and scale gauges are dashed.',
      caption:
        'Publication status, implementation support, contracts and certification, and legal obligation are independent axes. Contracts and law cannot be answered by this site. A simplified teaching picture.',
    },
    intro: (
      <>
        <PageLink locale="en" id="concept-boundaries" hash="conformance-vs-success" /> separated
        conformance, task success, and legal obligation. Here &quot;what must be met&quot; is split
        further into four axes. The answer on one axis does not decide the answer on another.
      </>
    ),
    caption: 'Four axes of judgment',
    head: ['Axis', 'What it asks', 'Basis', 'Can this site answer it?'],
    rows: [
      [
        'Publication status of technical standards',
        'Whether the document is a Recommendation or a draft, and which edition',
        'Each document’s official status (the table in 04.4)',
        'As of the date checked',
      ],
      [
        'Implementation support evidence',
        'Whether the way a technology is used works in real browsers and assistive technology',
        'Your own test records (chapter 03), the definition of accessibility supported',
        'Only for the combinations tested',
      ],
      [
        'Contract, procurement, certification',
        'Which document, edition, and level a contract, RFP, or certification scheme names',
        'That contract or certification document',
        'No — you must read that document',
      ],
      [
        'Legal obligation',
        'Which law, if any, places the service under an obligation, and from when',
        'The law in the jurisdiction and guidance from the responsible agency',
        'No — this is not legal advice',
      ],
    ],
    after: (
      <>
        For example, WCAG 2.2 being a Recommendation answers the first axis. That alone creates no
        legal obligation for any service to meet WCAG 2.2 AA, and if a contract names KWCAG 2.2, the
        document for the contractual judgment is KWCAG.
      </>
    ),
  },
};

export const AxesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.axes.id}>
      <DocH2 {...toc.axes} />
      <p>{c.intro}</p>
      <ThemedFigure light={fourAxesLight} dark={fourAxesDark} {...c.figure} />
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
      <p>{c.after}</p>
    </section>
  );
};
