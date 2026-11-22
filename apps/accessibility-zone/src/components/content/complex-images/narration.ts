import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.2 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '차트의 정보는 어떻게 글로 전할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '한 줄 alt로는 값을 다 담을 수 없습니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 차트와 지도의 대안을 만들 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 짧은 이름과 긴 설명을 나눕니다.', pause: 'short' },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 세 경로에서 같은 정보를 찾아요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 지도를 경로 글로 바꿉니다.',
        pause: 'section',
      },
    ],
    'chart-alternatives': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 차트는 무엇으로 대신할까요?',
        pause: 'think',
      },
      { text: '짧은 이름과 긴 설명으로 대신합니다.', pause: 'short' },
      {
        target: '#seats-summary',
        text: '요약은 13시에 38석으로 가장 많다고 말해요.',
        pause: 'short',
      },
      { target: 'table', text: '표는 시각마다 남은 좌석을 줍니다.', pause: 'short' },
      { text: '정리하면, 이름은 짧게 두고 값은 요약과 표에 둡니다.', pause: 'section' },
    ],
    'find-in-three-paths': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 어디서 정확히 찾을 수 있을까요?',
        pause: 'think',
      },
      {
        text: '차트와 요약, 표를 하나씩 보고 표시해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 차트만으로는 정확한 값을 얻기 어렵습니다.', pause: 'section' },
    ],
    'route-description': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 지도는 무엇을 글로 적을까요?',
        pause: 'think',
      },
      { text: '과업이 경로라면 출발과 회전, 도착을 적습니다.', pause: 'short' },
      { target: 'ol', text: '약국 앞에서 왼쪽으로 돌고, 닫힌 정문은 피해요.', pause: 'short' },
      { text: '정리하면, 목적지 한 줄로는 길을 찾을 수 없습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 짧은 이름과 긴 설명으로 나눕니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 같은 과업을 요약과 표로도 마치게 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 지도는 경로를 글로 적습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 요약과 데이터 표로 전합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. SVG 도형은 저절로 이름을 가질까요?', pause: 'section' },
    ],
  },
};
