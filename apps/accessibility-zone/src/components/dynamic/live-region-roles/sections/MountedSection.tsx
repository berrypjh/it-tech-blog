import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 처음 렌더링 때부터 비어 있는 채로 있다 -->
<p role="status"></p>

<!-- 결과가 나오면 같은 요소의 글자만 바꾼다 -->
<p role="status">3건 찾음</p>`,
  en: `<!-- Present, and empty, from the first render -->
<p role="status"></p>

<!-- When the result arrives, change only the text of the same element -->
<p role="status">3 found</p>`,
};

const content = {
  ko: {
    intro: (
      <>
        보조기술은 live 영역 안의 변화를 알립니다. 그래서 통상적인 결과는 처음부터 마운트해 둔
        영역의 글자를 바꾸는 방식으로 냅니다. 글자가 든 채로 새로 삽입된 영역은 변화가 아니라 처음
        나타난 내용이라 알리지 않는 경우가 많습니다.
      </>
    ),
    label: '미리 마운트한 status 영역을 갱신하기',
    note: '새로 삽입된 영역이 읽히는지는 브라우저와 보조기술 조합마다 다릅니다. 실제 결과는 조합과 설정을 적은 기록이 있을 때만 확인으로 씁니다.',
  },
  en: {
    intro: (
      <>
        Assistive technology announces changes inside a live region. So ordinary results are given
        by changing the text of a region mounted from the start. A region inserted with text already
        in it is new content rather than a change, and is often not announced.
      </>
    ),
    label: 'Updating a status region mounted in advance',
    note: 'Whether a newly inserted region is read differs by browser and assistive technology. Record a real result as confirmed only with the combination and settings written down.',
  },
};

export const MountedSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.mounted.id}>
      <DocH2 {...toc.mounted} />
      <p>{c.intro}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="at" />
        <span>{c.note}</span>
      </p>
    </section>
  );
};
