'use client';

/** 챕터 조각 사이의 틈(px). */
const GAP_PX = 3;

/**
 * 유튜브처럼 얇은 슬라이더. 진행 바와 볼륨이 함께 쓴다. 채운 부분만 밝게 하고, starts가 있으면 조각을 나눠 챕터처럼 보인다.
 * 실제 조작은 위에 겹친 투명한 range가 맡아 키보드(방향키 = 문단 이동)와 화면 낭독기로도 쓸 수 있다.
 */
export const ListenSlider = ({
  current,
  total,
  starts,
  label,
  valueText,
  onSeek,
}: {
  current: number;
  total: number;
  starts: number[];
  label: string;
  valueText: string;
  onSeek: (index: number) => void;
}) => {
  const last = Math.max(total - 1, 1);
  const percent = (current / last) * 100;
  /** 섹션마다 바를 한 조각으로 그리고 사이를 실제로 띄운다. 반투명 배경 위에서도 틈이 비어 보인다. */
  const edges = [...new Set([0, ...starts.filter((i) => i > 0)])].map((i) => (i / last) * 100);
  const chapters = edges.map((from, i) => ({ from, to: edges[i + 1] ?? 100 }));

  return (
    <div className="group relative flex h-5 items-center rounded-full has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[rgb(var(--listen-on-rgb))]">
      <div className="relative h-1 w-full transition-[height] group-hover:h-1.5">
        {chapters.map(({ from, to }) => {
          const fill = Math.min(Math.max((percent - from) / (to - from), 0), 1) * 100;
          return (
            <span
              key={from}
              aria-hidden="true"
              className="absolute inset-y-0 overflow-hidden rounded-full bg-[rgb(var(--listen-on-rgb)/0.3)]"
              style={{ left: `${from}%`, width: `calc(${to - from}% - ${GAP_PX}px)` }}
            >
              <span
                className="block h-full bg-[rgb(var(--listen-on-rgb))]"
                style={{ width: `${fill}%` }}
              />
            </span>
          );
        })}
        <span
          aria-hidden="true"
          className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--listen-on-rgb))]"
          style={{ left: `${percent}%` }}
        />
      </div>
      <input
        type="range"
        min={0}
        max={Math.max(total - 1, 0)}
        value={current}
        onChange={(e) => onSeek(Number(e.target.value))}
        aria-label={label}
        aria-valuetext={valueText}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
    </div>
  );
};
