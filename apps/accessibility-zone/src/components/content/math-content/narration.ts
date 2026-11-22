import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.4 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '분수의 구조는 어떻게 전할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '모양이 아니라 마크업으로 전합니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 수식의 대안을 검증할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 분자와 분모의 구조를 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 문장 대안을 씁니다.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 출력마다 따로 확인합니다.',
        pause: 'section',
      },
    ],
    'fraction-structure': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 관계는 어디에 있을까요?',
        pause: 'think',
      },
      { text: 'mfrac의 첫째 자식이 분자, 둘째 자식이 분모입니다.', pause: 'short' },
      {
        target: '#fraction-sentence',
        text: 'a와 b를 먼저 더한 뒤 n으로 나눈다고 문장으로도 씁니다.',
        pause: 'short',
      },
      { text: '정리하면, 괄호 없는 일렬 글자는 뜻이 바뀔 수 있습니다.', pause: 'section' },
    ],
    'math-paths': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 세 표기는 DOM에서 어떻게 다를까요?',
        pause: 'think',
      },
      {
        text: '표기를 바꾸며 읽은 값을 비교해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, MathML만 분자와 분모를 나눠 줍니다.', pause: 'section' },
    ],
    'screen-and-at-output': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 화면에 보이면 다 된 걸까요?',
        pause: 'think',
      },
      { text: '아닙니다. 낭독과 탐색, 점자는 따로 확인합니다.', pause: 'short' },
      { text: '정리하면, 실제 보조기술로 하지 않은 것은 미확인입니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 관계는 mfrac의 구조에 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, MathML 옆에 문장 대안을 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 출력마다 따로 확인합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 구조는 마크업으로 전합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 표의 칸은 어떤 헤더와 이어질까요?', pause: 'section' },
    ],
  },
};
