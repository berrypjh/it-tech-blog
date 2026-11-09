'use client';

import { useReducer } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, List, ListItem, Radio, RadioGroup } from '@berrypjh/react-ui';

import { checkContract } from './contract';
import { type FixtureId, fixtureReducer, fixtures, initialFixture } from './fixtures';
import { contractLabels } from './labels';
import { StatusMark } from './StatusMark';

const content = {
  ko: {
    practice: '실습',
    badge:
      '사례를 고르면 네 경계의 판정과 쓰기 허용 여부가 바뀝니다. 사례는 이 페이지가 만든 교육 예시이며, 모델을 호출하거나 티켓 시스템에 쓰지 않습니다.',
    pick: '사례 고르기',
    outputHeading: '모델 출력 (신뢰 경계 밖)',
    trustedHeading: '신뢰된 입력 (업무 시스템 · 권한 시스템)',
    logs: '이 요청의 로그 ID',
    queues: '큐 상태',
    permission: '요청자의 티켓 생성 권한',
    stepsHeading: '검사 순서와 판정',
    reset: '처음 사례로',
    verdict: (write: string, reason: string) => `${write}. ${reason}`,
  },
  en: {
    practice: 'Exercise',
    badge:
      'Pick a case to see the verdict at the four boundaries and whether the write is allowed. The cases are teaching examples made for this page; no model is called and nothing is written to the ticket system.',
    pick: 'Pick a case',
    outputHeading: 'Model output (outside the trust boundary)',
    trustedHeading: 'Trusted input (business system · permission system)',
    logs: 'Log IDs for this request',
    queues: 'Queue states',
    permission: 'Requester’s permission to create tickets',
    stepsHeading: 'Check order and verdicts',
    reset: 'Back to the first case',
    verdict: (write: string, reason: string) => `${write}. ${reason}`,
  },
};

const panel = 'rounded-md border border-stroke-light bg-background-surface p-md';
const heading = 'mb-xs text-xxsm font-semiBold text-text-light';

/**
 * 가상 사례를 골라 네 경계의 판정과 쓰기 허용 여부를 보는 그림.
 * 판정은 순수 함수 checkContract가 내고, 이 컴포넌트는 선택 상태만 가진다.
 */
export const ContractCheckDemo = () => {
  const c = useLang(content);
  const l = useLang(contractLabels);
  const [id, dispatch] = useReducer(fixtureReducer, initialFixture);
  const fixture = fixtures.find((item) => item.id === id) ?? fixtures[0];
  const { steps, writeAllowed } = checkContract(fixture.output, fixture.trusted);
  const blocking = steps.find((step) => step.status !== 'pass');
  const { logIds, queues, permission } = fixture.trusted;

  return (
    <PracticeFrame label={c.practice} instructions={c.badge}>
      <RadioGroup
        label={c.pick}
        name="contract-fixture"
        value={id}
        onValueChange={(value) => dispatch({ type: 'select', id: value as FixtureId })}
      >
        {fixtures.map((item) => (
          <Radio key={item.id} value={item.id}>
            {l.fixtures[item.id]}
          </Radio>
        ))}
      </RadioGroup>

      <div className="grid grid-cols-1 gap-sm md:grid-cols-2">
        <div className={panel}>
          <p className={heading}>{c.outputHeading}</p>
          <pre className="whitespace-pre-wrap break-all font-mono text-xsm text-text-default">
            {fixture.output}
          </pre>
        </div>
        <div className={panel}>
          <p className={heading}>{c.trustedHeading}</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-md gap-y-xs text-xxsm">
            <dt className="text-text-light">{c.logs}</dt>
            <dd className="font-mono text-text-default">{logIds.join(', ')}</dd>
            <dt className="text-text-light">{c.queues}</dt>
            <dd className="text-text-default">
              {Object.entries(queues)
                .map(([queue, state]) => `${queue}: ${state ? l.queueStates[state] : l.noState}`)
                .join(' · ')}
            </dd>
            <dt className="text-text-light">{c.permission}</dt>
            <dd className="text-text-default">
              {permission ? l.permissions[permission] : l.noPermission}
            </dd>
          </dl>
        </div>
      </div>

      <div>
        <p className={heading}>{c.stepsHeading}</p>
        <List ordered className="flex flex-col gap-xs">
          {steps.map((step) => (
            <ListItem
              key={step.id}
              className="grid grid-cols-1 gap-2xs rounded-sm border border-stroke-light px-md py-sm text-xsm sm:grid-cols-[11rem_8rem_1fr] sm:items-center"
            >
              <span className="font-semiBold text-text-default">{l.steps[step.id]}</span>
              <StatusMark status={step.status} label={l.statuses[step.status]} />
              <span className="text-xxsm text-text-light">{l.reasons[step.reason]}</span>
            </ListItem>
          ))}
        </List>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="flex flex-wrap items-center gap-sm rounded-md border border-stroke-light px-md py-sm text-xsm font-semiBold"
      >
        <StatusMark
          status={writeAllowed ? 'pass' : 'fail'}
          label={c.verdict(
            l.write[`${writeAllowed}`],
            l.reasons[blocking ? blocking.reason : 'ok'],
          )}
        />
      </p>

      <div>
        <Button variant="text" size="sm" onClick={() => dispatch({ type: 'reset' })}>
          {c.reset}
        </Button>
      </div>
    </PracticeFrame>
  );
};
