import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.3 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: 'SVG 도형은 저절로 이름을 가질까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 이름과 키보드 동작은 작성자가 줍니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 그림에 HTML 경로를 더할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 스스로 생기지 않는 것을 봅니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, SVG 차트를 그림 하나로 만들어요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, Canvas 기능을 버튼으로 제공합니다.',
        pause: 'section',
      },
    ],
    'no-automatic-semantics': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. Canvas 안에는 무엇이 남을까요?',
        pause: 'think',
      },
      { text: '픽셀만 남습니다. DOM에 도형이 없어요.', pause: 'short' },
      { target: 'table', text: '대상마다 작성자가 줄 것을 정리한 표입니다.', pause: 'short' },
      { text: '정리하면, 이름과 조작은 작성자가 만듭니다.', pause: 'section' },
    ],
    'svg-as-image': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 막대마다 이름을 줘야 할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 그림 하나로 두고 값은 표에 둡니다.', pause: 'short' },
      { text: '정리하면, 같은 정보를 두 번 듣지 않게 합니다.', pause: 'section' },
    ],
    'canvas-equivalent-path': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 키보드로 좌석을 고를 수 있을까요?',
        pause: 'think',
      },
      {
        text: '마우스와 Tab으로 같은 좌석을 골라 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, HTML 버튼이 있으면 Canvas는 숨깁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 도형과 픽셀은 스스로 이름이 없습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, Canvas 조작은 HTML 컨트롤로 제공합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 같은 기능을 두 번 노출하지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 이름은 작성자가 줍니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 분수의 구조는 어떻게 전할까요?', pause: 'section' },
    ],
  },
};
