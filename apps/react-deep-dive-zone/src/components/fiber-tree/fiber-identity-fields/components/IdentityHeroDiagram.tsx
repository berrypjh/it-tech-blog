import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FiberIdentityFieldsContent, IdentityField, IdentityFieldKey } from '../content';
import { CodeIcon, KeyIcon, TagIcon, TargetIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['hero']; className?: string };

const fieldIcon: Record<IdentityFieldKey, typeof TagIcon> = {
  tag: TagIcon,
  key: KeyIcon,
  elementType: CodeIcon,
  type: TargetIcon,
};

/**
 * Hero 핵심 비주얼.
 * Fiber 객체 한 덩어리가 정체성 필드(tag, key, elementType, type)로
 * 나뉘는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const IdentityHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.cardLabel} 객체는 ${content.fiberFields
    .map((f) => `${f.label}(${f.meaning})`)
    .join(', ')} 필드로 정체성을 나누어 저장합니다.`;

  const objectCode = `type ${content.cardLabel} = {\n${content.fiberFields
    .map((f) => `  ${f.label}; // ${f.meaning}`)
    .join('\n')}\n  ${content.extraNote}\n};`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm">
        <CodePreviewPanel code={objectCode} caption={content.cardLabel} language="TS" size="md" />

        <DownArrow />

        <ol className="grid grid-cols-1 gap-sm @sm:grid-cols-2" aria-hidden="true">
          {content.fiberFields.map((field) => (
            <li key={field.id}>
              <FieldCard field={field} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const FieldCard = ({ field }: { field: IdentityField }) => {
  const t = toneTokens[field.tone];
  const Icon = fieldIcon[field.id];
  return (
    <article
      className={cn(
        'flex h-full items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={field.tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cn('truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {field.label}
        </code>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {field.meaning}
        </span>
      </div>
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
