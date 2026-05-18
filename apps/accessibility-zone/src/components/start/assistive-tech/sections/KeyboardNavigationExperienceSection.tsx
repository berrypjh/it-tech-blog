import {
  FocusRingCard,
  FocusTrapModalCard,
  SkipLinkCard,
  TabOrderCard,
} from '../components/KeyboardExperienceCards';
import type { AssistiveTechContent } from '../content';

export const KeyboardNavigationExperienceSection = ({
  content,
}: {
  content: AssistiveTechContent['keyboard'];
}) => {
  const byId = (id: string) => {
    const found = content.cards.find((c) => c.id === id);
    if (!found) throw new Error(`Keyboard card not found: ${id}`);
    return found;
  };
  return (
    <section
      aria-labelledby="keyboard-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <header className="mb-mdl flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            04
          </span>
          키보드 탐색
        </span>
        <h2 id="keyboard-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm leading-relaxed text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2 xl:grid-cols-4">
        <TabOrderCard card={byId('tab-order')} items={content.tabOrder.items} />
        <FocusRingCard card={byId('focus-ring')} focusRing={content.focusRing} />
        <SkipLinkCard card={byId('skip-link')} skipLink={content.skipLink} />
        <FocusTrapModalCard card={byId('focus-trap')} focusTrap={content.focusTrap} />
      </div>
    </section>
  );
};
