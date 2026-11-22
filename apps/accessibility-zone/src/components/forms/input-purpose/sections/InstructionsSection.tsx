import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        무엇을 어떤 형식으로 넣어야 하는지는 틀린 뒤가 아니라 입력하기 전에 알 수 있어야 합니다.
        필수 여부는 라벨 글자에 <strong className="text-text-default">(필수)</strong>로 적고, 형식
        예시는 입력 칸 아래 도움말에 둡니다. 도움말은 입력 칸 밖에 있으므로 글자를 넣은 뒤에도
        사라지지 않습니다.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.2 Labels or Instructions (Level A)',
    scope: (
      <>
        이 기준이 요구하는 것은 라벨이나 안내가 있다는 것까지입니다. 필수 표시를 어떤 글자로 쓸지,
        예시를 어디에 둘지는 이 예제가 고른 방식입니다.
      </>
    ),
    pitfallTitle: 'placeholder만으로 안내하지 않습니다',
    pitfall: (
      <>
        placeholder는 글자를 넣는 순간 사라집니다. 입력하다 형식이 헷갈리면 값을 지워야 다시 볼 수
        있습니다. 형식 예시는 사라지지 않는 도움말에 둡니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        What to enter and in which format should be known before typing, not after getting it wrong.
        Write the required state in the label text as{' '}
        <strong className="text-text-default">(required)</strong>, and put the format example in a
        hint under the field. The hint sits outside the field, so it does not disappear after you
        type.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.2 Labels or Instructions (Level A)',
    scope: (
      <>
        The criterion requires only that labels or instructions exist. Which words mark a required
        field and where the example goes are choices of this example.
      </>
    ),
    pitfallTitle: 'Do not instruct with a placeholder alone',
    pitfall: (
      <>
        A placeholder disappears as soon as you type. If the format becomes unclear midway, you have
        to clear the value to see it again. Put the format example in a hint that stays.
      </>
    ),
  },
};

export const InstructionsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.instructions.id}>
      <DocH2 {...toc.instructions} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('labels-or-instructions')}
        cite={c.cite}
        checkedOn={FORMS_CHECKED_ON}
      >
        Labels or instructions are provided when content requires user input.
      </NormativeQuote>
      <p>{c.scope}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall}
      </Callout>
    </section>
  );
};
