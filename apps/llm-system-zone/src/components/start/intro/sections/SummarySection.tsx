import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '모델이 응답을 생성하는 것과 사용자의 업무가 완료되는 것은 다릅니다. 완료의 근거는 모델 응답이 아니라 앱이 확인한 결과입니다.',
    'LM은 언어의 통계적 관계를 모델링합니다. 다음 토큰 예측은 생성형 자기회귀 LLM의 대표 사례이며 모든 LM의 정의는 아닙니다. LLM의 "Large"에는 합의된 단일 기준이 없습니다.',
    '모델은 학습된 계산 구성 요소, 추론 API는 호출 인터페이스, 앱은 입력 · 권한 · 데이터 · 검증 · 실행 · UI를 조정합니다. 로컬 추론에서도 역할 구분은 같습니다.',
    '요청은 입력 확인, context 구성, 모델 호출, 검증, 조건부 실행, 결과 확인을 거칩니다. 검증 실패와 사용자 확인 거절로 실행하지 않는 분기도 정상 흐름입니다.',
    'Retrieval, Tools, Evaluation은 필요할 때 더하는 보조 요소이고, Evaluation은 요청 경로 밖의 품질 측정입니다.',
    '모델은 권한을 부여하거나 데이터베이스에 쓰지 않습니다. 허용된 동작은 앱이 권한 안에서 실행합니다.',
  ],
  en: [
    'A model generating a response and a user’s task being finished are different things. The evidence of completion is not the model response but a result the app confirmed.',
    'An LM models statistical relations in language. Next-token prediction is a representative case of generative autoregressive LLMs, not the definition of every LM. There is no single agreed bar for "Large" in LLM.',
    'The model is a trained computational component, the inference API is the call interface, and the app coordinates input, permissions, data, validation, execution, and UI. With local inference the split of roles is the same.',
    'A request passes input check, context building, model call, validation, conditional action, and result check. Paths that do not execute, such as a validation failure or a rejected user confirmation, are normal flow.',
    'Retrieval, Tools, and Evaluation are supporting elements added when needed, and Evaluation is quality measurement outside the request path.',
    'The model does not grant permissions or write to a database. The app runs allowed actions within its permissions.',
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
