import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const WAI_INVOLVING = 'https://www.w3.org/WAI/test-evaluate/involving-users/';
const WAI_VIDEOS = 'https://www.w3.org/WAI/perspective-videos/';

const content = {
  ko: {
    intro:
      '눈을 가리거나 귀를 막고 웹을 직접 따라 해 보면, 느끼는 것은 처음 겪는 사람의 당황입니다. 오래 써 온 보조기술의 숙련, 자기만의 우회 전략, 매일 반복되는 비용까지는 느낄 수 없습니다. 그래서 이 결과를 "시각장애인은 이렇게 느낀다"로 일반화하면 당사자의 경험을 잘못 전하게 됩니다. 다만 개발자가 직접 써 보는 확인은 경험이 아니라 장벽을 찾는 데에는 쓸모가 있습니다.',
    canLabel: '알 수 있는 것',
    can: [
      '키보드만으로 움직일 때 포커스가 사라지는 지점처럼 누구에게나 재현되는 장벽',
      '확대 400%에서 잘리는 영역처럼 설정으로 만들 수 있는 조건',
      '보조기술이 받는 역할과 이름이 비어 있는지',
    ],
    cannotLabel: '알 수 없는 것',
    cannot: [
      '당사자가 무엇을 먼저 고쳐야 한다고 느끼는지',
      '숙련된 사용자의 실제 속도와 전략',
      '반복되는 배제의 피로와 사회적 경험',
    ],
    better: (
      <>
        알 수 없는 것은 장애가 있는 사용자를 평가에 참여시키거나(
        <ExternalLink href={WAI_INVOLVING}>
          WAI: Involving Users in Evaluating Web Accessibility
        </ExternalLink>
        ) 당사자가 직접 보여주는 자료(
        <ExternalLink href={WAI_VIDEOS}>Web Accessibility Perspectives</ExternalLink>)에서 배웁니다.
        재현되는 장벽을 찾아 기록하는 실습은 <PageLink locale="ko" id="barrier-report" />
        에서 합니다.
      </>
    ),
  },
  en: {
    intro:
      'What you feel when you blindfold yourself or block your ears to "experience disability" is the shock of a first-timer. It does not show practiced use of assistive technology, personal workarounds, or the cost repeated every day. Generalizing the result into "this is how blind people feel" distorts disabled people’s experience. Trying it yourself as a developer is still useful, but for finding barriers, not for knowing the experience.',
    canLabel: 'What it can tell you',
    can: [
      'Barriers anyone can reproduce, such as focus disappearing when moving by keyboard',
      'Conditions you can set up, such as content cut off at 400% zoom',
      'Whether the role and name assistive technology receives are empty',
    ],
    cannotLabel: 'What it cannot tell you',
    cannot: [
      'What disabled people feel should be fixed first',
      'The real speed and strategies of experienced users',
      'The fatigue and social experience of repeated exclusion',
    ],
    better: (
      <>
        Learn what it cannot tell you by involving disabled users in evaluation (
        <ExternalLink href={WAI_INVOLVING}>
          WAI: Involving Users in Evaluating Web Accessibility
        </ExternalLink>
        ) and from material disabled people present themselves (
        <ExternalLink href={WAI_VIDEOS}>Web Accessibility Perspectives</ExternalLink>). Finding and
        recording reproducible barriers is practiced in <PageLink locale="en" id="barrier-report" />
        .
      </>
    ),
  },
};

const Column = ({ label, items }: { label: string; items: string[] }) => (
  <div className="flex flex-col gap-sm rounded-md border border-stroke-light bg-background-default p-lg">
    <span className="text-xsm font-semiBold text-text-default">{label}</span>
    <List className="flex flex-col gap-xs text-xsm leading-xsm text-text-light">
      {items.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  </div>
);

export const SimulationSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.simulation.id}>
      <DocH2 {...toc.simulation} />
      <p>{c.intro}</p>
      <div className="my-lg grid gap-sm sm:grid-cols-2">
        <Column label={c.canLabel} items={c.can} />
        <Column label={c.cannotLabel} items={c.cannot} />
      </div>
      <p>{c.better}</p>
    </section>
  );
};
