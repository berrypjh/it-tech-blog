import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 06.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '화면에 보이는 라벨과 보조기술이 받는 이름은 같은 것일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '같을 때가 많지만 같은 것은 아닙니다. 이름은 브라우저가 규칙에 따라 계산해요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 한 컨트롤의 라벨과 이름, 설명과 값을 나눠 말할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 한 입력 칸의 다섯 정보를 나란히 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 보이는 글자가 계산된 이름이 아닌 경우를 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 이 장이 쓰는 규격 판본을 확인합니다.',
        pause: 'section',
      },
    ],
    'five-pieces': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 입력 칸 하나에는 어떤 정보가 있을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '역할은 객체의 종류이고, 값은 지금 입력된 정보입니다. 이름은 무엇을 적는 칸인지 알리고, 설명은 보충 정보예요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'WCAG는 라벨은 모두에게 보이고, 이름은 숨어 있을 수 있다고 정의합니다.',
        pause: 'short',
      },
      {
        text: '실습에서는 입력 칸을 브라우저 도구로 열어 표와 비교합니다. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, 라벨과 이름, 설명과 값은 서로 다른 정보입니다.',
        pause: 'section',
      },
    ],
    'text-is-not-the-name': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. DOM의 글자를 이어 붙이면 이름이 될까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '되지 않습니다. 닫기 버튼은 aria-label이 먼저 쓰이고, 이미지는 alt에서 이름을 얻어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'textContent는 숨김과 ARIA 속성을 따지지 않습니다. 그래서 계산된 이름이 아니에요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '계산된 이름은 브라우저 도구에서 읽고, 관찰값으로 따로 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 보이는 글자로 이름을 단정하지 않습니다.',
        pause: 'section',
      },
    ],
    'spec-versions': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 이름 계산 규칙은 어디에 있을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '여러 문서에 나뉘어 있습니다. AccName 1.1은 확정 규격이고, 1.2와 HTML-AAM은 초안이에요.',
        pause: 'short',
      },
      {
        target: 'ol',
        text: '두 AccName 판본의 결과가 다르면 둘 다 적고, 브라우저에서 본 값은 관찰값으로 따로 남깁니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 예상에는 판본을, 관찰에는 엔진과 버전을 함께 적습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 라벨과 이름, 설명과 값, 역할은 서로 다른 정보입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 보이는 글자나 textContent는 계산된 이름이 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 예상은 판본과 함께, 관찰은 엔진과 함께 적습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 라벨과 이름은 같을 때가 많을 뿐 같은 것은 아닙니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 HTML 요소마다 이름이 어디서 오는지 봅니다.',
        pause: 'section',
      },
    ],
  },
};
