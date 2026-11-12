import type { Locale } from '@it-tech-blog/preferences';
import { CodeCompare, DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { LabelLinkDemo } from '../demos/LabelLinkDemo';
import { getToc } from '../toc';

const code = {
  ko: {
    before: `<label for="phone">연락처</label>
<input id="tel" type="tel" placeholder="010-0000-0000">`,
    after: `<label for="phone">연락처</label>
<input id="phone" type="tel" placeholder="010-0000-0000">`,
  },
  en: {
    before: `<label for="phone">Phone</label>
<input id="tel" type="tel" placeholder="555-0100">`,
    after: `<label for="phone">Phone</label>
<input id="phone" type="tel" placeholder="555-0100">`,
  },
};

const content = {
  ko: {
    intro: (
      <>
        화면에서는 &quot;연락처&quot;가 입력 칸 바로 위에 있어 연결된 것처럼 보입니다. 하지만
        label의 <code>for</code>는 <code>phone</code>, 입력 칸의 <code>id</code>는 <code>tel</code>
        이라 둘은 이어지지 않습니다. 이름을 고칠 때는 aria-label로 덮지 않고, 끊긴 관계 자체를
        고칩니다.
      </>
    ),
    stepsIntro: '추적은 네 단계로 합니다.',
    steps: [
      'label의 for 값을 읽습니다.',
      '그 값을 id로 가진 요소가 문서에 있는지 찾습니다. 없거나 다른 요소라면 관계가 끊긴 것입니다.',
      '입력 칸의 labels가 비어 있는지 봅니다.',
      'id나 for 하나를 고친 뒤, 같은 값과 브라우저 도구의 이름을 다시 봅니다.',
    ],
  },
  en: {
    intro: (
      <>
        On screen, &quot;Phone&quot; sits right above the input and looks connected. But the
        label&apos;s <code>for</code> is <code>phone</code> and the input&apos;s <code>id</code> is{' '}
        <code>tel</code>, so they are not connected. When fixing the name, do not paper over it with
        aria-label; fix the broken relation itself.
      </>
    ),
    stepsIntro: 'Trace it in four steps.',
    steps: [
      'Read the label’s for value.',
      'Look for an element with that value as its id. If there is none, or it is another element, the relation is broken.',
      'Check whether the input’s labels is empty.',
      'Fix either the id or the for, then look at the same values and the name in browser tools again.',
    ],
  },
};

export const BrokenSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.broken.id}>
      <DocH2 {...toc.broken} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>{c.stepsIntro}</p>
      <Steps items={c.steps} />
      <LabelLinkDemo />
    </section>
  );
};
