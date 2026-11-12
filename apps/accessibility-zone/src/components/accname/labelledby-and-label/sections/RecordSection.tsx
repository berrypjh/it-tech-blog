import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { accname12, ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { Steps } from '@/components/shared/Steps';

import { SourceCasesDemo } from '../demos/SourceCasesDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '우선순위 목록만 외우면 "aria-labelledby가 있는데 왜 내용이 이름이 됐지?" 같은 질문에 답하지 못합니다. 이름 하나를 계산할 때마다 네 가지를 적습니다.',
    steps: [
      <>
        역할이 이름을 허용하는가. generic · paragraph 같은 역할은 이름이 금지됩니다(
        <ExternalLink href={aria12('namefromprohibited')}>Name prohibited</ExternalLink>).
      </>,
      '적용 가능한 출처는 무엇인가. aria-labelledby · aria-label · 요소별 HTML 출처 · 내용 가운데 그 요소에 실제로 있는 것.',
      '참조가 유효한가. aria-labelledby에 실제로 있는 ID가 하나라도 있어야 그 단계가 적용됩니다.',
      '어느 단계가 끝냈는가. 비어 있지 않은 결과를 돌려준 첫 단계와 그 결과.',
    ],
    labelledbyCite: 'AccName 1.2 (Working Draft, 2026-11-04) — LabelledBy',
    ariaLabelCite: 'AccName 1.2 (Working Draft, 2026-11-04) — AriaLabel',
    demoIntro:
      '실습의 사례는 이 네 칸을 채운 것입니다. 끊긴 참조와 이름이 금지된 역할은 검사용 예제로만 두었습니다.',
  },
  en: {
    intro:
      'If you only memorize the precedence list, you cannot answer "there is an aria-labelledby, so why did the content become the name?" Each time you compute a name, write down four things.',
    steps: [
      <>
        Does the role allow a name? Roles such as generic and paragraph prohibit naming (
        <ExternalLink href={aria12('namefromprohibited')}>Name prohibited</ExternalLink>).
      </>,
      'Which sources apply? Of aria-labelledby, aria-label, per-element HTML sources, and content, the ones the element actually has.',
      'Are the references valid? The aria-labelledby step applies only if at least one ID actually exists.',
      'Which step finished? The first step that returned a non-empty result, and that result.',
    ],
    labelledbyCite: 'AccName 1.2 (Working Draft, 2026-11-04) — LabelledBy',
    ariaLabelCite: 'AccName 1.2 (Working Draft, 2026-11-04) — AriaLabel',
    demoIntro:
      'The cases in the exercise fill in these four columns. The broken reference and the role that prohibits naming are kept only as inspection samples.',
  },
};

export const RecordSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.record.id}>
      <DocH2 {...toc.record} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <NormativeQuote
        locale={locale}
        href={accname12('comp_labelledby')}
        cite={c.labelledbyCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Otherwise, if the current node has an aria-labelledby attribute that contains at least one
        valid IDREF, and the current node is not already part of an ongoing aria-labelledby or
        aria-describedby traversal, process its IDREFs in the order they occur
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={accname12('comp_label')}
        cite={c.ariaLabelCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Otherwise, if the current node is not a slot element and has an aria-label attribute whose
        value is not undefined, not the empty string, nor, when trimmed of whitespace, is not the
        empty string
      </NormativeQuote>
      <p>{c.demoIntro}</p>
      <SourceCasesDemo />
    </section>
  );
};
