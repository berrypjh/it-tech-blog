import { toneTokens } from '../../../shared/tones';
import type { FiberTreePointersContent, PointerKind } from '../content';

import { pointerDashed, pointerTone } from './pointerStyles';

type Props = {
  nodes: FiberTreePointersContent['conversion']['diagramNodes'];
};

const NODE_W = 150;
const NODE_H = 48;

/** 노드 중심 좌표(viewBox 620x320). JSX 예시 Card → Header/Main → Button/List 모양에 맞춘 고정 배치. */
const POS: Record<string, { x: number; y: number }> = {
  Card: { x: 250, y: 40 },
  Header: { x: 120, y: 160 },
  Main: { x: 370, y: 160 },
  Button: { x: 330, y: 280 },
  List: { x: 530, y: 280 },
};

type Edge = {
  kind: PointerKind;
  d: string;
  label: { x: number; y: number; anchor: 'start' | 'middle' | 'end' };
};

/** child는 첫 자식에게만, sibling은 형제 사이, return은 모든 자식에서 부모로 향한다. */
const EDGES: Edge[] = [
  { kind: 'child', d: 'M 215 64 L 140 132', label: { x: 186, y: 102, anchor: 'start' } },
  { kind: 'sibling', d: 'M 195 160 L 291 160', label: { x: 243, y: 151, anchor: 'middle' } },
  { kind: 'child', d: 'M 360 184 L 346 252', label: { x: 362, y: 222, anchor: 'start' } },
  { kind: 'sibling', d: 'M 405 280 L 451 280', label: { x: 428, y: 250, anchor: 'middle' } },
  { kind: 'return', d: 'M 90 136 Q 90 40 171 40', label: { x: 100, y: 68, anchor: 'end' } },
  { kind: 'return', d: 'M 400 136 Q 400 40 329 40', label: { x: 392, y: 68, anchor: 'start' } },
  { kind: 'return', d: 'M 285 256 Q 285 200 312 188', label: { x: 282, y: 215, anchor: 'end' } },
  { kind: 'return', d: 'M 540 256 Q 540 160 449 160', label: { x: 548, y: 220, anchor: 'start' } },
];

const KINDS: PointerKind[] = ['child', 'sibling', 'return'];

const markerId = (kind: PointerKind) => `jsx-fiber-arrow-${kind}`;

/**
 * JSX 예시(Card → Header/Main → Button/List)의 child / sibling / return 연결 다이어그램.
 * 노드 라벨·tag는 diagramNodes에서 읽고, 배치는 예시 모양에 맞춘 고정 좌표를 쓴다.
 * 같은 정보는 아래 연결 표가 텍스트로 제공하므로 SVG는 aria-hidden.
 */
export const JsxFiberDiagram = ({ nodes }: Props) => (
  <div className="overflow-x-auto">
    <svg viewBox="0 0 620 320" className="h-auto w-full min-w-[480px]" aria-hidden="true">
      <defs>
        {KINDS.map((kind) => (
          <marker
            key={kind}
            id={markerId(kind)}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
            className={toneTokens[pointerTone[kind]].text}
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        ))}
      </defs>

      {EDGES.map((edge) => (
        <g key={edge.d} className={toneTokens[pointerTone[edge.kind]].text}>
          <path
            d={edge.d}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={pointerDashed[edge.kind] ? '5 4' : undefined}
            markerEnd={`url(#${markerId(edge.kind)})`}
          />
          <text
            x={edge.label.x}
            y={edge.label.y}
            textAnchor={edge.label.anchor}
            fill="currentColor"
            fontSize="11"
            fontWeight="700"
            className="font-mono"
          >
            {edge.kind}
          </text>
        </g>
      ))}

      {nodes.map((node) => {
        const { x, y } = POS[node.id];
        return (
          <g key={node.id}>
            <rect
              x={x - NODE_W / 2}
              y={y - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx="10"
              strokeWidth="1.5"
              className="fill-[var(--term-surface)] stroke-[var(--term-border)]"
            />
            <text
              x={x}
              y={y - 3}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              className="fill-[var(--term-fg)] font-mono"
            >
              {node.label}
            </text>
            <text
              x={x}
              y={y + 14}
              textAnchor="middle"
              fontSize="10"
              className="fill-[var(--term-muted)] font-mono"
            >
              {node.tag}
            </text>
          </g>
        );
      })}
    </svg>
  </div>
);
