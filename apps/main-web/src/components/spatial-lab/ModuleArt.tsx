import type { TopicId } from '@/data/topics';

type IsoBoxProps = {
  cx: number;
  cy: number;
  /** 윗면 마름모의 가로 반폭. 세로 반폭은 등각 투영 비율(1/2)을 따른다. */
  half: number;
  height: number;
  top?: string;
};

/** 등각 투영 상자: 윗면 + 좌/우 옆면. 모든 오브젝트의 공통 재질 단위다. */
const IsoBox = ({ cx, cy, half, height, top = 'm-glass' }: IsoBoxProps) => {
  const q = half / 2;
  const L = `${cx - half},${cy}`;
  const R = `${cx + half},${cy}`;
  const T = `${cx},${cy - q}`;
  const B = `${cx},${cy + q}`;
  const Lh = `${cx - half},${cy + height}`;
  const Rh = `${cx + half},${cy + height}`;
  const Bh = `${cx},${cy + q + height}`;

  return (
    <g>
      <polygon className="m-side" points={`${L} ${B} ${Bh} ${Lh}`} />
      <polygon className="m-side m-side--lit" points={`${B} ${R} ${Rh} ${Bh}`} />
      <polygon className={top} points={`${T} ${R} ${B} ${L}`} />
    </g>
  );
};

const Plinth = () => (
  <g className="art-plinth">
    <IsoBox cx={60} cy={84} half={42} height={6} />
    <polyline className="m-accent art-signal" points="18,84 60,105 102,84" />
  </g>
);

const ReactArt = () => (
  <g>
    <line className="m-line" x1="60" y1="52" x2="60" y2="84" />
    <ellipse className="m-accent" cx="60" cy="46" rx="30" ry="11" />
    <ellipse className="m-line" cx="60" cy="46" rx="30" ry="11" transform="rotate(60 60 46)" />
    <ellipse className="m-line" cx="60" cy="46" rx="30" ry="11" transform="rotate(-60 60 46)" />
    <circle className="m-core" cx="60" cy="46" r="5" />
  </g>
);

const AccessibilityArt = () => (
  <g>
    <polygon className="m-glass" points="36,22 84,22 84,74 36,74" />
    <circle className="m-line" cx="60" cy="48" r="13" />
    <circle className="m-core" cx="60" cy="48" r="3.5" />
    <path className="m-accent" d="M36 32V22h10M74 22h10v10M84 64v10H74M46 74H36V64" />
  </g>
);

const NetworkArt = () => (
  <g>
    <path className="m-line" d="M38 40L80 32L62 62L38 40L44 72L62 62M80 32L84 66L62 62" />
    <path className="m-accent" d="M38 40L62 62" />
    <circle className="m-solid" cx="38" cy="40" r="5" />
    <circle className="m-solid" cx="80" cy="32" r="5" />
    <circle className="m-solid" cx="44" cy="72" r="4" />
    <circle className="m-solid" cx="84" cy="66" r="4" />
    <circle className="m-core" cx="62" cy="62" r="5" />
  </g>
);

const LlmArt = () => (
  <g>
    <polygon className="m-glass" points="60,12 38,44 56,52" />
    <polygon className="m-glass m-glass--lit" points="60,12 56,52 82,42" />
    <polygon className="m-side" points="38,44 56,52 60,80" />
    <polygon className="m-side m-side--lit" points="56,52 82,42 60,80" />
    <circle className="m-core" cx="58" cy="44" r="3" />
    <circle className="m-core art-particle" cx="28" cy="26" r="1.2" />
    <circle className="m-core art-particle" cx="92" cy="24" r="1" />
    <circle className="m-core art-particle" cx="90" cy="60" r="1.2" />
  </g>
);

const BundlerArt = () => (
  <g>
    <IsoBox cx={60} cy={62} half={26} height={8} />
    <IsoBox cx={60} cy={50} half={26} height={8} />
    <IsoBox cx={60} cy={38} half={26} height={8} top="m-glass m-glass--lit" />
    <polyline className="m-accent" points="34,38 60,51 86,38" />
  </g>
);

const DevtoolsArt = () => (
  <g>
    <line className="m-line" x1="60" y1="64" x2="60" y2="82" />
    <rect className="m-solid" x="32" y="20" width="56" height="44" rx="3" />
    <rect className="m-glass" x="37" y="25" width="46" height="34" rx="1.5" />
    <path className="m-accent" d="M52 36l-7 6 7 6M68 36l7 6-7 6" />
    <path className="m-line" d="M62 35l-4 14" />
  </g>
);

const LighthouseArt = () => (
  <g>
    <polygon className="art-beam" points="66,22 108,8 108,38" />
    <polygon className="m-side" points="54,30 60,30 60,80 50,80" />
    <polygon className="m-side m-side--lit" points="60,30 66,30 70,80 60,80" />
    <polygon className="m-glass m-glass--lit" points="60,14 67,22 60,30 53,22" />
    <line className="m-accent" x1="67" y1="22" x2="104" y2="14" />
  </g>
);

const SecurityArt = () => (
  <g>
    <polygon className="m-glass" points="60,14 36,24 40,54 60,74" />
    <polygon className="m-glass m-glass--lit" points="60,14 84,24 80,54 60,74" />
    <polyline className="m-accent" points="50,42 57,50 71,34" />
  </g>
);

const ReactNativeArt = () => (
  <g>
    <rect className="m-side" x="54" y="12" width="30" height="54" rx="5" />
    <rect className="m-glass" x="42" y="20" width="30" height="56" rx="5" />
    <line className="m-accent" x1="52" y1="26" x2="62" y2="26" />
    <path className="m-line" d="M48 36h18M48 44h14M48 52h18" />
  </g>
);

const DesignPatternsArt = () => (
  <g>
    <IsoBox cx={60} cy={38} half={13} height={12} />
    <IsoBox cx={46} cy={46} half={13} height={12} />
    <IsoBox cx={74} cy={46} half={13} height={12} top="m-glass m-glass--lit" />
    <IsoBox cx={60} cy={54} half={13} height={12} />
    <polyline className="m-accent" points="61,46 74,39.5 87,46" />
  </g>
);

const DataStructuresArt = () => (
  <g>
    <path className="m-line" d="M60 22L42 44M60 22L78 44M42 44L32 68M42 44L52 68M78 44L88 68" />
    <path className="m-accent" d="M60 22L78 44L68 68" />
    <circle className="m-core" cx="60" cy="22" r="5" />
    <circle className="m-solid" cx="42" cy="44" r="4.5" />
    <circle className="m-solid" cx="78" cy="44" r="4.5" />
    <circle className="m-solid" cx="32" cy="68" r="4" />
    <circle className="m-solid" cx="52" cy="68" r="4" />
    <circle className="m-solid" cx="68" cy="68" r="4" />
    <circle className="m-solid" cx="88" cy="68" r="4" />
  </g>
);

const ART: Record<TopicId, () => React.JSX.Element> = {
  react: ReactArt,
  accessibility: AccessibilityArt,
  network: NetworkArt,
  llm: LlmArt,
  bundler: BundlerArt,
  devtools: DevtoolsArt,
  lighthouse: LighthouseArt,
  security: SecurityArt,
  'react-native': ReactNativeArt,
  'design-patterns': DesignPatternsArt,
  'data-structures': DataStructuresArt,
};

/** 토픽의 실험실 모듈 오브젝트. 공통 플린스 위에 토픽별 지오메트리를 올린다. 장식용이다. */
export const ModuleArt = ({ id }: { id: TopicId }) => {
  const Art = ART[id];

  return (
    <svg className="lab-art" viewBox="0 0 120 112" aria-hidden="true" focusable="false">
      <Plinth />
      <g className="art-object">
        <Art />
      </g>
    </svg>
  );
};
