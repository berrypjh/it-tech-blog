import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 08.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '모든 아이콘과 테두리에 같은 대비 수치를 적용해야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 무엇을 어떤 색과 비교할지부터 정합니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 대비 기준의 적용 대상을 판단할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 두 기준의 대상을 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 두 색을 계산해요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 계산의 한계와 예외를 봅니다.',
        pause: 'section',
      },
    ],
    'contrast-targets': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 어떤 기준이 적용될까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '글자는 4.5 대 1, 큰 글자는 3 대 1이 기준입니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '글자 아닌 정보는 식별에 필요한 부분과 맞닿은 색을 비교해요.',
        pause: 'short',
      },
      { text: '정리하면, 수치보다 비교 대상을 먼저 찾습니다.', pause: 'section' },
    ],
    'contrast-calculation': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 4.50으로 보이면 통과일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '판정은 반올림 전 값으로 합니다.',
        pause: 'short',
      },
      { text: '기준 경계 예시를 눌러 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 표시값으로 합격을 정하지 않습니다.', pause: 'section' },
    ],
    'contrast-limits': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 두 색이면 항상 충분할까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '투명도와 그라디언트, 이미지 위 글자는 실제 화면에서 확인합니다.',
        pause: 'short',
      },
      { target: 'aside', text: '예외는 원문이 정한 범위까지만 씁니다.', pause: 'short' },
      { text: '정리하면, 계산값이 실제 화면을 대신하지 않습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 글자와 글자 아닌 정보는 기준이 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 식별에 필요한 부분과 인접 색을 찾습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 계산은 불투명한 두 색에만 씁니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 필요한 부분에만 기준을 적용합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 색이나 위치만으로 전하는 정보를 고칩니다.', pause: 'section' },
    ],
  },
};
