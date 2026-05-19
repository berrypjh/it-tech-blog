import type { Topic } from '@/data/topics';

export const TopicGrid = ({ topics, locale }: { topics: Topic[]; locale: 'ko' | 'en' }) => (
  <div className="lg:hidden [@media(max-height:900px)]:!grid grid grid-cols-[repeat(3,auto)] gap-x-7xl gap-y-5xl">
    {topics.map(({ icon, label, href }) => (
      <a
        key={label.en}
        href={href}
        className="flex flex-col items-center gap-sm p-lg rounded-[12px] text-text-default hover:bg-background-grey/15 transition-colors"
      >
        <span className="text-3xl">{icon}</span>

        <span className="text-xsm font-medium text-center leading-tight break-keep">
          {label[locale]}
        </span>
      </a>
    ))}
  </div>
);
