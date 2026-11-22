import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.1 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '네모 칸과 동그란 칸은 모양만 다를까요?', pause: 'think' },
      { text: '아닙니다. 고를 수 있는 개수와 되돌리는 방법이 다릅니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 과업에 맞는 컨트롤을 고를 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 네 컨트롤의 약속을 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 기본 요소와 그룹으로 만들어요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 키로 직접 비교합니다.', pause: 'section' },
    ],
    'four-state-contracts': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 무엇부터 물어야 할까요?',
        pause: 'think',
      },
      { text: '여러 개를 고르는지, 하나만 고르는지입니다.', pause: 'short' },
      {
        target: 'table',
        text: '네 컨트롤 표는 과업과 상태, 키와 선택 취소를 나눕니다.',
        pause: 'short',
      },
      { text: '정리하면, 이름은 두고 상태만 바꿉니다.', pause: 'section' },
    ],
    'native-first-markup': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 직접 만들어야 할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 두 가지는 이미 있습니다.', pause: 'short' },
      { text: '정리하면, 없는 것만 버튼에 상태를 붙여 만듭니다.', pause: 'section' },
    ],
    'settings-practice': [
      { target: ':scope > h2', text: '자, 같은 설정 화면에서 비교해 볼까요?', pause: 'short' },
      { target: 'ol', text: '결과를 먼저 예상하고 키보드로 조작합니다.', pause: 'short' },
      { text: '관찰 값과 견주어 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 고른 동그란 칸은 다시 눌러도 풀리지 않습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 과업에서 컨트롤을 고릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 기본 요소와 그룹을 먼저 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 이름은 상태에 따라 바꾸지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 모양이 아니라 약속이 다릅니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 접힌 내용은 어디에 있을까요?', pause: 'section' },
    ],
  },
};
