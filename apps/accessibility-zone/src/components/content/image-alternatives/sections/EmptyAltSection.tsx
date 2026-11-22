import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 장식: 빈 alt — 보조기술이 건너뛸 수 있다 -->
<img src="entrance.svg" alt="">

<!-- alt 생략: 이름 없는 그림. 무엇을 읽을지는 보조기술마다 다르다 -->
<img src="entrance.svg">

<!-- 글자가 있는 링크: 그림은 비우고 링크 이름은 글자에서 -->
<a href="/directions"><img src="entrance.svg" alt=""> 동쪽 입구 길찾기</a>`,
  en: `<!-- Decorative: empty alt, so assistive technology can skip it -->
<img src="entrance.svg" alt="">

<!-- Missing alt: an image without a name. What is read varies by product -->
<img src="entrance.svg">

<!-- A link with text: leave the image empty, the name comes from the text -->
<a href="/directions"><img src="entrance.svg" alt=""> Directions to the east entrance</a>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <code>alt=&quot;&quot;</code>는 “이 그림은 건너뛰어도 된다”는 작성자의 결정입니다. alt를
        빼면 그 결정이 없어서, 이름 없는 그림으로 남습니다. 이름이 어디서 오는지는{' '}
        <PageLink locale={locale} id="html-name-sources" />
        에서 다룬 규칙 그대로입니다.
      </>
    ),
    label: '빈 alt · alt 생략 · 글자가 있는 링크',
    pitfallTitle: 'alt 생략을 장식 처리로 쓰지 않습니다',
    pitfall: (
      <>
        alt가 없으면 화면 낭독기가 파일 이름이나 주소를 읽는 경우가 많습니다. 다만 무엇을 읽는지는
        제품과 설정에 따라 다르므로, 실제 발화는 보조기술에서 확인해야 확인으로 적을 수 있습니다.
      </>
    ),
    duplicate: (
      <>
        링크 안에 글자가 이미 있으면 그림에도 같은 말을 넣지 않습니다. 넣으면 링크 이름이 “동쪽 입구
        길찾기 동쪽 입구 길찾기”가 되어 같은 말을 두 번 듣습니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        <code>alt=&quot;&quot;</code> is the author’s decision that the image can be skipped.
        Without alt there is no decision, so it stays an image without a name. Where the name comes
        from follows the rules on <PageLink locale={locale} id="html-name-sources" />.
      </>
    ),
    label: 'Empty alt, missing alt, and a link with text',
    pitfallTitle: 'Do not use a missing alt for decoration',
    pitfall: (
      <>
        Without alt, screen readers often read the file name or address. What they read depends on
        the product and settings, so only a check with real assistive technology confirms the
        speech.
      </>
    ),
    duplicate: (
      <>
        If the link already has text, do not put the same words in the image. Otherwise the link
        name becomes “Directions to the east entrance Directions to the east entrance”.
      </>
    ),
  },
};

export const EmptyAltSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.emptyAlt.id}>
      <DocH2 {...toc.emptyAlt} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} />
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>
          <SourceTag locale={locale} id="at" /> {c.pitfall}
        </p>
      </Callout>
      <p>{c.duplicate}</p>
    </section>
  );
};
