import { CORE_RING, getConnector, MODULE_RING } from './spatial-lab.layout';

type Props = {
  count: number;
  activeIndex: number;
};

/** 스테이지 바닥: 모듈 링, 코어 링, 코어→모듈 커넥터. 장식용이라 보조기기에서 숨긴다. */
export const LabScene = ({ count, activeIndex }: Props) => (
  <svg
    className="lab-scene"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <ellipse className="lab-ring lab-ring--outer" cx="50" cy="50" rx="48" ry="46" />
    <ellipse className="lab-ring" cx="50" cy="50" rx={MODULE_RING.rx} ry={MODULE_RING.ry} />
    <ellipse
      className="lab-ring lab-ring--core"
      cx="50"
      cy="50"
      rx={CORE_RING.rx}
      ry={CORE_RING.ry}
    />
    {Array.from({ length: count }, (_, index) => (
      <line
        key={index}
        className="lab-connector"
        data-active={index === activeIndex || undefined}
        {...getConnector(index, count)}
      />
    ))}
  </svg>
);
