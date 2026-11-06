import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { FileText, ListFilter, Puzzle, Route } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';

import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 컴포넌트 검사 · 표본 검사 · 전체 페이지 · 완전한 과정. */
const rowIcons = [Puzzle, ListFilter, FileText, Route];

const content = {
  ko: {
    intro: (
      <>
        검사한 범위가 다르면 말할 수 있는 결론도 다릅니다. 같은 &quot;통과&quot;라도 무엇을
        검사했는지 함께 적어야 합니다.
      </>
    ),
    caption: '검사 범위에 따라 말할 수 있는 결론',
    head: ['검사', '말할 수 있는 것', '말할 수 없는 것'],
    rows: [
      [
        '컴포넌트 검사',
        '그 컴포넌트가 검사한 상태에서 해당 성공 기준을 충족함',
        '그 컴포넌트를 쓴 페이지의 적합성',
      ],
      ['표본 검사', '고른 페이지 · 상태에서 관찰한 결과', '고르지 않은 페이지 · 상태의 결과'],
      [
        '전체 페이지',
        '그 페이지가 목표 수준에 적합함(다른 요구도 충족할 때)',
        '그 페이지가 속한 과정 전체의 적합성',
      ],
      ['완전한 과정', '과정의 모든 페이지가 목표 수준에 적합함', '과정 밖 페이지의 적합성'],
    ],
  },
  en: {
    intro: (
      <>
        Different scopes of testing support different conclusions. Even the same &quot;pass&quot;
        needs a note on what was tested.
      </>
    ),
    caption: 'Conclusions each scope of testing supports',
    head: ['Testing', 'What you can say', 'What you cannot say'],
    rows: [
      [
        'Component test',
        'The component meets the criterion in the states tested',
        'Conformance of pages that use it',
      ],
      [
        'Sample test',
        'Results observed on the chosen pages and states',
        'Results on pages and states not chosen',
      ],
      [
        'Full page',
        'The page conforms at the target level (when the other requirements are met too)',
        'Conformance of the whole process it belongs to',
      ],
      [
        'Complete process',
        'Every page in the process conforms at the target level',
        'Conformance of pages outside the process',
      ],
    ],
  },
};

export const ClaimsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.claims.id}>
      <DocH2 {...toc.claims} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
    </section>
  );
};
