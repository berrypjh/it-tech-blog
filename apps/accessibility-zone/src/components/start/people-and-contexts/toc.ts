import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    needs: '특성을 기능적 필요로 보기',
    combined: '특성과 환경이 겹칠 때',
    oneTask: '한 과업, 네 가지 맥락',
    simulation: '장애 체험으로 알 수 있는 것과 없는 것',
    caseRecord: '사례 기록',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    needs: 'Seeing traits as functional needs',
    combined: 'When traits and environments overlap',
    oneTask: 'One task, four contexts',
    simulation: 'What disability simulation can and cannot tell you',
    caseRecord: 'Case record',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  needs: 'functional-needs',
  combined: 'combined-contexts',
  oneTask: 'one-task',
  simulation: 'simulation-limits',
  caseRecord: 'case-record',
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
