import { cx } from '@berrypjh/react-ui';
import { Database, FileText, Flag, type LucideIcon, SquareDashed } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnqueueConcurrentHookUpdateContent, FourElement, FourElementIcon } from '../content';

const elementIconByName: Record<FourElementIcon, LucideIcon> = {
  squareDashed: SquareDashed,
  database: Database,
  fileText: FileText,
  flag: Flag,
};

type Props = { content: EnqueueConcurrentHookUpdateContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * fiber / queue / update / lane 네 요소가 한데 묶여
 * enqueueConcurrentHookUpdate(...) 큐 처리 경로로 등록되는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const EnqueueHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.title.line3} ${content.description} ${content.functionCard.code} ${content.functionCard.caption}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
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
      className={cx(
        'flex w-full min-w-0 items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={element.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className={cx('truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {element.title}
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {element.question}
        </span>
      </span>
    </article>
  );
};
