import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 08.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '빨간 항목을 고르라는 안내는 누구나 따를 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 색을 구별하기 어렵거나 배치가 바뀌면 따라 할 수 없어요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 감각에 기댄 안내를 고칠 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 두 기준의 범위를 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 안내를 이름과 텍스트로 고쳐요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 상태 전달을 보완합니다.', pause: 'section' },
    ],
    'color-and-sensory-criteria': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 두 기준은 무엇을 볼까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '1.4.1은 색이 유일한 시각 수단이 되지 않기를 요구합니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '1.3.3은 안내가 위치나 소리 같은 감각 특성에만 기대지 않기를 요구해요.',
        pause: 'short',
      },
      { text: '정리하면, 색과 위치에 이름과 텍스트를 함께 둡니다.', pause: 'section' },
    ],
    'sensory-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 같은 과업이 어떻게 달라질까요?',
        pause: 'think',
      },
      {
        text: '결함을 켜고 흑백 보기로 다시 해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 안내는 보는 방식이 달라도 따라 할 수 있어야 합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 색만으로 정보를 전하지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 안내는 감각 특성에만 기대지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 상태는 글자와 코드의 관계로도 전합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 이름을 함께 써야 누구나 따를 수 있습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 확대와 Reflow를 나눠 검사합니다.', pause: 'section' },
    ],
  },
};
