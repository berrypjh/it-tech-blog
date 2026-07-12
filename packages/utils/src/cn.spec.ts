import { describe, expect, it } from 'vitest';

import { cn } from './cn';

describe('cn', () => {
  it('joins class names with a space', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  it('filters out falsy values', () => {
    expect(cn('a', undefined, null, false, 'b')).toBe('a b');
  });

  it('returns an empty string when nothing is passed', () => {
    expect(cn()).toBe('');
  });

  it('supports conditional classes', () => {
    const isActive = false;
    expect(cn('base', isActive && 'active')).toBe('base');
  });
});
