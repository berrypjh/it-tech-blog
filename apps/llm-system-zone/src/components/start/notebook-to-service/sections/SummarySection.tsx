import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    'Notebook은 데이터 확인, 가설 수정, 결과 비교와 설명을 하는 탐색 환경이고, 서비스는 명시적 입력, 오류 처리, timeout, 권한, 재시도, 테스트, 관측을 요구합니다. 언어는 역할과 별개입니다.',
    'Dataset Inspection으로 결측, 중복, 라벨, 분포를 확인하고, Prompt Experiment는 한 번에 한 요인만 바꾸며 모델 비교는 같은 데이터와 기준으로 합니다.',
    '실험 기록에는 데이터, 프롬프트, 모델과 설정, 코드, 환경, 실행 조건, 결과와 실패 사례를 남깁니다.',
    '계약에는 schemaVersion, 허용 출력과 필수·선택 필드, unknown 처리, 모델·프롬프트 버전 정책, score의 의미와 범위, 비교 연산, 실패와 timeout 정책, 확인 사례를 담습니다. 서비스 모니터링은 실패 사례를 다음 데이터와 실험으로 돌려보냅니다.',
  ],
  en: [
    'A notebook is an exploration environment for checking data, revising hypotheses, and comparing and explaining results, while a service requires explicit input, error handling, timeouts, permissions, retries, tests, and observability. Language is separate from role.',
    'Check missing values, duplicates, labels, and distribution with Dataset Inspection, change one factor at a time in a Prompt Experiment, and compare models with the same data and criteria.',
    'The experiment record keeps data, prompt, model and settings, code, environment, run conditions, and results and failure cases.',
    'The contract holds schemaVersion, allowed output and required and optional fields, unknown handling, model and prompt version policy, score meaning and range, comparison operator, failure and timeout policy, and confirmation cases. Service monitoring returns failure cases to the next data and experiments.',
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
