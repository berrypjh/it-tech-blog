import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.8 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '계속 바뀌는 화면은 어떻게 멈출까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '사용자가 시작하고 멈추게 만듭니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 움직임을 안전하게 다룰 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 멈춤이 필요한 조건을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 갱신을 직접 다뤄 봐요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 점멸과 모션 선호를 나눕니다.',
        pause: 'section',
      },
    ],
    'pause-stop-hide': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 언제 멈춤 수단이 필요할까요?',
        pause: 'think',
      },
      { text: '저절로 시작해 5초 넘게 다른 내용과 함께 움직일 때입니다.', pause: 'short' },
      { text: '자동 갱신은 길이와 관계없이 멈추거나 빈도를 조절해요.', pause: 'short' },
      { text: '정리하면, 두 경우의 조건이 다릅니다.', pause: 'section' },
    ],
    'safe-update-practice': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 갱신을 직접 시작하고 멈춰 볼까요?',
        pause: 'think',
      },
      {
        text: '빈도를 바꾸고 모션 설정도 바꿔 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 바뀔 때마다 읽어 주지 않게 둡니다.', pause: 'section' },
    ],
    'flash-and-motion-preference': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 모션 줄이기를 켜면 점멸해도 될까요?',
        pause: 'think',
      },
      { text: '아닙니다. 위험한 점멸은 설정과 관계없이 만들지 않습니다.', pause: 'short' },
      { text: '1초에 세 번 이하이거나 임계값 아래여야 해요.', pause: 'short' },
      { text: '정리하면, 모션 선호는 점멸 기준을 대신하지 못합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 저절로 움직이면 멈출 수단이 필요합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 위험한 점멸은 만들지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 사이트 설정과 운영체제 설정을 따로 읽습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 사용자가 멈추게 합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 안내문은 무엇을 먼저 말해야 할까요?', pause: 'section' },
    ],
  },
};
