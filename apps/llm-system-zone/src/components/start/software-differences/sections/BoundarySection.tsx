import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const OWASP = 'https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/';

const unsafe = {
  ko: `// 출력에 <img onerror=...>가 있으면 그대로 삽입된다
container.innerHTML = reply.text;

// 출력의 문장이 곧 명령이 된다
await shell.run(reply.nextAction);`,
  en: `// an <img onerror=...> in the output is inserted as is
container.innerHTML = reply.text;

// a sentence in the output becomes a command
await shell.run(reply.nextAction);`,
};

const safe = {
  ko: `// 텍스트로만 삽입한다 (React의 {reply.text}도 이스케이프된다)
container.textContent = reply.text;

// 허용 목록은 앱이 정하고, 권한 확인도 모델이 아닌 앱이 한다
const action = allowedActions[reply.nextAction];
if (!action || !can(agent, action)) return hold('not allowed');

// 허용 목록에 있는 함수만 실행한다
await action.run(request);`,
  en: `// insert as text only (React's {reply.text} is escaped too)
container.textContent = reply.text;

// the app, not the model, owns the allow-list and permission check
const action = allowedActions[reply.nextAction];
if (!action || !can(agent, action)) return hold('not allowed');

// only functions on the allow-list run
await action.run(request);`,
};

const content = {
  ko: {
    intro: (
      <>
        모델 출력은 사용자 입력처럼 <strong>신뢰 경계 밖에서 온 데이터</strong>입니다. 파싱하고,
        검증하고, 권한을 확인한 뒤에만 사용합니다. 출력 안의 문장이 지시문처럼 보여도 그것은
        데이터이고, 앱이 정한 허용 목록과 권한이 동작을 정합니다.
      </>
    ),
    unsafeLabel: 'HTML이나 명령으로 그대로 삽입 (위험)',
    noteTitle: 'OWASP의 권고',
    safeLabel: '텍스트로 다루고 허용 목록과 권한으로 제한',
    note: (
      <>
        OWASP의 <ExternalLink href={OWASP}>LLM05: Improper Output Handling 항목</ExternalLink>은
        모델을 다른 사용자처럼 취급하는 zero-trust 접근을 권고하고, 출력을 사용 맥락에 맞게
        인코딩하고 DB 작업에는 매개변수화된 쿼리를 쓰라고 합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Model output is <strong>data from outside the trust boundary</strong>, like user input.
        Parse it, validate it, and check permission before using it. Even if a sentence in the
        output looks like an instruction, it is data, and the app&apos;s allow-list and permissions
        decide what happens.
      </>
    ),
    unsafeLabel: 'Inserted as HTML or a command as is (unsafe)',
    noteTitle: 'OWASP guidance',
    safeLabel: 'Handled as text, limited by an allow-list and permissions',
    note: (
      <>
        OWASP&apos;s <ExternalLink href={OWASP}>LLM05: Improper Output Handling entry</ExternalLink>{' '}
        recommends a zero-trust approach that treats the model like any other user, encoding output
        for its usage context, and using parameterized queries for database operations.
      </>
    ),
  },
};

export const BoundarySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.boundary.id}>
      <DocH2 {...toc.boundary} />
      <p>{c.intro}</p>
      <div className="mt-lg">
        <CodeBlock tone="bad" label={c.unsafeLabel} code={unsafe[locale]} />
      </div>
      <div className="mt-lg">
        <CodeBlock tone="good" label={c.safeLabel} code={safe[locale]} />
      </div>
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
