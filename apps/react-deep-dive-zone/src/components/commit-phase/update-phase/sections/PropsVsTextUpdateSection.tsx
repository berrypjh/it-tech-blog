import { cx } from '@berrypjh/react-ui';
import { Lightbulb, Lock, Sparkles, Type } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DiffRow, UpdatePhaseContent } from '../content';

type Props = { content: UpdatePhaseContent['propsVsText'] };

export const PropsVsTextUpdateSection = ({ content }: Props) => (
  <section
    id="props-vs-text"
    aria-labelledby="heading-props-vs-text"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="props-vs-text"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
      <DiffCard
        title={content.propsCard.title}
        description={content.propsCard.description}
        rows={content.propsCard.rows}
        tone="sky"
        icon={<Lock className="h-5 w-5" aria-hidden="true" />}
      />
      <DiffCard
        title={content.textCard.title}
        description={content.textCard.description}
        rows={content.textCard.rows}
        tone="teal"
        icon={<Type className="h-5 w-5" aria-hidden="true" />}
      />
      <PointCard title={content.pointTitle} text={content.pointText} />
    </div>
  </section>
);

const DiffCard = ({
  title,
  description,
  rows,
  tone,
  icon,
}: {
  title: string;
  description: string;
  rows: DiffRow[];
  tone: ToneKey;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone={tone}>{icon}</ToneIconBox>
        <code className={cx('text-xsm sm:text-sm font-bold font-mono break-all', t.fill.text)}>
          {title}
        </code>
      </header>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {description}
      </p>

      <ul className="flex flex-col gap-2 mt-auto">
        {rows.map((row) => (
          <li
            key={row.label}
            className={cx('flex flex-col gap-0.5 rounded-md border p-sm', t.border, t.fill.bg)}
          >
            <span
              className={cx('text-[10px] font-mono uppercase tracking-wider font-bold', t.text)}
            >
              {row.label}
            </span>
            <code className="text-xsm font-mono text-[var(--term-fg)] break-all">{row.value}</code>
          </li>
        ))}
      </ul>
    </article>
  );
};

const PointCard = ({ title, text }: { title: string; text: string }) => {
  const t = toneTokens.amber;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="amber">
          <Lightbulb className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-xsm sm:text-sm font-bold uppercase tracking-wider', t.fill.text)}>
          {title}
        </h3>
      </header>

      <p className={cx('text-sm sm:text-md leading-relaxed font-bold break-keep', t.fill.text)}>
        {text}
      </p>
    </article>
  );
};
