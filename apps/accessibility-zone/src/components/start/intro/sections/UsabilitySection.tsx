import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { Keyboard, MousePointer2 } from 'lucide-react';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const WAI_USABILITY = 'https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/';

const content = {
  ko: {
    intro: '두 단어는 자주 같은 뜻처럼 쓰이지만, 던지는 질문이 다릅니다.',
    tableCaption: '접근성과 사용성 비교',
    tableHead: ['구분', '접근성 (Accessibility)', '사용성 (Usability)'],
    rows: [
      ['핵심 질문', '동등하게 사용할 수 있나요?', '효과적이고 만족스럽게 쓰나요?'],
      ['초점', '장벽의 제거', '경험의 품질'],
      ['기준 대상', '장애가 있는 사용자', '사용자 전반'],
      [
        '평가 방법',
        '표준 적합성 평가, 보조기술 테스트, 장애가 있는 사용자 참여 평가',
        '사용성 테스트, 사용자 조사',
      ],
    ],
    diagram: {
      label: '접근성과 사용성은 겹치는 영역이 있지만 서로를 포함하지 않습니다',
      accessibility: '접근성',
      usability: '사용성',
      overlap: ['명확한', '오류 메시지'],
      caption:
        '둘 다 좋아지는 예: 명확한 오류 메시지. 겹치는 곳 밖에는 한쪽만 다루는 문제가 남습니다.',
    },
    wai: (
      <>
        WAI는{' '}
        <ExternalLink href={WAI_USABILITY}>
          사용성 절차와 사용자 참여만으로는 모든 접근성 문제를 해결할 수 없다
        </ExternalLink>
        고 명시합니다. 예를 들어 드래그로만 조작하는 커스텀 슬라이더를 마우스 사용자들과
        테스트했다고 해 보겠습니다.
      </>
    ),
    mouseTitle: '마우스 사용자',
    mouseBody: '드래그가 편리합니다. 사용성 테스트 결과도 좋습니다.',
    keyboardTitle: '키보드 사용자',
    keyboardBody: '값을 바꿀 방법이 없습니다. 테스트에서는 드러나지 않은 장벽입니다.',
    reverseTitle: '접근성 기준을 충족해도 쓰기 어려울 수 있습니다',
    more: (
      <>
        포용적 설계와 표준 적합성까지 더한 네 개념의 관계는{' '}
        <PageLink locale="ko" id="concept-boundaries" />
        에서 한 사례로 나눠 봅니다.
      </>
    ),
    reverseBody: (
      <>
        결제가 12단계로 나뉘어 있어도 모든 칸에 라벨이 있고 키보드로 끝까지 갈 수 있다면 접근성
        기준은 충족합니다. 하지만 누구에게나 지치는 흐름입니다.
      </>
    ),
  },
  en: {
    intro: 'The two words are often used interchangeably, but they ask different questions.',
    tableCaption: 'Accessibility compared with usability',
    tableHead: ['', 'Accessibility', 'Usability'],
    rows: [
      ['Core question', 'Can people use it on equal terms?', 'Is it effective and satisfying?'],
      ['Focus', 'Removing barriers', 'Quality of experience'],
      ['Reference group', 'People with disabilities', 'Users in general'],
      [
        'Evaluation',
        'Conformance evaluation, assistive tech testing, evaluation with disabled users',
        'Usability testing, user research',
      ],
    ],
    diagram: {
      label: 'Accessibility and usability overlap, but neither contains the other',
      accessibility: 'Accessibility',
      usability: 'Usability',
      overlap: ['Clear', 'error messages'],
      caption:
        'One thing that improves both: clear error messages. Outside the overlap, each covers problems the other misses.',
    },
    wai: (
      <>
        WAI states that{' '}
        <ExternalLink href={WAI_USABILITY}>
          usability processes and user involvement alone do not solve every accessibility problem
        </ExternalLink>
        . Say a custom slider that can only be dragged is tested with mouse users.
      </>
    ),
    mouseTitle: 'Mouse user',
    mouseBody: 'Dragging feels convenient. The usability test results are good.',
    keyboardTitle: 'Keyboard user',
    keyboardBody: 'There is no way to change the value. The test never surfaced this barrier.',
    reverseTitle: 'Meeting accessibility criteria can still be hard to use',
    more: (
      <>
        How these relate to inclusive design and standards conformance is worked through with one
        case in <PageLink locale="en" id="concept-boundaries" />.
      </>
    ),
    reverseBody: (
      <>
        A checkout split into 12 steps still meets accessibility criteria if every field has a label
        and the whole flow works with a keyboard. It is still exhausting for everyone.
      </>
    ),
  },
};

type DiagramText = (typeof content)['ko']['diagram'];

const OverlapDiagram = ({ text }: { text: DiagramText }) => (
  <figure className="my-xl">
    <svg
      viewBox="0 0 360 170"
      role="img"
      aria-label={text.label}
      className="mx-auto w-full max-w-[24rem]"
    >
      <circle cx="130" cy="85" r="75" className="fill-primary-pr500/15 stroke-stroke-primary" />
      <circle cx="230" cy="85" r="75" className="fill-secondary-se500/15 stroke-stroke-secondary" />
      <text x="95" y="90" textAnchor="middle" className="fill-text-primary text-xsm font-semiBold">
        {text.accessibility}
      </text>
      <text
        x="265"
        y="90"
        textAnchor="middle"
        className="fill-text-secondary text-xsm font-semiBold"
      >
        {text.usability}
      </text>
      <text x="180" y="80" textAnchor="middle" className="fill-text-default text-xxsm">
        {text.overlap[0]}
      </text>
      <text x="180" y="96" textAnchor="middle" className="fill-text-default text-xxsm">
        {text.overlap[1]}
      </text>
    </svg>
    <figcaption className="text-center text-xxsm text-text-light">{text.caption}</figcaption>
  </figure>
);

export const UsabilitySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.usability.id}>
      <DocH2 {...toc.usability} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
      <OverlapDiagram text={c.diagram} />
      <p>{c.wai}</p>

      <div className="my-lg grid gap-sm sm:grid-cols-2">
        <div className="flex flex-col gap-xs rounded-md border border-stroke-light bg-background-surface p-lg">
          <span className="flex items-center gap-sm text-xsm font-semiBold">
            <MousePointer2 className="h-4 w-4 text-text-success" aria-hidden="true" />
            {c.mouseTitle}
          </span>
          <span className="text-xsm text-text-light">{c.mouseBody}</span>
        </div>
        <div className="flex flex-col gap-xs rounded-md border border-stroke-light bg-background-surface p-lg">
          <span className="flex items-center gap-sm text-xsm font-semiBold">
            <Keyboard className="h-4 w-4 text-text-error" aria-hidden="true" />
            {c.keyboardTitle}
          </span>
          <span className="text-xsm text-text-light">{c.keyboardBody}</span>
        </div>
      </div>

      <Callout variant="note" title={c.reverseTitle}>
        <p>{c.reverseBody}</p>
      </Callout>
      <p>{c.more}</p>
    </section>
  );
};
