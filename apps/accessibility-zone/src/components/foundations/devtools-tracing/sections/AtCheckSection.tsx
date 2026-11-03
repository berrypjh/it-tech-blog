import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

/** 화면 낭독기로 따로 확인할 지점. 첫 열은 그 페이지로 가는 링크다. */
const checks = [
  {
    id: 'web-layers',
    ko: '펼침 버튼의 aria-expanded가 바뀔 때 "펼침 · 접힘"으로 읽히나요?',
    en: 'Whether the toggle is read as "expanded" or "collapsed" when aria-expanded changes',
  },
  {
    id: 'document-structure',
    ko: '다른 언어 구절에서 음성이 바뀌나요? 제목 · 랜드마크 목록에 무엇이 어떤 이름으로 나오나요?',
    en: 'Whether the voice changes for passages in another language; what appears in the heading and landmark lists, and under which names',
  },
  {
    id: 'text-and-controls',
    ko: 'role만 붙인 div가 "버튼"으로 읽히는데도 실행되지 않나요? 기호를 지운 목록이 목록으로 읽히나요?',
    en: 'Whether the div with only a role is read as "button" yet does not activate; whether a list without markers is read as a list',
  },
  {
    id: 'basic-forms',
    ko: 'legend가 그룹에 들어갈 때 읽히나요? 브라우저 기본 검사 메시지가 읽히나요?',
    en: 'Whether the legend is read on entering the group; whether the browser’s validation message is read',
  },
  {
    id: 'dom-order',
    ko: '내용을 차례로 읽는 순서가 DOM 순서와 같나요? CSS order로 바꾼 배치는 어떤 순서로 읽히나요?',
    en: 'Whether content is read in DOM order, and in what order the layout changed with CSS order is read',
  },
  {
    id: 'events-and-state',
    ko: '결함 모드에서 펼친 뒤에도 "접힘"으로 읽히나요?',
    en: 'Whether, in defect mode, it is still read as "collapsed" after expanding',
  },
  {
    id: 'devtools-tracing',
    ko: '주문 접수 메시지가 포커스 이동 없이 읽히나요? 고친 "배송 안내"가 "링크"로 읽히나요?',
    en: 'Whether the order-received message is read without moving focus; whether the fixed "Shipping info" is read as a "link"',
  },
];

const content = {
  ko: {
    intro: (
      <>
        이 장에서 확인한 것 가운데 아래 항목은 DOM과 개발자 도구만으로는 결론을 낼 수 없습니다. 화면
        낭독기로 직접 들어 보고, 사용한 조합을 함께 기록합니다.
      </>
    ),
    caption: '화면 낭독기로 따로 확인할 지점',
    head: ['페이지', '확인할 것'],
    record: (
      <>
        기록에는 보조기술 · 브라우저 · 운영체제와 각 버전을 적습니다. 흔히 쓰는 조합은 NVDA와 Chrome
        · Firefox, JAWS와 Chrome, macOS · iOS의 VoiceOver와 Safari, Android의 TalkBack과
        Chrome입니다. 한 조합의 결과를 다른 조합으로 일반화하지 않습니다.
      </>
    ),
    honestTitle: '이 사이트는 화면 낭독기가 읽는 방식을 측정하지 않았습니다',
    honest: (
      <>
        이 장의 데모 패널이 보여 주는 값은 실제 DOM과 이벤트에서 읽은 것입니다. 화면 낭독기가 어떻게
        읽는지는 위 표처럼 직접 확인해야 하는 항목으로 남깁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Of what this chapter checked, the items below cannot be concluded from the DOM and developer
        tools alone. Listen with a screen reader and record the combination you used.
      </>
    ),
    caption: 'Points to check separately with a screen reader',
    head: ['Page', 'What to check'],
    record: (
      <>
        Record the assistive technology, browser, and operating system, with versions. Common
        combinations are NVDA with Chrome or Firefox, JAWS with Chrome, VoiceOver with Safari on
        macOS and iOS, and TalkBack with Chrome on Android. Do not generalize one combination&apos;s
        result to another.
      </>
    ),
    honestTitle: 'This site has not measured how screen readers read these',
    honest: (
      <>
        The values this chapter&apos;s demo panels show are read from the real DOM and events. How
        screen readers read them stays as items to check yourself, as in the table above.
      </>
    ),
  },
};

export const AtCheckSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.atCheck.id}>
      <DocH2 {...toc.atCheck} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={checks.map((check) => [
          <PageLink key={check.id} locale={locale} id={check.id} />,
          check[locale],
        ])}
      />
      <p>{c.record}</p>
      <Callout variant="note" title={c.honestTitle}>
        <p>{c.honest}</p>
      </Callout>
    </section>
  );
};
