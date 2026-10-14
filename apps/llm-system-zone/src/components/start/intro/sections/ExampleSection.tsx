import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, ExternalLink } from '@it-tech-blog/ui';

import { CallComparison } from '../diagrams/CallComparison';
import { getToc } from '../toc';

const OWASP = 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/';

const content = {
  ko: {
    intro:
      '같은 기능을 두 가지로 비교해 봅니다. 첫째는 모델 호출을 곧 결과로 취급한 경우이고, 둘째는 그 호출을 시스템 흐름 안에 둔 경우입니다.',
    after:
      '시스템 흐름에서 모델이 하는 일은 한 줄뿐이고 나머지는 모두 앱의 코드입니다. 모델은 권한을 부여하지 않고 데이터베이스에 쓰지도 않습니다. 저장은 앱이 사용자 권한으로 호출한 동작입니다.',
    noteTitle: '권한은 모델이 아니라 하위 시스템이 판단합니다',
    note: (
      <p>
        OWASP의 <ExternalLink href={OWASP}>LLM06: Excessive Agency 항목</ExternalLink>은 LLM이
        연결된 시스템에서 모델 출력이 예상과 다르거나 조작될 때 해로운 동작이 실행되는 문제를
        &quot;Excessive Agency&quot;로 분류합니다. 그리고 권한을 최소로 줄이고, 허용 여부를 LLM이
        아닌 하위 시스템에서 검사하고, 영향이 큰 동작은 사람이 승인하게 하라고 권고합니다.
      </p>
    ),
  },
  en: {
    intro:
      'Let us compare the same feature in two ways. The first treats a model call as the result itself, and the second puts that call inside a system flow.',
    after:
      'In the system flow the model does a single line and everything else is app code. The model grants no permission and writes nothing to a database. The save is an action the app called under the user permission.',
    noteTitle: 'Downstream systems, not the model, decide permissions',
    note: (
      <p>
        OWASP&apos;s <ExternalLink href={OWASP}>LLM06: Excessive Agency entry</ExternalLink>{' '}
        classifies harmful actions caused by unexpected or manipulated model output in LLM-connected
        systems as &quot;Excessive Agency&quot;. It advises minimizing permissions, checking
        authorization in downstream systems rather than leaving it to the LLM, and requiring human
        approval for high-impact actions.
      </p>
    ),
  },
};

export const ExampleSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.example.id}>
      <DocH2 {...toc.example} />
      <p>{c.intro}</p>
      <CallComparison locale={locale} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
