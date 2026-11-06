import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 03.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 키 조합 표는 다 읽지 않고, 과업의 흐름과 기대하는 뜻만 말한다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '화면 낭독기를 처음 켜면, 무엇부터 해 볼까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '제목과 랜드마크, 링크로 이동하고, 입력란과 체크박스를 조작해 봅니다. Windows라면 NVDA, macOS라면 VoiceOver 가운데 하나를 고르면 돼요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 한 예제로 문서 탐색과 폼 조작을 해 보고 그 결과를 기대하는 뜻으로 기록할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 화면 낭독기를 켜고 끄는 법을 익힙니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 같은 예제에서 문서를 탐색하고 입력란과 체크박스를 조작해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 정확한 발화가 아니라 기대하는 뜻으로 결과를 적습니다.',
        pause: 'section',
      },
    ],
    'choose-a-path': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째로 경로를 고릅니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'Windows는 NVDA, macOS는 VoiceOver입니다. 둘 다 없으면 설명과 기록 예시로 배우고, 실제 수행은 미실행으로 남겨요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '키 조합과 읽어 주는 말은 버전과 설정에 따라 다를 수 있습니다. 다르면 쓰는 버전의 공식 안내서를 따라요.',
        pause: 'short',
      },
      {
        text: '정리하면, 할 수 있는 경로 하나를 고릅니다.',
        pause: 'section',
      },
    ],
    'practice-sample': [
      {
        target: ':scope > h2',
        text: '그럼 실습 예제를 볼게요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '예제에는 배송 메모라는 이름의 영역과 제목, 입력란과 체크박스, 링크가 하나씩 있습니다. 두 경로 모두 이 예제 하나로 같은 일곱 과업을 해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 같은 예제에서 같은 과업을 합니다.',
        pause: 'section',
      },
    ],
    'path-nvda': [
      {
        target: ':scope > h2',
        text: '자, NVDA 경로입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'NVDA는 NV Access의 공식 사이트에서 받습니다. 말을 바로 멈추려면 컨트롤 키를 눌러요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '탐색 모드에서는 글자 키 하나로 다음 제목이나 링크로 갑니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '입력란에서는 포커스 모드로 들어가 글자를 쓰고, 다시 탐색 모드로 돌아옵니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(6)',
        text: '체크박스는 스페이스로 바꾸고, 바뀐 상태를 다시 들어요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 표를 보며 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, NVDA에서는 탐색 모드로 훑고 포커스 모드로 입력합니다.',
        pause: 'section',
      },
    ],
    'path-voiceover': [
      {
        target: ':scope > h2',
        text: '자, VoiceOver 경로입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'VoiceOver는 macOS에 들어 있습니다. 로터에 보이는 목록은 페이지와 VoiceOver 유틸리티 설정에 따라 달라요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '제목과 링크는 로터에서 목록을 골라 이동합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(6)',
        text: '체크박스는 VoiceOver 커서를 옮긴 뒤 기본 동작으로 바꾸고, 바뀐 상태를 다시 들어요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 표를 보며 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, VoiceOver에서는 로터와 VoiceOver 커서로 이동합니다.',
        pause: 'section',
      },
    ],
    'expected-meaning': [
      {
        target: ':scope > h2',
        text: '그럼 결과는 무엇과 견줄까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '정확한 낱말이 아니라 기대하는 뜻과 견줍니다. 같은 뜻이 다른 말로 전해지면 기대에 맞는 것으로 봐요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '예를 들어 제목에 가면, 제목이고 수준이 3이며 이름이 예제 배송 메모라는 뜻이 전해져야 합니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '이 페이지는 화면 낭독기가 무엇을 읽었는지 알 수 없어서, 맞고 틀림을 판정하지 않습니다. 들은 것과 사용한 환경을 직접 적어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 결과는 기대하는 뜻으로 견주고 직접 기록합니다.',
        pause: 'section',
      },
    ],
    'without-at': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 화면 낭독기가 없으면 어떻게 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '키 표와 기대하는 뜻을 읽어 흐름을 익힙니다. 해 보지 않은 과업은 결과 칸을 비우지 않고 미실행이라고 적어요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 체크박스 과업을 미실행으로 남긴 기록의 예입니다. 미확인 사항에는 실제로 어떻게 읽히는지가 남아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 하지 않은 것은 미실행으로 남깁니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, Windows는 NVDA, macOS는 VoiceOver 가운데 할 수 있는 경로 하나를 고릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 같은 예제에서 켜기부터 끄기까지 일곱 과업을 하고, 키와 발화는 환경마다 다를 수 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 결과는 기대하는 뜻으로 견주고, 해 보지 않은 과업은 미실행으로 적습니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 화면 낭독기를 처음 켜면, 무엇부터 해 볼까요?',
        pause: 'think',
      },
      {
        text: '제목으로 문서를 훑고, 입력란과 체크박스를 조작해 보는 것부터 시작합니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '개발자 도구에서 체크됨으로 보이면, 화면 낭독기도 체크됨이라고 읽었다고 말할 수 있을까요?',
        pause: 'section',
      },
    ],
  },
};
