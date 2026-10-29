import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { Brain, Ear, Eye, Hand } from 'lucide-react';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const WAI_BARRIERS = 'https://www.w3.org/WAI/people-use-web/abilities-barriers/';

type Row = [trait: { name: string; examples: string }, need: string, ways: string];

/** 표의 행 순서와 같은 순서로 놓인 특성 아이콘. */
const traitIcons = [Eye, Ear, Hand, Brain];

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="intro" />
        에서 본 <strong>기능적 필요</strong>를 특성별로 펼쳐 봅니다. W3C WAI의{' '}
        <ExternalLink href={WAI_BARRIERS}>Diverse Abilities and Barriers</ExternalLink>는 사람마다
        능력 · 기술 · 도구 · 선호 · 기대가 모두 다르다고 강조합니다.
      </>
    ),
    tableCaption: '특성별 기능적 필요와 그 필요를 채우는 다양한 방식',
    tableHead: ['특성', '필요한 것', '웹을 쓰는 방식의 예'],
    rows: [
      [
        { name: '시각', examples: '전맹, 저시력, 색 구분의 차이 등' },
        '화면을 보지 않거나 크게 키워서 보아도 같은 정보를 얻는 것',
        '화면 낭독기로 듣기 · 점자 디스플레이 · 화면 확대 · 큰 글자와 고대비 설정 · 도구 없이 화면 가까이 보기',
      ],
      [
        { name: '청각', examples: '농, 난청 등' },
        '소리를 듣지 않고도 같은 정보를 얻는 것',
        '자막과 대본 읽기 · 수어 영상 · 보청기 연결과 볼륨 조절 · 진동이나 화면 알림',
      ],
      [
        { name: '운동', examples: '마비, 떨림, 관절 질환, 신체 일부의 부재 등' },
        '정밀하거나 빠른 동작 없이 조작하는 것',
        '키보드만 쓰기 · 스위치 · 음성 입력 · 시선 추적 · 머리 포인터 · 마우스 속도 낮추기',
      ],
      [
        { name: '인지', examples: '기억, 주의, 읽기, 정보 처리 속도의 차이 등' },
        '기억과 주의에 크게 기대지 않고 이해하고 끝까지 진행하는 것',
        '텍스트 음성 변환으로 들으며 읽기 · 단계를 나눠 진행 · 맞춤법·입력 도움 쓰기',
      ],
    ] satisfies Row[],
    pairingTitle: '장애 유형과 보조기술은 1:1로 대응하지 않습니다',
    pairing: (
      <>
        표의 한 행에도 방식이 여럿입니다. 저시력이 있는 사람은 확대만 쓸 수도, 화면 낭독기와 확대를
        함께 쓸 수도, 아무 도구 없이 쓸 수도 있습니다. 키보드는 운동 특성이 있는 사람만 쓰는 것이
        아니라 컴퓨터에서 화면 낭독기를 쓰는 사람도 씁니다. &quot;시각장애 대응 = 화면 낭독기
        테스트&quot;처럼 범위를 정하면 확대 사용자의 장벽을 통째로 놓칩니다.
      </>
    ),
    changeHeading: '필요는 고정되어 있지 않다',
    change:
      'WAI는 증상이 진행되거나 되풀이되는 사람은 날마다 필요한 기능이 달라질 수 있다고 설명합니다. 피로나 통증도 사용 방식을 바꿉니다. 그래서 사용자를 기록할 때는 "시각장애인"보다 "브라우저 확대 400%로 사용, 화면 낭독기는 쓰지 않음"처럼 그 순간의 사용 방식을 적습니다.',
  },
  en: {
    intro: (
      <>
        This section spreads the <strong>functional needs</strong> from{' '}
        <PageLink locale="en" id="intro" /> out by trait. W3C WAI&apos;s{' '}
        <ExternalLink href={WAI_BARRIERS}>Diverse Abilities and Barriers</ExternalLink> stresses
        that every person has different abilities, skills, tools, preferences, and expectations.
      </>
    ),
    tableCaption: 'Functional needs by trait, and the different ways people meet them',
    tableHead: ['Trait', 'What is needed', 'Ways of using the web'],
    rows: [
      [
        {
          name: 'Visual',
          examples: 'Blindness, low vision, color perception differences, and more',
        },
        'Getting the same information without seeing the screen, or while viewing it greatly enlarged',
        'Listening with a screen reader · braille display · screen magnification · large text and high contrast · no tools, just sitting close',
      ],
      [
        { name: 'Auditory', examples: 'Deaf, hard of hearing, and more' },
        'Getting the same information without hearing sound',
        'Reading captions and transcripts · sign language video · hearing aid connection and volume · vibration or on-screen alerts',
      ],
      [
        { name: 'Motor', examples: 'Paralysis, tremor, joint conditions, missing limbs, and more' },
        'Operating without precise or fast movements',
        'Keyboard only · switches · speech input · eye tracking · head pointer · lower mouse speed',
      ],
      [
        {
          name: 'Cognitive',
          examples: 'Differences in memory, attention, reading, processing speed, and more',
        },
        'Understanding and getting to the end without leaning heavily on memory and attention',
        'Reading along with text-to-speech · taking steps one at a time · spelling and input aids',
      ],
    ] satisfies Row[],
    pairingTitle: 'Disability types and assistive technologies do not map one-to-one',
    pairing: (
      <>
        Even one row of the table holds several ways. A person with low vision may use only
        magnification, a screen reader together with magnification, or no tools at all. The keyboard
        is not only for people with motor traits; people using a screen reader on a computer use it
        too. Scope testing as &quot;visual disability support = screen reader test&quot; and you
        miss every barrier magnifier users meet.
      </>
    ),
    changeHeading: 'Needs are not fixed',
    change:
      'WAI explains that people whose conditions progress or recur may need different features from day to day. Fatigue and pain change the way of use too. That is why, when you record a user, you write the way of use at that moment, such as "uses 400% browser zoom, no screen reader", rather than "a visually impaired person".',
  },
};

export const NeedsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.needs.id}>
      <DocH2 {...toc.needs} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.tableCaption}
        head={c.tableHead}
        rows={c.rows.map(([trait, need, ways], i) => {
          const Icon = traitIcons[i];
          return [
            <span key="trait" className="flex flex-col gap-2xs">
              <span className="inline-flex items-center gap-xs font-bold text-text-default">
                <Icon className="h-4 w-4 shrink-0 text-text-primary" aria-hidden="true" />
                {trait.name}
              </span>
              <span className="text-xxsm">{trait.examples}</span>
            </span>,
            need,
            ways,
          ];
        })}
      />
      <Callout variant="pitfall" title={c.pairingTitle}>
        <p>{c.pairing}</p>
      </Callout>
      <DocH3>{c.changeHeading}</DocH3>
      <p>{c.change}</p>
    </section>
  );
};
