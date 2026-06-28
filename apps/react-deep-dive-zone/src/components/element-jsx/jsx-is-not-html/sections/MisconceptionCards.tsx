import type { MisconceptionItem } from '../../../shared/misconception';
import { MisconceptionCardGrid } from '../../../shared/misconception';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { JsxIsNotHtmlContent } from '../content';
import { BoxesIcon, HelpCircleIcon, MonitorIcon, NetworkIcon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['misconception'] };

const sideIcon = {
  box: BoxesIcon,
  network: NetworkIcon,
  browser: MonitorIcon,
} as const;

export const MisconceptionCards = ({ content }: Props) => {
  const items: MisconceptionItem[] = content.cards.map((card) => ({
    id: card.id,
    icon: sideIcon[card.iconName],
    accentClassName: toneTokens[card.iconTone].text,
    badgeWrong: card.badgeWrong,
    wrong: card.wrong,
    right: card.right,
    note: card.note,
  }));

  return (
    <section
      id="misconception"
      aria-labelledby="heading-misconception"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="misconception"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <MisconceptionCardGrid items={items} />
    </section>
  );
};
