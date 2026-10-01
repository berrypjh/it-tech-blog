import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { Keyboard, MousePointer2 } from 'lucide-react';

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
      ['평가 방법', '표준 적합성, 보조기술 테스트', '사용자 조사, 과업 분석'],
    ],
    diagram: {
      label: '접근성과 사용성은 겹치는 영역이 있지만 서로를 포함하지 않습니다',
      accessibility: '접근성',
      usability: '사용성',
      overlap: ['명확한', '오류 메시지'],
      caption: '겹치는 영역은 있지만, 어느 쪽도 다른 쪽을 포함하지 않습니다.',
    },
    wai: (
      <>
        WAI는{' '}
        <ExternalLink href={WAI_USABILITY}>
          사용성 절차와 사용자 참여만으로는 모든 접근성 문제를 해결할 수 없다
        </ExternalLink>
        고 명시합니다. 예를 들어 드래그로만 조작하는 커스텀 슬라이더를 보겠습니다.
      </>
    ),
    mouseTitle: '마우스 사용자 평가',
    mouseBody: '드래그가 편리합니다. 사용성 점수는 좋게 나옵니다.',
    keyboardTitle: '키보드 사용자',
    keyboardBody: '값을 바꿀 방법이 없습니다. 작업 자체가 불가능합니다.',
    reverseTitle: '반대 방향도 성립합니다',
    reverseBody: (
      <>
        접근성 기준을 통과했다고 좋은 UX가 보장되지는 않습니다. 모든 이미지에 대체 텍스트가 있어도
        그 값이 <code>alt=&quot;이미지1&quot;</code>이라면 기술적으로는 존재하지만 아무 정보도
        전달하지 못합니다.
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
        'Standards conformance, assistive tech testing',
        'User research, task analysis',
      ],
    ],
    diagram: {
      label: 'Accessibility and usability overlap, but neither contains the other',
      accessibility: 'Accessibility',
      usability: 'Usability',
      overlap: ['Clear', 'error messages'],
      caption: 'They overlap, but neither one contains the other.',
    },
    wai: (
      <>
        WAI states that{' '}
        <ExternalLink href={WAI_USABILITY}>
          usability processes and user involvement alone do not solve every accessibility problem
        </ExternalLink>
        . Take a custom slider that can only be dragged.
      </>
    ),
    mouseTitle: 'Mouse user testing',
    mouseBody: 'Dragging feels convenient. The usability score comes out well.',
    keyboardTitle: 'Keyboard user',
    keyboardBody: 'There is no way to change the value. The task is impossible.',
    reverseTitle: 'The reverse is true too',
    reverseBody: (
      <>
        Passing accessibility criteria does not guarantee good UX. Every image can have a text
        alternative, yet if the value is <code>alt=&quot;image1&quot;</code>, it technically exists
        but conveys nothing.
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

      <Callout variant="pitfall" title={c.reverseTitle}>
        <p>{c.reverseBody}</p>
      </Callout>
    </section>
  );
};
