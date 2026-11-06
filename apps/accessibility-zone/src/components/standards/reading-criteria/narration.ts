import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 04.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * 원문 인용은 영어 그대로 화면에 두고, 대본은 그 뜻을 우리말로 풀어 말한다. 성공 기준 번호는 이름으로 부른다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '버튼이 24 CSS 픽셀보다 작으면, 목표 크기 기준을 바로 어긴 걸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '바로 말할 수 없습니다. 성공 기준에는 정의된 용어와 적용 대상, 조건과 예외가 함께 들어 있어요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 성공 기준을 다섯 단계로 읽고 관찰값에서 판정 근거를 고를 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 성공 기준을 다섯 단계로 나눠 읽습니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 입력 목적 식별과 목표 크기 두 기준에 그 순서를 적용해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 관찰값으로 근거를 고르고 풀이와 견줍니다.',
        pause: 'section',
      },
    ],
    'reading-order': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 성공 기준 하나를 판정하려면 무엇을 차례로 볼까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '다섯 단계로 봅니다. 네 단계는 규범 원문에서, 마지막 단계는 실제 관찰에서 나옵니다. Understanding 문서는 각 단계를 돕는 보충 설명이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '먼저 원문을 그대로 읽고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '용어집의 정의를 확인하고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '이 기준이 무엇에 적용되는지 정합니다. 대상이 아니면 해당 없음이고, 그 근거를 적어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '그다음 조건과 예외를 하나씩 대조하고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '마지막으로 무엇을 어떤 환경에서 봤는지 확인 증거를 남깁니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 원문, 정의, 적용 대상, 조건과 예외, 확인 증거 순서로 읽습니다.',
        pause: 'section',
      },
    ],
    'case-identify-input-purpose': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 사례는 2장에서 본 입력 목적 식별 기준입니다.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '원문은 사용자 본인에 관한 정보를 받는 입력 칸의 목적을, 프로그램이 알 수 있어야 한다고 적습니다. 목적이 목록에 있고, 기술이 그 뜻을 지원할 때예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '그럼 autocomplete는 이 기준이 요구하는 것일까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. autocomplete 토큰은 그 결과를 내는 충분 기법이고, 방법의 하나예요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '문의 폼의 이름과 이메일은 본인 정보라 적용 대상입니다. 받는 사람 이메일은 다른 사람의 정보라 해당 없음이고, 근거는 적용 대상 문장이에요.',
        pause: 'short',
      },
      {
        text: '정리하면, 기준이 요구하는 결과와 그 결과를 내는 기법을 나눕니다.',
        pause: 'section',
      },
    ],
    'case-target-size': [
      {
        target: ':scope > h2',
        text: '그럼 두 번째 사례, 목표 크기 기준을 볼게요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '원문은 포인터 입력 대상이 적어도 가로세로 24 CSS 픽셀이어야 한다고 적고, 다섯 가지 예외를 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '대상은 포인터 동작을 받는 화면 영역이라는 정의도 함께 봅니다. 겹친 부분은 크기에 넣지 않는 것으로 봐요.',
        pause: 'short',
      },
      {
        target: ':scope > figure:nth-of-type(2)',
        text: '그림처럼 같은 크기의 버튼도, 간격이 넓으면 원이 겹치지 않고 좁으면 겹칩니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '다섯 예외 가운데 둘을 짚어 볼게요. 간격 예외는 작은 대상마다 지름 24 픽셀 원을 그려도 서로 겹치지 않을 때이고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '인라인 예외는 대상이 문장 안에 있을 때입니다. 나머지 예외와 확인할 증거는 표에 있어요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 모든 버튼은 24 픽셀 이상이라는 규칙을 만들지 않습니다. 숫자는 첫 확인일 뿐이에요.',
        pause: 'short',
      },
      {
        text: '정리하면, 정의와 예외까지 대상마다 대조해서 판정합니다.',
        pause: 'section',
      },
    ],
    'choose-the-basis': [
      {
        target: ':scope > h2',
        text: '자, 마지막으로 직접 근거를 골라 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '네 사례의 관찰값은 이 페이지가 만든 교육 예시입니다. 실제 화면이라면 크기와 거리를 개발자 도구에서 재고, 잰 환경을 함께 적어요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '사례마다 관찰값을 읽고 근거를 고른 뒤 풀이 보기를 누르면, 고른 근거와 풀이를 견줄 수 있습니다. 결과는 그 사례의 풀이이고, 자동 감사가 아니에요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, 관찰값에서 근거를 고르고, 재지 않은 조건은 미확인으로 남깁니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 성공 기준은 원문, 정의, 적용 대상, 조건과 예외, 확인 증거 순서로 읽습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 입력 목적 식별이 요구하는 것은 결과이고, autocomplete는 그 결과를 내는 기법입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 목표 크기의 24 픽셀은 첫 확인일 뿐이고, 정의와 다섯 예외를 대상마다 대조합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 버튼이 24 CSS 픽셀보다 작으면, 목표 크기 기준을 바로 어긴 걸까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. 간격이나 인라인 같은 예외로 충족할 수 있어요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '모든 컴포넌트가 검사를 통과하면, 그 서비스는 WCAG에 적합할까요?',
        pause: 'section',
      },
    ],
  },
};
