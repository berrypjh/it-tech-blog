import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnqueueConcurrentHookUpdateContent, FourElement } from '../content';
import { elementIconByName } from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * fiber / queue / update / lane 네 요소가 한데 묶여
 * enqueueConcurrentHookUpdate(...) 큐 처리 경로로 등록되는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const EnqueueHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.elements
    .map((el) => el.title)
    .join(', ')} 네 요소가 enqueueConcurrentHookUpdate 호출로 묶여 queue 처리 경로로 등록됩니다.`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <ul className="grid grid-cols-2 gap-2">
          {content.elements.map((el) => (
            <li key={el.id} className="flex min-w-0">
              <ElementCard element={el} />
            </li>
          ))}
        </ul>

        <DownArrow />

        <CodePreviewPanel
          code={content.functionCard.code}
          caption={content.functionCard.caption}
          size="md"
        />
      </div>
    </HeroDiagramShell>
  );
};

const ElementCard = ({ element }: { element: FourElement }) => {
  const t = toneTokens[element.tone];
  const Icon = elementIconByName[element.icon];
  return (
    <article
      className={cn(
        'flex w-full min-w-0 items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={element.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {element.title}
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {element.question}
        </span>
      </span>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
