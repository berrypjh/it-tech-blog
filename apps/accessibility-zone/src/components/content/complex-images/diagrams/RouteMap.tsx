import type { Locale } from '@it-tech-blog/preferences';

const labels = {
  ko: {
    station: '중앙역 3번 출구',
    building: '본관',
    gate: '정문 (닫힘)',
    east: '동쪽 입구',
    pharmacy: '약국',
  },
  en: {
    station: 'Central Stn. Exit 3',
    building: 'Main Building',
    gate: 'Main gate (closed)',
    east: 'East entrance',
    pharmacy: 'Pharmacy',
  },
};

/** 본관 주변 지도(교육 예시). 경로는 그림 밖의 글이 전하므로 이름은 짧게 둔다. */
export const RouteMap = ({ locale, label }: { locale: Locale; label: string }) => {
  const l = labels[locale];

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 320 200"
      className="h-auto w-full max-w-[28rem]"
    >
      <g
        className="text-text-light"
        stroke="currentColor"
        strokeWidth={10}
        strokeLinecap="round"
        opacity={0.35}
      >
        <line x1={10} y1={160} x2={310} y2={160} />
        <line x1={250} y1={160} x2={250} y2={12} />
        <line x1={10} y1={20} x2={250} y2={20} />
      </g>
      <g className="text-text-default">
        <rect
          x={60}
          y={40}
          width={170}
          height={100}
          rx={4}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        />
        <text x={145} y={95} textAnchor="middle" fontSize={12} fill="currentColor">
          {l.building}
        </text>
        <text x={145} y={56} textAnchor="middle" fontSize={10} fill="currentColor">
          {l.gate}
        </text>
        <path d="M137 34l16 12m0-12l-16 12" stroke="currentColor" strokeWidth={2} />
        <text x={226} y={80} textAnchor="end" fontSize={10} fill="currentColor">
          {l.east}
        </text>
        <text x={14} y={190} fontSize={10} fill="currentColor">
          {l.station}
        </text>
        <text x={262} y={185} fontSize={10} fill="currentColor">
          {l.pharmacy}
        </text>
      </g>
      <g className="text-text-primary" fill="none" stroke="currentColor" strokeWidth={3}>
        <path d="M30 160H250V90H236" strokeDasharray="6 4" />
        <path d="M242 84l-8 6 8 6" strokeLinejoin="round" />
        <circle cx={30} cy={160} r={5} fill="currentColor" />
      </g>
    </svg>
  );
};
