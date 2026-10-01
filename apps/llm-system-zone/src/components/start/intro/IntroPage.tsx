import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout } from '@it-tech-blog/ui';

const title = { ko: 'LLM 시스템 시작하기', en: 'Getting Started with LLM Systems' };

export const IntroPage = ({ locale }: { locale: Locale }) => (
  <DocLayout toc={[]}>
    <h1 className="text-3xl leading-3xl font-bold tracking-sm text-text-default">
      {title[locale]}
    </h1>
  </DocLayout>
);
