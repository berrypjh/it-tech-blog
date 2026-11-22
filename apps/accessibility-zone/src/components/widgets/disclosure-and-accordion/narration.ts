import type { NarrationScript } from '@it-tech-blog/ui';

/** 12.2 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '접힌 내용은 어디에 있을까요?', pause: 'think' },
      { text: '화면에서도, 키보드 경로에서도 빠져 있어야 합니다.', pause: 'short' },
      {
        text: '이 페이지를 마치면, 펼치는 컴포넌트를 기본 요소부터 만들 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 두 가지 만드는 방식을 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 열림 규칙을 상태에 맞춰요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 닫을 때의 초점을 정합니다.',
        pause: 'section',
      },
    ],
    'details-or-button': [
      { target: ':scope > h2', text: '자, 첫 번째 주제입니다. 무엇으로 만들까요?', pause: 'think' },
      { text: '설명 하나라면 기본 요소로 충분합니다.', pause: 'short' },
      { target: 'table', text: '두 방식 표에서 제목 탐색이 갈립니다.', pause: 'short' },
      { text: '정리하면, 제목이 여럿이면 제목 안에 버튼을 둡니다.', pause: 'section' },
    ],
    'accordion-rules': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 여러 개가 모이면 무엇을 정할까요?',
        pause: 'think',
      },
      { text: '몇 개까지 열리는지와 초점의 위치입니다.', pause: 'short' },
      { text: '정리하면, 안에서 닫으면 초점은 제목 버튼으로 돌아갑니다.', pause: 'section' },
    ],
    'accordion-practice': [
      { target: ':scope > h2', text: '자, 두 규칙을 직접 비교해 볼까요?', pause: 'short' },
      { target: 'ol', text: '결과를 먼저 예상하고 키보드로 열고 닫습니다.', pause: 'short' },
      { text: '닫힌 패널에 닿는지 확인해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 닫힌 패널의 버튼은 키보드 경로에 없습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 짧은 설명은 기본 요소로 만듭니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 상태와 패널을 언제나 맞춥니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 닫을 때 초점을 잃지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 접힌 내용은 경로에서 빠집니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지의 질문입니다. 탭에 초점이 가면 패널도 바뀔까요?', pause: 'section' },
    ],
  },
};
