import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 08.7 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '도움말에 마우스를 옮기자 사라진다면 어떨까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '읽을 수 없으니 과업이 끊깁니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 추가 내용을 판정하고 고칠 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 세 가지 조건을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 여러 입력으로 확인해요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 한 화면을 판정합니다.', pause: 'section' },
    ],
    'hover-focus-criterion': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 어떤 조건이 필요할까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '닫을 수 있고, 내용 위로 옮길 수 있고, 스스로 사라지지 않아야 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '브라우저가 정한 title 툴팁은 예외예요.',
        pause: 'short',
      },
      { text: '정리하면, 세 조건을 따로 확인합니다.', pause: 'section' },
    ],
    'help-tip-practice': [
      { target: ':scope > h2', text: '자, 두 번째 주제입니다. 입력마다 어떨까요?', pause: 'think' },
      {
        text: '마우스와 Tab, 터치로 도움말을 열어 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 닫은 뒤에도 포커스는 그대로입니다.', pause: 'section' },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 이 화면은 어떤 조건에 걸릴까요?',
        pause: 'think',
      },
      {
        target: 'ol',
        text: '적용되는 조건을 고르고 환경과 증거, 판정을 적습니다.',
        pause: 'short',
      },
      {
        text: '결함을 켜고 끄며 값을 비교해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 수정 뒤에는 같은 방법으로 재검증합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 추가 내용은 세 조건을 지킵니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 닫은 뒤 포커스를 옮기거나 바로 다시 열지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 터치도 지원하고 판정은 증거와 함께 적습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 내용 위로 옮겨도 남아야 합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '이렇게 8장, 시각 표현과 반응형이 끝났습니다.', pause: 'short' },
      { text: '다음 9장은 묻습니다. 같은 아이콘에 늘 같은 alt를 붙여도 될까요?', pause: 'section' },
    ],
  },
};
