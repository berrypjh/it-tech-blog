import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { CompositeDemo } from '../demos/CompositeDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        두 목록은 같은 상태 규칙을 쓰고 포커스 표현만 다릅니다. 같은 키를 눌러 가며{' '}
        <code>document.activeElement</code>가 어떻게 다른지 봅니다.
      </>
    ),
    at: (
      <>
        이 패널은 DOM 값만 보여 줍니다. 화면 낭독기가 두 방식을 어떻게 전하는지는 보조기술과
        브라우저 조합에서 직접 확인한 뒤에만 적습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Both lists use the same state rules and differ only in how they express focus. Press the
        same keys and see how <code>document.activeElement</code> differs.
      </>
    ),
    at: (
      <>
        The panels show DOM values only. Write down how a screen reader conveys each method only
        after checking it yourself with that assistive technology and browser.
      </>
    ),
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <CompositeDemo />
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="at" />
      </p>
      <p>{c.at}</p>
    </section>
  );
};
