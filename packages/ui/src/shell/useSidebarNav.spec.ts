import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSidebarNav } from './useSidebarNav';

const groups = [
  { items: [{ id: 'intro' }, { id: 'why' }] },
  { items: [{ id: 'semantic' }] },
  { items: [{ id: 'aria' }, { id: 'focus' }] },
];

describe('useSidebarNav', () => {
  it('expands the group containing the current pathname', () => {
    const { result } = renderHook(() => useSidebarNav(groups, '/semantic'));

    expect(result.current.expanded).toEqual(new Set([1]));
  });

  it('falls back to the first group when no item matches', () => {
    const { result } = renderHook(() => useSidebarNav(groups, '/unknown'));

    expect(result.current.expanded).toEqual(new Set([0]));
  });

  it('toggle expands a collapsed group and collapses an expanded one', () => {
    const { result } = renderHook(() => useSidebarNav(groups, '/intro'));

    act(() => result.current.toggle(2));
    expect(result.current.expanded).toEqual(new Set([0, 2]));

    act(() => result.current.toggle(0));
    expect(result.current.expanded).toEqual(new Set([2]));
  });

  it('toggleAll collapses everything when any group is expanded', () => {
    const { result } = renderHook(() => useSidebarNav(groups, '/intro'));

    expect(result.current.anyExpanded).toBe(true);

    act(() => result.current.toggleAll());
    expect(result.current.expanded).toEqual(new Set());
    expect(result.current.anyExpanded).toBe(false);
  });

  it('toggleAll expands every group when all are collapsed', () => {
    const { result } = renderHook(() => useSidebarNav(groups, '/intro'));

    act(() => result.current.toggleAll());
    act(() => result.current.toggleAll());

    expect(result.current.expanded).toEqual(new Set([0, 1, 2]));
  });
});
