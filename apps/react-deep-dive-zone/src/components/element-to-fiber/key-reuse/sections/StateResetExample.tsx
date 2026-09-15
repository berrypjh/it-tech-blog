'use client';

import { type ReactNode, useState } from 'react';

import { cx } from '@berrypjh/react-ui';
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  KeyRound,
  type LucideIcon,
  MessageSquare,
  Repeat,
  Send,
} from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { KeyFiberReuseContent } from '../content';

type Content = KeyFiberReuseContent['stateExample'];
type Contact = Content['contacts'][number];
type Props = { content: Content };

export const StateResetExample = ({ content }: Props) => {
  const [contact, setContact] = useState<Contact>(content.contacts[0]);

  return (
    <section
      id="state-example"
      aria-labelledby="heading-state-example"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="state-example"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Repeat className="h-5 w-5" aria-hidden="true" />}
      />

      <CodePreviewPanel code={content.code} caption="messenger.jsx" language="JSX" showWindowDots />

      <div className="flex flex-col gap-1.5">
        <div
          role="group"
          aria-label={content.toLabel}
          className="flex flex-wrap items-center gap-sm"
        >
          <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
            {content.toLabel}
          </span>
          {content.contacts.map((c) => (
            <ContactButton
              key={c.id}
              name={c.name}
              active={c.id === contact.id}
              onClick={() => setContact(c)}
            />
          ))}
        </div>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {content.guide}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md items-stretch">
        <Column
          tone="amber"
          title={content.withoutKey.title}
          code="<Chat contact={contact} />"
          Icon={MessageSquare}
          result={content.withoutKey.result}
          ResultIcon={AlertTriangle}
        >
          {/* key가 없으면 받는 사람이 바뀌어도 같은 컴포넌트로 보고 draft를 이어간다 */}
          <ChatBox
            contactName={contact.name}
            label={content.withoutKey.title}
            placeholder={content.placeholder}
          />
        </Column>
        <Column
          tone="emerald"
          title={content.withKey.title}
          code="<Chat key={contact.id} contact={contact} />"
          Icon={KeyRound}
          result={content.withKey.result}
          ResultIcon={CheckCircle2}
        >
          {/* key가 바뀌면 새로 마운트되어 draft가 초기화된다 */}
          <ChatBox
            key={contact.id}
            contactName={contact.name}
            label={content.withKey.title}
            placeholder={content.placeholder}
          />
        </Column>
      </div>

      <SectionNote icon={<Info className="h-4 w-4" aria-hidden="true" />}>
        {content.explanation}
      </SectionNote>
    </section>
  );
};

type ContactButtonProps = { name: string; active: boolean; onClick: () => void };

const ContactButton = ({ name, active, onClick }: ContactButtonProps) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    className={cx(
      'inline-flex items-center rounded-lg border-2 px-md py-1.5 text-xsm font-bold transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      active
        ? 'border-[var(--term-accent)] bg-[var(--term-surface)] text-[var(--term-accent)]'
        : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] hover:bg-[var(--term-surface)]',
    )}
  >
    {name}
  </button>
);

type ColumnProps = {
  tone: ToneKey;
  title: string;
  code: string;
  Icon: LucideIcon;
  result: string;
  ResultIcon: LucideIcon;
  children: ReactNode;
};

const Column = ({ tone, title, code, Icon, result, ResultIcon, children }: ColumnProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.fill.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <span className={cx('text-sm font-bold tracking-tight', t.text)}>{title}</span>
          <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">{code}</code>
        </div>
      </header>

      {children}

      <p
        className={cx(
          'mt-auto flex items-start gap-2 rounded-lg border px-sm py-2',
          'text-xsm font-bold leading-snug break-keep',
          t.chip,
        )}
      >
        <ResultIcon className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
        {result}
      </p>
    </article>
  );
};

type ChatBoxProps = { contactName: string; label: string; placeholder: string };

const ChatBox = ({ contactName, label, placeholder }: ChatBoxProps) => {
  const [draft, setDraft] = useState('');

  return (
    <div className="flex flex-col gap-1.5 rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-sm">
      <span className="font-mono text-[11px] font-bold text-[var(--term-muted)]">
        To: <span className="text-[var(--term-fg)]">{contactName}</span>
      </span>
      <div className="flex items-center gap-sm">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={placeholder}
          aria-label={`${label} — ${contactName}`}
          className={cx(
            'min-w-0 flex-1 rounded-md border-2 px-3 py-2 font-mono text-xsm',
            'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] placeholder:text-[var(--term-dim)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
          )}
        />
        <Send className="h-4 w-4 shrink-0 text-[var(--term-muted)]" aria-hidden="true" />
      </div>
    </div>
  );
};
