import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.1 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '같은 아이콘에 늘 같은 alt를 붙여도 될까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 자리마다 하는 일이 다릅니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 자리에 맞는 alt를 정할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 그림을 목적으로 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 빈 alt와 alt 생략을 구분해요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 중복 낭독을 피합니다.', pause: 'section' },
    ],
    'image-purpose': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 그림이 없으면 무엇을 놓칠까요?',
        pause: 'think',
      },
      { text: '그 답이 대체 텍스트입니다.', pause: 'short' },
      { target: 'table', text: '입구 아이콘 하나를 네 자리에 둔 표예요.', pause: 'short' },
      { text: '문장 앞에서는 비우고, 아이콘만 있으면 정보를 적습니다.', pause: 'short' },
      { text: '정리하면, 결정은 파일이 아니라 자리에 붙습니다.', pause: 'section' },
    ],
    'empty-or-missing-alt': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. alt를 빼면 장식일까요?',
        pause: 'think',
      },
      { text: '아닙니다. 빈 alt는 건너뛰라는 결정입니다.', pause: 'short' },
      { text: 'alt를 빼면 이름 없는 그림으로 남아요.', pause: 'short' },
      { text: '정리하면, 장식은 빈 alt로 밝힙니다.', pause: 'section' },
    ],
    'alt-practice': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 네 자리에 직접 alt를 골라 볼까요?',
        pause: 'think',
      },
      {
        text: '고른 값이 실제 img 속성에 들어갑니다. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 링크 글자가 있으면 그림은 비웁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 대체 텍스트는 그림이 하는 일을 대신합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, alt 생략은 장식 처리가 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 링크 글자와 같은 말은 넣지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 자리마다 alt가 다릅니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 차트의 정보는 어떻게 글로 전할까요?', pause: 'section' },
    ],
  },
};
