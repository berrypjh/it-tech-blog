/** 스테이지 좌표(%) 위의 타원. 모듈 배치 링과 코어 경계에 쓴다. */
export type Ellipse = { rx: number; ry: number };

/** 모듈 하나의 배치. x/y는 스테이지 기준 %, depth는 -1(뒤)~1(앞). */
export type Placement = { x: number; y: number; depth: number };

export const MODULE_RING: Ellipse = { rx: 40, ry: 37 };
export const CORE_RING: Ellipse = { rx: 25, ry: 17 };

/** 데스크톱 스테이지의 대표 가로:세로 비율. 링을 픽셀 공간에서 고르게 나누는 데 쓴다. */
const STAGE_ASPECT = 1.9;
const SAMPLES = 720;
const CENTER = 50;

/**
 * 삼각함수 결과는 JS 엔진마다 마지막 자리가 달라 SSR 하이드레이션이 어긋난다.
 * 화면에 차이가 없는 소수 셋째 자리로 고정해 서버와 브라우저 값을 맞춘다.
 */
const round = (value: number) => Math.round(value * 1000) / 1000;

const pointOn = (ring: Ellipse, angle: number) => ({
  x: round(CENTER + ring.rx * Math.cos(angle)),
  y: round(CENTER + ring.ry * Math.sin(angle)),
});

/**
 * index번째 모듈의 각도. 왼쪽에서 시작해 시계 방향으로,
 * 화면에 보이는 타원 둘레(호 길이)를 균등하게 나눈다.
 * 각도를 균등 분할하면 넓은 타원의 좌우 끝에 모듈이 몰리기 때문이다.
 */
const angleOf = (index: number, count: number) => {
  const step = (2 * Math.PI) / SAMPLES;
  const lengths = [0];
  for (let i = 1; i <= SAMPLES; i++) {
    const t = Math.PI + i * step;
    const dx = MODULE_RING.rx * STAGE_ASPECT * Math.sin(t);
    const dy = MODULE_RING.ry * Math.cos(t);
    lengths.push(lengths[i - 1] + Math.hypot(dx, dy) * step);
  }
  const target = (lengths[SAMPLES] * index) / count;
  const sample = lengths.findIndex((length) => length >= target);
  if (sample === 0) return Math.PI;

  const previous = lengths[sample - 1];
  const fraction = (target - previous) / (lengths[sample] - previous);
  return Math.PI + (sample - 1 + fraction) * step;
};

/**
 * 모듈을 코어를 둘러싼 타원 링 위에 배치한다.
 * 화면 아래쪽일수록 관찰자에 가까우므로 depth가 커진다.
 */
export const getPlacement = (index: number, count: number): Placement => {
  const angle = angleOf(index, count);
  return { ...pointOn(MODULE_RING, angle), depth: round(Math.sin(angle)) };
};

/** 코어 경계에서 모듈 직전까지 이어지는 커넥터 선분. */
export const getConnector = (index: number, count: number) => {
  const angle = angleOf(index, count);
  const from = pointOn(CORE_RING, angle);
  const to = pointOn({ rx: MODULE_RING.rx * 0.8, ry: MODULE_RING.ry * 0.8 }, angle);
  return { x1: from.x, y1: from.y, x2: to.x, y2: to.y };
};
