import type { NarrationScript } from '@it-tech-blog/ui';

/** 11.3 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '오류가 여러 개면 어디로 가야 할까요?', pause: 'think' },
      { text: '틀린 칸을 한눈에 찾을 곳이 필요합니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 요약에서 칸까지 한 경로로 이을 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 오류 식별과 수정 제안을 나눕니다.',
        pause: 'short',
      },
      { target: 'li:nth-child(2)', text: '그다음, 상태와 오류 글을 연결해요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 초점을 옮길 한 곳을 정합니다.',
        pause: 'section',
      },
    ],
    'identification-and-suggestion': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 오류 문구에는 무엇이 들어갈까요?',
        pause: 'think',
      },
      { text: '무엇이 틀렸는지와 어떻게 고칠지입니다.', pause: 'short' },
      {
        target: 'table',
        text: '오류 문구 표는 한 상황을 식별과 제안으로 나눕니다.',
        pause: 'short',
      },
      { text: '정리하면, 식별과 제안은 따로 요구됩니다.', pause: 'section' },
    ],
    'field-error-wiring': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 오류 상태는 언제 켤까요?',
        pause: 'think',
      },
      { text: '검증한 뒤입니다. 빈 칸은 아직 틀린 것이 아닙니다.', pause: 'short' },
      { text: '정리하면, 오류 글은 도움말 뒤에 설명으로 이어집니다.', pause: 'section' },
    ],
    'first-failure-focus': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 실패하면 초점은 어디로 갈까요?',
        pause: 'think',
      },
      { text: '이 예제는 오류 요약의 제목으로 옮깁니다.', pause: 'short' },
      { text: '정리하면, 한 곳만 정하고 거듭 알리지 않습니다.', pause: 'section' },
    ],
    'summary-to-field': [
      { target: ':scope > h2', text: '자, 경로 전체를 직접 지나가 볼까요?', pause: 'short' },
      { target: 'ol', text: '두 오류를 내고 요약의 링크로 칸에 갑니다.', pause: 'short' },
      { text: '고친 뒤 다시 보내 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 링크는 정확한 칸에 닿아야 합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 식별과 제안을 나눠 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 오류 상태는 검증한 뒤에 켭니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 초점은 한 곳으로 옮깁니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 요약에서 칸으로 갑니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지의 질문입니다. 서버가 거절하면 입력값은 어떻게 될까요?',
        pause: 'section',
      },
    ],
  },
};
