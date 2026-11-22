import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.7 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '영상이 저절로 소리를 내면 어떨까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '화면 낭독기의 목소리가 묻힙니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 플레이어의 제어를 검증할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 자동 재생의 조건을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 컨트롤과 키보드를 다뤄요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 오류 때 대본으로 가는 길을 봅니다.',
        pause: 'section',
      },
    ],
    'user-start-and-audio': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 어떤 소리가 문제일까요?',
        pause: 'think',
      },
      { text: '자동으로 3초 넘게 재생되는 소리입니다.', pause: 'short' },
      { text: '정리하면, 자동 재생을 하지 않는 것이 가장 단순합니다.', pause: 'section' },
    ],
    'player-practice': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 키보드로 재생하고 나갈 수 있을까요?',
        pause: 'think',
      },
      {
        text: '재생과 음소거, 자막을 바꾸고 오류도 켜 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 못 불러오면 대본으로 가는 길을 알립니다.', pause: 'section' },
    ],
    'clip-transcript': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 대본에는 무엇이 들어갈까요?',
        pause: 'think',
      },
      { text: '말과 소리에 화면 설명을 더합니다.', pause: 'short' },
      { text: '정리하면, 영상이 없어도 같은 내용을 읽을 수 있습니다.', pause: 'section' },
    ],
    'asset-record': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 이 클립은 써도 되는 자산일까요?',
        pause: 'think',
      },
      { text: '사용권이 확인된 도구로 만들어 재배포할 수 있습니다.', pause: 'short' },
      { text: '정리하면, 출처와 사용권을 기록합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 자동 재생 소리는 멈출 수 있어야 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 자막 트랙과 오류 경로를 확인합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 자산의 사용권을 기록합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 다른 소리를 덮어 버립니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 계속 바뀌는 화면은 어떻게 멈출까요?', pause: 'section' },
    ],
  },
};
