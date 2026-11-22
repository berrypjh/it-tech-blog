import type { NarrationScript } from '@it-tech-blog/ui';

/** 11.6 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '비밀번호를 외워야만 들어갈 수 있을까요?', pause: 'think' },
      { text: '그렇다면 어떤 사용자는 문 앞에서 멈춥니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 인증 경로를 검토할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 인지 기능 시험과 두 기준을 나눕니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 보조 수단을 막는 구현을 찾아요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 사람 확인 시험을 두 기준으로 검토합니다.',
        pause: 'section',
      },
    ],
    'cognitive-function-test': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 무엇이 인지 기능 시험일까요?',
        pause: 'think',
      },
      { text: '기억하거나 옮겨 적거나 문제를 푸는 과업입니다.', pause: 'short' },
      {
        target: 'table',
        text: '조건 표에서 객체 인식과 개인 콘텐츠는 더 높은 수준에서 빠집니다.',
        pause: 'short',
      },
      { text: '정리하면, 모든 단계가 조건 하나를 제공해야 합니다.', pause: 'section' },
    ],
    'do-not-block-assistance': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 무엇을 막지 말아야 할까요?',
        pause: 'think',
      },
      { text: '붙여넣기와 비밀번호 관리자, 그리고 직접 편집입니다.', pause: 'short' },
      { text: '정리하면, 검토는 막지 않는 것에서 시작합니다.', pause: 'section' },
    ],
    'captcha-review': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 사람 확인 시험은 어떻게 볼까요?',
        pause: 'think',
      },
      { text: '두 기준으로 따로 봅니다.', pause: 'short' },
      {
        target: 'table',
        text: '검토 기준 표는 대체 텍스트와 인증 조건을 나눕니다.',
        pause: 'short',
      },
      { text: '정리하면, 화면만 보고 결론을 내리지 않습니다.', pause: 'section' },
    ],
    'synthetic-sign-in': [
      { target: ':scope > h2', text: '자, 합성 값으로 직접 지나가 볼까요?', pause: 'short' },
      {
        text: '값을 붙여 넣고 대체 경로도 지나 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 실제 채움은 쓰는 기기에서 확인합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 인지 기능 시험에는 조건이 따릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 보조 수단을 막지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 사람 확인 시험은 두 기준으로 봅니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 외우지 않고 들어가는 길이 있어야 합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지의 질문입니다. 시간이 다 되면 쓰던 내용은 어떻게 될까요?',
        pause: 'section',
      },
    ],
  },
};
