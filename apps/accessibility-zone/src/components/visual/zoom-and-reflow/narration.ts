import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 08.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '창을 줄여 봤다면 확대 검사도 끝난 걸까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 비슷해 보여도 같은 증거가 아니에요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 검사 방법을 나눠 기록할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 두 기준의 요구를 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 320과 1280의 관계를 확인해요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 세 검사를 구분합니다.', pause: 'section' },
    ],
    'resize-and-reflow-criteria': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 두 기준은 어떻게 다를까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '1.4.4는 텍스트 200%를, 1.4.10은 좁은 폭의 한 방향 스크롤을 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '1280을 400%로 확대하면 레이아웃 폭은 320이 됩니다.',
        pause: 'short',
      },
      { text: '정리하면, 예외는 2차원 배치가 필요한 부분까지만입니다.', pause: 'section' },
    ],
    'three-zoom-checks': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 무엇을 확인한 걸까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '패널 축소와 viewport 변경, 실제 확대는 말해 주는 범위가 다릅니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: 'CSS scale은 레이아웃 폭을 바꾸지 않아 확대의 증거가 아니에요.',
        pause: 'short',
      },
      { text: '정리하면, 쓴 방법을 그대로 기록합니다.', pause: 'section' },
    ],
    'reflow-practice': [
      { target: ':scope > h2', text: '자, 마지막 주제입니다. 어디서 깨질까요?', pause: 'think' },
      {
        text: '폭을 줄이고 의도한 결함을 켜 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 패널 결과는 원인을 찾는 재료입니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 1.4.4는 텍스트 200%를 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 1.4.10은 320 폭에서 한 방향 스크롤을 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 검사 방법마다 증거의 범위가 다릅니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 창을 줄인 결과는 실제 확대와 다릅니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 글자 간격을 바꿔도 내용이 남는지 봅니다.', pause: 'section' },
    ],
  },
};
