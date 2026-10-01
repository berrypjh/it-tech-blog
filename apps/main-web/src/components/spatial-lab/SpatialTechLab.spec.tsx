import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { getVisibleTopics, TOPICS } from '@/data/topics';

import { SpatialTechLab } from './SpatialTechLab';

const renderLab = (locale: 'ko' | 'en' = 'ko', topics = TOPICS) =>
  render(
    <SpatialTechLab topics={topics} locale={locale}>
      <h1>Interactive Tech Lab</h1>
    </SpatialTechLab>,
  );

afterEach(cleanup);

describe('SpatialTechLab', () => {
  it('renders the hero and one list item per visible topic', () => {
    renderLab();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Interactive Tech Lab');
    const nav = screen.getByRole('navigation', { name: '학습 공간' });
    expect(within(nav).getAllByRole('listitem')).toHaveLength(TOPICS.length);
  });

  it('links active topics to their zones with an accessible name and description', () => {
    renderLab('en');
    const link = screen.getByRole('link', { name: 'React Deep Dive' });
    expect(link.getAttribute('href')).toBe('/react');
    expect(link.getAttribute('aria-describedby')).toBe('topic-react-description');
    expect(screen.getByRole('link', { name: 'Accessibility' }).getAttribute('href')).toBe(
      '/accessibility',
    );
  });

  it('exposes only active topics as links', () => {
    renderLab();
    const active = TOPICS.filter((topic) => topic.status === 'active');
    expect(screen.getAllByRole('link')).toHaveLength(active.length);
  });

  it('marks planned topics with text, not only color', () => {
    renderLab('en');
    const item = screen.getByText('Security').closest('li');
    expect(item?.dataset.status).toBe('planned');
    expect(within(item as HTMLElement).getByText('Coming soon')).toBeTruthy();
    expect(within(item as HTMLElement).queryByRole('link')).toBeNull();
  });

  it('renders only enabled zones when ENABLED_ZONES is set', () => {
    renderLab('ko', getVisibleTopics(['accessibility']));
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.queryByText('준비 중')).toBeNull();
  });

  it('shares the focused topic with the spatial readout', () => {
    const { container } = renderLab('en');
    fireEvent.focus(screen.getByRole('link', { name: 'React Deep Dive' }));
    expect(container.querySelector('.lab')?.hasAttribute('data-has-active')).toBe(true);
    expect(container.querySelector('.lab-connector[data-active]')).not.toBeNull();
    expect(container.querySelector('.lab-readout')?.textContent).toContain('React Deep Dive');
  });

  it('hides decorative spatial art from assistive technology', () => {
    const { container } = renderLab();
    const art = container.querySelectorAll('svg');
    expect(art.length).toBeGreaterThan(0);
    art.forEach((svg) => {
      if (svg.closest('.lab-module-icon')) return;
      expect(svg.getAttribute('aria-hidden')).toBe('true');
    });
  });
});
