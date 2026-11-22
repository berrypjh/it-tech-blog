import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.7 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '숫자를 치는 도중에 값을 고쳐도 될까요?', pause: 'think' },
      { text: '안 됩니다. 사용자가 숫자를 끝내 완성하지 못합니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 숫자 칸의 입력과 증감을 맞출 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 치는 도중의 값과 확정한 값을 나눕니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 틀린 값의 종류를 구분해 알려요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 칸과 증감 버튼을 맞춥니다.',
        pause: 'section',
      },
    ],
    'while-editing': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 언제 검사해야 할까요?',
        pause: 'think',
      },
      { text: '칸을 떠날 때입니다. 치는 동안에는 기다립니다.', pause: 'short' },
      { target: 'table', text: '처리 표에서 치는 도중에는 모두 그대로 둡니다.', pause: 'short' },
      { text: '정리하면, 틀린 글자를 조용히 바꾸지 않습니다.', pause: 'section' },
    ],
    'number-and-buttons': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 증감 버튼은 왜 따로 둘까요?',
        pause: 'think',
      },
      { text: '누르기 쉽고 이름이 있는 버튼이 필요하기 때문입니다.', pause: 'short' },
      {
        target: 'table',
        text: '계약 표에서 처음과 끝으로 가는 키는 편집 키로 남습니다.',
        pause: 'short',
      },
      { text: '정리하면, 범위와 단계의 규칙은 한 곳에만 둡니다.', pause: 'section' },
    ],
    'spinbutton-practice': [
      { target: ':scope > h2', text: '자, 빈 값에서 복구해 볼까요?', pause: 'short' },
      { target: 'ol', text: '칸을 비우고 떠난 뒤 다시 값을 넣습니다.', pause: 'short' },
      { text: '버튼으로도 복구해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 끝 값에서는 더 눌러도 그대로입니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 치는 동안에는 보정하지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 틀린 종류를 나눠 알립니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 이름을 가진 증감 버튼을 둡니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 치는 도중에는 고치지 않습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 두 영역의 경계는 무엇으로 옮길까요?', pause: 'section' },
    ],
  },
};
