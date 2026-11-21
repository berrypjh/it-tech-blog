import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 07.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '키보드 지원을 더했는데 왜 입력이 망가질까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이미 브라우저가 맡던 키를 가로챘기 때문일 때가 많습니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 키의 주인을 나눠 처리할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 컨트롤이 가진 키 동작을 봅니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 키의 주인을 나누는 기준을 정해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 조합 입력과 수정 키를 지키는 법을 봅니다.',
        pause: 'section',
      },
    ],
    'key-owners': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 이 키는 누구의 것일까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '포커스 위치에 따라 주인이 다릅니다. 입력 칸의 방향키는 텍스트 입력의 것이에요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '직접 만든 위젯은 패턴이 정한 키만 맡습니다.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'WCAG는 키보드 조작을 요구하고, 어떤 키인지는 정하지 않습니다.',
        pause: 'short',
      },
      { text: '정리하면, 키 처리 전에 그 키의 주인부터 정합니다.', pause: 'section' },
    ],
    'key-handling-pitfalls': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 어떤 처리가 위험할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '버튼에 Enter 처리를 또 붙이면 한 번 눌러 두 번 실행될 수 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '키 처리는 문서 전체가 아니라 그 키를 맡은 요소에 답니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '조합 입력 중인 키와 수정 키 조합은 건드리지 않아요.',
        pause: 'short',
      },
      { text: '정리하면, 맡은 키의 기본 동작만 막습니다.', pause: 'section' },
    ],
    'key-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 같은 키를 비교해 볼까요?',
        pause: 'think',
      },
      {
        text: '과업을 해 본 뒤 의도한 결함을 켜고 다시 눌러 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 기록은 지금 실행한 환경의 결과로만 읽습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 네이티브 컨트롤의 키 동작은 그대로 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 위젯은 포커스가 있을 때 자기 키만 처리합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 조합 입력과 수정 키를 막지 않고 관찰은 환경과 함께 말합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 브라우저의 키를 가로채서 입력이 망가집니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 포커스가 눈에 보이는지 검사합니다.', pause: 'section' },
    ],
  },
};
