import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { ClipPlayerDemo } from '../demos/ClipPlayerDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        아래 플레이어는 브라우저가 제공하는 미디어 컨트롤을 그대로 씁니다. 가짜 플레이어를 그리지
        않고, 바깥 버튼은 같은 video 요소를 조작하는 다른 경로일 뿐입니다. 상태 값은 페이지가 video
        요소에서 직접 읽은 것입니다.
      </>
    ),
    calloutTitle: '컨트롤의 키 조작과 낭독은 브라우저마다 다릅니다',
    callout:
      '브라우저 기본 컨트롤 안에서 어떤 키가 무엇을 하는지, 화면 낭독기가 컨트롤을 어떻게 읽는지는 브라우저와 보조기술에 따라 다릅니다. 판정에는 브라우저 이름 · 판과 보조기술을 함께 적고, 해 보지 않은 조합은 미확인으로 둡니다.',
  },
  en: {
    intro: (
      <>
        The player below uses the browser’s own media controls. It does not draw a fake player; the
        buttons outside are just another path to the same video element. State values are read
        directly from the video element.
      </>
    ),
    calloutTitle: 'Key handling and speech for controls differ by browser',
    callout:
      'Which keys do what inside the browser’s built-in controls, and how a screen reader speaks them, depends on the browser and assistive technology. Record the browser name, version, and assistive technology with a verdict, and leave untried combinations unconfirmed.',
  },
};

export const PracticeSection = ({
  locale,
  transcriptId,
}: {
  locale: Locale;
  transcriptId: string;
}) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <ClipPlayerDemo transcriptId={transcriptId} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        <p>
          <SourceTag locale={locale} id="at" /> {c.callout}
        </p>
      </Callout>
    </section>
  );
};
