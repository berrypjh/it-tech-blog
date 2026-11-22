import type { NarrationScript } from '@it-tech-blog/ui';

/** 11.4 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '서버가 거절하면 입력값은 어떻게 될까요?', pause: 'think' },
      { text: '그대로 남아 있어야 합니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 실패한 뒤의 복구를 설계할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 두 가지 서버 오류를 나눕니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 현재 제출만 화면을 바꾸게 해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 값을 지킨 채 다시 시도합니다.',
        pause: 'section',
      },
    ],
    'two-kinds-of-server-error': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 서버의 실패는 모두 같을까요?',
        pause: 'think',
      },
      { text: '아닙니다. 값을 고칠 오류와 다시 보낼 오류가 있습니다.', pause: 'short' },
      {
        target: 'table',
        text: '서버 실패 표에서 두 종류 모두 입력값은 그대로입니다.',
        pause: 'short',
      },
      { text: '정리하면, 어느 쪽이든 값을 지우지 않습니다.', pause: 'section' },
    ],
    'only-the-current-submission': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 늦게 온 실패는 어떻게 할까요?',
        pause: 'think',
      },
      { text: '현재 제출의 응답이 아니면 무시합니다.', pause: 'short' },
      { text: '정리하면, 현재 제출만 오류와 알림을 바꿉니다.', pause: 'section' },
    ],
    'server-response-practice': [
      { target: ':scope > h2', text: '자, 응답을 직접 골라 보내 볼까요?', pause: 'short' },
      { target: 'ol', text: '두 번 보내고, 먼저 보낸 쪽에 오류를 응답합니다.', pause: 'short' },
      { text: '값이 남아 있는지 확인해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 이 실습은 실제 네트워크를 확인한 것이 아닙니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 실패해도 값은 그대로 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 오류의 종류마다 복구 경로가 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 현재 제출만 화면을 바꿉니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 입력값은 남아 있어야 합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 숨긴 칸의 값은 어디로 갈까요?', pause: 'section' },
    ],
  },
};
