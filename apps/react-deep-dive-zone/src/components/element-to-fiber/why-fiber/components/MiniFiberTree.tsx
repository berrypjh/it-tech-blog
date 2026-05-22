import { cn } from '@it-tech-blog/utils';

/**
 * 다음 챕터 예고용 미니 Fiber tree 다이어그램.
 * 상단 violet root → 중간 emerald → 하단 sky cubes.
 */
export const MiniFiberTree = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 160"
    aria-hidden="true"
    className={cn('w-full h-auto max-w-[260px]', className)}
  >
    {/* Lines */}
    <line x1="100" y1="36" x2="50" y2="84" stroke="rgb(139 92 246 / 0.6)" strokeWidth="2" />
    <line x1="100" y1="36" x2="150" y2="84" stroke="rgb(139 92 246 / 0.6)" strokeWidth="2" />
    <line x1="50" y1="100" x2="22" y2="138" stroke="rgb(16 185 129 / 0.6)" strokeWidth="2" />
    <line x1="50" y1="100" x2="78" y2="138" stroke="rgb(16 185 129 / 0.6)" strokeWidth="2" />
    <line x1="150" y1="100" x2="150" y2="138" stroke="rgb(16 185 129 / 0.6)" strokeWidth="2" />

    {/* Root — violet */}
    <Cube cx={100} cy={28} fill="#8b5cf6" />

    {/* Middle — emerald */}
    <Cube cx={50} cy={92} fill="#10b981" />
    <Cube cx={150} cy={92} fill="#10b981" />

    {/* Bottom — sky */}
    <Cube cx={22} cy={146} fill="#0ea5e9" size={10} />
    <Cube cx={78} cy={146} fill="#0ea5e9" size={10} />
    <Cube cx={150} cy={146} fill="#0ea5e9" size={10} />

    {/* ... */}
    <text
      x={186}
      y={150}
      fill="rgb(100 116 139 / 0.8)"
      fontSize="12"
      fontFamily="ui-monospace, monospace"
    >
      …
    </text>
  </svg>
);

const Cube = ({
  cx,
  cy,
  fill,
  size = 14,
}: {
  cx: number;
  cy: number;
  fill: string;
  size?: number;
}) => <rect x={cx - size / 2} y={cy - size / 2} width={size} height={size} rx={3} fill={fill} />;
