import './lab-background.css';

const VIEWBOX = { width: 1600, height: 1000 };

/**
 * 성긴 별 좌표. 고정 시드의 선형 합동 생성기라 항상 같은 배치가 나온다.
 * CSS 타일 방식은 점이 격자로 정렬돼 보여 쓰지 않는다.
 */
const createStars = (count: number) => {
  let seed = 20260929;
  const next = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const round = (value: number) => Math.round(value * 10) / 10;

  return Array.from({ length: count }, () => ({
    x: round(next() * VIEWBOX.width),
    y: round(next() * VIEWBOX.height),
    r: round(0.5 + next() * 0.8),
    opacity: round(0.3 + next() * 0.5),
  }));
};

type Star = ReturnType<typeof createStars>[number];

const STARS = createStars(56);
const VIEWBOX_ATTR = `0 0 ${VIEWBOX.width} ${VIEWBOX.height}`;

/** 별의 1/4을 두 반짝임 레이어로 나눈다. 레이어 단위로 opacity를 움직여야 비용이 싸다. */
const STAR_LAYERS = {
  still: STARS.filter((_, index) => index % 4 !== 0),
  twinkleA: STARS.filter((_, index) => index % 8 === 0),
  twinkleB: STARS.filter((_, index) => index % 8 === 4),
};

const StarField = ({ stars, className }: { stars: Star[]; className?: string }) => (
  <svg
    className={className ? `lab-bg-stars ${className}` : 'lab-bg-stars'}
    viewBox={VIEWBOX_ATTR}
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  >
    {stars.map((star) => (
      <circle
        key={`${star.x}-${star.y}`}
        cx={star.x}
        cy={star.y}
        r={star.r}
        opacity={star.opacity}
      />
    ))}
  </svg>
);

/**
 * 랩 배경. 전경과 분리된 고정 레이어이며 장식용이라 보조기기에서 숨긴다.
 * 층위: base 그라디언트 → 대기(비네트) → 따뜻한 광원 → 차가운 광원 → 별(다크) → 궤도 곡선 → grain.
 * 움직임: 두 광원의 밝기 교차, 별 일부의 반짝임, 궤도선의 아주 느린 흔들림. 모두 CSS가 제어한다.
 */
export const LabBackground = () => (
  <div className="lab-bg" aria-hidden="true">
    <div className="lab-bg-atmosphere" />
    <div className="lab-bg-haze" />
    <div className="lab-bg-glow" />
    <StarField stars={STAR_LAYERS.still} />
    <StarField stars={STAR_LAYERS.twinkleA} className="lab-bg-stars--twinkle-a" />
    <StarField stars={STAR_LAYERS.twinkleB} className="lab-bg-stars--twinkle-b" />
    <svg
      className="lab-bg-orbits"
      viewBox={VIEWBOX_ATTR}
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <defs>
        <linearGradient id="lab-bg-orbit-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" className="lab-bg-orbit-stop" stopOpacity="0" />
          <stop offset="0.5" className="lab-bg-orbit-stop" />
          <stop offset="1" className="lab-bg-orbit-stop" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse
        className="lab-bg-orbit"
        cx="800"
        cy="540"
        rx="760"
        ry="250"
        transform="rotate(-9 800 540)"
      />
      <ellipse
        className="lab-bg-orbit lab-bg-orbit--outer"
        cx="820"
        cy="500"
        rx="1080"
        ry="400"
        transform="rotate(7 820 500)"
      />
      <path
        className="lab-bg-orbit lab-bg-orbit--outer"
        d="M1030 40 C 1320 110, 1520 300, 1580 520"
      />
    </svg>
  </div>
);
