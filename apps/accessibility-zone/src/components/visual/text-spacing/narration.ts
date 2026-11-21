import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 08.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '글자 간격을 넓히면 버튼 글자가 잘리지 않을까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '고정된 크기라면 잘릴 수 있습니다. 번역 문구도 마찬가지예요.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 늘어나는 글자를 견디는 배치를 고를 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 네 가지 값을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 잘림과 겹침을 찾아요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 배치를 고칩니다.', pause: 'section' },
    ],
    'text-spacing-criterion': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 어떤 값을 넣어 볼까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '줄 높이 1.5배, 문단 뒤 2배, 글자 0.12배, 단어 0.16배입니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '사이트의 기본값으로 쓰라는 뜻은 아니에요.',
        pause: 'short',
      },
      { text: '정리하면, 사용자가 덮어써도 내용이 남아야 합니다.', pause: 'section' },
    ],
    'text-spacing-practice': [
      { target: ':scope > h2', text: '자, 두 번째 주제입니다. 어디가 잘릴까요?', pause: 'think' },
      {
        text: '긴 문구와 간격을 켜고 배치를 비교해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 변경은 데모 영역에만 적용되고 되돌릴 수 있습니다.', pause: 'section' },
    ],
    'flexible-layout-fixes': [
      { target: ':scope > h2', text: '자, 마지막 주제입니다. 어떻게 고칠까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '높이는 최소값으로 두고 줄바꿈을 허용합니다.',
        pause: 'short',
      },
      { text: '정리하면, 글자가 늘어날 공간을 남깁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 네 값을 적용해도 내용과 기능이 남아야 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 고정 크기와 숨김은 잘림을 만듭니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 내용에 따라 늘어나는 배치로 고칩니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 고정된 크기라면 잘릴 수 있습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 사용자가 색을 강제하는 환경을 봅니다.', pause: 'section' },
    ],
  },
};
