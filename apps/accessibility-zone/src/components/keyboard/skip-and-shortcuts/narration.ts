import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 07.6 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '건너뛰기 링크는 화면만 옮기면 충분할까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 다음 Tab이 도착한 곳에서 이어져야 합니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 건너뛰기와 단축키를 조건으로 판단할 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 건너뛰기 링크의 도착을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 우회의 목적을 확인해요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 문자 단축키의 조건을 봅니다.',
        pause: 'section',
      },
    ],
    'skip-links': [
      { target: ':scope > h2', text: '자, 첫 번째 주제입니다. 도착은 어디일까요?', pause: 'think' },
      {
        target: 'figure',
        text: 'WCAG는 반복되는 블록을 건너뛸 수단을 요구합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'HTML은 조각 이동 때 다음 Tab의 시작점을 대상으로 둡니다.',
        pause: 'short',
      },
      {
        text: '도착 대상을 바꾸며 다음 Tab을 확인해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 화면 이동과 다음 Tab을 따로 확인합니다.', pause: 'section' },
    ],
    'character-key-shortcuts': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 한 글자 단축키는 왜 위험할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '잘못 누른 키나 음성 입력의 낱말이 명령이 될 수 있습니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '그래서 끄기, 재지정, 포커스 범위 중 하나가 필요해요.',
        pause: 'short',
      },
      {
        text: '메모를 적으며 별표가 늘어나는지 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 문자 단축키는 세 조건 중 하나를 충족합니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 반복되는 블록을 건너뛸 수단을 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 도착과 다음 Tab을 실제로 확인합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 문자 단축키는 끄기, 재지정, 포커스 범위 중 하나를 갖춥니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 화면 이동만으로는 부족합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지에서는 키보드 경로 전체를 검증합니다.', pause: 'section' },
    ],
  },
};
