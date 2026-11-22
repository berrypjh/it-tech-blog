import type { Locale } from '@it-tech-blog/preferences';

/**
 * 09장이 함께 쓰는 가상의 행사 원자료. 그림 · 표 · 영상 · 대본 · 내려받기 문서는 모두 이 값에서 나온다.
 * 최종 과업의 모범 답은 각 대안이 아니라 이 원자료와 대조한다.
 */
export const eventFacts = {
  ko: {
    name: '모두의 접근성 워크숍 (가상의 행사)',
    days: ['토요일 (12월 5일)', '일요일 (12월 6일)'],
    halls: ['A홀', 'B홀'],
    sessions: [
      { label: '1회차', time: '10:00' },
      { label: '2회차', time: '13:00' },
      { label: '3회차', time: '15:30' },
    ],
    place: '본관 2층',
    lastSession: '일요일 3회차 15:30',
    entranceBefore: '정문 (북쪽)',
    entranceAfter: '동쪽 입구',
    entranceReason: '정문 공사로 두 날 모두 동쪽 입구만 엽니다. 경사로도 동쪽 입구 옆에 있습니다.',
    seatsUnit: '석',
    seatsTitle: '토요일 시간대별 남은 좌석',
    /** 일정표의 칸. program[요일][홀][회차] */
    program: [
      [
        ['이미지 대체 텍스트', '데이터 표', '키보드 점검'],
        ['자막 만들기', '쉬운 문장', '질의응답'],
      ],
      [
        ['차트 대안', '미디어 플레이어', '모션 설정'],
        ['문서 접근성', '수어 통역 안내', '마무리 토론'],
      ],
    ],
  },
  en: {
    name: 'Accessibility for All Workshop (a fictional event)',
    days: ['Saturday (December 5)', 'Sunday (December 6)'],
    halls: ['Hall A', 'Hall B'],
    sessions: [
      { label: 'Session 1', time: '10:00' },
      { label: 'Session 2', time: '13:00' },
      { label: 'Session 3', time: '15:30' },
    ],
    place: 'Main Building, 2nd floor',
    lastSession: 'Sunday, Session 3 at 15:30',
    entranceBefore: 'Main gate (north)',
    entranceAfter: 'East entrance',
    entranceReason:
      'Because of construction at the main gate, only the east entrance is open on both days. The ramp is next to the east entrance.',
    seatsUnit: 'seats',
    seatsTitle: 'Seats left by hour on Saturday',
    /** Schedule cells: program[day][hall][session] */
    program: [
      [
        ['Image text alternatives', 'Data tables', 'Keyboard checks'],
        ['Making captions', 'Plain sentences', 'Q&A'],
      ],
      [
        ['Chart alternatives', 'Media players', 'Motion settings'],
        ['Document accessibility', 'Sign language interpreting', 'Closing discussion'],
      ],
    ],
  },
} satisfies Record<Locale, unknown>;

/** 토요일 시간대별 남은 좌석 수(교육 예시). 13시에 가장 많고 그 뒤로 줄어든다. */
export const seatsByHour = [
  { hour: 10, seats: 22 },
  { hour: 11, seats: 15 },
  { hour: 13, seats: 38 },
  { hour: 14, seats: 30 },
  { hour: 15, seats: 17 },
  { hour: 16, seats: 9 },
];
