import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 잴 수 없을 때: value 없이, 숫자를 지어내지 않는다 -->
<progress aria-label="검색 중"></progress>

<!-- 잴 수 있을 때: 실제 값과 최댓값 -->
<progress aria-label="파일 올리기" value="3" max="10">10개 중 3개</progress>`,
  en: `<!-- When it cannot be measured: no value, no made-up number -->
<progress aria-label="Searching"></progress>

<!-- When it can: the real value and maximum -->
<progress aria-label="Uploading files" value="3" max="10">3 of 10</progress>`,
};

const content = {
  ko: {
    intro: (
      <>
        검색처럼 얼마나 남았는지 잴 수 없는 작업에 퍼센트를 지어내면 틀린 정보가 됩니다. value 없는{' '}
        <code>progress</code>는 진행 중이라는 사실만 전합니다. 파일 수처럼 실제로 잴 수 있을 때만
        value와 max를 줍니다. 진행 표시는 시각 단서이고, 대기 상태 알림은 status가 따로 맡습니다.
      </>
    ),
    label: '숫자 없는 진행 표시와 잴 수 있는 진행 표시',
  },
  en: {
    intro: (
      <>
        Making up a percentage for work like a search, where what remains cannot be measured, is
        wrong information. A <code>progress</code> without value only conveys that work is under
        way. Give value and max only when it can really be measured, such as a file count. The
        progress indicator is a visual cue; the waiting announcement is handled separately by
        status.
      </>
    ),
    label: 'Progress without numbers and measurable progress',
  },
};

export const ProgressSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.progress.id}>
      <DocH2 {...toc.progress} />
      <p>{c.intro}</p>
      <CodeBlock label={c.label} code={code[locale]} />
    </section>
  );
};
