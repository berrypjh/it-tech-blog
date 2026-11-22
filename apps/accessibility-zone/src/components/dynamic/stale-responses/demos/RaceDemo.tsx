'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { SearchPanel } from '@/components/dynamic/shared/SearchPanel';
import { ServerPanel } from '@/components/dynamic/shared/ServerPanel';
import { useSimulatedSearch } from '@/components/dynamic/shared/useSimulatedSearch';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '“자막”(A)을 검색하고 이어서 “대본”(B)을 검색한 뒤, 가상 서버 목록에서 현재 B(대본) 요청에 먼저, A(자막) 요청에 나중에 응답하세요. 그다음 취소 · 오류 · 같은 응답 반복 · 재설정도 해 봅니다.',
    observed: '페이지가 읽은 DOM과 상태',
    active: '활성 요청 (페이지 상태)',
    status: 'role="status"의 글자',
    busy: '결과 영역의 aria-busy',
    items: '결과 목록 항목',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Search for “caption” (A), then “transcript” (B), and in the simulated server list respond to the current B (transcript) request first and the A (caption) request later. Then also try cancel, an error, repeating the same response, and reset.',
    observed: 'DOM and state the page read',
    active: 'Active request (page state)',
    status: 'Text of role="status"',
    busy: 'aria-busy of the results area',
    items: 'Items in the result list',
    focus: 'document.activeElement',
    none: 'None',
  },
};

type Read = { status: string; busy: string; items: string };

/** 실제 폼 · 결과 · 알림에 가상 서버의 응답 순서를 사람이 정해 넣고, 사용자가 읽는 DOM을 그대로 읽는다. */
export const RaceDemo = () => {
  const c = useLang(content);
  const sim = useSimulatedSearch();
  const [query, setQuery] = useState('');
  const [active] = useActiveElement();
  const box = useRef<HTMLDivElement>(null);
  const [read, setRead] = useState<Read>({ status: '', busy: '', items: '' });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    setRead({
      status: el.querySelector('[role="status"]')?.textContent ?? '',
      busy: el.querySelector('section[aria-busy]')?.getAttribute('aria-busy') ?? '',
      items: [...el.querySelectorAll('section li')].map((li) => li.textContent).join(', '),
    });
  }, [sim.state, sim.requests]);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div ref={box}>
        <SearchPanel sim={sim} query={query} onQueryChange={setQuery} />
      </div>
      <ServerPanel sim={sim} />
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.active, sim.state.activeId ? `#${sim.state.activeId}` : c.none],
          [c.status, read.status || c.none],
          [c.busy, <code key="b">{read.busy}</code>],
          [c.items, read.items || c.none],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
