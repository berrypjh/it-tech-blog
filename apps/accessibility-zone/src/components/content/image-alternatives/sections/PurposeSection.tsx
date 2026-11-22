import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        대체 텍스트는 그림을 묘사하는 글이 아니라, 그림이 그 자리에서 하는 일을 대신하는 글입니다.
        그래서 먼저 “이 그림이 없으면 사용자가 무엇을 놓치는가”를 묻습니다. 아래 표는 문이 열린 입구
        아이콘 하나를 네 자리에 둔 교육 예시입니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.1.1 Non-text Content (A)',
    caption: '같은 입구 아이콘의 네 자리',
    head: ['자리', '사용자가 알아야 할 것', '대체 텍스트', '이유'],
    rows: [
      ['“동쪽 입구로 들어오세요” 문장 앞', '새 정보 없음', 'alt=""', '문장이 이미 말함 (장식)'],
      [
        '일요일 3회차 옆, 아이콘만',
        '이 회차는 입구가 바뀜',
        'alt="입구 변경"',
        '아이콘만 전하는 정보',
      ],
      [
        '아이콘만 있는 링크',
        '누르면 어디로 가는가',
        'alt="동쪽 입구 길찾기"',
        '링크의 목적 (기능)',
      ],
      [
        '“동쪽 입구 길찾기” 글자가 있는 링크',
        '글자가 이미 말함',
        'alt=""',
        '같은 말을 두 번 읽지 않게',
      ],
    ],
    after: (
      <>
        결정은 그림 파일이 아니라 자리에 붙습니다. W3C WAI의 Images Tutorial은 이 판단을 결정 나무로
        정리한 보충 자료이고, 규범은 위 1.1.1입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A text alternative does not describe the picture; it does the picture’s job in that place.
        So first ask what users would miss without it. The table below is a teaching example that
        puts one open-door entrance icon in four places.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.1.1 Non-text Content (A)',
    caption: 'One entrance icon in four places',
    head: ['Place', 'What users need', 'Text alternative', 'Why'],
    rows: [
      [
        'Before the sentence “Enter by the east entrance”',
        'Nothing new',
        'alt=""',
        'The sentence says it (decorative)',
      ],
      [
        'Next to Sunday Session 3, icon only',
        'This session’s entrance changed',
        'alt="Entrance changed"',
        'Only the icon carries it',
      ],
      [
        'A link with only the icon',
        'Where it goes',
        'alt="Directions to the east entrance"',
        'The link’s purpose (functional)',
      ],
      [
        'A link with the text “Directions to the east entrance”',
        'The text says it',
        'alt=""',
        'Avoid saying it twice',
      ],
    ],
    after: (
      <>
        The decision belongs to the place, not the image file. The W3C WAI Images Tutorial turns
        this judgment into a decision tree as supporting material; the normative text is 1.1.1
        above.
      </>
    ),
  },
};

export const PurposeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.purpose.id}>
      <DocH2 {...toc.purpose} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('non-text-content')}
        cite={c.cite}
        checkedOn={CONTENT_CHECKED_ON}
      >
        All non-text content that is presented to the user has a text alternative that serves the
        equivalent purpose, except for the situations listed below. […]{' '}
        <strong>Controls, Input</strong> If non-text content is a control or accepts user input,
        then it has a name that describes its purpose. […]{' '}
        <strong>Decoration, Formatting, Invisible</strong> If non-text content is pure decoration,
        is used only for visual formatting, or is not presented to users, then it is implemented in
        a way that it can be ignored by assistive technology.
      </NormativeQuote>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
