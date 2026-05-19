import { cn } from '@it-tech-blog/utils';

import type { DisabilitiesContent, SimulationModeId } from '../content';

type Props = {
  preview: DisabilitiesContent['simulator']['preview'];
  mode: SimulationModeId;
  contrastLevel: number;
  fontScale: number;
};

const modeFilter = (mode: SimulationModeId): string => {
  switch (mode) {
    case 'magnify-blur':
      return 'blur(1.5px) contrast(0.9)';
    case 'color-blind':
      return 'grayscale(0.7) saturate(0.6) sepia(0.2)';
    case 'distraction':
      return 'contrast(0.95)';
    default:
      return 'none';
  }
};

const CartIcon = ({ ariaLabel }: { ariaLabel: string }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" role="img" aria-label={ariaLabel}>
    <path
      d="M3 3h2l3 13h12l2-9H6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="20" r="1.5" fill="currentColor" />
    <circle cx="18" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const EcoBagSvg = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
    <path
      d="M14 22h32l-3 30H17z"
      fill="rgb(var(--ds-success-su300-rgb))"
      stroke="rgb(var(--ds-success-su600-rgb))"
      strokeWidth="1.5"
    />
    <path
      d="M22 22v-4a8 8 0 0116 0v4"
      stroke="rgb(var(--ds-success-su700-rgb))"
      strokeWidth="2"
      fill="none"
    />
    <text
      x="30"
      y="42"
      fontSize="10"
      fontWeight="700"
      textAnchor="middle"
      fill="rgb(var(--ds-success-su800-rgb))"
    >
      ECO
    </text>
  </svg>
);

const TumblerSvg = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
    <rect
      x="20"
      y="14"
      width="20"
      height="36"
      rx="3"
      fill="rgb(var(--ds-primary-pr300-rgb))"
      stroke="rgb(var(--ds-primary-pr600-rgb))"
      strokeWidth="1.5"
    />
    <rect x="22" y="18" width="16" height="4" rx="1" fill="rgb(var(--ds-primary-pr500-rgb))" />
    <rect
      x="22"
      y="26"
      width="16"
      height="18"
      rx="1"
      fill="rgb(var(--ds-background-surface-rgb))"
      opacity="0.25"
    />
  </svg>
);

const PlantSvg = () => (
  <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden="true">
    <path
      d="M30 44c-6-2-12-10-12-18 4 2 9 5 12 12 3-7 8-10 12-12 0 8-6 16-12 18z"
      fill="rgb(var(--ds-success-su400-rgb))"
    />
    <path d="M30 40v12" stroke="rgb(var(--ds-success-su700-rgb))" strokeWidth="2" />
    <path
      d="M20 50h20l-2 6H22z"
      fill="rgb(var(--ds-warning-wa600-rgb))"
      stroke="rgb(var(--ds-warning-wa800-rgb))"
      strokeWidth="1"
    />
  </svg>
);

export const PreviewWebsitePanel = ({ preview, mode, contrastLevel, fontScale }: Props) => {
  // contrastLevel: 0..100, 50 = neutral filter, <50 lowers contrast, >50 increases
  const contrastValue = 0.4 + (contrastLevel / 100) * 1.2; // 0.4..1.6

  const distractionOverlay = mode === 'distraction';
  const showFocusRings = mode === 'keyboard-only';

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border border-stroke-default bg-background-surface shadow-md">
        <div
          className={cn('relative', mode === 'low-vision' && 'text-text-light/80')}
          style={{
            filter: `${modeFilter(mode)} contrast(${contrastValue})`,
            fontSize: `${fontScale}%`,
          }}
        >
          {/* nav */}
          <div className="flex items-center justify-between gap-2 border-b border-stroke-default bg-background-surface px-lg py-2.5">
            <span className="flex min-w-0 items-center gap-1.5 text-xsm font-extraBold text-text-success">
              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-rounded bg-success-su100 text-text-success dark:bg-success-su900/40"
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none">
                  <path
                    d="M12 3v18M5 12l7-9 7 9-7 9z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="truncate">{preview.brand}</span>
            </span>
            <nav
              className="hidden min-w-0 gap-3 text-[0.6875rem] text-text-default md:flex"
              aria-hidden="true"
            >
              {preview.nav.map((item) => (
                <span key={item} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </nav>
            <span
              className={cn(
                'flex h-7 w-7 shrink-0 items-center justify-center rounded-rounded text-text-default',
                showFocusRings && 'ring-2 ring-stroke-primary ring-offset-1',
              )}
            >
              <CartIcon ariaLabel={preview.cartAria} />
            </span>
          </div>

          {/* hero */}
          <div className="grid grid-cols-1 gap-md p-lg md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-lg md:p-lg">
            <div className="flex min-w-0 flex-col justify-center gap-1.5">
              <p className="text-xsm font-semiBold text-text-success">{preview.heroLine1}</p>
              <p className="text-md font-extraBold leading-snug text-text-default sm:text-lg">
                {preview.heroLine2}
              </p>
              <p className="text-[0.6875rem] leading-relaxed text-text-light sm:text-xsm">
                {preview.heroSub}
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none rounded-md bg-background-primary px-2.5 py-1.5 text-[0.625rem] font-semiBold text-text-contrastText',
                    showFocusRings && 'ring-2 ring-stroke-primary ring-offset-1',
                  )}
                >
                  {preview.ctaPrimary}
                </button>
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="pointer-events-none rounded-md border border-stroke-default px-2.5 py-1.5 text-[0.625rem] font-semiBold text-text-default"
                >
                  {preview.ctaSecondary}
                </button>
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-3 gap-2">
              <div className="aspect-square rounded-md border border-stroke-default/60 bg-background-default p-1">
                <EcoBagSvg />
              </div>
              <div className="aspect-square rounded-md border border-stroke-default/60 bg-background-default p-1">
                <TumblerSvg />
              </div>
              <div className="aspect-square rounded-md border border-stroke-default/60 bg-background-default p-1">
                <PlantSvg />
              </div>
            </div>
          </div>

          {/* feature row */}
          <div className="grid grid-cols-1 gap-1.5 border-t border-stroke-default bg-background-default/40 px-lg py-sm sm:grid-cols-3">
            {preview.featureCards.map((label) => (
              <div
                key={label}
                className="flex min-w-0 items-center gap-1.5 rounded-md bg-background-surface px-2 py-1.5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-rounded bg-success-su100 text-text-success dark:bg-success-su900/40"
                >
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none">
                    <path
                      d="M5 12l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="truncate text-[0.625rem] font-semiBold text-text-default">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* mute indicator for no-sound mode */}
          {mode === 'no-sound' && (
            <div
              className="absolute right-2 top-2 z-10 flex items-center gap-1 rounded-rounded border border-stroke-default bg-background-surface/95 px-1.5 py-0.5 text-[0.625rem] font-semiBold text-text-error shadow-sm"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none">
                <path
                  d="M11 5L6 9H2v6h4l5 4V5zM22 9l-6 6M16 9l6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              MUTE
            </div>
          )}

          {/* distraction overlay popups */}
          {distractionOverlay && (
            <>
              <div
                className="pointer-events-none absolute left-2 top-2 z-10 rounded-rounded border border-warning-wa400 bg-warning-wa100 px-1.5 py-0.5 text-[0.625rem] font-bold text-text-warning shadow-sm dark:bg-warning-wa900/40"
                aria-hidden="true"
              >
                AD
              </div>
              <div
                className="pointer-events-none absolute right-2 bottom-12 z-10 rounded-md border border-stroke-default bg-background-surface px-2 py-1 text-[0.625rem] font-semiBold text-text-default shadow-md"
                aria-hidden="true"
              >
                알림 3건
              </div>
            </>
          )}

          {/* low-vision overlay haze */}
          {mode === 'low-vision' && (
            <div
              className="pointer-events-none absolute inset-0 bg-neutral-ne100/35 dark:bg-neutral-ne900/35"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
};
