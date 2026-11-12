import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        2.5.3은 A 수준의 성공 기준입니다. 원문은 짧지만, 무엇이 요구이고 무엇이 권장인지 나눠 읽어야
        합니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.5.3 Label in Name',
    caption: '원문에서 읽어 낸 판정 기준',
    head: ['항목', '내용', '근거의 종류'],
    rows: [
      [
        '적용 대상',
        '텍스트나 텍스트 이미지를 포함한 라벨이 있는 사용자 인터페이스 컴포넌트',
        <SourceTag key="s" locale="ko" id="normative" />,
      ],
      [
        '요구',
        '이름이 화면에 보이는 텍스트를 포함한다 — 완전 일치를 요구하지 않음',
        <SourceTag key="s" locale="ko" id="normative" />,
      ],
      [
        '권장',
        '라벨 텍스트를 이름의 맨 앞에 둔다 (Note의 best practice)',
        <SourceTag key="s" locale="ko" id="informative" />,
      ],
      [
        '대소문자 · 문장 부호',
        '차이는 이 기준의 판정과 관계없음',
        <SourceTag key="s" locale="ko" id="informative" />,
      ],
      [
        '설명',
        '이름이 아니므로 판정에 합치지 않음. 제목 · 안내 같은 맥락은 설명으로 줄 수 있음',
        <SourceTag key="s" locale="ko" id="informative" />,
      ],
      [
        '단어가 끼어들거나 순서가 바뀐 이름',
        'Understanding이 "앞으로의 실패 사례 후보"로만 적음 — 해석을 기록',
        <SourceTag key="s" locale="ko" id="informative" />,
      ],
    ],
    after: (
      <>
        WCAG 2.2는 적합성 요구 절(5.1)에서 Note를 비규범(informative)이라고 정합니다. 그래서 Note의
        권장을 지키지 않았다고 실패로 판정하지 않습니다. Understanding 문서에서 온 줄도 판정의
        해석을 돕지만 원문 요구를 넓히거나 줄이지 않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        2.5.3 is a Level A success criterion. The text is short, but you need to read what is
        required apart from what is recommended.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.5.3 Label in Name',
    caption: 'Judging criteria read from the text',
    head: ['Item', 'Content', 'Kind of basis'],
    rows: [
      [
        'Scope',
        'User interface components with labels that include text or images of text',
        <SourceTag key="s" locale="en" id="normative" />,
      ],
      [
        'Requirement',
        'The name contains the text presented visually — an exact match is not required',
        <SourceTag key="s" locale="en" id="normative" />,
      ],
      [
        'Best practice',
        'Put the label text at the start of the name (the Note’s best practice)',
        <SourceTag key="s" locale="en" id="informative" />,
      ],
      [
        'Case and punctuation',
        'Differences do not matter for this criterion',
        <SourceTag key="s" locale="en" id="informative" />,
      ],
      [
        'Description',
        'Not the name, so it is not added for judging. Context such as headings and instructions can go in the description',
        <SourceTag key="s" locale="en" id="informative" />,
      ],
      [
        'Names with words interspersed or reordered',
        'Understanding lists them only as "potential future" failure techniques — record your interpretation',
        <SourceTag key="s" locale="en" id="informative" />,
      ],
    ],
    after: (
      <>
        WCAG 2.2 states in its conformance requirements (5.1) that notes are informative
        (non-normative). So not following the Note&apos;s best practice is not judged a failure. The
        rows from the Understanding document help interpretation but do not widen or narrow the
        requirement.
      </>
    ),
  },
};

export const CriterionSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.criterion.id}>
      <DocH2 {...toc.criterion} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('label-in-name')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        For user interface components with labels that include text or images of text, the name
        contains the text that is presented visually.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <p className="flex flex-wrap items-center gap-sm text-xxsm">
        <SourceTag locale={locale} id="informative" />
        <ExternalLink href={understanding('label-in-name')}>
          Understanding SC 2.5.3: Label in Name
        </ExternalLink>
      </p>
    </section>
  );
};
