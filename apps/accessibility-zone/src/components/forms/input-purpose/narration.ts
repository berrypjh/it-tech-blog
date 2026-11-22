import type { NarrationScript } from '@it-tech-blog/ui';

/** 11.1 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '숫자 키보드가 뜨면 값도 검사될까요?', pause: 'think' },
      { text: '아닙니다. 키보드 힌트와 값 검증은 다른 일입니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 입력 칸의 속성을 목적에 맞게 고를 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 속성마다 하는 일을 나눕니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 필수 표시와 형식 예시를 연결해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 입력 목적을 표시할 칸을 고릅니다.',
        pause: 'section',
      },
    ],
    'three-roles': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 세 속성은 무엇이 다를까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '입력 칸 속성 표는 하는 일과 하지 않는 일을 나눕니다.',
        pause: 'short',
      },
      { text: '정리하면, 한 속성이 다른 속성을 대신하지 않습니다.', pause: 'section' },
    ],
    'visible-instructions': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 형식은 언제 알려야 할까요?',
        pause: 'think',
      },
      { text: '틀린 뒤가 아니라 입력하기 전입니다.', pause: 'short' },
      { text: '정리하면, 안내는 사라지지 않는 도움말에 둡니다.', pause: 'section' },
    ],
    'small-application': [
      { target: ':scope > h2', text: '자, 신청서에서 직접 읽어 볼까요?', pause: 'short' },
      { text: '칸을 채우고 속성을 읽어 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 가상 키보드는 기기에서 직접 확인합니다.', pause: 'section' },
    ],
    'input-purpose-scope': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 모든 칸에 목적을 표시할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 사용자 자신의 정보를 받는 칸만입니다.', pause: 'short' },
      { target: 'table', text: '신청서 칸 표에서 참가 인원은 대상이 아닙니다.', pause: 'short' },
      { text: '정리하면, 누구의 정보인지 먼저 묻습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 세 속성은 서로 다른 일을 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 필수와 형식은 언제나 보입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 입력 목적은 사용자 정보에만 표시합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 키보드 힌트는 값을 검사하지 않습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 제출은 누가 멈출까요?', pause: 'section' },
    ],
  },
};
