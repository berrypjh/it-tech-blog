import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="basic-forms" />의 문의 폼은 <code>required</code>와{' '}
        <code>type</code>만으로 검사했습니다. 제출하려 하면 브라우저가 제약을 확인하고, 맞지 않는
        칸이 있으면 그 칸에 <code>invalid</code> 이벤트를 보낸 뒤 제출을 멈춥니다. 이때{' '}
        <code>submit</code> 이벤트는 일어나지 않습니다.
      </>
    ),
    caption: '제출이 멈췄을 때 두 방식의 차이',
    head: ['항목', '브라우저 기본 제약', '사용자 정의 검증'],
    rows: [
      ['제출을 멈추는 주체', '브라우저', '페이지의 스크립트'],
      [
        '오류 글의 위치',
        '브라우저 화면의 말풍선. 페이지 DOM에 없음',
        '페이지의 글. 입력 칸에 연결',
      ],
      ['문구', '브라우저가 정함', '페이지가 정함. 수정 제안을 넣을 수 있음'],
      ['남아 있는 시간', '잠시 뒤 사라짐', '고칠 때까지 남음'],
    ],
    note: '말풍선의 모양 · 문구 · 한 번에 알리는 칸의 수는 브라우저마다 다릅니다. 표의 가운데 열은 표준이 정한 동작과 브라우저에서 관찰한 표현을 함께 적었습니다.',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        The inquiry form on <PageLink locale={locale} id="basic-forms" /> was checked with only{' '}
        <code>required</code> and <code>type</code>. On submission the browser checks the
        constraints, and if a field does not satisfy them it fires an <code>invalid</code> event on
        that field and stops the submission. No <code>submit</code> event occurs.
      </>
    ),
    caption: 'How the two approaches differ when submission stops',
    head: ['Item', 'Built-in constraints', 'Custom validation'],
    rows: [
      ['Who stops the submission', 'The browser', 'The page’s script'],
      [
        'Where the error text is',
        'A bubble in the browser UI; not in the page DOM',
        'Text on the page, connected to the field',
      ],
      ['Wording', 'Set by the browser', 'Set by the page; can include a suggestion'],
      ['How long it stays', 'Disappears shortly', 'Stays until fixed'],
    ],
    note: 'The bubble’s look, wording, and how many fields it reports at once differ by browser. The middle column combines behavior the standard defines with presentation observed in browsers.',
  },
};

export const NativeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.native.id}>
      <DocH2 {...toc.native} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="observed" /> {c.note}
      </p>
    </section>
  );
};
