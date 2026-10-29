import type { Locale } from '@it-tech-blog/preferences';

export type FailureStageId =
  | 'perceive'
  | 'understand'
  | 'navigate'
  | 'operate'
  | 'state'
  | 'complete';

export type FailureStage = { id: FailureStageId; title: string; detail: string };

/** 사용자가 과업을 끝내기까지 거치는 단계. 01장 전체에서 "실패 단계"를 이 어휘 하나로 기록한다. */
export const failureStages: Record<Locale, FailureStage[]> = {
  ko: [
    { id: 'perceive', title: '인식', detail: '보이거나, 들리거나, 읽힙니다' },
    { id: 'understand', title: '이해', detail: '버튼인지 제목인지, 무엇을 하는지 압니다' },
    { id: 'navigate', title: '탐색', detail: '원하는 위치로 이동합니다' },
    { id: 'operate', title: '조작', detail: '누르고, 입력하고, 선택합니다' },
    { id: 'state', title: '상태·오류 이해', detail: '결과와 고칠 점을 압니다' },
    { id: 'complete', title: '작업 완료', detail: '가입·주문·예약이 끝납니다' },
  ],
  en: [
    { id: 'perceive', title: 'Perceive', detail: 'It is seen, heard, or read' },
    { id: 'understand', title: 'Understand', detail: 'They know what it is and what it does' },
    { id: 'navigate', title: 'Navigate', detail: 'They move to where they want' },
    { id: 'operate', title: 'Operate', detail: 'They press, type, and select' },
    { id: 'state', title: 'Grasp state & errors', detail: 'They know the result and what to fix' },
    { id: 'complete', title: 'Complete the task', detail: 'Sign-up, order, or booking is done' },
  ],
};

export const stageTitle = (locale: Locale, id: FailureStageId) =>
  failureStages[locale].find((stage) => stage.id === id)?.title ?? id;
