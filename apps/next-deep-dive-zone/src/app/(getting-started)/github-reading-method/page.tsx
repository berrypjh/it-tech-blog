import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  githubReadingContent,
  GithubReadingMethodPage,
} from '@/components/getting-started/github-reading-method';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = githubReadingContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Reading Code, Tests, PRs, and Issues Together on GitHub — Next Lab'
        : 'GitHub 코드, 테스트, PR, issue를 함께 읽는 방법 — Next Lab',
    description: c.hero.highlight.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <GithubReadingMethodPage locale={locale} />;
};

export default Page;
