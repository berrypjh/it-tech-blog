import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { Chip, List, ListItem } from '@berrypjh/react-ui';

import { BarrierDiagram } from '../diagrams/BarrierDiagram';
import { getToc } from '../toc';

const WAI_BARRIERS = 'https://www.w3.org/WAI/people-use-web/abilities-barriers/';
const WAI_VIDEOS = 'https://www.w3.org/WAI/perspective-videos/';

const content = {
  ko: {
    functionalHeading: '능력의 분류가 아니라 장벽의 문제',
    functionalBody: (
      <>
        장애 유형 표부터 외울 필요는 없습니다. WAI는 사람을 의학적 분류로 나누기보다{' '}
        <ExternalLink href={WAI_BARRIERS}>기능적으로 다양한 필요</ExternalLink>를 고려하라고 합니다.
        같은 진단명을 가진 두 사람이 완전히 다른 방식으로 웹을 쓸 수 있기 때문입니다.
      </>
    ),
    controlBody: (
      <>
        네 요소 중 프론트엔드 개발자가 직접 통제하는 것은 <strong>인터페이스 설계</strong>뿐입니다.
        그리고 그것으로 충분히 많은 장벽을 없앨 수 있습니다.
      </>
    ),
    tableHeading: '어떤 상황에서 어떤 장벽이 생기는가',
    tableCaption: '사용 상황별로 생길 수 있는 장벽',
    tableHead: ['사용 상황', '생길 수 있는 장벽', '유형'],
    rows: [
      ['화면을 보지 않고 소리로 듣는다', '이미지·아이콘에 대체 텍스트가 없습니다', '지속'],
      ['화면을 크게 확대해서 본다', '확대하면 레이아웃이 겹치거나 잘립니다', '지속'],
      ['마우스 없이 키보드만 사용한다', '포커스가 어디 있는지 보이지 않습니다', '지속'],
      ['오디오를 들을 수 없다', '영상에 자막이나 대본이 없습니다', '지속'],
      ['손 떨림으로 정밀 조작이 어렵다', '클릭 대상이 너무 작고 서로 붙어 있습니다', '지속'],
      ['복잡한 절차를 기억하기 어렵다', '오류 메시지가 무엇을 고칠지 알려주지 않습니다', '지속'],
      ['팔을 다쳐 한 손만 쓴다', '두 손이 필요한 조작만 제공됩니다', '일시적'],
      ['밝은 햇빛 아래에서 본다', '대비가 낮아 글자가 읽히지 않습니다', '상황적'],
    ],
    overlapBody: (
      <>
        표에서 볼 점은 <strong>장벽이 서로 겹친다</strong>는 것입니다. 낮은 대비는 저시력
        사용자에게도, 햇빛 아래의 사용자에게도 같은 방식으로 문제가 됩니다.
      </>
    ),
    priorityHeading: '우선순위를 뒤집지 않기',
    priorityBody:
      '이 겹침 때문에 "접근성은 사실 장애인보다 모두를 위한 것"이라는 설명을 자주 봅니다. 이 문장은 순서를 뒤집습니다.',
    primaryLabel: '1 · 일차 목적',
    primary: '장애가 있는 사용자가 웹을 동등하게 사용할 수 있게 합니다.',
    broaderLabel: '2 · 부수적 이점',
    broader: '그 요구를 제대로 설계하면 다른 사용자와 환경에도 이점이 생길 수 있습니다.',
    pitfall: (
      <>
        두 번째가 첫 번째를 대체하지 않습니다. &quot;모두에게 좋으니까 하자&quot;는 논리만 남으면,
        다수에게 이득이 적어 보이는 요구는 곧 우선순위에서 밀립니다. 기준은 다수의 편익이 아니라{' '}
        <strong>동등한 사용</strong>입니다.
      </>
    ),
    videos: (
      <>
        실제 사용자가 보조기술로 웹을 쓰는 모습은 W3C의{' '}
        <ExternalLink href={WAI_VIDEOS}>Web Accessibility Perspectives 영상</ExternalLink>(각
        1~2분)에서 빠르게 볼 수 있습니다.
      </>
    ),
  },
  en: {
    functionalHeading: 'A question of barriers, not categories of ability',
    functionalBody: (
      <>
        You do not need to memorize a table of disability types. WAI recommends considering{' '}
        <ExternalLink href={WAI_BARRIERS}>diverse functional needs</ExternalLink> rather than
        medical categories, because two people with the same diagnosis can use the web in entirely
        different ways.
      </>
    ),
    controlBody: (
      <>
        Of the four factors, frontend developers directly control only{' '}
        <strong>interface design</strong>. That alone is enough to remove a great many barriers.
      </>
    ),
    tableHeading: 'Which situations create which barriers',
    tableCaption: 'Barriers that can arise in different situations',
    tableHead: ['Situation', 'Possible barrier', 'Type'],
    rows: [
      [
        'Listens instead of looking at the screen',
        'Images and icons have no text alternative',
        'Permanent',
      ],
      ['Zooms the screen way in', 'Layout overlaps or gets cut off when zoomed', 'Permanent'],
      ['Uses only a keyboard, no mouse', 'It is impossible to see where focus is', 'Permanent'],
      ['Cannot hear audio', 'Videos have no captions or transcript', 'Permanent'],
      [
        'Tremor makes precise pointing hard',
        'Click targets are tiny and packed together',
        'Permanent',
      ],
      [
        'Finds complex steps hard to remember',
        'Error messages do not say what to fix',
        'Permanent',
      ],
      [
        'Has an injured arm and uses one hand',
        'Only two-handed interactions are offered',
        'Temporary',
      ],
      ['Reads in bright sunlight', 'Low contrast makes text unreadable', 'Situational'],
    ],
    overlapBody: (
      <>
        Notice that <strong>barriers overlap</strong>. Low contrast is a problem in exactly the same
        way for a low-vision user and for someone standing in the sun.
      </>
    ),
    priorityHeading: 'Do not flip the priority',
    priorityBody:
      'Because of this overlap, you often hear "accessibility is really for everyone, not just people with disabilities." That sentence reverses the order.',
    primaryLabel: '1 · Primary purpose',
    primary: 'People with disabilities can use the web on equal terms.',
    broaderLabel: '2 · Broader benefit',
    broader: 'When that need is designed well, other users and environments can benefit too.',
    pitfall: (
      <>
        The second does not replace the first. If &quot;let&apos;s do it because it helps
        everyone&quot; is the only argument left, needs that seem to help fewer people quickly lose
        priority. The standard is <strong>equal use</strong>, not majority benefit.
      </>
    ),
    videos: (
      <>
        To quickly see how real people use the web with assistive technology, watch the W3C{' '}
        <ExternalLink href={WAI_VIDEOS}>Web Accessibility Perspectives videos</ExternalLink> (1–2
        minutes each).
      </>
    ),
  },
};

export const WhoForSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([situation, barrier, kind]) => [
    situation,
    barrier,
    <Chip key={kind} size="sm" variant="filled">
      {kind}
    </Chip>,
  ]);

  return (
    <section aria-labelledby={toc.whoFor.id}>
      <DocH2 {...toc.whoFor} />

      <DocH3>{c.functionalHeading}</DocH3>
      <p>{c.functionalBody}</p>
      <BarrierDiagram locale={locale} />
      <p>{c.controlBody}</p>

      <DocH3>{c.tableHeading}</DocH3>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={rows} />
      <p>{c.overlapBody}</p>

      <DocH3>{c.priorityHeading}</DocH3>
      <p>{c.priorityBody}</p>
      <div className="my-lg">
        <List ordered className="grid gap-sm sm:grid-cols-2">
          <ListItem className="flex flex-col gap-xs rounded-md border border-stroke-primary bg-[var(--ds-background-selected)] p-lg">
            <span className="text-xsm font-semiBold text-text-primary">{c.primaryLabel}</span>
            <span className="text-xsm text-text-default">{c.primary}</span>
          </ListItem>
          <ListItem className="flex flex-col gap-xs rounded-md border border-stroke-light bg-background-surface p-lg">
            <span className="text-xsm font-semiBold text-text-default">{c.broaderLabel}</span>
            <span className="text-xsm text-text-light">{c.broader}</span>
          </ListItem>
        </List>
      </div>
      <Callout variant="pitfall">
        <p>{c.pitfall}</p>
      </Callout>
      <p>{c.videos}</p>
    </section>
  );
};
