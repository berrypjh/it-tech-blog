import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '01장 · 7 / 7',
    title: 'Notebook과 서비스 코드: 실험 기록 · 재현성 · 책임의 차이',
    lead: (
      <>
        <strong className="text-text-default">
          실험에서 발견한 설정값만이 아니라 선택 근거, 입출력 계약, 실패 정책, 재현 사례를 함께
          서비스로 옮깁니다.
        </strong>{' '}
        이 페이지는 실험 기록과 서비스 책임을 나누고, 임계값을 고정 점수로 다시 읽은 뒤, 01장 전체를
        새 도메인 과제로 마무리합니다.
      </>
    ),
    readingTime: '읽는 시간 약 16분',
    learnItems: [
      'Notebook이 탐색 환경임을 이해하고 데이터 · 버전 · 코드 · 설정 · 환경을 실험 기록으로 남기기',
      '고정 점수에서 임계값의 채택 집합과 채택 건의 조건부 오류율을 구별하고, 임계값 상승이 오류율 감소를 보장하지 않음을 확인하기',
      '모델이 스스로 적은 confidence를 보정된 확률로 쓰지 않기',
      '계약과 함께 오류 · 취소 · 재시도 · 권위 있는 업무 상태 · 민감정보 · 테스트 · 관측의 서비스 책임을 정하고, 새 도메인에 01장을 적용하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 7 of 7',
    title: 'Notebooks and service code: experiment records, reproducibility, and responsibility',
    lead: (
      <>
        <strong className="text-text-default">
          Move not only the settings found in an experiment but also the grounds for the choice, the
          input and output contract, failure policies, and reproduction cases to the service.
        </strong>{' '}
        This page separates experiment records from service duties, rereads thresholds with fixed
        scores, and closes chapter 01 with an exercise in a new domain.
      </>
    ),
    readingTime: 'About 16 min read',
    learnItems: [
      'Understand a notebook as an exploration environment and keep data, versions, code, settings, and environment in the experiment record',
      'Tell a threshold’s adopted set from the conditional error rate among adopted cases on fixed scores, and see that a higher threshold does not guarantee a lower error rate',
      'Do not use a confidence the model wrote about itself as a calibrated probability',
      'Set the service duties of errors, cancellation, retries, authoritative business state, sensitive data, tests, and observation alongside the contract, and apply chapter 01 to a new domain',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} />
);
