import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const castCode = `type Reply = { title: string; score: number };

// 컴파일은 통과하지만 런타임에는 아무것도 검사하지 않는다
const reply = JSON.parse(text) as Reply;
reply.title.trim(); // title이 없으면 실행 중에 TypeError`;

const guardCode = `const isReply = (value: unknown): value is Reply =>
  typeof value === 'object' &&
  value !== null &&
  'title' in value &&
  typeof value.title === 'string' &&
  'score' in value &&
  typeof value.score === 'number';

const data: unknown = JSON.parse(text);
if (!isReply(data)) return hold('schema');  // 이 줄 뒤에서만 Reply로 다룬다`;

const castCodeEn = `type Reply = { title: string; score: number };

// It compiles, but nothing is checked at runtime
const reply = JSON.parse(text) as Reply;
reply.title.trim(); // a TypeError at runtime if title is missing`;

const guardCodeEn = `const isReply = (value: unknown): value is Reply =>
  typeof value === 'object' &&
  value !== null &&
  'title' in value &&
  typeof value.title === 'string' &&
  'score' in value &&
  typeof value.score === 'number';

const data: unknown = JSON.parse(text);
if (!isReply(data)) return hold('schema');  // treat it as Reply only after this line`;

const content = {
  ko: {
    intro:
      'TypeScript의 타입은 컴파일할 때 코드의 모양을 검사하는 도구이고, 실행되는 JavaScript에는 남지 않습니다. 모델 응답처럼 런타임에 들어오는 외부 데이터의 모양은 타입 선언으로 보장되지 않습니다.',
    castLabel: '타입 단언은 검증이 아닙니다 (예시)',
    guardLabel: '런타임 검사 뒤에 타입으로 좁힙니다 (예시)',
    noteTitle: '타입은 검증의 결과를 기록하는 곳입니다',
    note: '검증 함수나 스키마 라이브러리가 값을 확인하면, 그 결과를 타입으로 표현해 이후 코드가 안전하게 쓸 수 있습니다. 순서가 반대가 되면 타입은 거짓말이 됩니다.',
  },
  en: {
    intro:
      'TypeScript types check the shape of code at compile time and do not remain in the JavaScript that runs. The shape of external data arriving at runtime, like a model response, is not guaranteed by a type declaration.',
    castLabel: 'A type assertion is not validation (example)',
    guardLabel: 'Narrow to the type after a runtime check (example)',
    noteTitle: 'Types record the result of validation',
    note: 'Once a validation function or schema library has checked a value, you express that result as a type so later code can use it safely. If the order is reversed, the type is a lie.',
  },
};

export const TypesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const ko = locale === 'ko';

  return (
    <section aria-labelledby={toc.types.id}>
      <DocH2 {...toc.types} />
      <p>{c.intro}</p>
      <div className="mt-lg">
        <CodeBlock tone="bad" label={c.castLabel} code={ko ? castCode : castCodeEn} />
      </div>
      <div className="mt-lg">
        <CodeBlock tone="good" label={c.guardLabel} code={ko ? guardCode : guardCodeEn} />
      </div>
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
