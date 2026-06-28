import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import { ArrowDownIcon, ArrowRightIcon, BoxIcon, HexagonIcon } from '../icons';

type Props = {
  elementTitle: string;
  elementFields: string[];
  fiberTitle: string;
  fiberFields: string[];
  /** sm: Hero용 컴팩트, md: 본문 시각화용 */
  size?: 'sm' | 'md';
};

const toObjectCode = (fields: string[]) => `{\n${fields.map((f) => `  ${f},`).join('\n')}\n}`;

/**
 * Element 작은 객체 카드 → 화살표 → Fiber 큰 객체 카드 다이어그램.
 * Element는 emerald, Fiber는 violet, 화살표는 sky.
 */
export const ExpansionDiagram = ({
  elementTitle,
  elementFields,
  fiberTitle,
  fiberFields,
  size = 'sm',
}: Props) => (
  <>
    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_auto_minmax(0,_1.4fr)]',
        'gap-sm lg:gap-md',
      )}
    >
      <ObjectCard
        tone="emerald"
        eyebrow="source"
        title={elementTitle}
        fields={elementFields}
        icon={<BoxIcon className="h-5 w-5" />}
        size={size}
      />
      <ExpansionArrow />
      <ObjectCard
        tone="violet"
        eyebrow="expanded"
        title={fiberTitle}
        fields={fiberFields}
        icon={<HexagonIcon className="h-5 w-5" />}
        size={size}
        showCount
      />
    </div>
    <p className="sr-only">
      Element는 type, key, props 세 가지 필드만 가지지만, Fiber는 그 위에 트리 구조(child / sibling
      / return), 업데이트 상태(memoizedState, updateQueue 등), 작업 상태(flags, lanes 등), alternate
      등 훨씬 많은 필드를 추가로 가집니다.
    </p>
  </>
);

const ObjectCard = ({
  tone,
  eyebrow,
  title,
  fields,
  icon,
  size,
  showCount = false,
}: {
  tone: ToneKey;
  eyebrow: string;
  title: string;
  fields: string[];
  icon: React.ReactNode;
  size: 'sm' | 'md';
  showCount?: boolean;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 min-w-0 h-full',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.fill.border,
        size === 'sm' ? 'p-md' : 'p-md sm:p-lg',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-sm min-w-0">
          <ToneIconBox tone={tone} size="md">
            {icon}
          </ToneIconBox>
          <div className="flex flex-col">
            <span
              className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', t.text)}
            >
              {eyebrow}
            </span>
            <code
              className={cn(
                'font-mono font-extrabold tracking-tight',
                size === 'sm' ? 'text-md' : 'text-lg',
                t.text,
              )}
            >
              {title}
            </code>
          </div>
        </div>
        {showCount && (
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5',
              'text-[10px] font-bold uppercase tracking-wider font-mono',
              t.chip,
            )}
          >
            {fields.length} fields
          </span>
        )}
      </header>

      <CodePreviewPanel code={toObjectCode(fields)} language="JS" showWindowDots={false} />
    </article>
  );
};

const ExpansionArrow = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <div className="flex flex-col items-center gap-1">
      <ToneIconBox tone="sky" size="md">
        <ArrowDownIcon className="h-5 w-5 lg:hidden" />
        <ArrowRightIcon className="h-5 w-5 hidden lg:block" />
      </ToneIconBox>
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5',
          'text-[10px] font-bold uppercase tracking-wider font-mono',
          toneTokens.sky.chip,
        )}
      >
        expand
      </span>
    </div>
  </div>
);
