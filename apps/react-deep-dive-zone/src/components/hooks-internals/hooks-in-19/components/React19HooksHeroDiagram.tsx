import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ApiHero, FoundationItem, React19HooksContent, Tone } from '../content';
import {
  AtomIcon,
  BoxIcon,
  GaugeIcon,
  LayersIcon,
  Link2Icon,
  MessageCircleIcon,
  SendIcon,
  SettingsIcon,
  ZapIcon,
} from '../icons';

type Props = { content: React19HooksContent['hero']; className?: string };

const foundationIcon = {
  dispatcher: SettingsIcon,
  'linked-list': Link2Icon,
  'update-queue': BoxIcon,
  suspense: AtomIcon,
  effect: ZapIcon,
} as const;

const apiIcon = {
  use: AtomIcon,
  useActionState: SendIcon,
  useOptimistic: GaugeIcon,
  useEffectEvent: MessageCircleIcon,
} as const;

/** content의 Tone을 공유 ToneKey로 매핑. ToneKey에 없는 톤은 가장 가까운 톤으로 대체한다. */
const toneKeyMap: Record<Tone, ToneKey> = {
  sky: 'sky',
  cyan: 'cyan',
  teal: 'teal',
  emerald: 'emerald',
  violet: 'violet',
  amber: 'amber',
  orange: 'amber',
  rose: 'amber',
  indigo: 'indigo',
};

/**
 * Hero 핵심 비주얼.
 * 기존 Hook 내부 구조(기반) 위에 React 19의 새 Hook API들이 올라간다는 점을
 * 기반 그룹 → 확장 화살표 → API 카드 그리드로 보여주는 컴팩트 다이어그램.
 */
export const React19HooksHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle}. ${content.foundationTitle}: ${content.foundationItems
    .map((i) => i.title)
    .join(', ')}. ${content.apiCards.map((a) => `${a.title} ${a.shortDesc}`).join('; ')}`;

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

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <LayersIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.diagramTitle}
          </span>
        </header>

        <section
          className={cn(
            'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h3 className="text-xsm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.foundationTitle}
          </h3>
          <ul className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
            {content.foundationItems.map((item) => (
              <li key={item.key}>
                <FoundationCard item={item} />
              </li>
            ))}
          </ul>
        </section>

        <DownArrow />

        <ul className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          {content.apiCards.map((api) => (
            <li key={api.key}>
              <ApiPillCard api={api} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FoundationCard = ({ item }: { item: FoundationItem }) => {
  const tone = toneKeyMap[item.tone];
  const t = toneTokens[tone];
  const Icon = foundationIcon[item.key as keyof typeof foundationIcon] ?? SettingsIcon;
  return (
    <article className="flex h-full items-start gap-sm">
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cn('font-mono text-[11px] font-bold break-all', t.text)}>
          {item.title}
        </code>
        <span className="text-[10px] leading-relaxed text-[var(--term-muted)] break-keep">
          {item.description}
        </span>
      </div>
    </article>
  );
};

const ApiPillCard = ({ api }: { api: ApiHero }) => {
  const tone = toneKeyMap[api.tone];
  const t = toneTokens[tone];
  const Icon = apiIcon[api.key];
  return (
    <article
      className={cn(
        'flex h-full items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cn('font-mono text-xsm font-bold break-all', t.text)}>{api.title}</code>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {api.shortDesc}
        </p>
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
