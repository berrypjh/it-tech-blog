import type { Locale } from '@it-tech-blog/preferences';
import { ExternalLink } from '@it-tech-blog/ui';

import { SourceTag } from './SourceTag';
import { CHECKED_ON } from './wcag';

/** 규범 원문 인용. 원문은 번역하지 않고 그 언어(lang) 그대로 두고, 출처 판본 · 절 링크 · 확인일을 함께 단다. */
export const NormativeQuote = ({
  locale,
  href,
  cite,
  lang = 'en',
  children,
}: {
  locale: Locale;
  href: string;
  cite: string;
  lang?: 'en' | 'ko';
  children: React.ReactNode;
}) => (
  <figure className="my-xl rounded-md border border-stroke-light bg-background-default p-lg">
    <p className="mb-sm">
      <SourceTag locale={locale} id="normative" />
    </p>
    <blockquote cite={href} lang={lang} className="border-l-2 border-stroke-primary pl-md text-xsm">
      {children}
    </blockquote>
    <figcaption className="mt-sm text-xxsm text-text-light">
      <ExternalLink href={href}>{cite}</ExternalLink> · {CHECKED_ON[locale]}
    </figcaption>
  </figure>
);
