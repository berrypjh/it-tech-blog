import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { ListenPlayer } from './ListenPlayer';
import type { Segment } from './segments';
import type { useNarration } from './useNarration';

/** 재생기가 읽는 본문 대신 쓰는 세그먼트. h2는 진행 바의 섹션 눈금과 챕터 이름이 된다. */
const segmentsOf = (): Segment[] =>
  [
    ['H1', '웹 접근성은 누구의 어떤 활동을 가능하게 하는가?'],
    ['P', '웹 접근성은 사람들이 웹에서 하려는 일을 끝까지 할 수 있게 만드는 일입니다.'],
    ['H2', '웹접근성이란?'],
    ['P', '여기서 핵심은, 사용할 수 있다, 이 말입니다.'],
    ['P', '정리하면, 과업 흐름 전체가 끊기지 않는지 보는 일입니다.'],
    ['H2', '누구를 위한 것인가?'],
    ['P', '장벽은 사람과 환경과 인터페이스가 만나는 곳에서 생깁니다.'],
  ].map(([tag, text]) => {
    const el = document.createElement(tag);
    el.textContent = text;
    return { el, text };
  });

/** 실제 음성 없이 재생기 화면만 보도록 상태와 동작을 흉내 낸 narration. */
const narrationOf = (
  state: Partial<ReturnType<typeof useNarration>> = {},
): ReturnType<typeof useNarration> => ({
  index: 3,
  segments: segmentsOf(),
  playing: true,
  caption: '여기서 핵심은, 사용할 수 있다, 이 말입니다.',
  rate: 1,
  hasVoice: true,
  muted: false,
  volume: 0.8,
  setVolume: fn(),
  setMuted: fn(),
  voices: [],
  voiceName: '',
  setVoiceName: fn(),
  start: fn(),
  stop: fn(),
  pause: fn(),
  reload: fn(),
  resume: fn(),
  prev: fn(),
  next: fn(),
  seek: fn(),
  setRate: fn(),
  ...state,
});

const meta: Meta<typeof ListenPlayer> = {
  title: 'Doc/ListenPlayer',
  component: ListenPlayer,
  parameters: { layout: 'fullscreen' },
  args: { mode: 'lecture', onModeChange: fn(), onClose: fn() },
  // 재생기의 재질 변수(--listen-*)는 문서 본문(.doc-prose) 안에서 정해진다.
  decorators: [
    (Story) => (
      <div className="doc-prose min-h-[28rem] bg-background-surface p-xl">
        <p>재생기는 화면 아래에 고정된다. 폭을 바꿔 버튼이 줄어드는 순서를 확인한다.</p>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof ListenPlayer>;

export const Playing: Story = { args: { narration: narrationOf() } };

export const Paused: Story = { args: { narration: narrationOf({ playing: false }) } };

export const Ended: Story = {
  args: { narration: narrationOf({ playing: false, index: 7, caption: '' }) },
};

export const NoVoice: Story = { args: { narration: narrationOf({ hasVoice: false }) } };

/** 가장 좁은 배치: 재생 · 시간 · 접기 · 자막 · 설정 · 닫기만 남는다. */
export const Mobile: Story = {
  args: { narration: narrationOf() },
  globals: { viewport: { value: 'mobile' } },
};

export const CollapsesToMiniBar: Story = {
  args: { narration: narrationOf() },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: '재생기 접기' }));

    const expand = await canvas.findByRole('button', { name: '재생기 펼치기' });
    await expect(expand).toHaveFocus();
    await expect(expand).toHaveAttribute('aria-expanded', 'false');
  },
};
