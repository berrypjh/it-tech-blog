import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Folder, Info } from 'lucide-react';

import { SectionNote } from '../note';

import { RepoBrowserShell } from './RepoBrowserShell';
import { RepoBrowserTree, type RepoBrowserTreeNode } from './RepoBrowserTree';

const tree: RepoBrowserTreeNode[] = [
  {
    name: 'packages',
    kind: 'folder',
    open: true,
    children: [
      { name: 'react', kind: 'folder' },
      { name: 'react-dom', kind: 'folder' },
      { name: 'react-reconciler', kind: 'folder' },
    ],
  },
  { name: 'scripts', kind: 'folder' },
  { name: 'README.md', kind: 'file' },
];

const details: Record<string, { lead: string; body: string }> = {
  react: { lead: 'React 공개 API', body: '컴포넌트 모델과 Hooks API를 정의합니다.' },
  'react-dom': { lead: 'DOM 렌더러', body: 'reconciler가 계산한 결과를 실제 DOM에 반영합니다.' },
  'react-reconciler': { lead: 'Fiber 엔진', body: '대부분의 렌더링 로직이 이곳에 있습니다.' },
};

/** 선택 상태는 상위가 소유한다 — 실제 페이지(Explorer/MiniMap)와 동일한 사용 패턴. */
const Demo = () => {
  const [selected, setSelected] = useState('react');
  const detail = details[selected] ?? details.react;

  return (
    <RepoBrowserShell
      id="demo"
      eyebrow="01 · STRUCTURE"
      title="저장소 구조 살펴보기"
      icon={<Folder className="h-5 w-5" />}
      repoLabel="facebook / react"
      branchLabel="main"
      statusLabel="public"
      tree={
        <RepoBrowserTree
          tree={tree}
          selected={selected}
          onSelect={setSelected}
          hasDetail={(key) => Boolean(details[key])}
        />
      }
      detail={
        <>
          <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)]">{detail.lead}</h3>
          <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
            {detail.body}
          </p>
          <SectionNote className="mt-auto" icon={<Info className="h-4 w-4" />}>
            트리에서 폴더를 눌러 각 패키지 설명을 확인하세요.
          </SectionNote>
        </>
      }
    />
  );
};

const meta: Meta<typeof RepoBrowserShell> = {
  title: 'React Deep Dive/RepoBrowserShell',
  component: RepoBrowserShell,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof RepoBrowserShell>;

export const Default: Story = {
  render: () => <Demo />,
};
