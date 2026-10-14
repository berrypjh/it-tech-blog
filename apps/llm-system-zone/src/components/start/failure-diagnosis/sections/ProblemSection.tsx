import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '관측한 실패는 증상입니다. 01-04의 구성 요소가 모두 쓰인 기능이라, 틀린 응답 하나에 여러 가설이 가능합니다. 모델을 바꾸거나 프롬프트를 고치기 전에 가설마다 "맞다면 어떤 증거가 보여야 하는가"를 적습니다.',
    caption: '틀린 응답에 대한 가설과 맞다면 보일 증거',
    head: ['가설', '맞다면 보일 증거', '어디서 확인하나'],
    rows: [
      ['원문 문서가 틀렸다', '원본 문서에 틀린 값이 적혀 있다', '원본 저장소의 문서와 버전'],
      ['현행 문서를 검색하지 못했다', '현행 문서가 검색 후보에 없다', '질의와 검색된 문서 목록'],
      [
        '낡은 버전이 색인되어 있다',
        '검색된 문서 버전이 원본의 현행 버전보다 낮다',
        '문서 버전과 색인 시각',
      ],
      [
        '찾았지만 context에서 빠졌다',
        '검색 결과에는 있으나 context 요약에는 없다',
        'context 구성 단계의 출력',
      ],
      [
        '모델이 근거를 무시하거나 오독했다',
        '올바른 근거가 context에 있는데 응답이 다르다',
        'context 요약과 응답의 대조',
      ],
      ['화면이 이전 응답을 보여 준다', '저장된 응답과 화면 표시가 다르다', '저장된 응답과 UI 표시'],
    ],
    after:
      '"모델이 틀렸다"는 이 중 하나일 뿐이고, 증거를 보기 전에는 어느 쪽도 사실이 아닙니다. 같은 증상 하나가 여러 위치에서 나올 수 있습니다.',
  },
  en: {
    intro:
      'An observed failure is a symptom. This feature uses every component from 01-04, so one wrong response allows several hypotheses. Before changing the model or editing the prompt, write down for each hypothesis "if it is true, what evidence should show?".',
    caption: 'Hypotheses for a wrong response and the evidence each would show',
    head: ['Hypothesis', 'Evidence if true', 'Where to check'],
    rows: [
      [
        'The source document is wrong',
        'The source document holds the wrong value',
        'The document and version in the source repository',
      ],
      [
        'The current document was not retrieved',
        'The current document is not among the retrieval candidates',
        'The query and the retrieved document list',
      ],
      [
        'A stale version is indexed',
        'The retrieved document version is lower than the current source version',
        'Document version and index time',
      ],
      [
        'It was found but dropped from the context',
        'It is in the retrieval result but not in the context summary',
        'Output of the context construction step',
      ],
      [
        'The model ignored or misread the evidence',
        'The correct evidence is in the context but the response differs',
        'Compare the context summary with the response',
      ],
      [
        'The screen shows an earlier response',
        'The stored response differs from what is displayed',
        'The stored response and the UI display',
      ],
    ],
    after:
      '"The model was wrong" is only one of these, and before seeing evidence none of them is fact. One symptom can come from several places.',
  },
};

export const ProblemSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([first, ...rest]) => [
    <span key={first} className="font-semiBold text-text-default">
      {first}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.problem.id}>
      <DocH2 {...toc.problem} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p>{c.after}</p>
    </section>
  );
};
