import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        1.4.2는 자동으로 3초 넘게 재생되는 소리에 적용됩니다. 그런 소리가 있다면 멈추거나 끄는 수단,
        또는 시스템 음량과 따로 조절하는 수단이 있어야 합니다. 이 기준은 페이지의 모든 내용에
        적용되므로, 다른 기준을 만족하려고 넣은 콘텐츠도 예외가 아닙니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.2 Audio Control (A)',
    design: (
      <>
        가장 단순한 설계는 자동 재생을 하지 않는 것입니다. 이 페이지의 클립은 사용자가 재생을 누를
        때만 소리를 냅니다. 배경음이 꼭 필요하다면 페이지 맨 앞에서 닿는 정지 버튼을 두고,
        말소리보다 충분히 작게 둡니다. 소리 없는 자동 재생 영상은 1.4.2가 아니라 움직임에 관한
        2.2.2의 대상이며, <code>muted</code>로 시작해도 사용자가 멈출 수 있어야 합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        1.4.2 applies to audio that plays automatically for more than 3 seconds. If there is such
        audio, there must be a way to pause or stop it, or to control its volume separately from the
        system volume. It applies to all content on the page, so content added to meet other
        criteria is no exception.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.2 Audio Control (A)',
    design: (
      <>
        The simplest design is no autoplay. The clip on this page makes sound only when the user
        presses play. If background audio is truly needed, put a stop button that is reached first
        on the page, and keep it well below speech. A silent autoplaying video falls under 2.2.2
        about movement rather than 1.4.2, and even starting <code>muted</code>, users must be able
        to stop it.
      </>
    ),
  },
};

export const StartSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.start.id}>
      <DocH2 {...toc.start} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('audio-control')}
        cite={c.cite}
        checkedOn={CONTENT_CHECKED_ON}
      >
        If any audio on a web page plays automatically for more than 3 seconds, either a mechanism
        is available to pause or stop the audio, or a mechanism is available to control audio volume
        independently from the overall system volume level.
      </NormativeQuote>
      <p>{c.design}</p>
    </section>
  );
};
