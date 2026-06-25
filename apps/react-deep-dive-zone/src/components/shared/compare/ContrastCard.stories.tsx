import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckCircle2, Sparkles, XCircle } from 'lucide-react';

import { ContrastCard } from './ContrastCard';
import { StatusPill } from './StatusPill';

const meta: Meta<typeof ContrastCard> = {
  title: 'React Deep Dive/ContrastCard',
  component: ContrastCard,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof ContrastCard>;

const Wrong = (
  <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
    <StatusPill
      icon={<XCircle className="h-3.5 w-3.5" aria-hidden="true" />}
      tone="text-rose-600 dark:text-rose-300"
    >
      흔한 오해
    </StatusPill>
    <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-rose-600 dark:text-rose-300 break-keep">
      react-dom은 react의 일부일 뿐이다
    </p>
    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
      렌더러는 교체 가능한 별도 패키지입니다.
    </p>
  </article>
);

const Right = (
  <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
    <StatusPill
      icon={<CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
      tone="text-[var(--term-accent)]"
    >
      정확히는
    </StatusPill>
    <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep">
      react는 명세, react-dom은 DOM 렌더러
    </p>
    <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
      같은 명세를 여러 렌더러가 구현합니다.
    </p>
  </article>
);

export const Default: Story = {
  args: { left: Wrong, right: Right },
};

export const WithFooter: Story = {
  args: {
    left: Wrong,
    right: Right,
    footer: (
      <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl border-t border-dashed border-[var(--term-border)]">
        <StatusPill
          icon={<Sparkles className="h-3.5 w-3.5" aria-hidden="true" />}
          tone="text-[var(--term-accent)]"
        >
          예시
        </StatusPill>
        <ul className="flex flex-wrap gap-2">
          {['react-dom', 'react-native', 'react-test-renderer'].map((tag) => (
            <li key={tag}>
              <span className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1.5 text-xsm font-mono break-keep border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)] shrink-0"
                />
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </article>
    ),
  },
};
