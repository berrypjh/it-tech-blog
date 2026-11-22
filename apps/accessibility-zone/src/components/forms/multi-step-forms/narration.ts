import type { NarrationScript } from '@it-tech-blog/ui';

/** 11.5 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '숨긴 칸의 값은 어디로 갈까요?', pause: 'think' },
      { text: '정해 두지 않으면 제출을 막거나 몰래 전송됩니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 단계와 조건의 정책을 정할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 단계를 오갈 때의 값과 초점을 정합니다.',
        pause: 'short',
      },
      { target: 'li:nth-child(2)', text: '그다음, 조건부 필드의 정책을 맞춰요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 다시 입력시키지 않을 정보를 가립니다.',
        pause: 'section',
      },
    ],
    'steps-back-and-next': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 이전으로 가면 값은 남을까요?',
        pause: 'think',
      },
      { text: '남아야 합니다. 그리고 초점은 새 단계의 제목으로 갑니다.', pause: 'short' },
      { text: '정리하면, 다음에서는 지금 단계만 검사합니다.', pause: 'section' },
    ],
    'conditional-fields': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 조건부 필드는 무엇을 정할까요?',
        pause: 'think',
      },
      { text: '노출과 값, 검증과 제출 네 가지입니다.', pause: 'short' },
      {
        target: 'table',
        text: '식사 선택 표에서 온라인 참석이면 검사도 제출도 하지 않습니다.',
        pause: 'short',
      },
      { text: '정리하면, 보이지 않는 칸이 제출을 막지 않게 합니다.', pause: 'section' },
    ],
    'redundant-entry': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 같은 이름을 또 쳐야 할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 채워 주거나 고르게 합니다.', pause: 'short' },
      {
        target: 'table',
        text: '예외는 필수인 경우와 보안, 그리고 유효하지 않은 정보입니다.',
        pause: 'short',
      },
      { text: '정리하면, 같은 과정 안의 정보에 적용됩니다.', pause: 'section' },
    ],
    'two-step-application': [
      { target: ':scope > h2', text: '자, 두 단계 신청에서 확인해 볼까요?', pause: 'short' },
      { target: 'ol', text: '참석 방식을 바꾸고 두 단계를 오가 봅니다.', pause: 'short' },
      { text: '제출될 값을 확인해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 화면과 검증과 제출이 같은 목록을 씁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 단계를 오가도 값을 지킵니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 조건부 필드는 네 가지를 함께 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 받은 정보는 다시 입력시키지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 숨긴 칸은 검증과 제출에서 뺍니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지의 질문입니다. 비밀번호를 외워야만 들어갈 수 있을까요?',
        pause: 'section',
      },
    ],
  },
};
