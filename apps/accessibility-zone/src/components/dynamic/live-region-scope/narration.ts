import type { NarrationScript } from '@it-tech-blog/ui';

/** 10.3 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '영역의 어디까지 읽어야 할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '숫자만으로는 어느 회차인지 알 수 없습니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 갱신의 범위와 시점을 정할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 바뀐 부분과 전체를 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 알릴 변경의 종류를 골라요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 묶음 갱신을 다룹니다.', pause: 'section' },
    ],
    'atomic-and-relevant': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 제거된 항목도 알릴까요?',
        pause: 'think',
      },
      { text: '기본값에서는 알리지 않습니다.', pause: 'short' },
      { text: '정리하면, atomic은 범위를, relevant는 종류를 정합니다.', pause: 'section' },
    ],
    'busy-batches': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 묶음 갱신이 실패하면 busy는 어떻게 할까요?',
        pause: 'think',
      },
      { text: '실패와 취소에도 반드시 풉니다.', pause: 'short' },
      { text: '정리하면, 대기 알림은 busy 영역 밖에 둡니다.', pause: 'section' },
    ],
    'scope-practice': [
      { target: ':scope > h2', text: '자, 직접 관찰해 볼까요?', pause: 'short' },
      {
        text: '설정을 바꾸고 묶음 갱신을 끝내 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 모델 값은 실제 발화가 아닙니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, atomic은 넘길 범위를 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, relevant는 알릴 변경을 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, busy는 끝나면 반드시 풉니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 뜻이 통하는 만큼 읽힙니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. Toast가 사라지면 결과도 사라질까요?', pause: 'section' },
    ],
  },
};
