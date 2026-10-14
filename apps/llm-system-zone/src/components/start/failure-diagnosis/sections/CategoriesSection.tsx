import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { DetailsList } from '@/components/shared/DetailsList';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '실패를 열 가지 범주로 나눠 봅니다. 범주는 조사의 출발점일 뿐 서로 배타적이지 않습니다. 각 행은 증상, 확인할 증거, 반증 질문, 수정 후보, 재검증 방법을 한 줄로 적었습니다. 수정 후보는 일반적인 예이며 증거가 지지할 때 선택합니다.',
    head: ['범주', '증상', '확인할 증거', '반증 질문', '수정 후보', '재검증 방법'],
    rows: [
      [
        '1. 입력 데이터',
        '질문과 어긋나거나 일부 내용만 반영한 응답',
        '모델 직전 입력 원문, 잘림 · 인코딩 · 누락 필드',
        '모델에 들어간 입력은 사용자가 보낸 것과 같은가?',
        '전처리, 길이 제한, 필드 매핑 수정',
        '같은 원문과 형식이 다른 정상 입력을 함께 재실행',
      ],
      [
        '2. 요구사항 · 성공 기준',
        '사람마다 좋다 나쁘다가 갈림, 개선 목표가 모호함',
        '성공 기준 문서, 평가자별 근거',
        '기준이 관측 가능한 항목으로 쓰여 있는가?',
        '기준을 항목과 예시로 정의, 경계 사례의 우선순위 정리',
        '같은 사례를 두 사람이 기준대로 따로 평가해 일치 확인',
      ],
      [
        '3. Prompt · Context',
        '지시를 따르지 않거나 필요한 정보 없이 답함',
        '실제 전달된 지시문, context 요약, 길이와 순서',
        '필요한 지시와 정보가 context에 실제로 있었는가?',
        '지시 명확화, 예시, context 순서 · 길이 조정',
        '변경 전후로 같은 실패 사례와 정상 사례 비교',
      ],
      [
        '4. Retrieval',
        '근거 없는 답, 낡거나 무관한 근거 인용',
        '질의, 검색된 문서 ID · 버전 · 순위, 색인 시각',
        '정답 문서는 검색 후보에 있었는가? (다음 절에서 네 가지로 가른다)',
        '색인 갱신, 질의 재구성, 필터 · 순위 조정',
        '같은 질의의 문서 목록과 다른 질의의 회귀 비교',
      ],
      [
        '5. Tool 선택 · 실행',
        '엉뚱한 조회나 동작, 오류 뒤 fallback 응답',
        '도구 호출 로그: 도구, 인자, 결과 코드, 소요 시간',
        '올바른 도구와 인자가 호출되었는가? 호출되었다면 실행은 성공했는가?',
        '도구 설명과 인자 스키마 개선, 권한 · timeout · 재시도 정책',
        '같은 호출을 격리 환경에서 재현, 인접 도구 정상 확인',
      ],
      [
        '6. 출력 구조 검증',
        '파싱 오류, 필드 누락, 또는 형식은 맞는데 의미가 틀린 출력이 통과함',
        '출력 원문, 검증 규칙과 결과, 검증이 확인하지 않는 항목',
        '검증이 이 실패를 잡도록 설계되었는가?',
        '스키마와 도메인 규칙 보강, 의미 평가 추가',
        '실패 출력은 거부되고 정상 출력은 통과하는지 확인',
      ],
      [
        '7. 모델 지식 · 추론 한계',
        '근거가 충분한데도 오독하거나 잘못 추론함',
        '정확한 context를 준 상태의 출력, 같은 입력 반복 실행, 다른 구성의 결과',
        '입력과 context가 정확하고 충분한데도 틀렸는가?',
        '작업 분해, 검증과 사람 검토 추가, 다른 구성과 비교',
        '평가 세트에서 변경 전후를 같은 기준으로 비교',
      ],
      [
        '8. UI · 사용자 흐름',
        '시스템은 성공했는데 사용자는 결과를 못 보거나 오해함',
        'API 응답과 화면 표시 비교, 필터 · 캐시 · 상태 라벨',
        '저장된 데이터나 응답에는 결과가 있는가?',
        '목록 필터, 상태 표시, 안내 문구 수정',
        '실제 사용자 흐름을 처음부터 따라가며 확인',
      ],
      [
        '9. 운영 지연',
        '응답이 느려 사용자가 이탈하거나 timeout이 남',
        '단계별 소요 시간, 대기열, 입력 크기',
        '어느 단계가 시간을 썼는가? 입력 크기와 관련 있는가?',
        '병목 단계 개선, 비동기 처리, timeout 안내',
        '같은 입력의 단계별 시간을 다시 측정',
      ],
      [
        '10. 운영 장애',
        '간헐적이거나 전반적인 실패, 같은 시간대의 다른 요청도 실패',
        '같은 시간대의 오류율, 외부 의존성 상태, 배포 · 설정 변경 이력',
        '같은 시간대의 다른 요청도 실패했는가? 변경 이력과 겹치는가?',
        '의존성 상태 확인, 롤백, 회로 차단, fallback',
        '복구 뒤 같은 요청 재실행과 오류율 관찰',
      ],
    ],
  },
  en: {
    intro:
      'We split failures into ten categories. A category is a starting point for investigation and the categories are not exclusive. Each row writes symptom, evidence to check, refuting question, fix candidate, and re-verification in one line. Fix candidates are general examples, chosen when the evidence supports them.',
    head: [
      'Category',
      'Symptom',
      'Evidence to check',
      'Refuting question',
      'Fix candidate',
      'How to re-verify',
    ],
    rows: [
      [
        '1. Input data',
        'A response that misses the question or reflects only part of it',
        'Raw input just before the model; truncation, encoding, missing fields',
        'Is the input the model got the same as what the user sent?',
        'Fix preprocessing, length limits, field mapping',
        'Rerun the same raw input together with a normal input of another format',
      ],
      [
        '2. Requirements and success criteria',
        'People split on good vs. bad; the improvement goal is vague',
        'Success criteria document, each rater’s reasons',
        'Are the criteria written as observable items?',
        'Define criteria as items and examples; set priorities for edge cases',
        'Have two people evaluate the same case separately against the criteria and check agreement',
      ],
      [
        '3. Prompt and context',
        'Ignores instructions, or answers without needed information',
        'Instruction actually passed, context summary, length and order',
        'Were the needed instruction and information actually in the context?',
        'Clarify instructions, add examples, adjust context order and length',
        'Compare the same failing case and a normal case before and after',
      ],
      [
        '4. Retrieval',
        'An answer with no evidence, or citing stale or unrelated evidence',
        'Query, retrieved document IDs, versions, ranks, index time',
        'Was the right document among the retrieval candidates? (split four ways in the next section)',
        'Update the index, rewrite the query, adjust filters and ranking',
        'Compare the document list of the same query and regressions of other queries',
      ],
      [
        '5. Tool choice and execution',
        'A wrong lookup or action, or a fallback after an error',
        'Tool call log: tool, arguments, result code, duration',
        'Were the right tool and arguments called? If so, did execution succeed?',
        'Improve tool descriptions and argument schemas; permission, timeout, retry policy',
        'Reproduce the same call in isolation; confirm adjacent tools are normal',
      ],
      [
        '6. Output structure validation',
        'A parse error, a missing field, or output right in form but wrong in meaning passes',
        'Raw output, validation rules and results, what validation does not check',
        'Was validation designed to catch this failure?',
        'Strengthen schema and domain rules, add semantic evaluation',
        'Confirm the failing output is rejected and a normal output passes',
      ],
      [
        '7. Model knowledge and reasoning limits',
        'Misreads or reasons wrongly although the evidence is sufficient',
        'Output with accurate context given, repeated runs of the same input, results in other configurations',
        'Is it wrong even though input and context are accurate and sufficient?',
        'Split the task, add validation and human review, compare other configurations',
        'Compare before and after on an evaluation set with the same criteria',
      ],
      [
        '8. UI and user flow',
        'The system succeeded but the user cannot see or misreads the result',
        'API response vs. displayed output, filters, caches, status labels',
        'Does the stored data or response contain the result?',
        'Fix list filters, status display, guidance text',
        'Follow the real user flow from the start',
      ],
      [
        '9. Operational latency',
        'Responses are slow so users leave, or timeouts occur',
        'Per-step durations, queues, input size',
        'Which step used the time? Is it related to input size?',
        'Improve the bottleneck step, asynchronous handling, timeout guidance',
        'Remeasure per-step durations for the same input',
      ],
      [
        '10. Operational outage',
        'Intermittent or widespread failure; other requests in the same window fail too',
        'Error rate in the same window, external dependency status, deploy and config change history',
        'Did other requests in the same window fail? Does it overlap a change?',
        'Check dependency status, roll back, circuit break, fallback',
        'Rerun the same request after recovery and watch the error rate',
      ],
    ],
  },
};

export const CategoriesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.rows.map(([name, symptom, ...values]) => ({
    name,
    summary: symptom,
    fields: values.map((value, i) => ({ label: c.head[i + 2], value })),
  }));

  return (
    <section aria-labelledby={toc.categories.id}>
      <DocH2 {...toc.categories} />
      <p>{c.intro}</p>
      <DetailsList items={items} openFirst />
    </section>
  );
};
