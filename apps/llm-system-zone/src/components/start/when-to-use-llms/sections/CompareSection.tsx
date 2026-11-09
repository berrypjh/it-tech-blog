import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '같은 문의 "VPN이 연결되지 않아요"를 네 가지로 풀어 봅니다. 서술은 일반적인 경향이며 성능 수치는 넣지 않았습니다. 수치는 01.5에서 같은 평가 사례로 잽니다.',
    caption: '같은 문의를 네 가지 방식으로 처리할 때 (일반적 경향)',
    head: ['방식', '필요한 입력', '잘하는 것', '약한 곳', '확인 방법'],
    rows: [
      [
        '서비스 코드 규칙',
        '문의 양식에서 고른 서비스 코드 (예: NET-VPN)',
        '코드와 큐가 1:1이면 결정적이고 즉시 처리',
        '코드를 안 고르거나 "기타"를 고른 문의',
        '코드 → 큐 표의 단위 테스트',
      ],
      [
        '정책 검색',
        '사내 라우팅 정책 문서와 색인',
        '어느 정책 항목이 해당하는지 근거를 찾아 보여 줌',
        '찾은 항목을 큐로 바꾸는 판단은 따로 필요',
        '관련 항목을 찾았는지(정밀도 · 재현율)',
      ],
      [
        '분류기 (기존 ML)',
        '라벨 체계가 안정된 과거 문의와 상담원 라벨',
        '학습한 분포 안의 문의를 빠르고 싸게 분류',
        '새 큐 · 라벨 변경 · 학습에 없던 언어',
        '보관해 둔 평가 사례의 정확도',
      ],
      [
        'LLM',
        '다국어 자유 문장, 큐 목록과 정책 설명',
        '서비스 코드가 없고 표현이 제각각인 문의에서 제안',
        '그럴듯한 오답, 호출당 비용과 지연',
        '01.3의 계약 검사와 평가 사례',
      ],
    ],
    roleHeading: '단독 선택과 조합의 역할',
    role: '한 방식만 고를 수도 있고, 각자 잘하는 범위만 맡겨 조합할 수도 있습니다. 조합에서는 앞 단계가 확실히 처리한 문의는 뒤로 넘기지 않습니다.',
    roles: [
      '서비스 코드가 있으면 규칙이 큐를 정합니다. 이 범위에는 모델이 필요 없습니다.',
      '코드가 없으면 분류기가 학습한 분포 안의 문의를 처리합니다.',
      '분류기가 맡기 어려운 다국어 자유 문장에서만 LLM이 큐를 제안하고, 정책 검색이 찾은 항목을 근거로 붙입니다.',
      '어느 경로든 01.3의 계약 검사를 거치고, 통과하지 못하면 사람이 분류하는 대기열로 보류합니다.',
    ],
    roleAfter:
      '조합은 정답이 아니라 하나의 설계입니다. 경로마다 따로 평가할 수 있어야 하고, 경로가 늘면 유지보수 부담도 늘어납니다.',
  },
  en: {
    intro:
      'Here the same request, "My VPN won’t connect", is handled four ways. The entries are general tendencies, with no performance figures. The figures are measured on the same evaluation cases in 01.5.',
    caption: 'Handling the same request with four approaches (general tendencies)',
    head: [
      'Approach',
      'Input it needs',
      'What it does well',
      'Where it is weak',
      'How it is checked',
    ],
    rows: [
      [
        'Service-code rules',
        'A service code picked on the request form (e.g. NET-VPN)',
        'Deterministic and instant when codes map 1:1 to queues',
        'Requests with no code, or with "Other" picked',
        'Unit tests of the code → queue table',
      ],
      [
        'Policy search',
        'Internal routing policy documents and an index',
        'Finds and shows the policy item that applies, as evidence',
        'Turning the found item into a queue is a separate judgement',
        'Whether relevant items were found (precision · recall)',
      ],
      [
        'Classifier (classic ML)',
        'Past requests with agent labels under a stable label scheme',
        'Classifies requests inside the learned distribution, fast and cheap',
        'New queues, label changes, languages absent from training',
        'Accuracy on held-out evaluation cases',
      ],
      [
        'LLM',
        'Free multilingual text, the queue list and policy descriptions',
        'Suggests a queue for requests with no code and varied wording',
        'Plausible wrong answers, per-call cost and latency',
        'The 01.3 contract checks and evaluation cases',
      ],
    ],
    roleHeading: 'Roles alone and in combination',
    role: 'You can pick a single approach, or combine them so each takes only what it does well. In a combination, a request an earlier stage handled with certainty is not passed on.',
    roles: [
      'If there is a service code, rules decide the queue. No model is needed in this range.',
      'With no code, the classifier handles requests inside its learned distribution.',
      'Only for free multilingual text the classifier struggles with does the LLM suggest a queue, with the item found by policy search attached as evidence.',
      'Every path goes through the 01.3 contract checks, and anything that fails is held for a person to triage.',
    ],
    roleAfter:
      'A combination is one design, not the answer. Each path has to be evaluable on its own, and more paths mean more maintenance.',
  },
};

/** 같은 문의를 네 방식으로 처리할 때의 차이와 조합에서의 역할. */
export const CompareSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([approach, ...rest]) => [
    <span key={approach} className="whitespace-nowrap font-semiBold text-text-default">
      {approach}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.compare.id}>
      <DocH2 {...toc.compare} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <DocH3>{c.roleHeading}</DocH3>
      <p>{c.role}</p>
      <List ordered marker className="flex flex-col gap-xs">
        {c.roles.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <p>{c.roleAfter}</p>
    </section>
  );
};
