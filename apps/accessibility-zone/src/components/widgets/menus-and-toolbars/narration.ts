import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.5 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '사이트 메뉴도 메뉴 역할일까요?', pause: 'think' },
      { text: '아닙니다. 페이지로 가는 링크 묶음은 탐색 영역입니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 메뉴와 도구 모음의 키를 구분할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 링크 묶음과 명령 묶음을 나눕니다.',
        pause: 'short',
      },
      { target: 'li:nth-child(2)', text: '그다음, 메뉴 버튼의 초점을 따라가요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 도구 모음에 들어가고 나옵니다.',
        pause: 'section',
      },
    ],
    'links-or-commands': [
      { target: ':scope > h2', text: '자, 첫 번째 주제입니다. 무엇으로 묶을까요?', pause: 'think' },
      { text: '이동이면 링크 목록이고 명령이면 메뉴입니다.', pause: 'short' },
      { target: 'table', text: '네 묶음 표에서 안에서 옮기는 키가 서로 다릅니다.', pause: 'short' },
      { text: '정리하면, 모든 위젯에 같은 화살표 규칙을 쓰지 않습니다.', pause: 'section' },
    ],
    'menu-button-contract': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 메뉴가 닫히면 초점은 어디로 갈까요?',
        pause: 'think',
      },
      { text: '메뉴를 연 버튼으로 돌아갑니다.', pause: 'short' },
      {
        target: 'table',
        text: '메뉴 버튼 표는 열기와 이동, 실행과 취소를 나눕니다.',
        pause: 'short',
      },
      { text: '직접 열고 닫아 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 취소는 아무것도 실행하지 않습니다.', pause: 'section' },
    ],
    'toolbar-contract': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 도구 모음에는 몇 번 멈출까요?',
        pause: 'think',
      },
      { text: '한 번입니다. 안에서는 화살표로 옮깁니다.', pause: 'short' },
      { text: '메모 칸에서도 화살표를 눌러 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 편집 키는 도구 모음이 건드리지 않습니다.', pause: 'section' },
    ],
    'menubar-keys': [
      {
        target: ':scope > h2',
        text: '자, 네 번째 주제입니다. 메뉴바는 무엇이 다를까요?',
        pause: 'think',
      },
      { text: '화살표가 가로와 세로 두 축으로 움직입니다.', pause: 'short' },
      { text: '정리하면, 꼭 필요한 경우에만 씁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 링크 묶음은 탐색 영역으로 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 메뉴는 닫히면 버튼으로 돌아옵니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 도구 모음은 한 번만 멈춥니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 사이트 메뉴는 메뉴 역할이 아닙니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지의 질문입니다. 손잡이를 끌 수 없으면 값을 어떻게 맞출까요?',
        pause: 'section',
      },
    ],
  },
};
