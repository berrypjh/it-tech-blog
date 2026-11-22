import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        네 가지 대안은 서로 다른 사람의 서로 다른 장벽을 맡습니다. 하나를 잘 만들었다고 다른 하나를
        건너뛸 수 없습니다.
      </>
    ),
    caption: '대안마다 맡는 일과 대신하지 못하는 일',
    head: ['대안', '맡는 일', '대신하지 못하는 일'],
    rows: [
      [
        '자막',
        '소리를 듣기 어려운 사람에게 말과 소리를 영상과 같은 시간에 전함',
        '화면에만 있는 정보',
      ],
      [
        '대본',
        '시간에 묶이지 않고 읽거나 검색하고, 점자로도 읽을 수 있는 글. 화면 설명을 담으면 설명 대본',
        '영상을 보며 같은 시간에 따라가는 경험',
      ],
      [
        '오디오 설명',
        '화면을 보기 어려운 사람에게 화면에만 있는 정보를 말로 전함',
        '소리를 듣기 어려운 사람의 접근',
      ],
      [
        '수화 통역',
        '수어를 제1언어로 쓰는 농인에게 같은 내용을 수어로 전함. 한국수어는 한국어와 다른 언어',
        '한국어 글인 자막 · 대본을 읽는 사람의 필요',
      ],
    ],
    after: (
      <>
        예를 들어 설명 대본은 1.2.3의 A 수준을 채울 수 있지만, 1.2.5(AA)의 오디오 설명이나 1.2.2의
        자막을 없애 주지 않습니다. 각 대안은 목표 수준과 대상에 맞춰 따로 판정합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The four alternatives handle different barriers for different people. Doing one well does
        not let you skip another.
      </>
    ),
    caption: 'What each alternative does and what it cannot replace',
    head: ['Alternative', 'Does', 'Cannot replace'],
    rows: [
      [
        'Captions',
        'Give speech and sounds, in time with the video, to people who cannot hear them well',
        'Information only on screen',
      ],
      [
        'Transcript',
        'Text not tied to time, to read, search, or read in braille. With visual descriptions it is a descriptive transcript',
        'Following along with the video in time',
      ],
      [
        'Audio description',
        'Speak information that is only on screen to people who cannot see it well',
        'Access for people who cannot hear well',
      ],
      [
        'Sign language interpreting',
        'Give the same content in sign language to Deaf people whose first language is signed. Korean Sign Language is a language distinct from Korean',
        'The needs of people reading Korean-language captions and transcripts',
      ],
    ],
    after: (
      <>
        For example, a descriptive transcript can meet 1.2.3 at level A, but it does not remove the
        audio description of 1.2.5 (AA) or the captions of 1.2.2. Judge each alternative separately
        for the target level and audience.
      </>
    ),
  },
};

export const RolesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.roles.id}>
      <DocH2 {...toc.roles} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
