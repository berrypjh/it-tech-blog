import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      'LLM 앱 이야기에서 자주 나오는 용어를 흐름 위의 자리와 함께 정리합니다. 아래 구성 요소가 모두 필수는 아닙니다. 필요할 때 더하는 것입니다.',
    caption: '용어, 용례, 흐름에서의 위치, 필수 여부',
    head: ['용어', '이 페이지에서의 용례', '흐름에서의 위치', '필수인가'],
    rows: [
      [
        'Prompt',
        '모델에게 작업과 형식, 제약을 알리는 지시 문구',
        '1단계 뒤, 모델 호출 전에 앱이 context의 일부로 구성',
        '거의 필수 · 형태는 다양',
      ],
      [
        'Context',
        '모델 호출 때 함께 넣는 정보 전체(지시, 사용자 입력, 근거, 이전 대화 등)',
        '앱이 모델 호출 전에 만들어 2단계에 넣는 입력',
        '필수 · 모든 호출에 있다',
      ],
      [
        'Retrieval',
        '필요한 근거 문서를 찾아 context에 넣는 앱 쪽 단계',
        '모델 호출 전, 앱이 context를 만들 때',
        '선택 · 근거가 짧고 고정이면 직접 넣어도 된다',
      ],
      [
        'Tools',
        '앱의 실행 계층이 호출하는 기능. 모델은 호출을 요청하는 출력을 낼 수 있다',
        '4단계, 앱이 권한을 확인하고 실행',
        '선택 · 기능이 필요할 때만',
      ],
      [
        'Evaluation',
        '사례 집합에 대한 품질 측정',
        '요청 경로 밖. 변경 전후와 배포 전에 반복',
        '별도 · 요청 경로 밖에서 품질을 잼',
      ],
      [
        'Monitoring',
        '운영 중인 실제 요청을 관찰하는 일',
        '요청 경로 곁에서 계속',
        '운영하면 필요 · Evaluation과 구별한다',
      ],
    ],
    note: (
      <>
        <p>
          Prompt와 Context라는 말의 쓰임은 자료마다 다릅니다. 입력 전체를 prompt라고 부르는 글도
          있습니다. 이 트랙에서는 위 표의 용례로 통일합니다.
        </p>
        <p>
          Evaluation은 &quot;정해 둔 사례 집합으로 얼마나 잘하는지&quot;를 재는 일이고, Monitoring은
          &quot;지금 들어오는 실제 요청이 어떤지&quot;를 보는 일입니다. 요청 안에서 출력을 확인하는
          3단계 검증과도 다릅니다.
        </p>
      </>
    ),
  },
  en: {
    intro:
      'Here are terms that often come up in LLM app talk, with their place in the flow. Not all of these components are required. You add them when needed.',
    caption: 'Term, usage, place in the flow, and whether it is required',
    head: ['Term', 'Usage in this page', 'Place in the flow', 'Required?'],
    rows: [
      [
        'Prompt',
        'The instruction text that tells the model the task, format, and constraints',
        'Built by the app after step 1, before the model call, as part of the context',
        'Almost required · its form varies',
      ],
      [
        'Context',
        'All information passed with a model call (instruction, user input, evidence, prior turns)',
        'Input the app builds before the model call and passes into step 2',
        'Required · every call has one',
      ],
      [
        'Retrieval',
        'An app-side step that finds needed evidence and puts it in the context',
        'Before the model call, while the app builds the context',
        'Optional · short, fixed evidence can be included directly',
      ],
      [
        'Tools',
        'Functions the app execution layer calls. A model can output a request to call one',
        'Step 4, run by the app after permission checks',
        'Optional · only when the feature needs it',
      ],
      [
        'Evaluation',
        'Measuring quality over a set of cases',
        'Outside the request path. Repeated before and after changes and before release',
        'Separate · quality is measured outside the request path',
      ],
      [
        'Monitoring',
        'Observing real requests in operation',
        'Alongside the request path, continuously',
        'Needed if you operate it · keep it distinct from Evaluation',
      ],
    ],
    note: (
      <>
        <p>
          How &quot;prompt&quot; and &quot;context&quot; are used differs between sources. Some
          writers call the whole input a prompt. This track keeps to the usage in the table above.
        </p>
        <p>
          Evaluation measures &quot;how well it does on a fixed set of cases&quot;, while Monitoring
          watches &quot;what real incoming requests look like now&quot;. Both differ from the step 3
          validation, which checks output inside a request.
        </p>
      </>
    ),
  },
};

export const PartsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([first, ...rest]) => [
    <span key={first} className="font-semiBold text-text-default">
      {first}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.parts.id}>
      <DocH2 {...toc.parts} />
      <p>{c.intro}</p>
      <div className="[&_td]:break-keep">
        <DocTable caption={c.caption} head={c.head} rows={rows} />
      </div>
      <Callout variant="note">{c.note}</Callout>
    </section>
  );
};
