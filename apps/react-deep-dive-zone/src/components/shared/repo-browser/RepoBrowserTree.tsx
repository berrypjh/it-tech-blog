'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { ChevronDown, ChevronRight, File, Folder, FolderOpen } from 'lucide-react';

export type RepoBrowserTreeNode = {
  id?: string;
  name: string;
  kind: 'dir' | 'doc' | 'folder' | 'file';
  children?: RepoBrowserTreeNode[];
  open?: boolean;
};

const keyOf = (node: RepoBrowserTreeNode) => node.id ?? node.name;
const isLeaf = (node: RepoBrowserTreeNode) => node.kind === 'file' || node.kind === 'doc';

const collectOpenKeys = (
  nodes: RepoBrowserTreeNode[],
  acc: Set<string> = new Set(),
): Set<string> => {
  for (const node of nodes) {
    if (node.open) acc.add(keyOf(node));
    if (node.children) collectOpenKeys(node.children, acc);
  }
  return acc;
};

type Props = {
  tree: RepoBrowserTreeNode[];
  selected: string;
  onSelect: (key: string) => void;
  hasDetail: (key: string) => boolean;
};

export const RepoBrowserTree = ({ tree, selected, onSelect, hasDetail }: Props) => {
  const [openKeys, setOpenKeys] = useState(() => collectOpenKeys(tree));

  const toggle = (key: string) =>
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <ul className="flex flex-col gap-0.5">
      {tree.map((node) => (
        <TreeNode
          key={keyOf(node)}
          node={node}
          depth={0}
          openKeys={openKeys}
          selected={selected}
          hasDetail={hasDetail}
          onToggle={toggle}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

type TreeNodeProps = {
  node: RepoBrowserTreeNode;
  depth: number;
  openKeys: Set<string>;
  selected: string;
  hasDetail: (key: string) => boolean;
  onToggle: (key: string) => void;
  onSelect: (key: string) => void;
};

const TreeNode = ({
  node,
  depth,
  openKeys,
  selected,
  hasDetail,
  onToggle,
  onSelect,
}: TreeNodeProps) => {
  const key = keyOf(node);
  const hasChildren = !!node.children?.length;
  const isOpen = hasChildren && openKeys.has(key);
  const selectable = hasDetail(key);
  const isSelected = selectable && selected === key;
  const interactive = hasChildren || selectable;
  const Icon = isLeaf(node) ? File : isOpen ? FolderOpen : Folder;

  const handleClick = () => {
    if (hasChildren) onToggle(key);
    if (selectable) onSelect(key);
  };

  const rowClass = cn(
    'flex items-center gap-1.5 w-full py-1 pr-2 rounded text-xsm font-mono text-left transition-colors',
    isSelected
      ? 'bg-[var(--term-surface)] text-[var(--term-accent)] font-bold'
      : cn('text-[var(--term-fg)]', interactive && 'hover:bg-[var(--term-surface)]'),
    interactive ? 'cursor-pointer' : 'cursor-default',
  );

  const inner = (
    <>
      {hasChildren ? (
        <span aria-hidden="true" className="text-[var(--term-dim)] shrink-0">
          {isOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        </span>
      ) : (
        <span aria-hidden="true" className="inline-block w-3 shrink-0" />
      )}
      <Icon
        className={cn(
          'h-3.5 w-3.5 shrink-0',
          isSelected ? 'text-[var(--term-accent)]' : 'text-[var(--term-muted)]',
        )}
      />
      <span className="truncate">{node.name}</span>
      {isSelected && (
        <span
          aria-hidden="true"
          className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]"
        >
          active
        </span>
      )}
    </>
  );

  const indent = { paddingLeft: `${0.5 + depth * 0.875}rem` };

  return (
    <li>
      {interactive ? (
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            rowClass,
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-inset',
          )}
          style={indent}
          aria-expanded={hasChildren ? isOpen : undefined}
          aria-current={isSelected ? 'true' : undefined}
        >
          {inner}
        </button>
      ) : (
        <div className={rowClass} style={indent}>
          {inner}
        </div>
      )}

      {hasChildren && isOpen && node.children && (
        <ul>
          {node.children.map((child) => (
            <TreeNode
              key={keyOf(child)}
              node={child}
              depth={depth + 1}
              openKeys={openKeys}
              selected={selected}
              hasDetail={hasDetail}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
