import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '범주 4와 5는 같은 증상 아래에 서로 다른 실패가 있어 한 번 더 갈라야 합니다.',
    retrievalHeading: 'Retrieval: 네 가지를 구별한다',
    retrievalHead: ['구분', '증상', '구별하는 증거', '수정 후보'],
    retrieval: [
      [
        '관련 문서가 검색되지 않음',
        '정답 문서가 검색 후보에 없다',
        '색인에 그 문서가 있는지, 질의와 문서 표현이 얼마나 다른지',
        '색인 포함 확인, 질의 재구성, 검색 설정 조정',
      ],
      [
        '낡은 문서가 검색됨',
        '문서는 나왔지만 옛 버전이다',
        '검색된 문서 버전과 색인 시각을 원본의 현행 버전과 비교',
        '재색인, 색인 갱신 경로 수정, 버전 필터',
      ],
      [
        '권한 필터가 제외함',
        '필터 전에는 후보에 있었으나 필터 뒤에 사라진다',
        '필터 적용 전후의 후보 목록. 권한 정보는 마스킹해 비교',
        '필터 조건 점검, 접근할 수 없을 때의 안내 설계',
      ],
      [
        '찾았지만 context에서 누락됨',
        '검색 결과에는 있으나 모델 입력에는 없다',
        '검색 결과 목록과 context 요약의 대조, 길이 제한과 순위 절단',
        'context 구성 규칙 수정',
      ],
    ],
    toolHeading: 'Tool: 선택 실패와 실행 실패를 구별한다',
    toolHead: ['구분', '증상', '구별하는 증거', '수정 후보'],
    tool: [
      [
        '잘못된 도구 또는 인자를 선택함',
        '호출된 도구나 인자가 요청과 어긋난다',
        '도구 호출 로그의 도구 이름과 인자를 요청 내용과 대조',
        '도구 설명과 인자 스키마 개선, 호출 전 인자 검증',
      ],
      [
        '권한 거부 · timeout · 외부 실행 실패',
        '호출은 맞지만 결과 코드가 오류다',
        '결과 코드, 오류 메시지, 소요 시간, 같은 시간대 다른 호출의 결과',
        '권한 설정, timeout과 재시도 정책, 외부 장애 대응, 사용자 안내',
      ],
    ],
    after:
      '앞의 구분은 모델이나 선택 로직을 고치는 일이고, 뒤의 구분은 실행 환경과 의존성을 고치는 일입니다. 증상이 같아도 고칠 곳이 다릅니다.',
  },
  en: {
    intro:
      'Categories 4 and 5 hide different failures under the same symptom, so they need one more split.',
    retrievalHeading: 'Retrieval: telling four apart',
    retrievalHead: ['Kind', 'Symptom', 'Evidence that separates it', 'Fix candidates'],
    retrieval: [
      [
        'Relevant document not retrieved',
        'The right document is not among the candidates',
        'Whether the document is in the index, and how different the query and document wording are',
        'Confirm index inclusion, rewrite the query, adjust retrieval settings',
      ],
      [
        'A stale document retrieved',
        'The document came back but at an old version',
        'Compare the retrieved version and index time with the current source version',
        'Reindex, fix the index update path, version filter',
      ],
      [
        'A permission filter excluded it',
        'It was a candidate before the filter and gone after',
        'Candidate lists before and after the filter; compare with permission info masked',
        'Check filter conditions, design guidance for when access is not allowed',
      ],
      [
        'Found but dropped from the context',
        'In the retrieval result but not in the model input',
        'Compare the retrieval list with the context summary; length limits and rank truncation',
        'Fix context construction rules',
      ],
    ],
    toolHeading: 'Tool: telling selection failure from execution failure',
    toolHead: ['Kind', 'Symptom', 'Evidence that separates it', 'Fix candidates'],
    tool: [
      [
        'Wrong tool or arguments chosen',
        'The tool or arguments called do not match the request',
        'Compare the tool name and arguments in the call log with the request',
        'Improve tool descriptions and argument schemas, validate arguments before the call',
      ],
      [
        'Permission denied, timeout, or external execution failure',
        'The call is right but the result code is an error',
        'Result code, error message, duration, results of other calls in the same window',
        'Permission settings, timeout and retry policy, external outage handling, user guidance',
      ],
    ],
    after:
      'The first kind is fixing the model or selection logic, and the second is fixing the execution environment and dependencies. The same symptom is fixed in different places.',
  },
};

export const SplitSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const toItems = (head: string[], rows: string[][]) =>
    rows.map(([name, ...values]) => ({
      name,
      fields: values.map((value, i) => ({ label: head[i + 1], value })),
    }));

  return (
    <section aria-labelledby={toc.split.id}>
      <DocH2 {...toc.split} />
      <p>{c.intro}</p>
      <DocH3>{c.retrievalHeading}</DocH3>
      <FieldCards items={toItems(c.retrievalHead, c.retrieval)} />
      <DocH3>{c.toolHeading}</DocH3>
      <FieldCards items={toItems(c.toolHead, c.tool)} />
      <p>{c.after}</p>
    </section>
  );
};
