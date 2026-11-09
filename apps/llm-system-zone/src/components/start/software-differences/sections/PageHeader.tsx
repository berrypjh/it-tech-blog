import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '01장 · 3 / 7',
    title: 'LLM 애플리케이션의 특성: 확률적 출력과 결정적인 소프트웨어 계약',
    lead: (
      <>
        <strong className="text-text-default">
          모델 출력은 확률적으로 생성되지만, 그 출력을 받아 쓰는 규칙은 결정적이어야 합니다.
        </strong>{' '}
        이 페이지는 IT 문의의 라우팅 JSON을 예로 형식, 사실 · 근거, 업무 규칙, 실행 권한을 나누고,
        판단할 수 없을 때 쓰지 않는 계약을 만듭니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '결정적 함수와 확률 분포를 학습한 모델을 구별하고, 재현이 설정 · 버전 · 실행 환경에 달려 있음을 설명하기',
      'JSON 출력을 형식, 사실 · 근거, 업무 규칙, 실행 권한의 네 경계로 나눠 확인하기',
      '권한과 업무 상태를 모델 출력이 아닌 신뢰된 입력으로 받고, 누락 · 알 수 없음을 쓰기 거부로 처리하기',
      '출력 변동의 원인을 나누고, 무엇을 코드로 검사하고 무엇을 평가 데이터로 확인할지 정하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 3 of 7',
    title: 'Traits of LLM applications: probabilistic output and a deterministic software contract',
    lead: (
      <>
        <strong className="text-text-default">
          Model output is generated probabilistically, but the rules for using it must be
          deterministic.
        </strong>{' '}
        Using the routing JSON of an IT request, this page separates format, fact and evidence,
        business rules, and execution permission, and builds a contract that does not write when it
        cannot judge.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Tell deterministic functions from models trained on probability distributions, and explain that reproduction depends on settings, version, and runtime environment',
      'Check JSON output at four boundaries: format, fact and evidence, business rules, and execution permission',
      'Take permission and business state as trusted inputs, not from model output, and treat missing or unknown values as a refused write',
      'Split the causes of output variation, and decide what to check in code versus evaluation data',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} />
);
