import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { LangReadout } from '../demos/LangReadout';
import { getToc } from '../toc';

const content = {
  ko: {
    langHeading: '언어 표시',
    lang: (
      <>
        3.1.1(A)은 페이지의 기본 언어를, 3.1.2(AA)는 다른 언어로 쓴 구절의 언어를 프로그램이 알 수
        있게 하라고 요구합니다. 화면 낭독기는 이 값으로 발음 규칙을 고릅니다. 고유 명사 · 기술
        용어처럼 예외도 있으니, 모든 영어 단어에 lang을 붙이라는 뜻은 아닙니다.
      </>
    ),
    cite312: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 3.1.2 Language of Parts (AA)',
    helpHeading: '일관된 도움',
    help: (
      <>
        3.2.6(A)은 도움 수단이 여러 페이지에 되풀이될 때만 적용되고, 그 순서가 같기를 요구합니다.
        도움 수단을 새로 만들라는 요구는 아닙니다. 순서는 화면 위치가 아니라 페이지를 직렬화한
        순서로 보고, 같은 확대 · 방향의 화면끼리 비교합니다.
      </>
    ),
    cite326: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 3.2.6 Consistent Help (A)',
    caption: '두 페이지에서 도움 수단의 순서 (교육 예시)',
    head: ['페이지', '순서', '판단'],
    rows: [
      ['일정 페이지', '본문 → 자주 묻는 질문 링크 → 문의 전화', '기준'],
      ['신청 페이지 (같은 순서)', '본문 → 자주 묻는 질문 링크 → 문의 전화', '통과'],
      [
        '안내 페이지 (바뀐 순서)',
        '문의 전화 → 본문 → 자주 묻는 질문 링크',
        '실패 — 사용자가 바꾼 것이 아님',
      ],
    ],
  },
  en: {
    langHeading: 'Language markup',
    lang: (
      <>
        3.1.1 (A) asks that the page’s default language, and 3.1.2 (AA) that the language of each
        passage in another language, can be programmatically determined. Screen readers choose
        pronunciation rules from this value. There are exceptions such as proper names and technical
        terms, so it does not mean putting lang on every foreign word.
      </>
    ),
    cite312: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 3.1.2 Language of Parts (AA)',
    helpHeading: 'Consistent help',
    help: (
      <>
        3.2.6 (A) applies only when help mechanisms repeat across pages, and asks that their order
        be the same. It does not require creating help. Order means the serialized order of the
        page, not the screen position, compared between screens at the same zoom and orientation.
      </>
    ),
    cite326: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 3.2.6 Consistent Help (A)',
    caption: 'Order of help mechanisms across pages (teaching example)',
    head: ['Page', 'Order', 'Judgment'],
    rows: [
      ['Schedule page', 'Content → FAQ link → phone number', 'Baseline'],
      ['Registration page (same order)', 'Content → FAQ link → phone number', 'Pass'],
      [
        'Notice page (changed order)',
        'Phone number → content → FAQ link',
        'Fail: not changed by the user',
      ],
    ],
  },
};

export const LanguageSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.language.id}>
      <DocH2 {...toc.language} />
      <DocH3>{c.langHeading}</DocH3>
      <p>{c.lang}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('language-of-parts')}
        cite={c.cite312}
        checkedOn={CONTENT_CHECKED_ON}
      >
        The human language of each passage or phrase in the content can be programmatically
        determined except for proper names, technical terms, words of indeterminate language, and
        words or phrases that have become part of the vernacular of the immediately surrounding
        text.
      </NormativeQuote>
      <LangReadout />
      <DocH3>{c.helpHeading}</DocH3>
      <p>{c.help}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('consistent-help')}
        cite={c.cite326}
        checkedOn={CONTENT_CHECKED_ON}
      >
        If a web page contains any of the following help mechanisms, and those mechanisms are
        repeated on multiple web pages within a set of web pages, they occur in the same order
        relative to other page content, unless a change is initiated by the user: Human contact
        details; Human contact mechanism; Self-help option; A fully automated contact mechanism.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
