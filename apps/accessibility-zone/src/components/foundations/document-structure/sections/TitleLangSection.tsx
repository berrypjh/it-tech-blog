import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocH3, ExternalLink } from '@it-tech-blog/ui';

import { understanding } from '@/components/shared/wcag';

import { TabTitlesDiagram } from '../diagrams/TabTitlesDiagram';
import { getToc } from '../toc';

const code = {
  ko: `<!doctype html>
<html lang="ko">
  <head>
    <title>주문 확인 — 마켓</title>
  </head>
  <body>
    <p>제품 문구: <q lang="en">Type anywhere, anytime.</q></p>
  </body>
</html>`,
  en: `<!doctype html>
<html lang="en">
  <head>
    <title>Order confirmation — Market</title>
  </head>
  <body>
    <p>Recommended: <span lang="ko">한글 자판</span> stickers</p>
  </body>
</html>`,
};

const content = {
  ko: {
    titleHeading: '<title> — 페이지를 구분하는 첫 정보',
    title: (
      <>
        페이지 제목(<code>title</code>)은 브라우저 탭 · 방문 기록 · 북마크에 쓰이고, 화면 낭독기는
        보통 페이지가 열릴 때 이것부터 읽습니다. 탭이 여러 개 열려 있을 때 사용자는 이 이름으로
        페이지를 구분합니다.{' '}
        <ExternalLink href={understanding('page-titled')}>
          WCAG 2.2 성공 기준 2.4.2 페이지 제목(A)
        </ExternalLink>
        은 페이지에 <strong>주제나 목적을 설명하는 페이지 제목</strong>이 있어야 한다고 요구합니다.
      </>
    ),
    titleTips: (
      <>
        모든 페이지가 &quot;마켓&quot;처럼 같은 페이지 제목이면 구분할 수 없습니다. 페이지마다
        다르게 쓰고, 구별되는 내용을 앞에 둡니다(<code>주문 확인 — 마켓</code>). 앞에 두는 순서는
        규정이 아니라 널리 쓰는 권장 방식입니다. 페이지를 새로 불러오지 않고 화면만 바꾸는 앱은
        경로가 바뀔 때 페이지 제목도 직접 바꿔야 합니다.
      </>
    ),
    langHeading: 'lang — 어떤 언어로 읽을지',
    lang: (
      <>
        <code>&lt;html lang=&quot;ko&quot;&gt;</code>는 문서의 기본 언어를 알립니다(
        <ExternalLink href={understanding('language-of-page')}>
          WCAG 2.2 성공 기준 3.1.1 페이지 언어(A)
        </ExternalLink>
        ). 화면 낭독기는 이 값으로 발음 규칙과 음성을 고르고, 브라우저는 번역 제안 · 맞춤법 검사
        등에 씁니다. 언어가 빠지거나 틀리면 한국어 문장을 영어 발음 규칙으로 읽는 일이 생깁니다.
      </>
    ),
    part: (
      <>
        본문 중 다른 언어로 된 구절에는 그 요소에 <code>lang</code>을 붙입니다(
        <ExternalLink href={understanding('language-of-parts')}>
          WCAG 2.2 성공 기준 3.1.2 부분 언어(AA)
        </ExternalLink>
        ). 단, 고유명사 · 기술 용어 · 이미 우리말처럼 쓰는 단어는 이 요구에서 빠집니다.
      </>
    ),
    codeLabel: '문서의 뼈대 — 페이지 제목과 언어를 갖춤',
    cautionTitle: 'lang이 맞아도 음성이 바뀌는지는 보조기술로 따로 확인합니다',
    caution: (
      <>
        <code>lang</code>을 바르게 써도 실제로 음성이 바뀌는지는 화면 낭독기 · 음성 엔진 · 설치된
        언어에 따라 다릅니다. 마크업이 맞는지는 개발자 도구로 확인하고, 실제로 어떻게 읽히는지는
        보조기술로 따로 확인해야 합니다.
      </>
    ),
  },
  en: {
    titleHeading: '<title> — the first thing that tells pages apart',
    title: (
      <>
        <code>title</code> is used for browser tabs, history, and bookmarks, and screen readers
        usually read it first when a page opens. With several tabs open, users tell pages apart by
        this name. <ExternalLink href={understanding('page-titled')}>WCAG 2.4.2 (A)</ExternalLink>{' '}
        requires a page to have <strong>a title that describes its topic or purpose</strong>.
      </>
    ),
    titleTips: (
      <>
        If every page is titled &quot;Market&quot;, they cannot be told apart. Make each one
        different and put the distinguishing part first (<code>Order confirmation — Market</code>).
        Putting it first is a widely used recommendation, not a rule. Apps that change the screen
        without loading a new page have to update the title themselves when the route changes.
      </>
    ),
    langHeading: 'lang — which language to read it in',
    lang: (
      <>
        <code>&lt;html lang=&quot;en&quot;&gt;</code> states the document&apos;s default language (
        <ExternalLink href={understanding('language-of-page')}>WCAG 3.1.1</ExternalLink>, A). Screen
        readers use it to choose pronunciation rules and voices, and browsers use it for translation
        prompts, spell checking, and more. If it is missing or wrong, an English sentence may be
        read with another language&apos;s pronunciation rules.
      </>
    ),
    part: (
      <>
        Put <code>lang</code> on any element whose passage is in another language (
        <ExternalLink href={understanding('language-of-parts')}>WCAG 3.1.2</ExternalLink>, AA).
        Proper names, technical terms, and words that have become part of the surrounding language
        are exempt.
      </>
    ),
    codeLabel: 'A document skeleton with a title and language',
    cautionTitle: 'Even with correct lang, check the voice with assistive technology',
    caution: (
      <>
        Even with correct <code>lang</code>, whether the voice actually switches depends on the
        screen reader, the speech engine, and the installed languages. Check the markup with
        developer tools, and check how it is actually read with assistive technology separately.
      </>
    ),
  },
};

export const TitleLangSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.titleLang.id}>
      <DocH2 {...toc.titleLang} />
      <DocH3>{c.titleHeading}</DocH3>
      <p>{c.title}</p>
      <p>{c.titleTips}</p>
      <TabTitlesDiagram locale={locale} />
      <DocH3>{c.langHeading}</DocH3>
      <p>{c.lang}</p>
      <p>{c.part}</p>
      <CodeBlock label={c.codeLabel} code={code[locale]} />
      <Callout variant="pitfall" title={c.cautionTitle}>
        <p>{c.caution}</p>
      </Callout>
    </section>
  );
};
