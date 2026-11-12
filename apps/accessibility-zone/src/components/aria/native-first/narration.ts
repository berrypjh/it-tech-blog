import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 05.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'role 속성을 붙이면, 그 요소가 버튼처럼 동작할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. ARIA는 전달되는 의미를 바꿀 뿐, 브라우저의 동작은 더하지 않아요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, ARIA가 필요한 요구와 필요 없는 요구를 나눌 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 링크와 버튼, 체크박스가 기본으로 주는 것을 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, role 선언이 바꾸는 것과 바꾸지 않는 것을 나눠요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, ARIA로 보완할 의미가 남는 경우를 고릅니다.',
        pause: 'section',
      },
    ],
    'native-behaviors': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. HTML 요소 하나는 무엇을 함께 줄까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '의미와 동작을 묶어서 줍니다. 링크는 이동을, 버튼은 실행을, 체크박스는 체크 상태를 갖죠.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표에서 키 동작을 보면, 링크는 Space로 실행되지 않습니다. 버튼은 Enter와 Space 둘 다로 실행돼요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '어떤 키가 실행을 일으키는지는 브라우저와 플랫폼의 관례입니다. 링크와 버튼 선택 페이지의 실습에서 직접 확인해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 네이티브 요소는 의미와 동작을 함께 줍니다.',
        pause: 'section',
      },
    ],
    'role-only': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. div에 role을 붙이면 무엇이 바뀔까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '노출되는 역할만 버튼으로 바뀝니다. 포커스와 키 동작은 생기지 않아요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표의 첫 줄은 역할만 있어서 Tab으로 닿지 않습니다. tabindex를 더하면 포커스는 받지만, Enter와 Space로는 실행되지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '스크립트로 키를 처리해도 비활성과 폼 동작까지 다시 만들어야 합니다. 그래서 버튼 요소를 씁니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '접근성 트리에 버튼이 보여도, 키보드로 쓸 수 있다는 증거는 아닙니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 역할 선언은 동작을 만들지 않습니다.',
        pause: 'section',
      },
    ],
    'remaining-meaning': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 그럼 ARIA는 언제 필요할까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: 'ARIA in HTML은 두 경우를 뺍니다. 네이티브 의미와 충돌할 때, 그리고 이미 가진 의미와 같을 때예요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표에서 토글 버튼은 버튼 요소로 고르고, 눌림 상태만 aria-pressed로 더합니다. 탭 목록은 맞는 요소가 없어 역할과 키 동작을 직접 만들어요.',
        pause: 'short',
      },
      {
        target: 'ol',
        text: '판단은 세 단계입니다. 요소를 찾고, 남는 상태만 더하고, 없으면 직접 만든 뒤 확인합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, HTML 요소를 고른 뒤에도 남는 의미만 ARIA로 보완합니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 링크와 버튼, 체크박스는 의미와 동작을 함께 줍니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, role 선언은 노출되는 역할만 바꾸고 포커스와 키 동작은 만들지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 네이티브 요소로 전해지지 않는 상태나 관계만 ARIA로 더합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, role만으로는 버튼처럼 동작하지 않습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 역할과 상태, 속성, 관계를 원문에서 읽어 봅니다.',
        pause: 'section',
      },
    ],
  },
};
