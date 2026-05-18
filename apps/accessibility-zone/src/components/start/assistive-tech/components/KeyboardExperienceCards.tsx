import { cn } from '@it-tech-blog/utils';

import type { AssistiveTechContent, KeyboardCard } from '../content';

const NumberBadge = ({ value }: { value: string }) => (
  <span
    aria-hidden="true"
    className="flex h-7 w-7 items-center justify-center rounded-rounded bg-primary-pr100 text-xxsm font-extraBold text-text-primary dark:bg-primary-pr900/40"
  >
    {value}
  </span>
);

const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M12 5v14M6 13l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CardShell = ({
  card,
  children,
  className,
}: {
  card: KeyboardCard;
  children: React.ReactNode;
  className?: string;
}) => (
  <article
    className={cn(
      'flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm transition-all hover:-translate-y-0.5 hover:border-stroke-primary hover:shadow-md focus-within:ring-2 focus-within:ring-stroke-primary focus-within:ring-offset-2',
      className,
    )}
  >
    <div className="flex items-center gap-2">
      <NumberBadge value={card.number} />
      <h3 className="text-sm font-bold leading-snug text-text-default">{card.title}</h3>
    </div>
    <p className="text-xsm leading-relaxed text-text-light">{card.body}</p>
    {children}
  </article>
);

export const TabOrderCard = ({ card, items }: { card: KeyboardCard; items: string[] }) => (
  <CardShell card={card}>
    <ol className="mt-auto flex flex-col gap-1">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-center gap-2 rounded-md border border-stroke-default bg-background-default/40 px-sm py-1.5 text-xsm text-text-default"
        >
          <span
            aria-hidden="true"
            className="flex h-5 w-5 items-center justify-center rounded-rounded bg-background-primary text-[0.625rem] font-extraBold text-text-contrastText"
          >
            {i + 1}
          </span>
          <span className="flex-1">{item}</span>
          {i < items.length - 1 && (
            <span aria-hidden="true" className="text-text-light">
              <ArrowDownIcon />
            </span>
          )}
        </li>
      ))}
    </ol>
  </CardShell>
);

export const FocusRingCard = ({
  card,
  focusRing,
}: {
  card: KeyboardCard;
  focusRing: AssistiveTechContent['keyboard']['focusRing'];
}) => {
  const id = 'focus-ring-demo-input';
  return (
    <CardShell card={card}>
      <div className="mt-auto flex flex-col gap-sm rounded-md border border-stroke-default bg-background-default/40 p-sml">
        <label htmlFor={id} className="text-[0.625rem] font-semiBold text-text-light">
          {focusRing.searchLabel}
        </label>
        <input
          id={id}
          type="text"
          placeholder={focusRing.inputPlaceholder}
          className="rounded-md border border-stroke-primary bg-background-surface px-2 py-1.5 text-xsm text-text-default ring-2 ring-stroke-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary"
        />
        <div className="flex gap-1.5">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-background-primary px-3 py-1.5 text-xsm font-semiBold text-text-contrastText shadow-sm transition-colors hover:bg-primary-pr700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
          >
            {focusRing.searchLabel}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-stroke-default bg-background-surface px-3 py-1.5 text-xsm font-semiBold text-text-default transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
          >
            {focusRing.cancelLabel}
          </button>
        </div>
      </div>
    </CardShell>
  );
};

export const SkipLinkCard = ({
  card,
  skipLink,
}: {
  card: KeyboardCard;
  skipLink: AssistiveTechContent['keyboard']['skipLink'];
}) => (
  <CardShell card={card}>
    <div className="mt-auto flex flex-col gap-sm">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-1 rounded-md border border-stroke-primary bg-primary-pr100/70 px-sm py-1.5 text-xsm font-semiBold text-text-primary transition-colors hover:bg-primary-pr100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
      >
        {skipLink.linkLabel}
      </button>
      <ul className="flex flex-col gap-1">
        {skipLink.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-stroke-default/60 bg-background-default/40 px-sm py-1.5 text-xsm text-text-default"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </CardShell>
);

export const FocusTrapModalCard = ({
  card,
  focusTrap,
}: {
  card: KeyboardCard;
  focusTrap: AssistiveTechContent['keyboard']['focusTrap'];
}) => (
  <CardShell card={card}>
    <div className="mt-auto flex flex-col gap-sm">
      <div
        role="group"
        aria-label={focusTrap.modalTitle}
        className="rounded-md border border-stroke-default bg-background-surface p-sml shadow-md"
      >
        <p className="text-xsm font-bold text-text-default">{focusTrap.modalTitle}</p>
        <p className="mt-1 text-[0.6875rem] leading-relaxed text-text-light">
          {focusTrap.modalBody}
        </p>
        <div className="mt-sm flex justify-end gap-1.5">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-stroke-default bg-background-surface px-2.5 py-1.5 text-[0.6875rem] font-semiBold text-text-default transition-colors hover:border-stroke-primary hover:bg-primary-pr100/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
          >
            {focusTrap.cancelLabel}
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-background-primary px-2.5 py-1.5 text-[0.6875rem] font-semiBold text-text-contrastText transition-colors hover:bg-primary-pr700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary focus-visible:ring-offset-2"
          >
            {focusTrap.saveLabel}
          </button>
        </div>
      </div>
      <p className="flex flex-col gap-0.5 rounded-md bg-background-default/50 px-sm py-1.5 text-[0.625rem] leading-snug text-text-light">
        <span>{focusTrap.tabHint}</span>
        <span>{focusTrap.shiftTabHint}</span>
      </p>
    </div>
  </CardShell>
);
