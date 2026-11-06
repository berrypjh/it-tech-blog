import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: <>판정 기록의 칸마다 인용하는 문서가 다릅니다.</>,
    caption: '기록 칸과 인용할 문서',
    head: ['기록 칸', '인용할 문서', '적는 형태'],
    rows: [
      ['판정 근거', 'WCAG 2.2의 성공 기준 · 정의 · 적합성 요구', '판본 · 절 번호 · 원문 문장'],
      ['해석 메모', 'Understanding', '"이 해석은 Understanding의 ○○ 설명을 따름"'],
      ['구현 방법', 'Techniques · APG', '"이 결과를 H98로 냄" 같은 방법 설명'],
      ['검사 결과', 'ACT 규칙과 그 결과 대응표', '규칙 ID · 판 · 결과, 그리고 남은 시험'],
    ],
  },
  en: {
    intro: <>Each field of a judgment record cites a different document.</>,
    caption: 'Record fields and the documents to cite',
    head: ['Record field', 'Document to cite', 'Form'],
    rows: [
      [
        'Basis of judgment',
        'WCAG 2.2 success criteria, definitions, conformance requirements',
        'Edition, section number, original sentence',
      ],
      [
        'Interpretation note',
        'Understanding',
        '"This reading follows the Understanding explanation of …"',
      ],
      [
        'Implementation',
        'Techniques, APG',
        'A method note such as "the outcome is produced with H98"',
      ],
      [
        'Test result',
        'An ACT rule and its outcome mapping',
        'Rule ID, version, outcome, and the remaining testing',
      ],
    ],
  },
};

export const CitingSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.citing.id}>
      <DocH2 {...toc.citing} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
