import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.9 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '저절로 넘어가는 안내는 누가 멈출까요?', pause: 'think' },
      { text: '사용자가 멈출 수 있어야 합니다.', pause: 'short' },
      { text: '이 페이지를 마치면, 넘겨 보는 안내를 안전하게 만들 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 보이는 안내와 위치를 알립니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 자동 넘김을 멈추는 규칙을 정해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 과업에 맞는 패턴만 조합합니다.',
        pause: 'section',
      },
    ],
    'carousel-structure': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 보이지 않는 안내는 어디에 둘까요?',
        pause: 'think',
      },
      { text: '읽기 경로와 키보드 순서에서 뺍니다.', pause: 'short' },
      {
        target: 'table',
        text: '계약 표에서 이전과 다음을 눌러도 초점은 그대로입니다.',
        pause: 'short',
      },
      { text: '정리하면, 조작 버튼을 안내보다 앞에 둡니다.', pause: 'section' },
    ],
    'rotation-rules': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 자동 넘김은 언제 돌까요?',
        pause: 'think',
      },
      { text: '사용자가 시작했을 때만 돕니다.', pause: 'short' },
      {
        target: 'table',
        text: '권고와 정책 표에서 초점이 들어오면 멈춘 채로 남습니다.',
        pause: 'short',
      },
      { text: '정리하면, 도는 동안에는 넘어갈 때마다 알리지 않습니다.', pause: 'section' },
    ],
    'carousel-practice': [
      { target: ':scope > h2', text: '자, 넘김을 시작하고 멈춰 볼까요?', pause: 'short' },
      { target: 'ol', text: '넘김을 시작한 뒤 다른 버튼으로 초점을 옮깁니다.', pause: 'short' },
      { text: '멈춘 채로 남는지 확인해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 다시 돌리려면 직접 시작해야 합니다.', pause: 'section' },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 배운 위젯을 모두 넣어야 할까요?',
        pause: 'think',
      },
      { text: '아닙니다. 과업의 부분마다 맞는 것 하나씩만 씁니다.', pause: 'short' },
      {
        target: 'table',
        text: '패턴 표는 고르기와 펼치기, 넘기기에 하나씩 짝짓습니다.',
        pause: 'short',
      },
      { text: '조합을 조작하고 기록해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 쓰지 않은 패턴의 이유도 기록합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 숨긴 안내는 키보드 순서에서 뺍니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 자동 넘김은 사용자가 시작하고 멈춥니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 과업에 맞는 패턴만 고릅니다.',
        pause: 'short',
      },
      { text: '처음 질문에 답하면, 사용자가 멈춥니다. 이 페이지는 여기까지예요.', pause: 'short' },
      { text: '이렇게 12장, 선택과 펼침과 탐색 컴포넌트가 끝났습니다.', pause: 'section' },
    ],
  },
};
