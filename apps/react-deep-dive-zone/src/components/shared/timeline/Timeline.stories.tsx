import { cn } from '@it-tech-blog/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { GitPullRequest, Search, Tag } from 'lucide-react';

import { toneTokens } from '../tones';

import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'React Deep Dive/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof Timeline>;

/** 버전 타임라인: 점 노드 + 버전/설명 본문. */
export const Versions: Story = {
  args: {
    entries: (
      [
        { id: 'r16', tone: 'amber', version: 'React 16', desc: 'Fiber 아키텍처 도입.' },
        { id: 'r18', tone: 'sky', version: 'React 18', desc: 'Concurrent 기능 확장.' },
        { id: 'r19', tone: 'violet', version: 'React 19', desc: '새로운 데이터 처리 모델.' },
      ] as const
    ).map(({ id, tone, version, desc }) => ({
      id,
      tone,
      body: (
        <div className="flex flex-col gap-1">
          <h3
            className={cn(
              'text-md sm:text-lg font-bold tracking-tight leading-none',
              toneTokens[tone].text,
            )}
          >
            {version}
          </h3>
          <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
            {desc}
          </p>
        </div>
      ),
    })),
  },
};

const stepIcons = { note: Tag, pr: GitPullRequest, file: Search };

/** 스텝 트레이스: 점 노드 + step 알약/아이콘 박스 본문. */
export const Steps: Story = {
  args: {
    entries: (
      [
        { id: 'note', tone: 'amber', num: '1', title: '릴리즈에서 변경점 확인', icon: 'note' },
        { id: 'pr', tone: 'sky', num: '2', title: '관련 PR / Issue 찾기', icon: 'pr' },
        { id: 'file', tone: 'violet', num: '3', title: '코드 변경 파일 열기', icon: 'file' },
      ] as const
    ).map(({ id, tone, num, title, icon }) => {
      const Icon = stepIcons[icon];
      const t = toneTokens[tone].text;
      return {
        id,
        tone,
        body: (
          <div className="flex flex-col gap-sm">
            <header className="flex items-center justify-between gap-2">
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                  'bg-[var(--term-surface)] border-[var(--term-border)]',
                  t,
                )}
              >
                <span className="font-mono tabular-nums">step {num}</span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
                  'bg-[var(--term-surface)] border-[var(--term-border)]',
                  t,
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
            </header>
            <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {title}
            </h3>
          </div>
        ),
      };
    }),
  },
};
