import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 04.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * 원문 인용은 화면에 두고, 대본은 비교할 점만 말한다. 검사항목 · 성공 기준 번호는 이름으로 부른다.
 * 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'KWCAG는 WCAG를 한국어로 옮긴 문서일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. WCAG를 참고한 한국의 표준이지만, 번역본도 항목마다 짝이 맞는 대응표도 아니에요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 공식 원문을 확인하고 두 문서의 항목을 조건과 증거로 나란히 비교할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 공식 등록 정보와 원문에서 판본과 날짜를 확인하고, 두 문서의 짜임을 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 명도 대비와 컨트롤 크기 항목을 비교해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 공식 원문을 확인하는 절차를 정리합니다.',
        pause: 'section',
      },
    ],
    'official-registry': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. KWCAG 2.2는 어디서 확인할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '국립전파연구원의 표준 등록 페이지와, 그 페이지에 첨부된 원문입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '원문은 2022년 12월 28일에 개정됐고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: 'W3C의 WCAG 2.1을 기초로 작성했다고 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 판본과 날짜는 공식 등록 정보와 원문에서 확인합니다.',
        pause: 'section',
      },
    ],
    'structure-and-basis': [
      {
        target: ':scope > h2',
        text: '그럼 두 문서의 짜임은 같을까요?',
        pause: 'think',
      },
      {
        target: ':scope > figure',
        text: '다릅니다. 그림처럼 일부 항목만 이어지고, 재는 단위도 다를 수 있어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'KWCAG는 원칙, 지침, 검사항목의 세 단계이고, WCAG는 성공 기준마다 수준이 붙습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '이번 확인에서는 KWCAG 원문에서 전체 페이지나 완전한 과정 같은 적합성 요구 절을 찾지 못했습니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 번호가 비슷해 보여도 한 줄로 짝짓지 않고, 항목마다 원문을 나란히 놓고 비교합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 짜임과 기초 판본이 다르니 항목별로 비교합니다.',
        pause: 'section',
      },
    ],
    'compare-contrast': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 비교는 명도 대비입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '두 문서 모두 4.5 대 1을 기본값으로 둡니다. 차이는 낮출 수 있는 조건과 예외에 있어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'KWCAG에는 화면 확대가 가능한 텍스트를 3 대 1까지 낮추는 조건이 있습니다. WCAG에는 그 조건이 없어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '예외도 다릅니다. KWCAG는 초점을 받으면 대비가 커지는 콘텐츠를 예외로 두고, WCAG는 비활성 컴포넌트와 순수 장식을 예외로 둬요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그래서 어느 문서로 판정하는지 먼저 정해야 합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 같은 기본값이라도 조건과 예외가 다릅니다.',
        pause: 'section',
      },
    ],
    'compare-control-size': [
      {
        target: ':scope > h2',
        text: '그럼 두 번째 비교, 컨트롤 크기를 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'WCAG의 목표 크기 최소 기준은 2.2에서 새로 생겼습니다. KWCAG는 2.1을 기초로 해서, 컨트롤 크기는 조작 가능 검사항목이 다뤄요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'KWCAG는 충분한 크기로 제공해야 한다고 적고, 대각선 6밀리미터는 바람직하다고 둡니다.',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'WCAG는 24 CSS 픽셀을 다섯 예외와 함께 요구합니다. 숫자와 단위, 문장의 힘이 모두 달라요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '같은 버튼이 한쪽으로는 충족이고 다른 쪽으로는 미충족일 수 있습니다. 그래서 어느 문서의 어느 판본으로 판정했는지 함께 적어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 같은 문제를 다뤄도 판정 기준은 문서마다 다릅니다.',
        pause: 'section',
      },
    ],
    'checking-the-original': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 항목을 비교할 때 원문은 어떻게 확인할까요?',
        pause: 'think',
      },
      {
        target: ':scope > ol',
        text: '등록 페이지에서 비교할 판본의 원문을 받고, 항목 문장과 조건, 예외를 그대로 옮깁니다. WCAG도 판본과 절 번호를 정한 뒤, 두 문장을 칸별로 비교해요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '원문을 열 수 없으면 그 비교는 미확인으로 남깁니다. 제3자가 정리한 대응표나 기억으로 채우지 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 비교는 공식 원문을 직접 확인한 뒤에만 합니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, KWCAG 2.2는 공식 등록 페이지의 원문으로 확인하고, 그 원문은 WCAG 2.1을 기초로 했다고 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 명도 대비와 컨트롤 크기는 조건과 예외, 숫자와 단위가 달라 번호로 짝짓지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(5)',
        text: '셋째, 원문을 열지 못한 비교는 미확인으로 남깁니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. KWCAG는 WCAG를 한국어로 옮긴 문서일까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. WCAG를 참고했지만, 짜임과 항목, 조건이 다른 한국의 표준이에요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: 'WCAG 2.2가 W3C 권고안이면, 모든 서비스에 그것을 지킬 법적 의무가 생길까요?',
        pause: 'section',
      },
    ],
  },
};
