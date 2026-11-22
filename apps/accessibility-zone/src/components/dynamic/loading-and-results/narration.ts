import type { NarrationScript } from '@it-tech-blog/ui';

/** 10.4 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: 'Toast가 사라지면 결과도 사라질까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '사라지면 안 됩니다. 결과는 화면에 남아야 합니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 결과를 다시 확인하게 만들 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 상태 전이를 표로 정합니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 진행 표시를 정직하게 둬요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 남는 자리를 만듭니다.', pause: 'section' },
    ],
    'state-transitions': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 상태마다 무엇을 정할까요?',
        pause: 'think',
      },
      { text: '결과 영역과 알림, busy를 함께 정합니다.', pause: 'short' },
      { text: '정리하면, 끝난 요청의 응답은 아무것도 바꾸지 않습니다.', pause: 'section' },
    ],
    'progress-without-numbers': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 남은 시간을 모를 때는 어떻게 할까요?',
        pause: 'think',
      },
      { text: '값 없는 진행 표시를 씁니다.', pause: 'short' },
      { text: '정리하면, 숫자를 지어내지 않습니다.', pause: 'section' },
    ],
    'search-practice': [
      { target: ':scope > h2', text: '자, 직접 상태를 따라가 볼까요?', pause: 'short' },
      {
        text: '검색하고 결과와 오류로 응답해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 오류에는 다시 시도 버튼이 남습니다.', pause: 'section' },
    ],
    'toast-and-persistence': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. Toast에 버튼을 두면 어떨까요?',
        pause: 'think',
      },
      { text: '사라진 뒤에는 누를 수 없습니다.', pause: 'short' },
      { text: '정리하면, 같은 조작을 남는 자리에도 둡니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 상태마다 화면과 알림을 함께 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 빈 결과와 오류에도 복구 조작을 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, Toast에만 중요한 것을 두지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 결과는 화면에 남습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 늦게 온 응답이 화면을 덮으면 어떨까요?', pause: 'section' },
    ],
  },
};
