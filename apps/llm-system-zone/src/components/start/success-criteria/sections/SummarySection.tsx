import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '"잘 만들어 줘"는 대상 사용자, 입력 범위, 완료할 작업, 제외 범위로 분해합니다.',
    'Expected Output은 출력의 예이고, Acceptance Criteria는 통과 조건입니다. 구조 유효성, Correctness, Completeness, Task Success는 서로 다른 지표이며 각각 분모와 누락값 정책을 둡니다.',
    '지연과 비용 예산에는 측정 시작과 끝, 단위, 재시도 포함 여부, 분모, 집계 방식이 필요합니다.',
    'baseline과 같은 사례, 같은 기준, 같은 측정 정의로 비교하고, 개발용과 최종 확인용 사례를 나눠 데이터와 기준 버전을 기록합니다.',
    '측정 결과는 구현 · 수정 · 보류의 결정으로 이어지고, 기준을 만족하지 못하면 고칠 곳이나 기준과 사례로 되돌아갑니다.',
  ],
  en: [
    'Break "make it good" into target user, input scope, task to complete, and out-of-scope.',
    'Expected Output is an example of an output, and Acceptance Criteria are the pass conditions. Structure validity, Correctness, Completeness, and Task Success are different metrics, each with its denominator and missing-value policy.',
    'Latency and cost budgets need the start and end of measurement, unit, whether retries are included, denominator, and aggregation.',
    'Compare with a baseline on the same cases, the same criteria, and the same measurement definitions, separate development and final-check sets, and record data and criteria versions.',
    'Measured results lead to a decision to build, revise, or hold, and when the criteria are not met you return to what to fix, or to the criteria and cases.',
  ],
};

export const SummarySection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.summary.id}>
      <DocH2 {...toc.summary} />
      <List ordered className="flex flex-col gap-sm">
        {points[locale].map((point, i) => (
          <ListItem key={point} className="flex gap-md">
            <span className="font-mono text-xsm text-text-light">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="break-keep">{point}</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
