import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { Exercise } from '@/components/shared/Exercise';

import { ContractCheckDemo } from '../demos/ContractCheckDemo';
import { ResponseCheckMatrix } from '../diagrams/ResponseCheckMatrix';
import { getToc } from '../toc';

const JSON_SCHEMA = 'https://json-schema.org/specification';
const OWASP = 'https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/';

const sample = '{"queue": "network", "evidence": "LOG-5521"}';

const content = {
  ko: {
    intro: (
      <>
        JSON(JavaScript Object Notation)은 이름과 값의 짝을 중괄호로 묶어 적는 텍스트 형식입니다.
        01.1의 라우팅 제안을 JSON으로 받기로 앱과 약속하면 모델 출력은 아래처럼 생깁니다.{' '}
        <code>queue</code>는 담당 큐, <code>evidence</code>는 판단 근거로 인용한 로그 ID입니다.
      </>
    ),
    sampleLabel: '약속한 출력 형식 (가상)',
    split:
      '이 텍스트는 확률적으로 생성되었습니다. 그러나 받아서 확인하는 쪽은 결정적인 소프트웨어 계약이어야 합니다. 같은 출력과 같은 신뢰된 입력에는 언제나 같은 판정을 냅니다. 계약은 네 경계로 나눕니다.',
    caption: '계약의 네 경계',
    head: ['경계', '묻는 질문', '무엇으로 확인하나', '이 예시의 기준'],
    rows: [
      [
        '형식',
        '약속한 모양인가',
        'JSON 구문 해석과 스키마(필수 필드 · 타입)',
        'queue와 evidence가 모두 문자열',
      ],
      [
        '사실 · 근거',
        '인용한 근거가 실제로 있는가',
        '신뢰된 기록과 대조',
        'evidence가 이 요청의 로그 ID 목록에 있음',
      ],
      [
        '업무 규칙',
        '업무상 허용되는 값인가',
        '업무 시스템의 현재 상태',
        '큐가 목록에 있고 접수 중',
      ],
      [
        '실행 권한',
        '이 쓰기를 해도 되는가',
        '권한 시스템이 준 값',
        '요청자에게 티켓 생성 권한이 있음',
      ],
    ],
    schema: (
      <>
        <ExternalLink href={JSON_SCHEMA}>JSON Schema 명세</ExternalLink>(현재 2020-12판)는 JSON
        데이터의 모양을 적는 어휘이고, 그 Validation 부분이 필수 필드와 타입 같은 검사 키워드를
        정의합니다. 스키마가 확인하는 것은 모양까지입니다. 인용한 로그가 실제로 있는지, 큐가 접수
        중인지는 스키마 밖의 신뢰된 데이터로 확인합니다.
      </>
    ),
    trustedTitle: '권한과 업무 상태는 모델 출력에서 읽지 않습니다',
    trusted:
      '큐 상태와 권한은 업무 시스템과 권한 시스템이 따로 준 신뢰된 입력입니다. 모델 출력에 "permission": "allowed" 같은 값이 들어 있어도 판정에 쓰지 않습니다.',
    conservativeHeading: '판단할 수 없으면 쓰지 않는다',
    conservative: [
      '신뢰된 입력이 오지 않아 판단할 수 없으면 "알 수 없음"으로 두고 쓰기를 거부합니다. 통과로 치지 않습니다.',
      '검사는 형식, 사실 · 근거, 업무 규칙, 실행 권한 순서로 합니다. 한 단계가 통과하지 않으면 뒤 단계는 "검사 안 함"으로 둡니다. 검사하지 않은 항목을 통과로 표시하지 않습니다.',
      '쓰기는 네 단계가 모두 통과일 때만 허용됩니다.',
    ],
    tableHeading: '대표 결과',
    table:
      '아래 표는 같은 문의에 대한 가상 사례 일곱 가지의 결과입니다. 모델 호출과 실제 쓰기 없이, 출력 문자열과 신뢰된 입력만으로 계산했습니다.',
    tableAfter:
      '정상 사례만 쓰기가 허용됩니다. 근거 실패 사례는 JSON으로는 흠이 없지만 없는 로그를 인용했습니다. HTTP 200과 JSON 통과는 내용이 맞다는 뜻이 아닙니다. 두 "알 수 없음" 사례는 틀린 것이 아니라 정보가 부족한 것이지만, 결과는 똑같이 쓰기 거부입니다.',
    demoHeading: '사례를 골라 확인하기',
    demo: '사례를 고르면 모델 출력, 신뢰된 입력, 단계별 판정이 바뀝니다. 판정은 위 표와 같은 함수가 냅니다.',
    exerciseTitle: '유효하고 사실인 JSON인데 쓸 수 있을까요?',
    question: (
      <p>
        모델 출력은 정상 사례와 똑같은 <code>{sample}</code>입니다. JSON도 맞고, 로그도 실제로 있고,
        네트워크 큐도 접수 중입니다. 그런데 권한 시스템은 이 요청자의 티켓 생성 권한을
        &quot;거부&quot;로 보냈습니다. 네 단계의 판정과 쓰기 허용 여부를 예상해 보세요. 위 그림에서
        &quot;과제 사례&quot;를 골라 맞춰 볼 수 있습니다.
      </p>
    ),
    answerLabel: '풀이 보기',
    answer: [
      '형식, 사실 · 근거, 업무 규칙은 통과하고 실행 권한이 실패하므로 쓰기는 거부됩니다.',
      '출력의 품질과 쓰기 권한은 다른 질문입니다. 모델이 아무리 정확한 답을 내도 권한은 출력에서 생기지 않습니다.',
    ],
    owasp: (
      <>
        <ExternalLink href={OWASP}>OWASP LLM05: Improper Output Handling</ExternalLink>은 모델
        출력을 충분히 검증하고 다듬지 않은 채 하위 시스템에 넘기는 위험을 다룹니다. 그리고 모델을
        다른 사용자처럼 대하는 zero-trust 접근과, 출력이 하위 기능에 닿기 전의 검증을 권고합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        JSON (JavaScript Object Notation) is a text format that writes name and value pairs inside
        curly braces. If the app and model agree that the 01.1 routing suggestion comes back as
        JSON, the model output looks like the one below. <code>queue</code> is the support queue,
        and <code>evidence</code> is the log ID cited as the basis of the decision.
      </>
    ),
    sampleLabel: 'The agreed output format (fictional)',
    split:
      'This text was generated probabilistically. But the side that receives and checks it has to be a deterministic software contract: for the same output and the same trusted input it always gives the same verdict. The contract splits into four boundaries.',
    caption: 'The four boundaries of the contract',
    head: ['Boundary', 'Question it asks', 'What checks it', 'Criterion in this example'],
    rows: [
      [
        'Format',
        'Is it the agreed shape',
        'Parsing JSON syntax and a schema (required fields · types)',
        'queue and evidence are both strings',
      ],
      [
        'Fact · evidence',
        'Does the cited evidence actually exist',
        'Comparison with trusted records',
        'evidence is on this request’s list of log IDs',
      ],
      [
        'Business rule',
        'Is the value allowed for the business',
        'The current state of the business system',
        'The queue is on the list and open',
      ],
      [
        'Execution permission',
        'May this write happen',
        'Values from the permission system',
        'The requester may create tickets',
      ],
    ],
    schema: (
      <>
        The <ExternalLink href={JSON_SCHEMA}>JSON Schema specification</ExternalLink> (currently
        2020-12) is a vocabulary for describing the shape of JSON data, and its Validation part
        defines check keywords such as required fields and types. A schema checks shape and no more.
        Whether the cited log exists or the queue is open is checked against trusted data outside
        the schema.
      </>
    ),
    trustedTitle: 'Permission and business state are not read from model output',
    trusted:
      'Queue states and permissions are trusted inputs given separately by the business system and the permission system. Even if the model output contains a value like "permission": "allowed", it plays no part in the verdict.',
    conservativeHeading: 'If it cannot be judged, do not write',
    conservative: [
      'If a trusted input did not arrive and the step cannot be judged, mark it "unknown" and refuse the write. It does not count as a pass.',
      'Checks run in order: format, fact · evidence, business rule, execution permission. If a step does not pass, later steps are marked "not checked". An item that was not checked is never shown as passed.',
      'A write is allowed only when all four steps pass.',
    ],
    tableHeading: 'Representative results',
    table:
      'The table below shows the results for seven fictional cases about the same request. They were computed from the output string and trusted inputs alone, without calling a model or writing anything.',
    tableAfter:
      'Only the normal case is allowed to write. The evidence failure is flawless JSON that cites a log that does not exist. HTTP 200 and passing JSON do not mean the content is right. The two "unknown" cases are not wrong, only missing information, yet the result is the same refusal.',
    demoHeading: 'Pick a case and check it',
    demo: 'Picking a case changes the model output, the trusted input, and the verdict at each step. The verdicts come from the same function as the table above.',
    exerciseTitle: 'Valid, true JSON, but may it be written?',
    question: (
      <p>
        The model output is exactly the normal case, <code>{sample}</code>. The JSON is right, the
        log exists, and the network queue is open. But the permission system sent the requester’s
        permission to create tickets as &quot;denied&quot;. Predict the verdict of each of the four
        steps and whether the write is allowed. You can check by picking &quot;Exercise case&quot;
        in the figure above.
      </p>
    ),
    answerLabel: 'Show solution',
    answer: [
      'Format, fact · evidence, and business rule pass, and execution permission fails, so the write is refused.',
      'The quality of the output and the permission to write are different questions. However accurate the model’s answer, permission does not come from the output.',
    ],
    owasp: (
      <>
        <ExternalLink href={OWASP}>OWASP LLM05: Improper Output Handling</ExternalLink> covers the
        risk of passing model output to downstream systems without enough validation and
        sanitization. It recommends a zero-trust approach that treats the model like any other user,
        and validating output before it reaches downstream functions.
      </>
    ),
  },
};

/** 확률적으로 생성된 JSON을 결정적인 계약의 네 경계로 확인하는 섹션. 표 · 조작 그림 · 과제가 같은 함수를 쓴다. */
export const ContractSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([first, ...rest]) => [
    <span key={first} className="whitespace-nowrap font-semiBold text-text-default">
      {first}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.contract.id}>
      <DocH2 {...toc.contract} />
      <p>{c.intro}</p>
      <div className="my-lg">
        <CodeBlock label={c.sampleLabel} code={sample} />
      </div>
      <p>{c.split}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p>{c.schema}</p>
      <Callout variant="note" title={c.trustedTitle}>
        <p>{c.trusted}</p>
      </Callout>

      <DocH3>{c.conservativeHeading}</DocH3>
      <List marker className="flex flex-col gap-xs">
        {c.conservative.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>

      <DocH3>{c.tableHeading}</DocH3>
      <p>{c.table}</p>
      <ResponseCheckMatrix locale={locale} />
      <p>{c.tableAfter}</p>

      <DocH3>{c.demoHeading}</DocH3>
      <p>{c.demo}</p>
      <ContractCheckDemo />

      <Exercise
        title={c.exerciseTitle}
        question={c.question}
        answerLabel={c.answerLabel}
        answer={
          <>
            {c.answer.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <p>{c.owasp}</p>
          </>
        }
      />
    </section>
  );
};
