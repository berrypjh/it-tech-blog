import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Brain, Hand, Headphones, Keyboard, VolumeX, ZoomIn } from 'lucide-react';

import { PageLink } from '@/components/shared/PageLink';

import { BarrierDiagram } from '../diagrams/BarrierDiagram';
import { SituationGallery } from '../diagrams/SituationGallery';
import { getToc } from '../toc';

const WAI_BARRIERS = 'https://www.w3.org/WAI/people-use-web/abilities-barriers/';
const WAI_VIDEOS = 'https://www.w3.org/WAI/perspective-videos/';

/** 상황 표의 행 순서와 같은 순서로 놓인 아이콘. */
const situationIcons = [Headphones, ZoomIn, Keyboard, VolumeX, Hand, Brain];

const content = {
  ko: {
    functionalHeading: '능력의 분류가 아니라 장벽의 문제',
    functionalBody: (
      <>
        장애 유형 표부터 외울 필요는 없습니다. WAI는 사람을 의학적 분류로 나누기보다{' '}
        <ExternalLink href={WAI_BARRIERS}>기능적으로 다양한 필요</ExternalLink>를 고려하라고 합니다.
        진단명이 같은 두 사람이 완전히 다른 방식으로 웹을 쓸 수 있기 때문입니다. 그래서 진단명 대신,
        지각하고 조작하고 이해하는 데 무엇이 필요한지를 봅니다. 이것을 <strong>기능적 필요</strong>
        라고 합니다.
      </>
    ),
    controlBody: (
      <>
        네 요소 중 프론트엔드 개발자가 직접 통제하는 것은 <strong>인터페이스 설계</strong>뿐입니다.
        그리고 그것으로 충분히 많은 장벽을 없앨 수 있습니다.
      </>
    ),
    tableHeading: '어떤 상황에서 어떤 과업이 막히는가',
    tableCaption: '사용 상황별로 어떤 장벽이 어떤 과업을 막는지',
    tableHead: ['이럴 때', '이런 장벽이 있으면', '이 과업이 막힙니다'],
    rows: [
      ['화면 낭독기로 들을 때', '대체 텍스트 없는 이미지', '상품 사진으로 색상 고르기'],
      ['화면을 크게 확대해서 볼 때', '확대하면 겹치거나 잘리는 레이아웃', '결제 단계 진행'],
      ['마우스 없이 키보드만 쓸 때', '보이지 않는 포커스', '메뉴 열기'],
      ['오디오를 들을 수 없을 때', '자막이나 대본 없는 영상', '강의 영상 수강'],
      ['손 떨림으로 정밀 조작이 어려울 때', '작고 서로 붙은 클릭 대상', '날짜 선택'],
      ['복잡한 절차를 기억하기 어려울 때', '고칠 점을 알려주지 않는 오류 메시지', '회원가입'],
    ],
    overlapBody: (
      <>
        이런 순간은 위 표의 장벽과 <strong>겹칩니다</strong>. 지하철에서 소리를 켤 수 없으면 자막
        없는 영상의 내용을 알 수 없습니다. 오디오를 들을 수 없는 사람을 막는 것과 같은 장벽입니다.
      </>
    ),
    limitHeading: '일시적·상황적 제약은 장애 경험과 같지 않다',
    limitIntro:
      'WAI는 접근성이 팔을 다친 사람 같은 일시적 제약이나 밝은 햇빛 같은 상황적 제약에도 도움이 된다고 설명합니다. 누구나 한 번쯤 겪는 이런 순간들입니다.',
    limitGap:
      '하지만 장벽이 겹친다고 경험까지 같지는 않습니다. 햇빛은 피하고 깁스는 풀리지만, 장애는 대개 매일 함께하고 대안이 없는 경우가 많으며 같은 장벽을 반복해 만나는 비용이 쌓입니다. 그만큼 오래 다듬은 자기만의 방법도 있습니다. 이 차이를 지우면 장애 당사자의 경험을 가볍게 보게 됩니다.',
    limitOutro: (
      <>
        여러 특성과 환경이 겹치는 상황은 <PageLink locale="ko" id="people-and-contexts" />
        에서 이어서 다룹니다.
      </>
    ),
    priorityHeading: '우선순위를 뒤집지 않기',
    priorityBody:
      '장벽이 이렇게 겹치다 보니 "접근성은 사실 장애인보다 모두를 위한 것"이라는 설명을 자주 봅니다. 이 문장은 순서를 뒤집습니다.',
    primaryLabel: '1 · 일차 목적',
    primary: '장애가 있는 사용자가 웹을 동등하게 사용할 수 있게 합니다.',
    broaderLabel: '2 · 부수적 이점',
    broader: '그 요구를 제대로 설계하면 다른 사용자와 환경에도 이점이 생길 수 있습니다.',
    pitfallTitle: '모두에게 좋다는 논리만 남기지 않습니다',
    pitfall: (
      <>
        두 번째가 첫 번째를 대체하지 않습니다. &quot;모두에게 좋으니까 하자&quot;는 논리만 남으면,
        다수에게 이득이 적어 보이는 요구는 곧 우선순위에서 밀립니다. 기준은 다수의 편익이 아니라{' '}
        <strong>동등한 사용</strong>입니다.
      </>
    ),
    videos: (
      <>
        장애가 있는 사람이 실제로 웹을 쓰는 모습은 W3C의{' '}
        <ExternalLink href={WAI_VIDEOS}>Web Accessibility Perspectives 영상</ExternalLink>에서 볼 수
        있습니다.
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
        different ways. So instead of a diagnosis, look at what someone needs to perceive, operate,
        and understand. These are called <strong>functional needs</strong>.
      </>
    ),
    controlBody: (
      <>
        Of the four factors, frontend developers directly control only{' '}
        <strong>interface design</strong>. That alone is enough to remove a great many barriers.
      </>
    ),
    tableHeading: 'Which situations block which tasks',
    tableCaption: 'Which barrier blocks which task in each situation',
    tableHead: ['When…', 'If there is…', 'This task is blocked'],
    rows: [
      [
        'Listening with a screen reader',
        'Images without text alternatives',
        'Picking a color from product photos',
      ],
      [
        'Zooming the screen way in',
        'Layout that overlaps or gets cut off when zoomed',
        'Moving through checkout',
      ],
      ['Using only a keyboard, no mouse', 'Invisible focus', 'Opening a menu'],
      ['Audio cannot be heard', 'Videos without captions or transcripts', 'Taking a video lecture'],
      ['Tremor makes precise pointing hard', 'Tiny, packed click targets', 'Choosing a date'],
      [
        'Complex steps are hard to remember',
        'Error messages that do not say what to fix',
        'Signing up',
      ],
    ],
    overlapBody: (
      <>
        These moments <strong>overlap</strong> with the barriers in the table above. On a train
        where you cannot play sound, you cannot follow a video without captions. It is the same
        barrier that blocks people who cannot hear audio.
      </>
    ),
    limitHeading: 'Temporary and situational limits are not the same as disability',
    limitIntro:
      'WAI explains that accessibility also helps people with temporary limitations, such as a broken arm, and situational ones, such as bright sunlight. These are moments almost anyone goes through.',
    limitGap:
      'But overlapping barriers do not mean the same experience. You can step out of the sun and a cast comes off, but a disability is usually there every day, often with no alternative, and the cost of meeting the same barrier again and again keeps adding up. Disabled people also often have long-practiced ways of their own. Erasing these differences makes light of what disabled people experience.',
    limitOutro: (
      <>
        Situations where several traits and environments overlap continue in{' '}
        <PageLink locale="en" id="people-and-contexts" />.
      </>
    ),
    priorityHeading: 'Do not flip the priority',
    priorityBody:
      'Because barriers overlap like this, you often hear "accessibility is really for everyone, not just people with disabilities." That sentence reverses the order.',
    primaryLabel: '1 · Primary purpose',
    primary: 'People with disabilities can use the web on equal terms.',
    broaderLabel: '2 · Broader benefit',
    broader: 'When that need is designed well, other users and environments can benefit too.',
    pitfallTitle: 'Do not leave only the "good for everyone" argument',
    pitfall: (
      <>
        The second does not replace the first. If &quot;let&apos;s do it because it helps
        everyone&quot; is the only argument left, needs that seem to help fewer people quickly lose
        priority. The standard is <strong>equal use</strong>, not majority benefit.
      </>
    ),
    videos: (
      <>
        To see how disabled people actually use the web, watch the W3C{' '}
        <ExternalLink href={WAI_VIDEOS}>Web Accessibility Perspectives videos</ExternalLink>.
      </>
    ),
  },
};

export const WhoForSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  return (
    <section aria-labelledby={toc.whoFor.id}>
      <DocH2 {...toc.whoFor} />

      <DocH3>{c.functionalHeading}</DocH3>
      <p>{c.functionalBody}</p>
      <BarrierDiagram locale={locale} />
      <p>{c.controlBody}</p>

      <DocH3>{c.tableHeading}</DocH3>
      <DocTable
        caption={c.tableCaption}
        head={c.tableHead}
        rows={c.rows.map(([situation, ...rest], i) => {
          const Icon = situationIcons[i];
          return [
            <span key="situation" className="inline-flex items-center gap-sm">
              <Icon className="h-4 w-4 shrink-0 text-text-primary" aria-hidden="true" />
              {situation}
            </span>,
            ...rest,
          ];
        })}
      />

      <DocH3>{c.limitHeading}</DocH3>
      <p>{c.limitIntro}</p>
      <SituationGallery locale={locale} />
      <p>{c.overlapBody}</p>
      <p>{c.limitGap}</p>
      <p>{c.videos}</p>
      <p>{c.limitOutro}</p>

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
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>
    </section>
  );
};
