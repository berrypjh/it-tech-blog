import { CodePanel } from '../../../shared/CodePanel';
import { HeroTitle } from '../../../shared/HeroTitle';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { PerspectiveCard } from '../components/PerspectiveCard';
import type { UsageVsInternalsContent } from '../content';
import { InternalsIcon, UsageIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['hero'] };

export const SameCodeDifferentQuestionHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt command="diff" path="usage.md internals.md" />

      {/* 상단 텍스트 */}
      <div className="mt-lg flex flex-col gap-md">
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.lead}</span>
          <span className="block text-[var(--term-accent)]">{content.title.accent}</span>
        </HeroTitle>

        <p className="text-sm sm:text-md font-bold leading-snug text-cyan-700 dark:text-cyan-300 break-keep">
          {content.subheading.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[68ch]">
          {content.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      {/* 3영역: 사용법 | 코드 | 내부 구조 */}
      <div className="mt-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.28fr)_minmax(0,_0.9fr)] gap-md items-stretch">
        {/* 중앙 코드 카드 — 가장 강한 시각 요소 */}
        <div className="order-1 sm:col-span-2 lg:col-span-1 lg:order-2 flex flex-col gap-sm min-w-0">
          <CodePanel
            code={content.code.code}
            language={content.code.language}
            caption={content.code.caption}
            showWindowDots
            size="md"
          />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep text-center px-sm">
            {content.code.note}
          </p>
        </div>

        {/* 좌측 사용법 관점 */}
        <div className="order-2 lg:order-1 flex">
          <PerspectiveCard
            tone="indigo"
            icon={UsageIcon}
            title={content.usage.title}
            description={content.usage.description}
            questions={content.usage.questions}
            pill={content.usage.pill}
            variant="usage"
          />
        </div>

        {/* 우측 내부 구조 관점 */}
        <div className="order-3 flex">
          <PerspectiveCard
            tone="cyan"
            icon={InternalsIcon}
            title={content.internals.title}
            description={content.internals.description}
            questions={content.internals.questions}
            pill={content.internals.pill}
            variant="internals"
          />
        </div>
      </div>
    </section>
  );
};
