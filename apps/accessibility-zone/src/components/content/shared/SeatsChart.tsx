import type { Locale } from '@it-tech-blog/preferences';

import { eventFacts, seatsByHour } from './event';

const W = 320;
const H = 200;
const PAD = { left: 36, right: 8, top: 24, bottom: 28 };
const MAX = 40;
const ticks = [0, 10, 20, 30, 40];

const yOf = (value: number) => PAD.top + (1 - value / MAX) * (H - PAD.top - PAD.bottom);

/**
 * 토요일 남은 좌석 막대 차트(SVG). 값 글자 없이 눈금만 있어 정확한 값은 요약 · 표가 전한다.
 * 그림 전체가 role="img" 하나이고, 이름은 짧게 두어 요약 · 표와 같은 내용을 되풀이하지 않는다.
 */
export const SeatsChart = ({ locale, label }: { locale: Locale; label: string }) => {
  const e = eventFacts[locale];
  const band = (W - PAD.left - PAD.right) / seatsByHour.length;

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full max-w-[28rem] text-xxsm"
    >
      <g className="text-text-light">
        <text x={4} y={12} fill="currentColor" fontSize={10}>
          {`${e.seatsTitle} (${e.seatsUnit})`}
        </text>
        {ticks.map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={yOf(tick)}
              y2={yOf(tick)}
              stroke="currentColor"
              strokeOpacity={0.4}
            />
            <text
              x={PAD.left - 6}
              y={yOf(tick) + 3}
              fill="currentColor"
              fontSize={10}
              textAnchor="end"
            >
              {tick}
            </text>
          </g>
        ))}
      </g>
      <g className="text-text-primary">
        {seatsByHour.map((point, i) => (
          <rect
            key={point.hour}
            x={PAD.left + i * band + band * 0.2}
            width={band * 0.6}
            y={yOf(point.seats)}
            height={yOf(0) - yOf(point.seats)}
            fill="currentColor"
          />
        ))}
      </g>
      <g className="text-text-default">
        {seatsByHour.map((point, i) => (
          <text
            key={point.hour}
            x={PAD.left + i * band + band / 2}
            y={H - 10}
            fill="currentColor"
            fontSize={10}
            textAnchor="middle"
          >
            {locale === 'ko' ? `${point.hour}시` : `${point.hour}:00`}
          </text>
        ))}
      </g>
    </svg>
  );
};
