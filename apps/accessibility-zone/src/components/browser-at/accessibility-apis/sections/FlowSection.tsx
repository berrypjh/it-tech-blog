import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { FlowDiagram } from '../diagrams/FlowDiagram';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="accessibility-tree" />와{' '}
        <PageLink locale="ko" id="role-name-state" />는 둘째 단계, 브라우저가 만든 정보를 봤습니다.
        이 페이지는 그 앞뒤를 잇습니다.
      </>
    ),
    after: (
      <>
        단계마다 책임지는 쪽이 다릅니다. 작성자는 첫째 단계를, 브라우저는 둘째와 셋째 단계의
        내보내기를, 운영체제는 API를, 보조기술은 넷째 단계의 해석을 맡습니다. 그래서 같은 HTML도
        브라우저 · 운영체제 · 보조기술 조합에 따라 결과가 달라질 수 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <PageLink locale="en" id="accessibility-tree" /> and{' '}
        <PageLink locale="en" id="role-name-state" /> looked at the second step, the information the
        browser builds. This page connects what comes before and after.
      </>
    ),
    after: (
      <>
        Each step is owned by someone different. The author owns the first, the browser builds the
        second and exposes it in the third, the OS provides the API, and assistive technology owns
        the interpretation in the fourth. That is why the same HTML can give different results
        across browser, OS, and assistive technology combinations.
      </>
    ),
  },
};

export const FlowSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.flow.id}>
      <DocH2 {...toc.flow} />
      <p>{c.intro}</p>
      <FlowDiagram locale={locale} />
      <p>{c.after}</p>
    </section>
  );
};
