import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 08.6 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '입력 중인 칸이 하단 버튼 뒤로 숨으면 어떻게 할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '가리는 원인을 찾아 배치를 고칩니다. 키보드는 실제 기기에서 확인해요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 수정안을 비교해 고를 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 가림의 원인을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 수정안을 비교해요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 모형과 실제 기기를 나눕니다.',
        pause: 'section',
      },
    ],
    'covering-fixes': [
      { target: ':scope > h2', text: '자, 첫 번째 주제입니다. 어디를 고칠까요?', pause: 'think' },
      {
        target: 'table',
        text: 'scroll-padding은 스크롤 영역에, scroll-margin은 대상에 둡니다.',
        pause: 'short',
      },
      { target: 'aside', text: '강제 스크롤이나 포커스 이동으로 감추지 않아요.', pause: 'short' },
      { text: '정리하면, 기본 스크롤이 멈출 자리를 만듭니다.', pause: 'section' },
    ],
    'covered-form-practice': [
      { target: ':scope > h2', text: '자, 두 번째 주제입니다. 무엇이 달라질까요?', pause: 'think' },
      {
        text: '수정안을 바꾸며 Tab으로 지나가 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 같은 폼에서 가려진 면적을 비교합니다.', pause: 'section' },
    ],
    'virtual-keyboard-check': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 키보드는 어떻게 확인할까요?',
        pause: 'think',
      },
      {
        target: 'ol',
        text: '실제 휴대폰에서 입력란과 제출 버튼을 끝까지 조작합니다.',
        pause: 'short',
      },
      { target: 'aside', text: '모형 결과를 실제 기기 결과로 적지 않아요.', pause: 'short' },
      { text: '정리하면, 하지 않은 확인은 미확인으로 남깁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 고정 영역은 입력과 포커스를 가릴 수 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 스크롤 여백이나 고정 범위로 고칩니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 가상 키보드는 실제 기기에서 확인합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 스크롤이 멈출 자리를 고칩니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 호버로 나타나는 내용을 다룹니다.', pause: 'section' },
    ],
  },
};
