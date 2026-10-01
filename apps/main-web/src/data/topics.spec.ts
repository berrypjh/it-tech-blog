import { describe, expect, it } from 'vitest';

import { getVisibleTopics, parseEnabledZones, TOPICS } from './topics';

const ids = (zones: string[]) => getVisibleTopics(zones).map((topic) => topic.id);

describe('parseEnabledZones', () => {
  it('trims entries and drops empty ones', () => {
    expect(parseEnabledZones(' react, ,accessibility ')).toEqual(['react', 'accessibility']);
  });

  it('returns an empty list when unset', () => {
    expect(parseEnabledZones(undefined)).toEqual([]);
  });
});

describe('getVisibleTopics', () => {
  it('shows every topic when no zone is enabled', () => {
    expect(getVisibleTopics([])).toBe(TOPICS);
  });

  it('shows only topics whose zone is enabled', () => {
    expect(ids(['accessibility'])).toEqual(['accessibility']);
    expect(ids(['accessibility', 'react'])).toEqual(['react', 'accessibility']);
  });

  it('hides planned topics once zones are enabled', () => {
    expect(ids(['unknown'])).toEqual([]);
  });
});

describe('TOPICS', () => {
  it('links every active topic to its zone path', () => {
    for (const topic of TOPICS) {
      if (topic.status === 'active') expect(topic.href).toBe(`/${topic.zone}`);
    }
  });

  it('has unique ids', () => {
    expect(new Set(TOPICS.map((topic) => topic.id)).size).toBe(TOPICS.length);
  });
});
