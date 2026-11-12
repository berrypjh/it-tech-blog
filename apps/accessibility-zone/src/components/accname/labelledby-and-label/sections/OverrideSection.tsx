import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        ②번 버튼은 화면에 &quot;예약 변경&quot;을 보이면서 이름은 &quot;예약 수정하기&quot;입니다.
        aria-label과 aria-labelledby는 내용보다 먼저 쓰이므로, 작성자가 넣은 문자열이 화면 라벨을
        통째로 덮어쓸 수 있습니다. 화면 낭독기 사용자와 화면을 보는 사용자가 서로 다른 이름을 듣고
        보게 되고, &quot;예약 변경 눌러&quot;라고 말하는 음성 입력 사용자는 버튼을 찾지 못할 수
        있습니다.
      </>
    ),
    calloutTitle: '덮어쓰기를 하기 전에 묻습니다',
    callout: (
      <>
        보이는 글자로 이미 이름이 되는가? 그렇다면 aria-label을 지웁니다. 맥락을 더해야 한다면
        보이는 글자를 이름 앞에 남긴 채 aria-labelledby로 이어 붙이거나, 보충 정보는 설명으로
        보냅니다. 이 어긋남이 WCAG 2.5.3에 맞는지는 <PageLink locale="ko" id="label-in-name" />
        에서 판정합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Button ② shows &quot;Change booking&quot; on screen while its name is &quot;Edit
        reservation.&quot; aria-label and aria-labelledby are used before content, so a string the
        author added can replace the visible label entirely. Screen reader users and sighted users
        then hear and see different names, and a voice input user who says &quot;click Change
        booking&quot; may not find the button.
      </>
    ),
    calloutTitle: 'Ask before overriding',
    callout: (
      <>
        Does the visible text already make a name? If so, remove the aria-label. If context must be
        added, keep the visible text at the start of the name and join more with aria-labelledby, or
        move extra information to the description. Whether this mismatch meets WCAG 2.5.3 is judged
        on <PageLink locale="en" id="label-in-name" />.
      </>
    ),
  },
};

export const OverrideSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.override.id}>
      <DocH2 {...toc.override} />
      <p>{c.intro}</p>
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
