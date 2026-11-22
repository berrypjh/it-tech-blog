'use client';

import { useId, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup, TextField } from '@berrypjh/react-ui';

import { searchCatalog } from '@/components/dynamic/shared/search';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { VerdictLabel } from '@/components/shared/VerdictLabel';

type Means = 'update' | 'status' | 'context';
const meansList: Means[] = ['update', 'status', 'context'];
const expected: Means[] = ['update', 'status', 'context'];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '아래 화면에서 검색하고 새 작업을 시작해 본 뒤, 세 장면에 맞는 수단을 고르고 확인을 누르세요.',
    field: '검색어',
    search: '검색',
    results: '검색 결과',
    found: (n: number) => `${n}건 찾음`,
    start: '새 작업 시작',
    task: '새 작업: 참가 신청서 작성',
    taskBody: '여기서부터 새 작업입니다. 포커스가 이 제목으로 옮겨 왔습니다.',
    scenes: ['검색 결과 목록이 바뀜', '“3건 찾음”', '새 작업 화면 진입'],
    means: { update: '화면 갱신', status: '포커스를 받지 않는 상태 메시지', context: '맥락 전환' },
    check: '확인',
    reasons: [
      '목록은 내용이 바뀌는 화면 갱신입니다. 그 자체가 상태 메시지는 아닙니다.',
      '결과를 알리는 짧은 문구라 포커스 없이 알리는 상태 메시지입니다.',
      '사용자가 요청한 새 화면이라 포커스를 옮기는 맥락 전환입니다.',
    ],
    match: '맞음',
    differ: '다시 보기',
    result: (n: number) => `3개 중 ${n}개가 풀이와 같습니다.`,
    observed: '지금 관찰한 값',
    focus: 'document.activeElement',
    status: 'role="status"의 글자',
    items: '목록 항목 수',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Search and start a new task on the screen below, then choose the means for each of the three scenes and press Check.',
    field: 'Search term',
    search: 'Search',
    results: 'Search results',
    found: (n: number) => `${n} found`,
    start: 'Start a new task',
    task: 'New task: filling in the registration form',
    taskBody: 'The new task starts here. Focus moved to this heading.',
    scenes: ['The result list changes', '“3 found”', 'Entering a new task screen'],
    means: {
      update: 'Screen update',
      status: 'Status message that does not take focus',
      context: 'Change of context',
    },
    check: 'Check',
    reasons: [
      'The list is a screen update where content changes. It is not a status message itself.',
      'It is short text reporting a result, so it is a status message given without focus.',
      'It is a new screen the user asked for, so it is a change of context that moves focus.',
    ],
    match: 'Correct',
    differ: 'Look again',
    result: (n: number) => `${n} of 3 match the solution.`,
    observed: 'Observed now',
    focus: 'document.activeElement',
    status: 'Text of role="status"',
    items: 'List items',
    none: 'None',
  },
};

/** 실제 검색 화면 하나에서 세 가지 변화를 일으키고, 학습자가 장면마다 수단을 고른다. */
export const ChooseMeansDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const taskId = useId();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[] | null>(null);
  const [taskOpen, setTaskOpen] = useState(false);
  const [choices, setChoices] = useState<(Means | '')[]>(['', '', '']);
  const [checked, setChecked] = useState(false);
  const [active] = useActiveElement();
  const matches = choices.filter((m, i) => m === expected[i]).length;

  const startTask = () => {
    setTaskOpen(true);
    requestAnimationFrame(() => document.getElementById(taskId)?.focus());
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-col gap-md rounded-sm border border-stroke-light p-md text-xsm">
        <form
          role="search"
          aria-label={c.search}
          className="flex flex-wrap items-end gap-sm"
          onSubmit={(e) => {
            e.preventDefault();
            setResults(searchCatalog(locale, query).map((item) => item.title));
          }}
        >
          <TextField label={c.field} value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button type="submit" variant="outlined" size="sm">
            {c.search}
          </Button>
        </form>
        <p role="status">{results ? c.found(results.length) : ''}</p>
        <ul aria-label={c.results} className="list-disc pl-lg">
          {results?.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
        <div>
          <Button type="button" variant="outlined" size="sm" onClick={startTask}>
            {c.start}
          </Button>
        </div>
        {taskOpen && (
          <section
            aria-labelledby={taskId}
            className="rounded-sm border border-stroke-default p-md"
          >
            <h3 id={taskId} tabIndex={-1} className="font-semiBold text-text-default">
              {c.task}
            </h3>
            <p>{c.taskBody}</p>
          </section>
        )}
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.focus, <code key="f">{active}</code>],
          [c.status, results ? c.found(results.length) : c.none],
          [c.items, results?.length ?? 0],
        ]}
      />
      <div className="grid gap-md sm:grid-cols-3">
        {c.scenes.map((scene, i) => (
          <div key={scene} className="rounded-sm border border-stroke-light p-md text-xsm">
            <RadioGroup
              label={`${i + 1}. ${scene}`}
              value={choices[i]}
              onValueChange={(v) =>
                setChoices((prev) => prev.map((p, j) => (j === i ? (v as Means) : p)))
              }
              className="flex flex-col gap-2xs"
            >
              {meansList.map((m) => (
                <Radio key={m} value={m} className="text-xsm">
                  {c.means[m]}
                </Radio>
              ))}
            </RadioGroup>
            {checked && choices[i] && (
              <p className="mt-xs">
                <VerdictLabel id={choices[i] === expected[i] ? 'pass' : 'fail'}>
                  {choices[i] === expected[i] ? c.match : c.differ}
                </VerdictLabel>{' '}
                <span className="text-text-light">{c.reasons[i]}</span>
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-md">
        <Button type="button" variant="outlined" size="sm" onClick={() => setChecked(true)}>
          {c.check}
        </Button>
        <p role="status" className="text-xsm">
          {checked ? c.result(matches) : ''}
        </p>
      </div>
    </PracticeFrame>
  );
};
