import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 07.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '포커스 링이 있으면 검사는 끝난 걸까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 표시의 존재와 대비, 면적과 가림은 서로 다른 조건이에요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 네 조건을 나눠 검사할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 기준의 이름과 요건을 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 표시의 대비를 값으로 봐요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 고정 영역의 가림을 확인합니다.',
        pause: 'section',
      },
    ],
    'focus-criteria': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 기준은 각각 무엇을 물을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '2.4.7은 표시가 보이는지를 묻습니다. 2.4.11과 2.4.12는 가림을 물어요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '일부만 가려지면 2.4.11의 실패 조건은 아니지만 2.4.12에는 실패합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '1.4.11은 인접 색과, 2.4.13은 포커스 전후의 같은 픽셀과 비교합니다.',
        pause: 'short',
      },
      { text: '정리하면, 하나의 통과가 다른 기준의 통과는 아닙니다.', pause: 'section' },
    ],
    'focus-indicator-check': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 표시가 정말 잘 보일까요?',
        pause: 'think',
      },
      {
        text: 'Tab으로 두 버튼을 지나며 눈으로 먼저 찾아보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 계산값은 눈으로 본 결과와 함께 판단합니다.', pause: 'section' },
    ],
    'focus-obscured-check': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 고정 영역이 포커스를 가릴까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '브라우저가 스크롤해도 요소가 고정 영역 뒤에 멈출 수 있습니다.',
        pause: 'short',
      },
      {
        text: '높이를 바꾸며 Tab으로 내려가 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: ':scope > p:last-of-type',
        text: 'scroll-padding은 스크롤이 멈추는 위치를 고정 영역 밖으로 띄웁니다.',
        pause: 'short',
      },
      { text: '정리하면, 가림은 실제 Tab 이동으로 확인합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 2.4.7은 표시의 존재를 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 가림은 완전히 가려지는지와 일부라도 가려지는지가 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 대비는 기준마다 비교 대상이 다릅니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 링이 있어도 검사할 조건이 더 남습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 항목이 사라진 뒤 포커스를 어디에 둘지 정합니다.',
        pause: 'section',
      },
    ],
  },
};
