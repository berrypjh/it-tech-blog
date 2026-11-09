import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '01장 · 6 / 7',
    title: '실패 진단의 첫걸음: 관측한 증상과 원인 가설 구별하기',
    lead: (
      <>
        <strong className="text-text-default">
          관측한 실패는 원인 자체가 아닙니다. 모델이나 프롬프트를 바꾸기 전에 실패한 위치와 증거를
          조사합니다.
        </strong>{' '}
        이 페이지는 같은 &quot;접수 확인 없음&quot; 증상을 여러 가설로 나누고, 요청 ID로 계층을
        따라가며 관찰과 가설과 다음 검사를 구별하는 법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '증상에서 열 가지 범주의 원인 후보를 세우고 반증 질문으로 좁히기',
      '같은 "접수 확인 없음"에 검증 거절, 도구 응답 유실, UI 표기 오류가 있을 수 있음을 설명하기',
      '요청 ID로 입력 · 데이터 · 모델 · 검증 · 도구 · 상태 · UI를 추적하고 관찰 · 미확인 · 가설 · 다음 검사를 나누기',
      '시간 초과만으로 미실행을 단정하거나 다시 실행하지 않고, 한 번에 가설 하나를 고쳐 재확인하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 01 · 6 of 7',
    title: 'First steps in failure diagnosis: telling observed symptoms from cause hypotheses',
    lead: (
      <>
        <strong className="text-text-default">
          An observed failure is not the cause itself. Before changing the model or the prompt,
          investigate where it failed and the evidence.
        </strong>{' '}
        This page splits one symptom, &quot;no filing confirmation&quot;, into several hypotheses,
        and follows the layers by request ID to keep observations, hypotheses, and next checks
        apart.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Build candidate causes in ten categories from a symptom and narrow them with refuting questions',
      'Explain that one "no filing confirmation" can come from a validation refusal, a lost tool response, or a UI labeling error',
      'Trace input, data, model, validation, tool, state, and UI by request ID, and separate observed, unchecked, hypothesis, and next check',
      'Neither conclude "not run" nor re-run on a timeout alone, and fix one hypothesis at a time, then recheck',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} />
);
