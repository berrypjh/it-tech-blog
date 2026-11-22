import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const bad = {
  ko: `<!-- 수정 전: 모든 결과를 alert로, 같은 문구를 두 영역에 -->
<p role="alert">3건 찾음</p>
<p aria-live="polite">3건 찾음</p>`,
  en: `<!-- Before: every result as alert, the same text in two regions -->
<p role="alert">3 found</p>
<p aria-live="polite">3 found</p>`,
};

const good = {
  ko: `<!-- 수정 후: 통상 결과는 status 하나, 결과 영역의 요약은 live가 아님 -->
<p role="status">3건 찾음</p>
<section aria-labelledby="results-heading">
  <h3 id="results-heading">검색 결과</h3>
  <p>3건 찾음</p>
</section>`,
  en: `<!-- After: ordinary results in one status; the summary in the results is not live -->
<p role="status">3 found</p>
<section aria-labelledby="results-heading">
  <h3 id="results-heading">Search results</h3>
  <p>3 found</p>
</section>`,
};

const content = {
  ko: {
    intro: (
      <>
        모든 메시지를 alert로 보내면 사용자가 하던 일이 계속 끊기고, 정말 급한 알림이 묻힙니다. 같은
        문구를 여러 live 영역에 넣으면 같은 말을 두 번 듣게 됩니다. 아래는 정적인 전후 비교이며, 이
        페이지에 결함 영역을 실제로 두지는 않았습니다.
      </>
    ),
    badLabel: '수정 전 (정적 예시)',
    goodLabel: '수정 후',
    after: (
      <>
        화면에 남는 요약은 사용자가 언제든 다시 읽는 자리이고, 알림은 status 하나가 맡습니다.
        alert는 사용자가 저장을 시도했는데 실패한 것처럼, 사용자의 조작 뒤에 바로 알아야 할 때만
        씁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Sending every message as alert keeps interrupting what users are doing and buries truly
        urgent notices. Putting the same text in several live regions makes users hear it twice.
        Below is a static before-and-after comparison; no defective region is actually placed on
        this page.
      </>
    ),
    badLabel: 'Before (static example)',
    goodLabel: 'After',
    after: (
      <>
        The summary that stays on screen is where users read again at any time, and one status
        carries the announcement. Use alert only when users need to know right after their own
        action, such as a save attempt that failed.
      </>
    ),
  },
};

export const PitfallsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.pitfalls.id}>
      <DocH2 {...toc.pitfalls} />
      <p>{c.intro}</p>
      <CodeBlock label={c.badLabel} code={bad[locale]} tone="bad" />
      <CodeBlock label={c.goodLabel} code={good[locale]} tone="good" />
      <p>{c.after}</p>
    </section>
  );
};
