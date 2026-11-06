import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { KWCAG_REGISTRY } from '@/components/shared/kwcag';
import { SourceTag } from '@/components/shared/SourceTag';
import { CHECKED_ON } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <ExternalLink href={KWCAG_REGISTRY}>국립전파연구원의 표준 등록 페이지</ExternalLink>와 그
        페이지의 첨부 원문(2.2 docx)을 직접 열어 확인한 내용입니다. {CHECKED_ON.ko}.
      </>
    ),
    caption: 'KWCAG 2.2 등록 정보와 원문에서 확인한 것',
    head: ['항목', '확인한 내용', '어디서'],
    rows: [
      ['제목', '한국형 웹 콘텐츠 접근성 지침 2.2', '등록 페이지 · 원문 표지'],
      ['표준번호', 'KS X OT0003 (원문 표지: KS X OT0003:2022)', '등록 페이지 · 원문 표지'],
      ['제개정일', '2022-12-28', '등록 페이지 · 원문 표지'],
      ['첨부파일', '2.1 원문 docx와 2.2 원문 docx 두 개', '등록 페이지'],
      ['기초 판본', 'W3C WCAG 2.1(2018)을 기초로 작성', '원문 머리말 · 개정 경위'],
      ['짜임', '원칙 4개 · 지침 14개 · 검사항목 33개', '원문 개요'],
    ],
  },
  en: {
    intro: (
      <>
        What was confirmed by opening the{' '}
        <ExternalLink href={KWCAG_REGISTRY}>
          National Radio Research Agency registry page
        </ExternalLink>{' '}
        and its attached original (2.2 docx). {CHECKED_ON.en}.
      </>
    ),
    caption: 'What the KWCAG 2.2 registry and original text confirm',
    head: ['Item', 'Confirmed', 'Where'],
    rows: [
      [
        'Title',
        '한국형 웹 콘텐츠 접근성 지침 2.2 (Korean Web Content Accessibility Guidelines 2.2)',
        'Registry page, cover of the original',
      ],
      [
        'Standard number',
        'KS X OT0003 (cover: KS X OT0003:2022)',
        'Registry page, cover of the original',
      ],
      ['Revision date', '2022-12-28', 'Registry page, cover of the original'],
      [
        'Attachments',
        'Two files: the 2.1 original docx and the 2.2 original docx',
        'Registry page',
      ],
      [
        'Base edition',
        'Written on the basis of W3C WCAG 2.1 (2018)',
        'Foreword and revision history of the original',
      ],
      ['Structure', '4 principles, 14 guidelines, 33 checklist items', 'Overview in the original'],
    ],
  },
};

export const RegistrySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.registry.id}>
      <DocH2 {...toc.registry} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="observed" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
