import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.8 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '두 영역의 경계는 무엇으로 옮길까요?', pause: 'think' },
      { text: '끌기만 있으면 끌 수 없는 사용자는 옮기지 못합니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 경계를 키보드와 버튼으로 옮길 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 경계에 이름과 값을 줍니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 조작과 실제 크기를 대조해요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 양 끝과 좁은 화면에서 확인합니다.',
        pause: 'section',
      },
    ],
    'separator-as-widget': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 경계선도 위젯이 될까요?',
        pause: 'think',
      },
      { text: '초점을 받으면 값을 가진 위젯이 됩니다.', pause: 'short' },
      { target: 'table', text: '계약 표에서 값은 주 영역이 차지하는 크기입니다.', pause: 'short' },
      { text: '정리하면, 접으면 값은 영이고 다시 누르면 복원됩니다.', pause: 'section' },
    ],
    'what-we-verified': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 이 패턴은 다 검토된 것일까요?',
        pause: 'think',
      },
      { text: '아닙니다. 기능 예제가 아직 없습니다.', pause: 'short' },
      {
        target: 'table',
        text: '범위 표는 따른 것과 정한 것, 확인하지 않은 것을 나눕니다.',
        pause: 'short',
      },
      { text: '정리하면, 끌기 말고도 길이 있어야 합니다.', pause: 'section' },
    ],
    'splitter-practice': [
      { target: ':scope > h2', text: '자, 같은 크기를 두 방법으로 만들어 볼까요?', pause: 'short' },
      { target: 'ol', text: '화살표로 넓히고 버튼으로 다시 줄입니다.', pause: 'short' },
      { text: '값과 측정한 너비를 견주어 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 어느 길로 가도 같은 값에 닿습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 경계에 이름과 현재 값을 줍니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 값과 실제 크기를 맞춥니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 누르기만 하는 버튼을 함께 둡니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 방향키와 버튼으로도 옮깁니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 저절로 넘어가는 안내는 누가 멈출까요?', pause: 'section' },
    ],
  },
};
