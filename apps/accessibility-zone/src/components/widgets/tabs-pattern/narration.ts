import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.3 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '탭에 초점이 가면 패널도 바뀔까요?', pause: 'think' },
      { text: '방식에 따라 다릅니다. 초점과 선택은 다른 것입니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 탭의 초점과 선택을 맞출 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 탭과 패널을 잇습니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 두 활성화 방식을 골라요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 처음과 끝을 키로 확인합니다.',
        pause: 'section',
      },
    ],
    'tab-parts': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 탭에서 무엇을 맞춰야 할까요?',
        pause: 'think',
      },
      { text: '선택된 탭과 보이는 패널입니다.', pause: 'short' },
      { target: 'table', text: '탭 예제 표는 화살표와 선택 키를 나눕니다.', pause: 'short' },
      { text: '정리하면, 탭 목록에는 한 번만 들어갑니다.', pause: 'section' },
    ],
    'manual-or-automatic': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 언제 자동으로 바꿀까요?',
        pause: 'think',
      },
      { text: '패널의 내용이 지연 없이 나타날 때입니다.', pause: 'short' },
      { target: 'table', text: '기대값 표에서 화살표 뒤에도 선택은 그대로입니다.', pause: 'short' },
      { text: '정리하면, 수동 활성화는 초점과 선택을 나눕니다.', pause: 'section' },
    ],
    'tabs-practice': [
      { target: ':scope > h2', text: '자, 두 방식을 직접 비교해 볼까요?', pause: 'short' },
      { target: 'ol', text: '화살표를 누르고 선택된 탭을 확인합니다.', pause: 'short' },
      { text: '두 탭 목록에서 되풀이해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 화면 기록은 낭독 결과가 아닙니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 선택과 패널을 한 값에서 만듭니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 화살표는 초점을 옮깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 자동 활성화는 지연이 없을 때만 씁니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 수동 활성화에서는 바뀌지 않습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지의 질문입니다. 지금 어느 페이지에 있는지 어떻게 알릴까요?',
        pause: 'section',
      },
    ],
  },
};
