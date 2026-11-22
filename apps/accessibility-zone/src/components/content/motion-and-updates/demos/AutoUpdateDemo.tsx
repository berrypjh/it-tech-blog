'use client';

import { useEffect, useRef, useState } from 'react';

import { useMotion } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import { seatsByHour } from '@/components/content/shared/event';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

const intervals = [3, 10];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '갱신은 시작 버튼을 눌러야 시작합니다. 일시 정지와 빈도를 바꿔 보고, 설정에서 모션 줄이기를 켜고 끄며 진행 막대를 비교하세요.',
    start: '자동 갱신 시작',
    pause: '일시 정지',
    resume: '다시 시작',
    frequency: '갱신 빈도',
    every: (s: number) => `${s}초마다`,
    board: '토요일 남은 좌석 (교육 예시)',
    at: (hour: number) => `${hour}시 기준`,
    seats: (n: number) => `${n}석`,
    observed: '지금 관찰한 값',
    running: '갱신 상태',
    states: { idle: '시작 전', running: '진행 중', paused: '일시 정지' },
    updates: '갱신 횟수',
    appMotion: '이 사이트의 모션 설정',
    osMotion: '운영체제의 prefers-reduced-motion',
    bar: '진행 막대 움직임',
    moving: '움직임',
    still: '멈춘 막대',
    reduce: '줄이기',
    normal: '기본',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'The update starts only when you press start. Try pause and the frequency, and compare the progress bar while turning reduce motion on and off in settings.',
    start: 'Start auto-update',
    pause: 'Pause',
    resume: 'Resume',
    frequency: 'Update frequency',
    every: (s: number) => `Every ${s} seconds`,
    board: 'Seats left on Saturday (teaching example)',
    at: (hour: number) => `As of ${hour}:00`,
    seats: (n: number) => `${n} seats`,
    observed: 'Observed now',
    running: 'Update state',
    states: { idle: 'Not started', running: 'Running', paused: 'Paused' },
    updates: 'Updates so far',
    appMotion: 'This site’s motion setting',
    osMotion: 'OS prefers-reduced-motion',
    bar: 'Progress bar motion',
    moving: 'Moving',
    still: 'Static bar',
    reduce: 'Reduce',
    normal: 'Default',
  },
};

type Run = 'idle' | 'running' | 'paused';

/**
 * 정해진 순서의 값으로 바뀌는 좌석 현황. 사용자가 시작 · 일시 정지하고 빈도를 고른다.
 * 갱신마다 읽어 주지 않도록 live region을 두지 않는다. 화면을 떠나면 타이머가 정리된다.
 * 진행 막대는 사이트 설정과 운영체제 설정이 모두 모션을 허용할 때만 움직인다.
 */
export const AutoUpdateDemo = () => {
  const c = useLang(content);
  const { motion } = useMotion();
  const [run, setRun] = useState<Run>('idle');
  const [seconds, setSeconds] = useState(intervals[0]);
  const [count, setCount] = useState(0);
  const [osReduce, setOsReduce] = useState(false);
  const point = seatsByHour[count % seatsByHour.length];
  const bar = useRef<HTMLDivElement>(null);
  const animate = motion !== 'reduce' && !osReduce;

  useEffect(() => {
    if (run !== 'running') return;
    const timer = setInterval(() => setCount((n) => n + 1), seconds * 1000);
    return () => clearInterval(timer);
  }, [run, seconds]);

  useEffect(() => {
    if (run !== 'running' || !animate) return;
    const animation = bar.current?.animate(
      [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
      {
        duration: seconds * 1000,
      },
    );
    return () => animation?.cancel();
  }, [run, seconds, count, animate]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setOsReduce(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap items-center gap-md">
        {run === 'idle' ? (
          <Button type="button" variant="outlined" size="sm" onClick={() => setRun('running')}>
            {c.start}
          </Button>
        ) : (
          <Button
            type="button"
            variant="outlined"
            size="sm"
            onClick={() => setRun(run === 'running' ? 'paused' : 'running')}
          >
            {run === 'running' ? c.pause : c.resume}
          </Button>
        )}
        <RadioGroup
          label={c.frequency}
          value={String(seconds)}
          onValueChange={(value) => setSeconds(Number(value))}
          className="flex flex-wrap gap-md"
        >
          {intervals.map((s) => (
            <Radio key={s} value={String(s)} className="text-xsm">
              {c.every(s)}
            </Radio>
          ))}
        </RadioGroup>
      </div>
      <div className="rounded-sm border border-stroke-light p-md">
        <p className="text-xxsm text-text-light">{c.board}</p>
        <p className="text-lg font-bold text-text-default">
          {c.at(point.hour)} · {c.seats(point.seats)}
        </p>
        <div className="mt-sm h-2 overflow-hidden rounded-xs bg-background-grey/30">
          {run === 'running' && (
            <div ref={bar} className="h-full w-full origin-left bg-primaryBtn-default" />
          )}
        </div>
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.running, c.states[run]],
          [c.updates, count],
          [c.appMotion, motion === 'reduce' ? c.reduce : c.normal],
          [c.osMotion, osReduce ? c.reduce : c.normal],
          [c.bar, animate ? c.moving : c.still],
        ]}
      />
    </PracticeFrame>
  );
};
