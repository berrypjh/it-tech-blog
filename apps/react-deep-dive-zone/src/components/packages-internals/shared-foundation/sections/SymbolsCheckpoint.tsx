import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { GithubButton } from '../../../shared/GithubButton';
import { GithubIcon } from '../../../shared/GithubIcon';
import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import type { SharedContent } from '../content';
import { ExternalLinkIcon, sharedIcon } from '../icons';

type Props = { content: SharedContent['symbolsCheckpoint']; sectionId: string };

export const SymbolsCheckpoint = ({ content, sectionId }: Props) => {
  const cp = content.checkpoint;

  return (
    <section
      id={sectionId}
      aria-labelledby="heading-symbols-checkpoint"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="symbols-checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckHeaderIcon />}
      />

      {/* 부가 메모: 전체 너비 상단 밴드 */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {content.callouts.map((callout) => (
          <li key={callout.id}>
            <CalloutCard title={callout.title} code={callout.code} />
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-start">
        {/* 좌측 정보 카드 */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <ul className="flex flex-col divide-y divide-dashed divide-[var(--term-border)]">
            <li className="py-3 first:pt-0">
              <CheckpointRow
                label={cp.file.label}
                value={cp.file.value}
                iconName="fileText"
                tone="sky"
                isMonoValue
              />
            </li>
            <li className="py-3">
              <CheckpointRow
                label={cp.look.label}
                value={cp.look.values.join(', ')}
                iconName="fileCode"
                tone="violet"
                isMonoValue
              />
            </li>
            <li className="py-3 last:pb-0">
              <CheckpointRow
                label={cp.question.label}
                value={cp.question.value}
                iconName="help"
                tone="amber"
              />
            </li>
          </ul>
        </article>

        {/* 우측 코드 패널 + GitHub 링크 + 콜아웃 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <div className="flex flex-col sm:flex-row gap-2">
            {content.codeLinks.map((link, i) =>
              i === 0 ? (
                <GithubButton
                  key={link.href}
                  href={link.href}
                  label={<span className="font-mono">{link.label}</span>}
                  className="min-w-0"
                />
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold min-w-0',
                    'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  )}
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span className="font-mono">{link.label}</span>
                  <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

type RowProps = {
  label: string;
  value: string;
  iconName: 'fileText' | 'fileCode' | 'help';
  tone: 'sky' | 'violet' | 'amber';
  isMonoValue?: boolean;
};

const CheckpointRow = ({ label, value, iconName, tone, isMonoValue = false }: RowProps) => {
  const Icon = sharedIcon[iconName];
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono">
        {label}
      </span>
      <div className="flex items-start gap-2">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn(
            'min-w-0 flex-1 pt-1 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-all',
            isMonoValue && 'font-mono',
          )}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

const CalloutCard = ({ title, code }: { title: string; code: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-1.5 rounded-xl border p-md',
      'bg-[var(--term-bg)] border-[var(--term-border)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-[var(--term-muted)]">
      {title}
    </span>
    <code className="text-xsm font-mono leading-snug break-all text-[var(--term-fg)]">{code}</code>
  </article>
);

const CheckHeaderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
