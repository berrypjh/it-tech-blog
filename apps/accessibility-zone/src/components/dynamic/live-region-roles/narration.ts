import type { NarrationScript } from '@it-tech-blog/ui';

/** 10.2 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '모든 메시지를 alert로 보내도 될까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 역할마다 뜻과 시점이 다릅니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 알림에 맞는 역할을 고를 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 세 역할의 뜻을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 알림이 나가는 시점을 봐요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 남용과 중복을 피합니다.', pause: 'section' },
    ],
    'live-roles': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. status와 alert는 무엇이 다를까요?',
        pause: 'think',
      },
      { text: 'status는 polite, alert는 assertive입니다.', pause: 'short' },
      { text: '정리하면, 암시적 값은 원문의 표에서 확인합니다.', pause: 'section' },
    ],
    'mounted-region': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 알림 영역은 언제 만들까요?',
        pause: 'think',
      },
      { text: '처음부터 만들어 두고 글자만 바꿉니다.', pause: 'short' },
      { text: '정리하면, 새로 삽입된 영역은 알리지 않는 경우가 많습니다.', pause: 'section' },
    ],
    'live-region-practice': [
      { target: ':scope > h2', text: '자, 세 영역을 직접 갱신해 볼까요?', pause: 'short' },
      { text: '버튼을 눌러 DOM 값을 비교해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, alert는 저장을 시도한 뒤에만 채워집니다.', pause: 'section' },
    ],
    'overuse-pitfalls': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 같은 문구를 두 영역에 넣으면 어떨까요?',
        pause: 'think',
      },
      { text: '같은 말을 두 번 듣게 됩니다.', pause: 'short' },
      { text: '정리하면, 알림은 status 하나가 맡습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 역할마다 암시적 값이 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 미리 마운트한 영역을 갱신합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, alert와 중복 방송을 아낍니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 급한 알림에만 alert를 씁니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 영역의 어디까지 읽어야 할까요?', pause: 'section' },
    ],
  },
};
