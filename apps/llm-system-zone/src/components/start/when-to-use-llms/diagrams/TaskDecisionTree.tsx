import type { Locale } from '@it-tech-blog/preferences';
import { ExternalLink } from '@it-tech-blog/ui';

import { ArrowDown, ArrowRight, CornerDownRight } from 'lucide-react';

const AGENTS = 'https://www.anthropic.com/engineering/building-effective-agents';

type Branch = 'yes' | 'no';

type Row = {
  q: string;
  side: { branch: Branch; text: string };
  down?: { branch: Branch; note?: string };
};

const content = {
  ko: {
    labels: { yes: '그렇다면', no: '아니라면' } satisfies Record<Branch, string>,
    rows: [
      {
        q: '1. 명확한 규칙이나 계산인가?',
        side: {
          branch: 'yes',
          text: '코드로 구현하고 테스트합니다. 서비스 코드 → 큐 표, 형식 검사, 권한, 상태 전이가 여기에 속합니다.',
        },
        down: { branch: 'no' },
      },
      {
        q: '2. 정보를 찾기만 하면 되는가?',
        side: {
          branch: 'yes',
          text: '정책 검색이나 조회로 시작합니다. 찾은 결과로 문장이나 판단을 만들어야 한다면 그 부분은 3번 질문으로 분리합니다.',
        },
        down: { branch: 'no' },
      },
      {
        q: '3. 언어적 모호성을 해석하거나 문장을 생성해야 하는가?',
        side: {
          branch: 'no',
          text: '고정 라벨 분류처럼 목적이 정해져 있다면 라벨 데이터가 있을 때 기존 ML과 규칙을 비교합니다.',
        },
        down: { branch: 'yes', note: 'LLM 후보입니다' },
      },
      {
        q: '4. 오류 비용이 낮고 검증 방법이 분명한가?',
        side: {
          branch: 'yes',
          text: 'LLM 출력에 01.3의 계약 검사(네 경계)와 표본 평가를 둡니다.',
        },
      },
    ] as Row[],
    final:
      '오류 비용이 높거나 검증이 어렵습니다. LLM 자동화를 보류하고 비LLM Baseline이나 사람 처리로 둡니다. 승인 단계를 더하는 것만으로는 타당해지지 않습니다. 승인자가 근거를 보고 판단할 정보와 시간이 있고, 그 판단이 기록 · 평가될 때만 승인이 위험을 줄입니다.',
    combo: '조합과 다음 실험',
    comboBody: (
      <>
        한 기능의 작업 단위마다 결과가 다릅니다. 예를 들어 한 기능이 해석(LLM), 계산(코드),
        권한(시스템), 승인(사람)으로 갈라질 수 있습니다. 트리의 결과는 확정이 아니라 baseline
        후보입니다. 규칙이나 검색 같은 단순한 방식을 baseline으로 먼저 두고, 단순한 방식에서 시작해
        부족할 때만 복잡성을 더하라는{' '}
        <ExternalLink href={AGENTS}>Anthropic의 에이전트 설계 글</ExternalLink>의 권고처럼 같은 평가
        데이터로 LLM이 무엇을 개선했고 무엇을 대가로 했는지(비용, 지연, 검증과 유지보수의 복잡성)
        비교합니다. 점수를 합산해 고르는 도구가 아닙니다.
      </>
    ),
  },
  en: {
    labels: { yes: 'If so', no: 'If not' } satisfies Record<Branch, string>,
    rows: [
      {
        q: '1. Is it a clear rule or a calculation?',
        side: {
          branch: 'yes',
          text: 'Implement it in code and test it. A service code → queue table, format checks, permissions, and state transitions belong here.',
        },
        down: { branch: 'no' },
      },
      {
        q: '2. Does it only need to find information?',
        side: {
          branch: 'yes',
          text: 'Start with existing search or lookup. If you must build sentences from what is found, split that part off to question 3.',
        },
        down: { branch: 'no' },
      },
      {
        q: '3. Must it interpret linguistic ambiguity or generate sentences?',
        side: {
          branch: 'no',
          text: 'If the purpose is fixed, like classification with fixed labels, compare existing ML and rules when labeled data exists.',
        },
        down: { branch: 'yes', note: 'An LLM is a candidate' },
      },
      {
        q: '4. Is the error cost low and the verification method clear?',
        side: {
          branch: 'yes',
          text: 'Put the 01.3 contract checks (four boundaries) and sampled evaluation on the LLM output.',
        },
      },
    ] as Row[],
    final:
      'The error cost is high or verification is hard. Hold off on LLM automation and keep the non-LLM baseline or human handling. Adding an approval step does not make it justified by itself. Approval reduces risk only when the approver has the information and time to judge from evidence, and that judgement is recorded and evaluated.',
    combo: 'Combinations and the next experiment',
    comboBody: (
      <>
        Each task unit of a feature gets a different result. For example, one feature can split into
        interpretation (LLM), calculation (code), permission (system), and approval (person). The
        tree&apos;s result is not final but a baseline candidate. Put a simple approach such as
        rules or search first as the baseline, and, following{' '}
        <ExternalLink href={AGENTS}>
          Anthropic&apos;s article on building effective agents
        </ExternalLink>{' '}
        in starting simple and adding complexity only when it falls short, compare on the same
        evaluation data what the LLM improved and what it cost (cost, latency, and complexity of
        validation and maintenance). It is not a tool that sums scores to pick.
      </>
    ),
  },
};

const branchColor = (branch: Branch) =>
  branch === 'yes' ? 'text-text-success' : 'text-text-light';

/**
 * 작업 단위마다 던지는 네 질문을 화살표 흐름으로 보여 준다. 점수 합산이 아니다. 정적 서버 컴포넌트다.
 * 넓은 폭에서는 질문 · 화살표 · 결과를 가로로, 좁은 폭에서는 결과를 질문 아래 들여쓴 곁가지(↳)로 둔다.
 */
export const TaskDecisionTree = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg leading-normal">
      <ol className="flex flex-col">
        {c.rows.map((row) => (
          <li key={row.q}>
            <div className="grid grid-cols-1 items-stretch gap-xs sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-md">
              <p className="flex items-center rounded-md border border-stroke-light bg-background-surface p-md text-xsm font-semiBold text-text-default">
                {row.q}
              </p>
              <span
                className={`flex items-center gap-xs pl-md text-xxsm font-semiBold sm:justify-center sm:pl-0 ${branchColor(row.side.branch)}`}
              >
                <CornerDownRight className="h-4 w-4 sm:hidden" aria-hidden="true" />
                {c.labels[row.side.branch]}
                <ArrowRight className="hidden h-4 w-4 sm:block" aria-hidden="true" />
              </span>
              <p className="ml-lg flex items-center break-keep rounded-md border border-stroke-light p-md text-xxsm text-text-default sm:ml-0">
                {row.side.text}
              </p>
            </div>
            {row.down && (
              <p
                className={`flex items-center gap-xs py-sm pl-md text-xxsm font-semiBold ${branchColor(row.down.branch)}`}
              >
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
                {c.labels[row.down.branch]}
                {row.down.note && (
                  <span className="font-normal text-text-light">: {row.down.note}</span>
                )}
              </p>
            )}
          </li>
        ))}
      </ol>
      <p
        className={`flex items-center gap-xs py-sm pl-md text-xxsm font-semiBold ${branchColor('no')}`}
      >
        <CornerDownRight className="h-4 w-4 sm:hidden" aria-hidden="true" />
        <ArrowDown className="hidden h-4 w-4 sm:block" aria-hidden="true" />
        {c.labels.no}
      </p>
      <p className="ml-lg break-keep rounded-md border border-stroke-primary p-md text-xxsm text-text-default sm:ml-0">
        {c.final}
      </p>
      <div className="mt-lg rounded-md border border-dashed border-stroke-default p-md">
        <p className="text-xsm font-semiBold text-text-default">{c.combo}</p>
        <p className="mt-2xs break-keep text-xxsm text-text-light">{c.comboBody}</p>
      </div>
    </figure>
  );
};
