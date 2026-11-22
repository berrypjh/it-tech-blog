import type { NarrationScript } from '@it-tech-blog/ui';

/** 11.2 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '보내기를 눌렀는데 왜 아무 일도 없을까요?', pause: 'think' },
      { text: '무언가 제출을 멈췄기 때문입니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 누가 멈췄는지 가려낼 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 브라우저가 멈추는 방식을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 페이지가 직접 검증해요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 서버와 책임을 나눕니다.', pause: 'section' },
    ],
    'native-constraints': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 브라우저는 어떻게 멈출까요?',
        pause: 'think',
      },
      { text: '제약에 맞지 않는 칸을 찾고 제출을 멈춥니다.', pause: 'short' },
      { target: 'table', text: '두 방식의 차이 표에서 오류 글의 위치가 갈립니다.', pause: 'short' },
      { text: '정리하면, 브라우저의 오류 글은 페이지에 남지 않습니다.', pause: 'section' },
    ],
    'custom-validation': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 페이지가 맡으면 무엇을 지킬까요?',
        pause: 'think',
      },
      { text: '같은 오류를 두 번 알리지 않습니다.', pause: 'short' },
      { text: '그리고 다시 검사할 때 이전 오류를 지웁니다.', pause: 'short' },
      { text: '정리하면, 한 번만 알리고 매번 새로 씁니다.', pause: 'section' },
    ],
    'same-wrong-value': [
      { target: ':scope > h2', text: '자, 같은 값을 두 방식으로 보내 볼까요?', pause: 'short' },
      { text: '두 폼에서 보내기를 눌러 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 멈춘 이유는 관찰 값에서 읽습니다.', pause: 'section' },
    ],
    'client-is-not-the-boundary': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 브라우저에서 검사하면 충분할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 서버는 같은 규칙을 다시 확인합니다.', pause: 'short' },
      { text: '정리하면, 브라우저의 검증은 사용자를 돕는 일입니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 브라우저가 멈추면 제출 이벤트가 없습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 직접 검증하면 한 번만 알립니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 서버 검증은 따로 있습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 멈춘 주체부터 확인합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 오류가 여러 개면 어디로 가야 할까요?', pause: 'section' },
    ],
  },
};
