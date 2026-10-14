import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

type Layer = { name: string; question: string; fail: string; how: string };

const content = {
  ko: {
    layerLabel: '층',
    failLabel: '실패 예',
    howLabel: '확인',
    groups: [
      {
        heading: '코드로 단언할 수 있음',
        layers: [
          {
            name: '코드 정확성',
            question: '검증과 처리 코드가 명세대로 동작하는가',
            fail: '빈 문자열이 들어오면 파서가 예외 대신 빈 객체를 반환한다',
            how: '단위 테스트',
          },
          {
            name: 'JSON 구문',
            question: '문자열이 JSON으로 파싱되는가',
            fail: '닫는 중괄호가 없이 응답이 끊겼다',
            how: '파서 (JSON.parse)',
          },
          {
            name: '스키마',
            question: '필드 · 타입 · 허용 값이 약속과 같은가',
            fail: '필수 필드가 없거나 타입이 다르다',
            how: '스키마 검증',
          },
          {
            name: '도메인 제약',
            question: '앱의 규칙과 데이터에 맞는가',
            fail: '값이 허용 범위를 벗어나거나 존재하지 않는 식별자를 가리킨다',
            how: '앱 규칙 코드, 데이터 조회',
          },
        ] as Layer[],
      },
      {
        heading: '정답을 정의한 데이터와 기준이 필요',
        layers: [
          {
            name: '의미적 품질',
            question: '내용이 요구사항과 사실에 맞는가',
            fail: '형식은 맞지만 내용이 사실과 다르다',
            how: '평가 데이터와 rubric, 사람 검토',
          },
          {
            name: '사용자 Task Success',
            question: '사용자가 하려던 일을 끝냈는가',
            fail: '응답이 맞아 보여도 사용자가 매번 고쳐 쓰거나 버린다',
            how: '제품 지표, 사용자 관찰',
          },
        ] as Layer[],
      },
    ],
  },
  en: {
    layerLabel: 'Layer',
    failLabel: 'Failure',
    howLabel: 'Check',
    groups: [
      {
        heading: 'Can be asserted in code',
        layers: [
          {
            name: 'Code correctness',
            question: 'Do the validation and handling code behave as specified',
            fail: 'The parser returns an empty object instead of throwing on an empty string',
            how: 'Unit tests',
          },
          {
            name: 'JSON syntax',
            question: 'Does the string parse as JSON',
            fail: 'The response was cut off without a closing brace',
            how: 'A parser (JSON.parse)',
          },
          {
            name: 'Schema',
            question: 'Do fields, types, and allowed values match the promise',
            fail: 'A required field is missing or has the wrong type',
            how: 'Schema validation',
          },
          {
            name: 'Domain constraints',
            question: 'Does it fit the app rules and data',
            fail: 'A value is out of the allowed range or points to an identifier that does not exist',
            how: 'App rule code, data lookup',
          },
        ] as Layer[],
      },
      {
        heading: 'Needs data and criteria that define the right answer',
        layers: [
          {
            name: 'Semantic quality',
            question: 'Is the content right against the requirement and the facts',
            fail: 'The format is fine but the content differs from the facts',
            how: 'Evaluation data and a rubric, human review',
          },
          {
            name: 'User task success',
            question: 'Did the user finish what they set out to do',
            fail: 'The response looks right, but the user rewrites or discards it every time',
            how: 'Product metrics, user observation',
          },
        ] as Layer[],
      },
    ],
  },
};

/** "맞다"의 여섯 층을 코드로 단언할 수 있는 층과 데이터가 필요한 층으로 나눠 보여 준다. 서버 컴포넌트다. */
export const LayersLadder = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <div className="my-lg flex flex-col gap-xl leading-normal">
      {c.groups.map((group, groupIndex) => (
        <section key={group.heading}>
          <h3 className="mb-sm text-xsm font-semiBold text-text-default">{group.heading}</h3>
          <List className="grid grid-cols-1 gap-sm sm:grid-cols-2">
            {group.layers.map((layer, i) => {
              const number =
                c.groups.slice(0, groupIndex).reduce((n, g) => n + g.layers.length, 0) + i + 1;

              return (
                <ListItem
                  key={layer.name}
                  className={`flex flex-col gap-sm rounded-md border bg-background-surface p-md ${
                    groupIndex === 0 ? 'border-stroke-light' : 'border-dashed border-stroke-default'
                  }`}
                >
                  <div className="flex items-center gap-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primaryBtn-outlinedHover text-xxsm font-semiBold text-text-primary">
                      <span className="sr-only">{c.layerLabel} </span>
                      {number}
                    </span>
                    <span className="text-xsm font-semiBold text-text-default">{layer.name}</span>
                  </div>
                  <p className="break-keep text-xxsm text-text-light">{layer.question}</p>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-md gap-y-xs border-t border-stroke-light pt-sm text-xxsm">
                    <dt className="text-text-light">{c.failLabel}</dt>
                    <dd className="break-keep text-text-default">{layer.fail}</dd>
                    <dt className="text-text-light">{c.howLabel}</dt>
                    <dd className="break-keep text-text-default">{layer.how}</dd>
                  </dl>
                </ListItem>
              );
            })}
          </List>
        </section>
      ))}
    </div>
  );
};
