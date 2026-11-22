import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.9 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '안내문은 무엇을 먼저 말해야 할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '독자가 할 일을 먼저 말합니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 안내문을 과업 기준으로 고칠 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 안내문을 고쳐 비교합니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 언어 표시와 일관된 도움을 봐요.',
        pause: 'short',
      },
      { target: 'li:nth-child(3)', text: '마지막으로, 권고와 규범을 나눕니다.', pause: 'section' },
    ],
    'clear-notice': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 수정 전 안내에서 기한을 찾을 수 있나요?',
        pause: 'think',
      },
      { text: '찾을 수 없습니다. 기한 내라고만 합니다.', pause: 'short' },
      { text: '두 판을 읽고 세 질문에 답해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 같은 과업을 마칠 수 있는지로 비교합니다.', pause: 'section' },
    ],
    'language-and-help': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 다른 언어 구절에는 무엇을 줄까요?',
        pause: 'think',
      },
      { text: 'lang 속성을 줍니다. 화면 낭독기가 발음 규칙을 고르죠.', pause: 'short' },
      { text: '되풀이되는 도움 수단은 같은 순서에 둡니다.', pause: 'short' },
      { text: '정리하면, 둘 다 조건이 있는 규범입니다.', pause: 'section' },
    ],
    'coga-advice': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 쉬운 말은 규범일까요?',
        pause: 'think',
      },
      { text: '아닙니다. COGA의 권고입니다.', pause: 'short' },
      { text: '정리하면, 이해 여부는 사람의 과업 기록으로 확인합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 할 일과 기한, 장소를 드러냅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 언어와 도움 순서는 규범의 조건대로 맞춥니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 쉬운 말은 권고이고 점수로 판정하지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 할 일을 먼저 말합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 내려받은 문서도 같은 내용일까요?', pause: 'section' },
    ],
  },
};
