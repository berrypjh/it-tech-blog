'use client';

import { useState } from 'react';

import {
  RepoBrowserCallout,
  RepoBrowserShell,
  RepoBrowserTree,
} from '../../../shared/repo-browser';
import type { WhyOpenSourceContent } from '../content';
import { FolderIcon, FolderOpenIcon, InfoIcon } from '../icons';

type Props = { content: WhyOpenSourceContent['repoExplorer'] };

export const RepositoryStructureExplorer = ({ content }: Props) => {
  const [selected, setSelected] = useState(content.defaultFolder);
  const detail = content.details[selected];

  return (
    <RepoBrowserShell
      id="explorer"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FolderIcon className="h-5 w-5" />}
      repoLabel={content.repoLabel}
      statusLabel="public"
      tree={
        <RepoBrowserTree
          tree={content.tree}
          selected={selected}
          onSelect={setSelected}
          hasDetail={(name) => Boolean(content.details[name])}
        />
      }
      detail={
        <>
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]"
            >
              <FolderOpenIcon className="h-[1.125rem] w-[1.125rem]" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-md sm:text-lg font-bold font-mono tracking-tight text-[var(--term-fg)]">
                {detail.folder}
              </h3>
              <span className="text-[10px] font-mono text-[var(--term-muted)]">
                packages/{detail.folder}
              </span>
            </div>
          </header>

          <div className="flex flex-col gap-1">
            <p className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-snug break-keep">
              {detail.lead}
            </p>
            <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
              {detail.supporting}
            </p>
          </div>

          <ul className="flex flex-wrap gap-1.5">
            {detail.tags.map((tag) => (
              <li
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]"
              >
                {tag}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-1.5">
            {detail.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xsm sm:text-sm text-[var(--term-fg)]"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block w-1 h-1 rounded-full bg-[var(--term-accent)] shrink-0"
                />
                <span className="leading-relaxed break-keep">{b}</span>
              </li>
            ))}
          </ul>

          <RepoBrowserCallout icon={<InfoIcon className="h-4 w-4" />}>
            {detail.callout}
          </RepoBrowserCallout>
        </>
      }
    />
  );
};
