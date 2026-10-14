import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const SEED =
  'https://developers.openai.com/cookbook/examples/reproducible_outputs_with_the_seed_parameter';
const SEMVER = 'https://semver.org/';

const content = {
  ko: {
    intro:
      '실험 기록은 "나중에 다른 사람이 같은 결과를 다시 만들거나 다르게 나온 이유를 찾을 수 있는가"를 기준으로 남깁니다.',
    caption: '실험 기록 항목',
    head: ['항목', '남길 내용'],
    rows: [
      ['데이터 / 버전', '평가 데이터 이름과 버전, 분할'],
      ['프롬프트 / 버전', '지시문과 예시의 버전'],
      ['모델 식별자와 설정', '모델 이름과 버전, 샘플링 설정, 최대 길이'],
      ['코드 / 버전', '실험 코드의 커밋이나 버전'],
      ['환경', '언어와 라이브러리 버전, 실행 환경'],
      ['실행 조건', '실행 시각, 반복 횟수, 재시도 정책'],
      ['결과와 실패 사례', '지표(분모 포함)와 실패 사례 목록'],
    ],
    seed: (
      <>
        seed를 기록하는 것만으로 원격 모델의 완전 재현성이 보장되지는 않습니다. 한 제공자의{' '}
        <ExternalLink href={SEED}>seed 재현성 문서</ExternalLink>는 이를 &quot;best effort&quot;라
        하고 같은 조건에서도 결과가 다를 수 있다고 적습니다. 그래서 기록에는 seed와 함께 모델
        식별자, 설정, 실행 조건과 실제 출력 원문을 남깁니다.
      </>
    ),
    version: (
      <>
        버전 규칙을 정해 두면 변경의 의미를 전달할 수 있습니다.{' '}
        <ExternalLink href={SEMVER}>시맨틱 버저닝</ExternalLink>의 규칙처럼 출력 스키마가 호환되지
        않게 바뀌면 major를, 호환되는 필드를 더하면 minor를, 동작은 같고 오류만 고치면 patch를
        올리는 방식을 계약의 schemaVersion에 쓸 수 있습니다.
      </>
    ),
    noteTitle: '기록이 없으면 옮길 수 없습니다',
    note: '설정값만 옮기면 왜 그 값을 골랐는지, 어떤 데이터에서 확인했는지, 어떤 실패를 알고 있었는지가 사라집니다. 서비스는 그 근거 위에서 변경 여부를 판단합니다.',
  },
  en: {
    intro:
      'Keep an experiment record by the standard "can someone else later reproduce the same result or find why it came out differently".',
    caption: 'Experiment record items',
    head: ['Item', 'What to keep'],
    rows: [
      ['Data / version', 'Name and version of the evaluation data, and the split'],
      ['Prompt / version', 'The version of the instructions and examples'],
      [
        'Model identifier and settings',
        'Model name and version, sampling settings, maximum length',
      ],
      ['Code / version', 'The commit or version of the experiment code'],
      ['Environment', 'Language and library versions, runtime environment'],
      ['Run conditions', 'Run time, number of repeats, retry policy'],
      ['Results and failure cases', 'Metrics (with denominators) and a list of failure cases'],
    ],
    seed: (
      <>
        Recording a seed alone does not guarantee full reproducibility of a remote model. One
        provider’s <ExternalLink href={SEED}>seed reproducibility guide</ExternalLink> calls it
        &quot;best effort&quot; and says results can differ even under the same conditions. So the
        record keeps, along with the seed, the model identifier, settings, run conditions, and the
        actual raw output.
      </>
    ),
    version: (
      <>
        Fixing a versioning rule lets you convey the meaning of a change. Following{' '}
        <ExternalLink href={SEMVER}>semantic versioning</ExternalLink>, you can bump major when the
        output schema changes incompatibly, minor when a compatible field is added, and patch when
        behavior is the same and only an error is fixed, and use that in the contract’s
        schemaVersion.
      </>
    ),
    noteTitle: 'Without a record, it cannot be carried over',
    note: 'If you carry over only the settings, why you chose them, on which data you confirmed them, and which failures you knew about are lost. The service judges whether to change on top of that rationale.',
  },
};

export const RecordSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([item, ...rest]) => [
    <span key={item} className="font-semiBold text-text-default">
      {item}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.record.id}>
      <DocH2 {...toc.record} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p>{c.seed}</p>
      <p>{c.version}</p>
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
