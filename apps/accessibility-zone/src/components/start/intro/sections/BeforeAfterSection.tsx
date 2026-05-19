import { ComparisonCard } from '../components/ComparisonCard';
import type { IntroContent } from '../content';

const InputBox = ({
  label,
  value,
  placeholder,
  showLabel,
  focused,
}: {
  label: string;
  value?: string;
  placeholder?: string;
  showLabel: boolean;
  focused?: boolean;
}) => (
  <div className="space-y-1">
    {showLabel && <div className="text-[0.625rem] font-semiBold text-text-default">{label}</div>}
    <div
      className={
        'flex h-7 items-center rounded-sm border bg-background-surface px-2 text-[0.6875rem] ' +
        (focused
          ? 'border-stroke-primary ring-2 ring-stroke-primary/40 text-text-default'
          : 'border-stroke-default text-text-light/80')
      }
    >
      {value ?? placeholder}
    </div>
  </div>
);

const DivButton = () => (
  <div className="flex items-center justify-center">
    <div className="rounded-sm border border-dashed border-stroke-default bg-background-default/70 px-3 py-1.5 text-[0.6875rem] text-text-light">
      <span className="font-semiBold">{'<div>'}</span> 제출하기
    </div>
  </div>
);

const RealButton = () => (
  <div className="flex items-center justify-center">
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      className="pointer-events-none rounded-md bg-background-primary px-3 py-1.5 text-[0.6875rem] font-semiBold text-text-contrastText shadow-sm"
    >
      제출하기
    </button>
  </div>
);

const ImagePlaceholder = ({ withAlt }: { withAlt: boolean }) => (
  <div className="flex items-center gap-2">
    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-sm bg-secondary-se100 dark:bg-secondary-se900/40">
      <svg viewBox="0 0 80 60" className="h-full w-full text-text-secondary" aria-hidden="true">
        <path d="M0 50 L20 30 L34 42 L50 20 L80 50 V60 H0 Z" fill="currentColor" opacity="0.55" />
        <circle cx="60" cy="18" r="6" fill="currentColor" opacity="0.75" />
      </svg>
      {!withAlt && (
        <span
          className="absolute right-0.5 top-0.5 rounded-rounded bg-error-er100 px-1 py-0.5 text-[0.5rem] font-bold text-text-error dark:bg-error-er900/40"
          aria-hidden="true"
        >
          alt=""
        </span>
      )}
    </div>
    {withAlt ? (
      <span className="text-[0.625rem] leading-snug text-text-default">
        푸른 하늘과 산이 있는 풍경 사진
      </span>
    ) : (
      <span className="text-[0.625rem] leading-snug text-text-light/70">설명 없음</span>
    )}
  </div>
);

const FocuslessButton = () => (
  <div className="flex items-center justify-center">
    <div className="rounded-md bg-background-default/70 px-3 py-1.5 text-[0.6875rem] font-semiBold text-text-light/80">
      다음 단계
    </div>
  </div>
);

const FocusedButton = () => (
  <div className="flex items-center justify-center">
    <div className="rounded-md bg-background-primary px-3 py-1.5 text-[0.6875rem] font-semiBold text-text-contrastText shadow-sm ring-2 ring-stroke-primary/60 ring-offset-2">
      다음 단계
    </div>
  </div>
);

export const BeforeAfterSection = ({ content }: { content: IntroContent['comparison'] }) => {
  const visuals: { before: React.ReactNode; after: React.ReactNode }[] = [
    {
      before: <InputBox label="이름" placeholder="이름을 입력하세요" showLabel={false} />,
      after: <InputBox label="이름" value="홍길동" showLabel={true} focused />,
    },
    {
      before: <DivButton />,
      after: <RealButton />,
    },
    {
      before: <ImagePlaceholder withAlt={false} />,
      after: <ImagePlaceholder withAlt={true} />,
    },
    {
      before: <FocuslessButton />,
      after: <FocusedButton />,
    },
  ];

  return (
    <section
      aria-labelledby="comparison-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <header className="mb-lg flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            02
          </span>
          비교로 이해하기
        </span>
        <h2 id="comparison-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
        {content.cards.map((card, i) => (
          <ComparisonCard
            key={card.id}
            index={i}
            title={card.title}
            beforeLabel={content.beforeLabel}
            afterLabel={content.afterLabel}
            beforeVisual={visuals[i].before}
            afterVisual={visuals[i].after}
            beforeNote={card.before.note}
            afterNote={card.after.note}
          />
        ))}
      </div>
    </section>
  );
};
