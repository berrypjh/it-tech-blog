import type { Locale } from '@it-tech-blog/preferences';

import { CircleCheck, CircleHelp, CircleX } from 'lucide-react';

type State = 'yes' | 'no' | 'maybe';

const content = {
  ko: {
    caption: 'Generative AI와 Foundation Model은 겹치지만 같지 않다',
    caseHeader: '경우',
    states: { yes: '해당', no: '해당 안 함', maybe: '해당할 수 있음' } satisfies Record<
      State,
      string
    >,
    rows: [
      {
        title: '넓은 텍스트로 사전학습한 뒤 요약, 번역에 적응시키는 언어 모델',
        why: '생성도 하고, 사전학습 후 여러 작업에 적응시킨다',
        generative: 'yes' as State,
        foundation: 'yes' as State,
      },
      {
        title: '검색용 임베딩을 만드는 사전학습 encoder',
        why: '새 콘텐츠를 생성하지 않지만 사전학습 후 여러 작업에 쓰는 구성일 수 있다',
        generative: 'no' as State,
        foundation: 'maybe' as State,
      },
      {
        title: '한 가지 작업만을 위해 작은 데이터로 학습한 생성 모델',
        why: '생성하지만 폭넓은 사전학습과 적응을 전제로 하지 않는다',
        generative: 'yes' as State,
        foundation: 'no' as State,
      },
    ],
  },
  en: {
    caption: 'Generative AI and foundation models overlap but are not the same',
    caseHeader: 'Case',
    states: { yes: 'Yes', no: 'No', maybe: 'Possibly' } satisfies Record<State, string>,
    rows: [
      {
        title:
          'A language model pretrained on broad text, then adapted to summarization and translation',
        why: 'It generates, and it is adapted to many tasks after pretraining',
        generative: 'yes' as State,
        foundation: 'yes' as State,
      },
      {
        title: 'A pretrained encoder that makes embeddings for search',
        why: 'It generates no new content, but may be a configuration pretrained and reused across tasks',
        generative: 'no' as State,
        foundation: 'maybe' as State,
      },
      {
        title: 'A generative model trained on a small dataset for one task only',
        why: 'It generates, but is not built on broad pretraining and adaptation',
        generative: 'yes' as State,
        foundation: 'no' as State,
      },
    ],
  },
};

const icons = {
  yes: <CircleCheck className="h-4 w-4 text-text-success" aria-hidden="true" />,
  no: <CircleX className="h-4 w-4 text-text-light" aria-hidden="true" />,
  maybe: <CircleHelp className="h-4 w-4 text-text-light" aria-hidden="true" />,
};

const head = 'border-b border-stroke-light px-md py-sm font-semiBold text-text-light';
const cell = 'border-t border-stroke-light px-md py-sm';

const StateCell = ({ state, label }: { state: State; label: string }) => (
  <td className={`${cell} text-center`}>
    <span className="inline-flex flex-col items-center gap-2xs">
      {icons[state]}
      <span className="text-xxsm text-text-default">{label}</span>
    </span>
  </td>
);

/** 사례별로 Generative AI와 Foundation Model에 해당하는지를 아이콘 표로 보여 준다. 서버 컴포넌트다. */
export const GenerativeFoundationMatrix = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg">
      <div className="overflow-x-auto rounded-md border border-stroke-light bg-background-surface">
        <table className="w-full min-w-[30rem] border-collapse text-xxsm leading-normal">
          <caption className="sr-only">{c.caption}</caption>
          <thead>
            <tr>
              <th scope="col" className={`${head} text-left`}>
                {c.caseHeader}
              </th>
              <th scope="col" className={`${head} text-center`}>
                Generative AI
              </th>
              <th scope="col" className={`${head} text-center`}>
                Foundation Model
              </th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row) => (
              <tr key={row.title}>
                <th scope="row" className={`${cell} text-left font-normal`}>
                  <span className="block break-keep text-xsm font-semiBold text-text-default">
                    {row.title}
                  </span>
                  <span className="mt-2xs block break-keep text-xxsm text-text-light">
                    {row.why}
                  </span>
                </th>
                <StateCell state={row.generative} label={c.states[row.generative]} />
                <StateCell state={row.foundation} label={c.states[row.foundation]} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
};
