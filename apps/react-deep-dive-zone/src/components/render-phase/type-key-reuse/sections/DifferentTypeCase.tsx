import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { TypeKeyReuseContent } from '../content';
import { ArrowRightIcon, ChevronDownIcon, ComponentIcon, KeyIcon } from '../icons';

import { NextCard, PreviousCard, ResultCardView } from './case-cards';

type Props = { content: TypeKeyReuseContent['differentType'] };

export const DifferentTypeCase = ({ content }: Props) => {
  const items = [
    <PreviousCard key="prev" side={content.previous} />,
    <NextCard key="next" side={content.next} kind="replace" />,
    <ResultCardView key="result" result={content.result} />,
    <KeyTypeRoleCard key="role" role={content.roleCard} />,
  ];

  return (
    <section id="different-type" aria-labelledby="heading-different-type" className="space-y-md">
      <SectionHeader
        id="different-type"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ComponentIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.1fr)] items-stretch gap-3">
        {items.map((node, idx) => (
          <Fragment key={idx}>
            <div className="min-w-0">{node}</div>
            {idx < items.length - 1 && (
              <span
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center xl:px-0.5 py-1 xl:py-0 text-[var(--term-accent)]"
              >
                <ArrowRightIcon className="hidden xl:block h-5 w-5" />
                <ChevronDownIcon className="xl:hidden h-5 w-5" />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

const KeyTypeRoleCard = ({ role }: { role: TypeKeyReuseContent['differentType']['roleCard'] }) => (
  <article
    aria-labelledby="key-type-role-title"
    className="flex h-full flex-col gap-3 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_1px_0_var(--term-border)]"
  >
    <h3
      id="key-type-role-title"
      className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep"
    >
      {role.title}
    </h3>
    <RoleRow
      tone="teal"
      icon={<KeyIcon className="h-4 w-4" />}
      label={role.key.label}
      description={role.key.description}
    />
    <RoleRow
      tone="violet"
      icon={<ComponentIcon className="h-4 w-4" />}
      label={role.type.label}
      description={role.type.description}
      detail={role.type.detail}
    />
  </article>
);

const RoleRow = ({
  tone,
  icon,
  label,
  description,
  detail,
}: {
  tone: 'teal' | 'violet';
  icon: React.ReactNode;
  label: string;
  description: string;
  detail?: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article className={cn('flex items-start gap-2 rounded-md border p-sm', t.border)}>
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border',
          t.chip,
        )}
      >
        {icon}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className={cn('font-mono text-xsm font-bold', t.text)}>{label}</code>
        <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-fg)] break-keep">
          {description}
        </p>
        {detail && (
          <p className="text-xxsm leading-snug text-[var(--term-muted)] break-keep">{detail}</p>
        )}
      </div>
    </article>
  );
};
