import type { Locale } from '@it-tech-blog/preferences';

import type { CSSProperties } from 'react';

import type { Topic } from '@/data/topics';

import { ModuleArt } from './ModuleArt';
import type { Placement } from './spatial-lab.layout';

type Props = {
  topic: Topic;
  locale: Locale;
  index: number;
  placement: Placement;
  plannedLabel: string;
  active: boolean;
  onActiveChange: (active: boolean) => void;
};

/**
 * 토픽 하나를 실험실 모듈로 렌더한다.
 * 활성 토픽은 실제 `<a>`이고, 준비 중 토픽은 포커스되지 않는 정적 항목이다.
 * 공간 배치(스테이지)와 카드 배치(그리드)는 CSS가 뷰포트에 따라 고른다.
 */
export const SpatialModule = ({
  topic,
  locale,
  index,
  placement,
  plannedLabel,
  active,
  onActiveChange,
}: Props) => {
  const labelId = `topic-${topic.id}-label`;
  const descriptionId = `topic-${topic.id}-description`;
  const style = {
    '--x': `${placement.x}%`,
    '--y': `${placement.y}%`,
    '--depth': placement.depth,
    '--order': index,
  } as CSSProperties;

  const content = (
    <>
      <ModuleArt id={topic.id} />
      <span className="lab-module-text">
        <span className="lab-module-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="lab-module-label">
          <span className="lab-module-icon" aria-hidden="true">
            {topic.icon}
          </span>
          <span id={labelId}>{topic.label[locale]}</span>
        </span>
        <span id={descriptionId} className="lab-module-description">
          {topic.description[locale]}
        </span>
        {topic.status === 'planned' && <span className="lab-module-badge">{plannedLabel}</span>}
      </span>
    </>
  );

  return (
    <li
      className="lab-module"
      data-status={topic.status}
      data-active={active || undefined}
      style={style}
      onPointerEnter={() => onActiveChange(true)}
      onPointerLeave={() => onActiveChange(false)}
    >
      {topic.status === 'active' ? (
        <a
          href={topic.href}
          className="lab-module-body"
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          onFocus={() => onActiveChange(true)}
          onBlur={() => onActiveChange(false)}
        >
          {content}
        </a>
      ) : (
        <div className="lab-module-body">{content}</div>
      )}
    </li>
  );
};
