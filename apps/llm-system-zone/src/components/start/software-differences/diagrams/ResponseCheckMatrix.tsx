import type { Locale } from '@it-tech-blog/preferences';

import { TableScroll } from '@berrypjh/react-ui';

import { checkContract } from '../demos/contract';
import { tableFixtures } from '../demos/fixtures';
import { contractLabels } from '../demos/labels';
import { StatusMark } from '../demos/StatusMark';

const content = {
  ko: {
    caption: '가상 사례 일곱 가지가 네 경계를 지나는 결과',
    caseHeader: '사례',
    outputHeader: '모델 출력',
    writeHeader: '쓰기',
  },
  en: {
    caption: 'How seven fictional cases pass the four boundaries',
    caseHeader: 'Case',
    outputHeader: 'Model output',
    writeHeader: 'Write',
  },
};

const head = 'border-b border-stroke-light px-md py-sm text-left font-semiBold text-text-light';
const cell = 'border-t border-stroke-light px-md py-sm align-top';

/**
 * 가상 사례마다 네 경계의 판정과 쓰기 허용 여부를 표로 보여 준다. 조작 없이 읽는 대표 결과다.
 * 값은 조작 그림과 같은 순수 함수로 서버에서 계산한다.
 */
export const ResponseCheckMatrix = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const l = contractLabels[locale];
  const stepIds = Object.keys(l.steps) as (keyof typeof l.steps)[];

  return (
    <figure className="my-lg">
      <TableScroll
        label={c.caption}
        className="rounded-md border border-stroke-light bg-background-surface"
      >
        <table className="w-full min-w-[52rem] border-collapse text-xxsm leading-normal">
          <caption className="sr-only">{c.caption}</caption>
          <thead>
            <tr>
              <th scope="col" className={head}>
                {c.caseHeader}
              </th>
              <th scope="col" className={head}>
                {c.outputHeader}
              </th>
              {stepIds.map((id) => (
                <th key={id} scope="col" className={head}>
                  {l.steps[id]}
                </th>
              ))}
              <th scope="col" className={head}>
                {c.writeHeader}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableFixtures.map((fixture) => {
              const result = checkContract(fixture.output, fixture.trusted);

              return (
                <tr key={fixture.id}>
                  <th scope="row" className={`${cell} text-left font-semiBold text-text-default`}>
                    {l.fixtures[fixture.id]}
                  </th>
                  <td className={`${cell} font-mono break-all text-text-light`}>
                    {fixture.output}
                  </td>
                  {result.steps.map((step) => (
                    <td key={step.id} className={`${cell} whitespace-nowrap`}>
                      <StatusMark status={step.status} label={l.statuses[step.status]} />
                    </td>
                  ))}
                  <td className={`${cell} whitespace-nowrap font-semiBold`}>
                    <StatusMark
                      status={result.writeAllowed ? 'pass' : 'fail'}
                      label={l.write[`${result.writeAllowed}`]}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableScroll>
    </figure>
  );
};
