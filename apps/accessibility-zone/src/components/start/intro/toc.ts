import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    whatIs: '웹접근성이란?',
    whoFor: '누구를 위한 것인가?',
    whyFrontend: '프론트엔드에게 중요한 이유',
    usability: '접근성과 사용성',
    semanticHtml: '접근성과 시맨틱 HTML',
    designSystem: '접근성과 디자인 시스템',
    standards: '법적·품질 기준',
    misconceptions: '흔한 오해',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    whatIs: 'What is web accessibility?',
    whoFor: 'Who is it for?',
    whyFrontend: 'Why it matters to frontend',
    usability: 'Accessibility vs. usability',
    semanticHtml: 'Accessibility and semantic HTML',
    designSystem: 'Accessibility and design systems',
    standards: 'Legal and quality standards',
    misconceptions: 'Common misconceptions',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  whatIs: 'what-is',
  whoFor: 'who-for',
  whyFrontend: 'why-frontend',
  usability: 'usability',
  semanticHtml: 'semantic-html',
  designSystem: 'design-system',
  standards: 'standards',
  misconceptions: 'misconceptions',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id·제목. id는 로케일과 무관하게 같아 앵커 링크가 유지된다. */
export const getToc = (locale: Locale) =>
  Object.fromEntries(
    (Object.keys(ids) as TocKey[]).map((key) => [
      key,
      { id: ids[key], title: titles[locale][key] },
    ]),
  ) as Record<TocKey, TocItem>;
