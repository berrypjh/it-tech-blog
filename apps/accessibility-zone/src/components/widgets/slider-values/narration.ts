import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.6 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '손잡이를 끌 수 없으면 값을 어떻게 맞출까요?', pause: 'think' },
      { text: '끌지 않고도 같은 값에 닿는 길이 있어야 합니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 값 조절에 세 가지 길을 둘 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 이름과 범위와 현재 값을 보여 줍니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 키보드와 누르기를 나눠 제공해요.',
        pause: 'short',
      },
      { target: 'li:nth-child(3)', text: '마지막으로, 양 끝 값에서 확인합니다.', pause: 'section' },
    ],
    'slider-parts': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 손잡이만 보면 값을 알 수 있을까요?',
        pause: 'think',
      },
      { text: '정확히는 알 수 없습니다. 글자로 함께 보여 줍니다.', pause: 'short' },
      { target: 'table', text: '계약 표는 범위와 키, 경계에서의 동작을 적습니다.', pause: 'short' },
      { text: '정리하면, 기본 요소에 이름과 값의 글자를 더합니다.', pause: 'section' },
    ],
    'without-dragging': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 키보드가 되면 충분할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 누르기만 하는 사용자에게는 키보드가 없습니다.', pause: 'short' },
      {
        target: 'table',
        text: '세 가지 길 표에서 버튼이 누르기만으로 가는 길입니다.',
        pause: 'short',
      },
      { text: '정리하면, 터치 보조기술에서는 직접 확인합니다.', pause: 'section' },
    ],
    'slider-practice': [
      { target: ':scope > h2', text: '자, 세 가지 길로 같은 값에 닿아 볼까요?', pause: 'short' },
      { target: 'ol', text: '화살표와 버튼으로 값을 바꾸고 끝까지 가 봅니다.', pause: 'short' },
      { text: '값과 화면의 글자를 견주어 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 끝에서는 값이 그대로여야 합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 현재 값을 글자로 보여 줍니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 끌지 않는 길을 함께 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 양 끝에서 값과 화면을 맞춥니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 버튼과 키보드로 맞춥니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지의 질문입니다. 숫자를 치는 도중에 값을 고쳐도 될까요?',
        pause: 'section',
      },
    ],
  },
};
