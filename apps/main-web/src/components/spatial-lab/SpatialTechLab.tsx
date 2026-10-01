'use client';

import { type PointerEvent, type ReactNode, useRef, useState } from 'react';

import type { Locale } from '@it-tech-blog/preferences';

import type { Topic, TopicId } from '@/data/topics';

import { LabScene } from './LabScene';
import { getPlacement } from './spatial-lab.layout';
import { SpatialModule } from './SpatialModule';

import './spatial-lab.css';

const COPY = {
  ko: {
    nav: '학습 공간',
    planned: '준비 중',
    hint: '모듈에 포인터를 올리거나 Tab 키로 둘러보세요',
  },
  en: {
    nav: 'Learning spaces',
    planned: 'Coming soon',
    hint: 'Hover a module or press Tab to look around',
  },
} satisfies Record<Locale, Record<string, string>>;

type Props = {
  topics: Topic[];
  locale: Locale;
  /** 코어에 놓일 히어로 카피. 서버에서 렌더해 넘긴다. */
  children: ReactNode;
};

/**
 * 토픽 내비게이션과 공간 표현을 하나의 상태로 묶는 클라이언트 경계.
 * 모듈 자체가 시맨틱 링크이고, 스테이지 기울기와 커넥터는 같은 상태를 시각화할 뿐이다.
 */
export const SpatialTechLab = ({ topics, locale, children }: Props) => {
  const [activeId, setActiveId] = useState<TopicId | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const copy = COPY[locale];
  const activeIndex = topics.findIndex((topic) => topic.id === activeId);
  const activeTopic = topics[activeIndex];

  const setActive = (id: TopicId) => (active: boolean) =>
    setActiveId((current) => (active ? id : current === id ? null : current));

  const tilt = (x: number, y: number) => {
    stageRef.current?.style.setProperty('--tilt-x', x.toFixed(3));
    stageRef.current?.style.setProperty('--tilt-y', y.toFixed(3));
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    tilt(
      (event.clientX - rect.left) / rect.width - 0.5,
      (event.clientY - rect.top) / rect.height - 0.5,
    );
  };

  return (
    <section
      className="lab"
      data-has-active={activeTopic ? true : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => tilt(0, 0)}
    >
      <header className="lab-core">
        {children}
        <p className="lab-readout" aria-hidden="true">
          {activeTopic ? (
            <>
              <span className="lab-readout-label">{activeTopic.label[locale]}</span>
              <span>{activeTopic.description[locale]}</span>
            </>
          ) : (
            <span>{copy.hint}</span>
          )}
        </p>
      </header>

      <div ref={stageRef} className="lab-stage">
        <LabScene count={topics.length} activeIndex={activeIndex} />
        <nav aria-label={copy.nav}>
          <ul className="lab-modules">
            {topics.map((topic, index) => (
              <SpatialModule
                key={topic.id}
                topic={topic}
                locale={locale}
                index={index}
                placement={getPlacement(index, topics.length)}
                plannedLabel={copy.planned}
                active={topic.id === activeId}
                onActiveChange={setActive(topic.id)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};
