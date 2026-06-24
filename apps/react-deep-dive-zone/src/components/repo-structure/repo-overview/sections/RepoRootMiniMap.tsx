'use client';

import { useState } from 'react';

import { ToneDetailPanel } from '../../../shared/detail';
import { RepoBrowserShell, RepoBrowserTree } from '../../../shared/repo-browser';
import type { RepoOverviewContent } from '../content';
import { FileTextIcon, FolderIcon, MapIcon } from '../icons';

type Props = { content: RepoOverviewContent['miniMap'] };

export const RepoRootMiniMap = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState(content.defaultSelected);
  const detail = content.details[selectedId] ?? content.details[content.defaultSelected];
  const isDir = content.treeRows.find((r) => r.id === selectedId)?.kind === 'dir';

  return (
    <RepoBrowserShell
      id="mini-map"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MapIcon className="h-5 w-5" />}
      repoLabel={content.treeHeader}
      statusLabel="public"
      tree={
        <RepoBrowserTree
          tree={content.treeRows}
          selected={selectedId}
          onSelect={setSelectedId}
          hasDetail={(id) => Boolean(content.details[id])}
        />
      }
      detail={
        <ToneDetailPanel
          tone={detail.tone}
          icon={isDir ? FolderIcon : FileTextIcon}
          title={detail.title}
          badge={detail.badge}
          description={detail.description}
          bullets={detail.bullets}
          note={detail.recommendation}
        />
      }
    />
  );
};
