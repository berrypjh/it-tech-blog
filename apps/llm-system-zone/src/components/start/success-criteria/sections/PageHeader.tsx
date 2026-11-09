import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '01장 · 5 / 7',
    title: '성공 조건 정하기: 사용자 과업 · 실패 비용 · 품질 · 지연 · 예산',
    lead: (
      <>
        <strong className="text-text-default">
          Baseline과 LLM 후보를 비교하려면 무엇을 성공으로 볼지가 먼저 정해져 있어야 합니다.
        </strong>{' '}
        이 페이지는 IT 문의 접수를 예로 사용자 과업, 지표의 분자와 분모, 실패 비용, 지연과 비용의
        측정 경계, 검토 · 보류, 승인 조건을 정합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    learnItems: [
      '"잘 만들어 줘"를 사용자 과업, 입력 범위, 완료할 작업, 제외 범위로 분해하기',
      '지표마다 분자와 분모를 적고, 자동 처리율 · 자동 처리 중 정확률 · 전체 중 자동 오처리율을 구별하기',
      '검토 · 보류의 미확정 결과를 과업 성공률로 섞지 않고, 실패 유형마다 비용을 적기',
      'end-to-end 지연 경계와 비용 단위를 정하고, Baseline과 같은 조건에서 승인 조건을 판단하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 5 of 7',
    title: 'Setting success criteria: user task, failure cost, quality, latency, and budget',
    lead: (
      <>
        <strong className="text-text-default">
          To compare a baseline with an LLM candidate, what counts as success has to be decided
          first.
        </strong>{' '}
        Using IT request filing, this page sets the user task, metric numerators and denominators,
        failure costs, the measurement boundaries of latency and cost, review and hold, and approval
        conditions.
      </>
    ),
    readingTime: 'About 14 min read',
    learnItems: [
      'Break "make it good" into user task, input scope, task to complete, and exclusions',
      'Write the numerator and denominator of each metric, and tell automatic handling rate, precision of automatic handling, and wrong automatic rate over all apart',
      'Keep undecided review and hold outcomes out of a task success rate, and write the cost of each failure type',
      'Set the end-to-end latency boundary and the cost unit, and judge approval conditions under the same conditions as the baseline',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} />
);
