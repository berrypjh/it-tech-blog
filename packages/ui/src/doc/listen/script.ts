import type { Segment } from './segments';

/**
 * 대본 한 줄 뒤의 쉼. 질문 뒤 생각 쉼은 교실 대기 시간 연구(2~3초)를 따른다.
 * flow는 쉼표에서 숨 고르는 정도라, 나열 항목을 줄마다 나눠 강조를 옮겨도 한 문장처럼 이어 들린다.
 */
export type Pause = 'flow' | 'short' | 'long' | 'think' | 'section';

/**
 * 해설 대본 한 줄. target은 그 섹션 안에서 강조할 요소의 CSS 선택자(생략하면 앞 줄의 요소를 잇는다),
 * text는 자막에 보일 말, say는 소리로 낼 말(발음 사전으로 안 되는 말을 풀 때만).
 */
export type ScriptLine = { target?: string; text: string; say?: string; pause?: Pause };

/** 언어별 · 섹션별 대본. 키는 섹션 id(머리말은 'header'). 대본이 없는 섹션은 자동 규칙으로 읽는다. */
export type NarrationScript = Partial<Record<'ko' | 'en', Record<string, ScriptLine[]>>>;

const PAUSE_MS: Record<Pause, number> = {
  flow: 120,
  short: 350,
  long: 900,
  think: 2500,
  section: 2500,
};

/** 섹션 대본을 세그먼트로. 선택자를 못 찾으면 앞 요소를 잇고, 개발 중에는 경고로 알린다. */
export const scriptSegments = (scope: Element, lines: ScriptLine[]): Segment[] => {
  let last = (scope.querySelector('h1, h2') ?? scope) as HTMLElement;
  return lines.map((line) => {
    const found = line.target ? scope.querySelector<HTMLElement>(line.target) : null;
    if (line.target && !found && process.env.NODE_ENV !== 'production') {
      console.warn(`[listen] 대본 대상 없음: ${line.target}`);
    }
    last = found ?? last;
    return {
      el: last,
      text: line.text,
      speech: line.say,
      pause: line.pause ? PAUSE_MS[line.pause] : undefined,
    };
  });
};
