import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, CodeCompare, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const before = `.action {
  height: 2rem;
  width: 8rem;
  overflow: hidden;
  white-space: nowrap;
}`;

const after = `.action {
  min-height: 2.75rem;
  max-width: 100%;
  overflow-wrap: anywhere;
}`;

const userStyle = `* {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}
p {
  margin-block-end: 2em !important;
}`;

const content = {
  ko: {
    intro: (
      <>
        고정 크기와 숨김을 함께 쓰면 늘어난 글자가 갈 곳이 없습니다. 높이는 최소값으로 두고 줄바꿈을
        허용합니다. 말줄임이 꼭 필요하다면 전체 문구를 얻을 다른 방법을 함께 둡니다.
      </>
    ),
    check: (
      <>
        실제 페이지는 사용자 스타일 도구로 아래 값을 넣어 확인합니다. 결과는 쓴 도구 · 브라우저와
        함께 기록합니다.
      </>
    ),
    label: '사용자 스타일로 넣어 보는 값',
  },
  en: {
    intro: (
      <>
        Fixed sizes with hidden overflow leave enlarged text nowhere to go. Use a minimum height and
        allow wrapping. If truncation is truly needed, also provide another way to get the full
        string.
      </>
    ),
    check: (
      <>
        Check real pages by injecting the values below with a user style tool. Record the result
        with the tool and browser you used.
      </>
    ),
    label: 'Values to inject as a user style',
  },
};

export const FixesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.fixes.id}>
      <DocH2 {...toc.fixes} />
      <p>{c.intro}</p>
      <CodeCompare before={before} after={after} />
      <p>{c.check}</p>
      <CodeBlock code={userStyle} label={c.label} />
    </section>
  );
};
