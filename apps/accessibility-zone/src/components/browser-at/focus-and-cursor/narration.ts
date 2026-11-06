import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 03.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 키 조합은 표에 두고, 대본은 모드가 무엇을 바꾸는지만 말한다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '화면 낭독기가 지금 읽는 곳과 키보드 포커스는 같은 곳일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '다를 수 있습니다. 화면 낭독기 사용자가 지금 여기라고 말할 때, 그 위치는 키보드 포커스가 아닐 수 있어요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 포커스와 읽기 위치, 입력 모드를 나눠 부르고 같은 문서에서 차이를 확인할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 지금 위치를 이루는 세 가지를 나눠 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 같은 문서에서 제목 탐색과 Tab 이동을 비교해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, NVDA와 VoiceOver의 모드를 따로 익힙니다.',
        pause: 'section',
      },
    ],
    'focus-cursor-mode': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 화면 낭독기를 쓸 때 지금 위치는 몇 가지일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '적어도 세 가지를 따로 생각합니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림처럼 키보드 포커스는 버튼에 있는데, 화면 낭독기는 제목을 읽고 있을 수 있어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'DOM 포커스는 키 입력을 받는 요소이고, Tab이나 클릭이 옮깁니다.',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '읽기 위치는 화면 낭독기가 지금 가리키는 곳이고, 포커스를 받지 않는 제목에도 갈 수 있어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '입력 모드는 누른 키를 화면 낭독기가 쓸지, 컨트롤로 넘길지를 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '읽기 위치가 포커스를 받을 수 있는 요소에 닿으면, 설정에 따라 포커스가 함께 옮겨지기도 합니다. 그래서 항상 다르지도, 항상 같지도 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 포커스와 읽기 위치, 입력 모드를 나눠 부릅니다.',
        pause: 'section',
      },
    ],
    'headings-vs-tab': [
      {
        target: ':scope > h2',
        text: '자, 그럼 같은 문서에서 두 이동을 비교해 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'Tab은 조작할 수 있는 요소 사이를 오가고, 제목 탐색은 문서의 짜임을 훑습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '예상은 이렇습니다. Tab은 버튼과 우편번호 칸, 체크박스에서 멈추고, 두 제목에서는 멈추지 않아요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '실습에서는 예제로 Tab을 눌러 들어가며, 지금 DOM 포커스 칸이 어떻게 바뀌는지 봅니다. 이 칸은 DOM 포커스이지, 화면 낭독기의 읽기 위치가 아니에요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > ol',
        text: '화면 낭독기가 있다면, 제목으로 이동한 뒤 지금 DOM 포커스 칸이 바뀌는지 보고, 같은 자리에서 Tab을 눌러 봅니다.',
        pause: 'long',
      },
      {
        target: 'aside',
        text: '제목은 포커스를 받지 않으니, 제목으로 읽기 위치를 옮겨도 DOM 포커스는 보통 그대로입니다. 그다음 Tab이 어디로 가는지는 환경마다 다르니, 관찰한 환경과 함께 기록해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 제목 탐색과 Tab 이동은 목적이 다릅니다.',
        pause: 'section',
      },
    ],
    'nvda-modes': [
      {
        target: ':scope > h2',
        text: 'NVDA는 웹 페이지를 어떻게 읽을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '탐색 모드로 읽습니다. 이때 누른 글자 키는 NVDA의 명령이 돼요. 포커스 모드에서는 거의 모든 키가 컨트롤로 넘어가, 글자를 입력할 수 있습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '포커스 모드가 필요한 컨트롤로 Tab 이동하거나 클릭하면, 기본 설정에서는 자동으로 포커스 모드로 바뀝니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '기본값과 자동 전환은 버전과 설정에 따라 다를 수 있어요.',
        pause: 'short',
      },
      {
        text: '정리하면, NVDA는 탐색 모드와 포커스 모드를 오갑니다.',
        pause: 'section',
      },
    ],
    'voiceover-interaction': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. VoiceOver도 같은 모드를 쓸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'VoiceOver는 읽는 위치를 VoiceOver 커서로 나타내고, 명령은 VO 키와 함께 누릅니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 Apple의 사용 설명서가 안내하는 이동과 상호작용 명령입니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: 'VoiceOver의 상호작용은 NVDA의 포커스 모드와 같은 모드가 아닙니다. 그래서 두 화면 낭독기의 키와 모드는 각자의 공식 안내서로 따로 익혀요.',
        pause: 'short',
      },
      {
        text: '정리하면, NVDA와 VoiceOver를 같은 모드나 같은 키로 설명하지 않습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, DOM 포커스와 읽기 위치, 입력 모드는 서로 다른 것입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, Tab과 제목 탐색은 목적이 다르고, 제목으로 옮겨도 DOM 포커스는 보통 그대로입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, NVDA와 VoiceOver의 모드는 따로 익히고, activeElement를 읽기 위치로 여기지 않습니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 화면 낭독기가 지금 읽는 곳과 키보드 포커스는 같은 곳일까요?',
        pause: 'think',
      },
      {
        text: '같을 때도 있고 다를 때도 있습니다. 그래서 둘을 나눠서 관찰해요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '화면 낭독기를 처음 켜면, 무엇부터 해 볼까요?',
        pause: 'section',
      },
    ],
  },
};
