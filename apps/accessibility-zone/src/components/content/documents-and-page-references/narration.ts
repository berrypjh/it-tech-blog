import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.10 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '내려받은 문서도 같은 내용일까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '확인하지 않으면 알 수 없습니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 문서와 HTML 판을 대조할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 내려받기 링크의 정보를 맞춥니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 같은 원본 위치를 찾아요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 두 경로로 최종 과업을 풉니다.',
        pause: 'section',
      },
    ],
    'download-information': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 누르기 전에 무엇을 알아야 할까요?',
        pause: 'think',
      },
      { text: '형식과 언어, 크기입니다.', pause: 'short' },
      { text: '정리하면, 크기는 실제 파일에서 계산합니다.', pause: 'section' },
    ],
    'html-version': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 두 판은 어떻게 대조할까요?',
        pause: 'think',
      },
      { text: '시간과 장소, 예외 같은 과업 정보로 대조합니다.', pause: 'short' },
      { text: '배치를 바꾸고 2쪽으로 이동해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 화면 위치가 바뀌어도 같은 문단을 가리킵니다.', pause: 'section' },
    ],
    'fixed-page-references': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 2.4.4는 같은 기준일까요?',
        pause: 'think',
      },
      { text: '아닙니다. KWCAG와 WCAG에서 번호만 같습니다.', pause: 'short' },
      { text: '정리하면, 표준 이름과 항목 이름을 함께 적습니다.', pause: 'section' },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 바뀐 입구는 어디일까요?',
        pause: 'think',
      },
      { target: 'ol', text: '두 경로로 답하고, 잃은 정보의 대안을 씁니다.', pause: 'short' },
      { text: '답을 적고 원자료와 대조해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 모범 답은 원자료와 대조합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 내려받기 정보는 실제 파일에서 나옵니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 같은 원본 위치를 가리키는 표시를 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 번호와 파일만으로 판정하지 않습니다.',
        pause: 'short',
      },
      { text: '처음 질문에 답하면, 대조해야 압니다. 이 페이지는 여기까지예요.', pause: 'short' },
      { text: '이렇게 9장, 콘텐츠와 미디어, 인지가 끝났습니다.', pause: 'short' },
      { text: '다음 10장은 묻습니다. 화면이 바뀔 때마다 알려야 할까요?', pause: 'section' },
    ],
  },
};
