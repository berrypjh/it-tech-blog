import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FailureDiagnosisPage } from '@/components/start/failure-diagnosis/FailureDiagnosisPage';

const metadata = {
  ko: {
    title: '실패 진단의 첫걸음: 관측한 증상과 원인 가설 구별하기 — LLM System',
    description:
      '같은 "접수 확인 없음" 증상을 검증 거절 · 도구 응답 유실 · UI 표기 오류의 가설로 나누고, 요청 ID로 입력부터 UI까지 따라가며 관찰 · 미확인 · 가설 · 다음 검사를 구별하는 01장 여섯 번째 페이지.',
  },
  en: {
    title:
      'First steps in failure diagnosis: telling observed symptoms from cause hypotheses — LLM System',
    description:
      'Chapter 01, page 6: splitting one symptom, "no filing confirmation", into the hypotheses of a validation refusal, a lost tool response, and a UI labeling error, and tracing input to UI by request ID to separate observed, unchecked, hypothesis, and next check.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <FailureDiagnosisPage locale={await getServerLocale()} />;

export default Page;
