import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 08.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '다크 테마를 지원하면 고대비도 해결된 걸까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 사용자가 고른 색이 페이지의 색을 대신할 수 있어요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 색이 바뀌어도 남는 상태를 만들 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 세 가지 색 환경을 나눕니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 상태를 실제 선으로 남겨요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 결과의 출처를 나눕니다.', pause: 'section' },
    ],
    'color-environments': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 누가 색을 정할까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: 'Forced Colors는 브라우저가 사용자의 색을 강제합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '이때 그림자는 사라지고 여러 색이 바뀝니다.',
        pause: 'short',
      },
      { text: '정리하면, 세 환경은 서로 다른 설정입니다.', pause: 'section' },
    ],
    'preserving-boundaries': [
      { target: ':scope > h2', text: '자, 두 번째 주제입니다. 무엇이 남을까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '실제 테두리와 체크 표시는 색이 바뀌어도 형태가 남습니다.',
        pause: 'short',
      },
      { text: '시스템 색 모형을 켜서 비교해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      {
        target: 'aside',
        text: 'forced-color-adjust none을 페이지 전체에 쓰지 않습니다.',
        pause: 'short',
      },
      { text: '정리하면, 상태를 배경과 그림자에만 맡기지 않습니다.', pause: 'section' },
    ],
    'emulation-and-real-results': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 무엇을 확인했다고 말할까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '모형과 에뮬레이션, 실제 운영체제 결과를 나눠 적습니다.',
        pause: 'short',
      },
      { text: '정리하면, 에뮬레이션은 실제 환경 확인이 아닙니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 세 가지 색 환경은 서로 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 상태는 실제 선과 글자로 남깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 에뮬레이션과 실제 결과를 나눕니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 다크 테마와 고대비는 다른 문제입니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 고정 영역이 입력을 가리는 문제를 봅니다.', pause: 'section' },
    ],
  },
};
