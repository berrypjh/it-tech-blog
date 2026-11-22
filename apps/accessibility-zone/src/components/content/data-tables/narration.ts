import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.5 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '표의 칸은 어떤 헤더와 이어질까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그 줄과 열의 헤더와 이어져야 뜻을 갖습니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 표의 관계를 마크업으로 만들 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 표의 제목과 헤더를 잇습니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 다층 헤더를 다룹니다.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 교차하는 칸을 찾아 검증해요.',
        pause: 'section',
      },
    ],
    'caption-th-scope': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 표의 이름은 무엇이 줄까요?',
        pause: 'think',
      },
      { text: 'caption이 이름을 주고, th가 헤더입니다.', pause: 'short' },
      { text: '보조기술은 표를 DOM 순서대로 읽어요.', pause: 'short' },
      { text: '정리하면, 순서는 마크업에서 정합니다.', pause: 'section' },
    ],
    'layered-headers': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 헤더가 두 층이면 어떻게 할까요?',
        pause: 'think',
      },
      { text: '먼저 단순화를 생각합니다.', pause: 'short' },
      { text: '지켜야 한다면 headers로 잇고, 그 연결을 검증해요.', pause: 'short' },
      { text: '정리하면, 읽기 전용 표를 grid로 바꾸지 않습니다.', pause: 'section' },
    ],
    'cross-cell-practice': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 일요일 B홀 3회차는 무엇일까요?',
        pause: 'think',
      },
      { text: '칸을 찾아 주제를 적어 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 모든 칸의 headers가 실제 th를 가리켜야 합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, caption과 th, scope가 기본입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 다층 헤더는 단순화하거나 headers로 잇습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 읽기 전용 표는 table 그대로 둡니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 칸은 그 줄과 열의 헤더와 이어집니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 자막이 있으면 대본은 필요 없을까요?', pause: 'section' },
    ],
  },
};
