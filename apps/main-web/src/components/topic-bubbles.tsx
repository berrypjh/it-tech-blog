'use client';

import { BubbleButton } from '@berrypjh/react-ui';

import type { Topic } from './topics';

const TopicBubbles = ({ topics, locale }: { topics: Topic[]; locale: 'ko' | 'en' }) => (
  <>
    {topics.map(({ icon, label, size, delay, style, href }) => (
      <div key={label.en} className="absolute hidden lg:block [@media(max-height:900px)]:!hidden" style={style}>
        <BubbleButton icon={icon} label={label[locale]} size={size} delay={delay} href={href} />
      </div>
    ))}
  </>
);

export default TopicBubbles;
