import { cx } from '@berrypjh/react-ui';
import {
  ArrowLeftRight,
  ArrowUpDown,
  FlaskConical,
  Layers,
  Monitor,
  RefreshCw,
  Workflow,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import { roleTone } from '../components/FiberPairCard';
import type { AlternateFiberContent, FiberRole } from '../content';

type Props = { content: AlternateFiberContent['doubleBuffering'] };

export const DoubleBufferingSection = ({ content }: Props) => (
  <section
    id="double-buffering"
    aria-labelledby="heading-double-buffering"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="double-buffering"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <div
      className={cx(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
        'gap-md',
      )}
    >
      <Card
        variant="current"
        icon={<Monitor className="h-5 w-5" aria-hidden="true" />}
        title={content.leftTitle}
        body={content.leftBody}
      />

      {/* center: 준비 중 */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <ToneIconBox tone="sky" size="md">
            <RefreshCw className="h-5 w-5" aria-hidden="true" />
          </ToneIconBox>
          <span
            className={cx(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
              'text-[11px] font-bold uppercase tracking-wider font-mono',
              toneTokens.sky.chip,
            )}
          >
            <FlaskConical className="h-3 w-3" aria-hidden="true" />
            {content.centerLabel}
          </span>
          <span className="text-[var(--term-accent)]">
            <ArrowUpDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
            <ArrowLeftRight className="h-4 w-4 hidden lg:block" aria-hidden="true" />
          </span>
        </div>
      </div>

      <Card
        variant="workInProgress"
        icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
        title={content.rightTitle}
        body={content.rightBody}
      />
    </div>

    <SectionNote icon={<Layers className="h-4 w-4" aria-hidden="true" />}>
      {content.bottomMessage}
    </SectionNote>
  </section>
);

const Card = ({
  variant,
  icon,
  title,
  body,
}: {
  variant: FiberRole;
  icon: React.ReactNode;
  title: string;
  body: string;
}) => {
  const tone = roleTone[variant];
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg min-w-0',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.fill.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="md">
          {icon}
        </ToneIconBox>
        <h3 className={cx('text-sm sm:text-md font-extrabold tracking-tight break-keep', t.text)}>
          {title}
        </h3>
      </header>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">{body}</p>
    </article>
  );
};
