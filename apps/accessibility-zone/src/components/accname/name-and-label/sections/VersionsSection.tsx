import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        이름 계산 규칙은 여러 문서에 나뉘어 있고, 문서마다 발행 상태가 다릅니다. 이 장은 아래 판본을
        읽었고, 상태를 함께 적습니다.
      </>
    ),
    caption: '이 장이 읽은 규격',
    head: ['문서', '판본', '상태', '이 장에서 쓰는 곳'],
    rows: [
      [
        'AccName 1.1',
        '2018-12-18',
        'W3C Recommendation (확정)',
        '계산 단계의 확정 규격 (step 2A~2I)',
      ],
      [
        'AccName 1.2',
        '2026-11-04',
        'Working Draft (초안)',
        '계산 경로를 적는 단계 이름. WAI-ARIA 1.2가 참조하는 문서의 최신 초안',
      ],
      [
        'HTML-AAM 1.0',
        '2026-10-26',
        'Working Draft (초안)',
        'input · button · img 등 요소별 이름 · 설명 규칙',
      ],
      [
        'WAI-ARIA 1.2',
        '2023-06-06',
        'W3C Recommendation (확정)',
        '역할마다 이름 허용 · 필수 여부, aria-describedby · aria-errormessage',
      ],
      ['WAI-ARIA 1.3', '2026-06-04', 'Working Draft (초안)', 'aria-description (1.2에는 없음)'],
      ['WCAG 2.2', '2024-12-12', 'W3C Recommendation (확정)', '2.5.3 Label in Name 판정'],
    ],
    rulesIntro: '판본이 섞이므로 이 장은 세 가지 규칙으로 적습니다.',
    rules: [
      '계산 경로는 AccName 1.2 초안의 단계로 적고, 1.1 확정 규격과 결과가 다르면 두 결과를 함께 적습니다.',
      '원문으로 확인하지 못한 분기는 "미확인", 원문 문장이 두 가지로 읽히면 "미확정"으로 둡니다.',
      '브라우저에서 본 값은 예상과 다른 칸에 "관찰값"으로 적고, 엔진 · 버전을 함께 남깁니다.',
    ],
  },
  en: {
    intro: (
      <>
        The naming rules are split across several documents, and each has a different publication
        status. This chapter read the editions below and states their status.
      </>
    ),
    caption: 'Specs this chapter read',
    head: ['Document', 'Edition', 'Status', 'Used in this chapter for'],
    rows: [
      [
        'AccName 1.1',
        '2018-12-18',
        'W3C Recommendation (final)',
        'The final rules for computation steps (step 2A–2I)',
      ],
      [
        'AccName 1.2',
        '2026-11-04',
        'Working Draft',
        'Step names for writing computation paths; the latest draft of the document WAI-ARIA 1.2 references',
      ],
      [
        'HTML-AAM 1.0',
        '2026-10-26',
        'Working Draft',
        'Per-element name and description rules for input, button, img, and others',
      ],
      [
        'WAI-ARIA 1.2',
        '2023-06-06',
        'W3C Recommendation (final)',
        'Whether each role allows or requires a name; aria-describedby, aria-errormessage',
      ],
      ['WAI-ARIA 1.3', '2026-06-04', 'Working Draft', 'aria-description (not in 1.2)'],
      ['WCAG 2.2', '2024-12-12', 'W3C Recommendation (final)', 'Judging 2.5.3 Label in Name'],
    ],
    rulesIntro: 'Because editions mix, this chapter writes things down by three rules.',
    rules: [
      'Write computation paths with the steps of the AccName 1.2 draft, and when the 1.1 Recommendation gives a different result, write both.',
      'Mark branches not confirmed in the original text "unconfirmed," and sentences that read two ways "undecided."',
      'Write what you see in a browser as an "observed value" in a separate column from the expectation, with the engine and version.',
    ],
  },
};

export const VersionsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.versions.id}>
      <DocH2 {...toc.versions} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.rulesIntro}</p>
      <Steps items={c.rules} />
    </section>
  );
};
