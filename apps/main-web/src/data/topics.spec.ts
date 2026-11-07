import { describe, expect, it } from 'vitest';

import { getVisibleTopics, parseEnabledZones, TOPICS } from './topics';

const ids = (zones: string[], privateActive = false) =>
  getVisibleTopics(zones, privateActive).map((topic) => topic.id);
const PRIVATE = 'computer-architecture';

describe('parseEnabledZones', () => {
  it('trims entries and drops empty ones', () => {
    expect(parseEnabledZones(' react, ,accessibility ')).toEqual(['react', 'accessibility']);
  });

  it('returns an empty list when unset', () => {
    expect(parseEnabledZones(undefined)).toEqual([]);
  });
});

describe('getVisibleTopics', () => {
  it('shows every topic when no zone is enabled and the private zone is active', () => {
    expect(getVisibleTopics([], true)).toBe(TOPICS);
  });

  it('hides the private topic unless the host build activated it', () => {
    expect(ids([])).not.toContain(PRIVATE);
    expect(ids([])).toHaveLength(TOPICS.length - 1);
    expect(ids([PRIVATE])).toEqual([]);
  });

  it('shows the private topic exactly once when activated', () => {
    expect(ids([], true).filter((id) => id === PRIVATE)).toHaveLength(1);
    expect(ids(['react', PRIVATE], true)).toEqual(['react', PRIVATE]);
  });

  it('keeps public zone filtering unchanged by the private zone', () => {
    expect(ids(['react', 'accessibility', 'llm'], true)).toEqual(['react', 'accessibility', 'llm']);
  });

  it('defaults to hidden when the build flag is absent', () => {
    expect(getVisibleTopics([]).map((topic) => topic.id)).not.toContain(PRIVATE);
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

  it('has unique hrefs', () => {
    const hrefs = TOPICS.flatMap((topic) => (topic.status === 'active' ? [topic.href] : []));
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
