import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import type { WhySplitContent } from '../content';
import { MapIcon } from '../icons';
import { ToneBadge, toneDot, toneText } from '../localTone';

type Props = {
  content: WhySplitContent['fullMap'];
  architecture: WhySplitContent['architecture'];
  sectionId: string;
};

export const WhySplitArchitectureMap = ({ content, architecture, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-architecture"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="architecture"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      {/* lg: 다이어그램 | 카드 2열, 좁아지면 세로로 접힘 */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.05fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* 다이어그램 */}
        <div className="min-w-0">
          <ArchitectureDiagram
            mainFlow={architecture.mainFlow}
            side={architecture.side}
            flowLabel={content.flowLabel}
            sideLabel={content.sideLabel}
            a11yFlow={content.a11yFlow}
          />
        </div>

        {/* 설명 카드: 출발점 / 패키지별 역할 두 그룹으로 분리 */}
        <div className="space-y-lg">
          <CardGroup label={content.inputsLabel}>
            {architecture.leftCards.map((card) => (
              <li key={card.id}>
                <CardShell>
                  <ToneBadge tone={card.tone}>{card.title}</ToneBadge>
                  <CardText>{card.description}</CardText>
                </CardShell>
              </li>
            ))}
          </CardGroup>

          <CardGroup label={content.packagesLabel}>
            {architecture.rightCards.map((card) => (
              <li key={card.id}>
                <CardShell interactive>
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn('inline-block w-1.5 h-1.5 rounded-full', toneDot(card.tone))}
                    />
                    <h4
                      className={cn(
                        'text-sm font-bold font-mono tracking-tight',
                        toneText(card.tone),
                      )}
                    >
                      {card.name}
                    </h4>
                  </span>
                  <CardText>{card.description}</CardText>
                </CardShell>
              </li>
            ))}
          </CardGroup>
        </div>
      </div>
    </section>
  );
};

type CardShellProps = {
  /** hover 시 살짝 떠오르는 인터랙티브 카드 여부. */
  interactive?: boolean;
  children: React.ReactNode;
};

const CardShell = ({ interactive, children }: CardShellProps) => (
  <article
    className={cn(
      'flex h-full flex-col gap-2 rounded-xl border p-md',
      'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] border-[var(--term-border)]',
      'hover:border-[var(--term-accent)]',
      interactive ? 'group transition-all hover:-translate-y-0.5' : 'transition-colors',
    )}
  >
    {children}
  </article>
);

const CardText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{children}</p>
);

type CardGroupProps = { label: string; children: React.ReactNode };

const CardGroup = ({ label, children }: CardGroupProps) => (
  <div>
    <h3 className="mb-sm text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
      {label}
    </h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">{children}</ul>
  </div>
);
