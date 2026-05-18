import type { AssistiveTechContent } from '../content';

const CrossIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true">
    <path d="M6 6l12 12M6 18l12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true">
    <path
      d="M5 12l4 4L19 7"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
    <path
      d="M12 20s-7-4.35-9.5-9C1 8.5 3 5 6.5 5c2 0 3 1 4 2.5C11.5 6 12.5 5 14.5 5 18 5 20 8.5 18.5 11c-2.5 4.65-6.5 9-6.5 9z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const PairLabel = ({ label, tone }: { label: string; tone: 'error' | 'success' }) => (
  <div
    className={
      'flex items-center gap-1 text-[0.625rem] font-semiBold uppercase tracking-wide ' +
      (tone === 'error' ? 'text-text-error' : 'text-text-success')
    }
  >
    <span
      aria-hidden="true"
      className={
        'flex h-4 w-4 items-center justify-center rounded-rounded ' +
        (tone === 'error'
          ? 'bg-error-er100 text-text-error dark:bg-error-er900/40'
          : 'bg-success-su100 text-text-success dark:bg-success-su900/40')
      }
    >
      {tone === 'error' ? <CrossIcon /> : <CheckIcon />}
    </span>
    {label}
  </div>
);

const PairBox = ({ tone, children }: { tone: 'error' | 'success'; children: React.ReactNode }) => (
  <div
    className={
      'flex min-h-[6.25rem] flex-col gap-1 rounded-md border p-sml ' +
      (tone === 'error'
        ? 'border-stroke-error/40 bg-error-er100/30'
        : 'border-stroke-success/40 bg-success-su100/30')
    }
  >
    {children}
  </div>
);

const LabelCard = ({
  content,
  beforeLabel,
  afterLabel,
}: {
  content: AssistiveTechContent['comparisons']['label'];
  beforeLabel: string;
  afterLabel: string;
}) => {
  const afterId = 'compare-label-after';
  return (
    <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm">
      <h3 className="text-sm font-bold text-text-default">라벨 없는 input vs 올바른 input</h3>
      <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
        <div className="flex flex-col gap-sm">
          <PairLabel label={beforeLabel} tone="error" />
          <PairBox tone="error">
            <span className="text-[0.6875rem] text-text-default">{content.beforeVisualLabel}</span>
            <input
              type="text"
              placeholder={content.beforePlaceholder}
              aria-label={content.beforeVisualLabel}
              className="rounded-sm border border-stroke-default bg-background-surface px-2 py-1 text-[0.6875rem]"
            />
            <p className="text-[0.625rem] leading-snug text-text-error">{content.beforeNote}</p>
          </PairBox>
        </div>
        <div className="flex flex-col gap-sm">
          <PairLabel label={afterLabel} tone="success" />
          <PairBox tone="success">
            <label htmlFor={afterId} className="text-[0.6875rem] font-semiBold text-text-default">
              {content.afterLabel}
            </label>
            <input
              id={afterId}
              type="text"
              placeholder={content.afterPlaceholder}
              className="rounded-sm border border-stroke-default bg-background-surface px-2 py-1 text-[0.6875rem]"
            />
            <p className="text-[0.625rem] leading-snug text-text-success">{content.afterNote}</p>
          </PairBox>
        </div>
      </div>
    </article>
  );
};

const IconButtonCard = ({
  content,
  beforeLabel,
  afterLabel,
}: {
  content: AssistiveTechContent['comparisons']['iconButton'];
  beforeLabel: string;
  afterLabel: string;
}) => (
  <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm">
    <h3 className="text-sm font-bold text-text-default">이름 없는 아이콘 버튼 vs 올바른 버튼</h3>
    <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
      <div className="flex flex-col gap-sm">
        <PairLabel label={beforeLabel} tone="error" />
        <PairBox tone="error">
          <div className="flex flex-1 items-center justify-center">
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none flex h-10 w-10 items-center justify-center rounded-rounded border border-stroke-default bg-background-surface text-text-error"
            >
              <HeartIcon />
            </button>
          </div>
          <p className="text-[0.625rem] leading-snug text-text-error">{content.beforeNote}</p>
        </PairBox>
      </div>
      <div className="flex flex-col gap-sm">
        <PairLabel label={afterLabel} tone="success" />
        <PairBox tone="success">
          <div className="flex flex-1 items-center justify-center">
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none inline-flex items-center gap-1.5 rounded-md border border-stroke-success/50 bg-background-surface px-3 py-1.5 text-xsm font-semiBold text-text-default"
            >
              <HeartIcon />
              {content.afterLabel}
            </button>
          </div>
          <p className="text-[0.625rem] leading-snug text-text-success">{content.afterNote}</p>
        </PairBox>
      </div>
    </div>
  </article>
);

const HeadingCard = ({
  content,
  beforeLabel,
  afterLabel,
}: {
  content: AssistiveTechContent['comparisons']['heading'];
  beforeLabel: string;
  afterLabel: string;
}) => (
  <article className="flex h-full flex-col gap-sm rounded-xl border border-stroke-default bg-background-surface p-mdl shadow-sm">
    <h3 className="text-sm font-bold text-text-default">
      잘못된 heading 구조 vs 적절한 heading 구조
    </h3>
    <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
      <div className="flex flex-col gap-sm">
        <PairLabel label={beforeLabel} tone="error" />
        <PairBox tone="error">
          <ul className="flex flex-col gap-1 text-[0.6875rem] font-mono text-text-default">
            {content.beforeLines.map((line) => (
              <li key={line} className="rounded-sm bg-background-surface px-1.5 py-0.5">
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-auto text-[0.625rem] leading-snug text-text-error">
            {content.beforeNote}
          </p>
        </PairBox>
      </div>
      <div className="flex flex-col gap-sm">
        <PairLabel label={afterLabel} tone="success" />
        <PairBox tone="success">
          <ul className="flex flex-col gap-1 text-[0.6875rem] font-mono text-text-default">
            {content.afterLines.map((line, i) => (
              <li
                key={line}
                className="rounded-sm bg-background-surface px-1.5 py-0.5"
                style={{ marginLeft: `${i * 12}px` }}
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-auto text-[0.625rem] leading-snug text-text-success">
            {content.afterNote}
          </p>
        </PairBox>
      </div>
    </div>
  </article>
);

export const ScreenReaderComparisonSection = ({
  content,
}: {
  content: AssistiveTechContent['comparisons'];
}) => {
  return (
    <section
      aria-labelledby="comparison-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-mdl flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            03
          </span>
          비교 예시
        </span>
        <h2 id="comparison-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm leading-relaxed text-text-light sm:text-sm">{content.description}</p>
      </header>
      <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
        <LabelCard
          content={content.label}
          beforeLabel={content.beforeLabel}
          afterLabel={content.afterLabel}
        />
        <IconButtonCard
          content={content.iconButton}
          beforeLabel={content.beforeLabel}
          afterLabel={content.afterLabel}
        />
        <HeadingCard
          content={content.heading}
          beforeLabel={content.beforeLabel}
          afterLabel={content.afterLabel}
        />
      </div>
    </section>
  );
};
