import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { TabindexDemo } from '../demos/TabindexDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        아래 실습은 값 하나만 바꾸지 않고 요소 종류와 상태도 함께 바꿉니다.{' '}
        <PageLink locale="ko" id="hiding-and-inert" hash="hiding-practice" />
        에서 본 숨김 · inert와 <PageLink locale="ko" id="disabled-and-required" />의 비활성이
        tabindex보다 앞선다는 점을 포커스로 확인합니다.
      </>
    ),
    after: (
      <>
        예상과 관찰이 다르면 관찰을 믿고 브라우저와 설정을 함께 적습니다. macOS Safari는 기본
        설정에서 Tab이 버튼과 링크를 건너뛸 수 있어, 같은 코드라도 Option+Tab이 필요할 수 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The exercise below changes the element type and its state as well as the value. It uses
        focus to confirm that the hiding and inert from{' '}
        <PageLink locale="en" id="hiding-and-inert" hash="hiding-practice" /> and the disabled state
        from <PageLink locale="en" id="disabled-and-required" /> take priority over tabindex.
      </>
    ),
    after: (
      <>
        When the observation differs from the expectation, trust the observation and note the
        browser and settings. In its default settings macOS Safari may skip buttons and links on
        Tab, so the same code can need Option+Tab.
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
      <TabindexDemo />
      <p>{c.after}</p>
    </section>
  );
};
