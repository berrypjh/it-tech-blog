import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        HTML-AAM 초안은 입력 칸의 이름 후보 끝 쪽에 placeholder를 둡니다(그다음이 aria-placeholder).
        이것은 다른 후보가 모두 없을 때의 대체 경로이지, placeholder가 라벨이라는 뜻이 아닙니다.{' '}
        <PageLink locale="ko" id="basic-forms" hash="labels" />
        에서 본 것처럼 placeholder는 입력을 시작하면 사라지고, 화면에 남아 무엇을 적는 칸인지 계속
        알려 주지 않습니다.
      </>
    ),
    calloutTitle: '대체 동작을 보편 규칙으로 적지 않습니다',
    callout: (
      <>
        HTML-AAM은 초안이고, 브라우저가 이 마지막 후보들을 어떻게 다루는지는 엔진과 버전마다 다를 수
        있습니다. 한 브라우저에서 placeholder가 이름으로 나왔다는 관찰은 그 엔진 · 버전의 결과로만
        적습니다. 고치는 방법은 하나입니다. 보이는 label을 두고 for · id로 연결합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The HTML-AAM draft puts placeholder near the end of an input&apos;s name candidates
        (followed by aria-placeholder). That is a fallback when every other candidate is missing,
        not a sign that a placeholder is a label. As covered on{' '}
        <PageLink locale="en" id="basic-forms" hash="labels" />, a placeholder disappears once
        typing starts and does not stay on screen to say what the field is for.
      </>
    ),
    calloutTitle: 'Do not write fallback behavior as a universal rule',
    callout: (
      <>
        HTML-AAM is a draft, and how browsers handle these last candidates can differ by engine and
        version. An observation that a placeholder became the name in one browser is recorded only
        as that engine and version&apos;s result. There is one fix: keep a visible label and connect
        it with for and id.
      </>
    ),
  },
};

export const PlaceholderSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.placeholder.id}>
      <DocH2 {...toc.placeholder} />
      <p>{c.intro}</p>
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
