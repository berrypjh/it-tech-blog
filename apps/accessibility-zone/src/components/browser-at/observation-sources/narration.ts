import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 03.6 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 표는 캡션으로 만든 영역(aria-label)으로 가리킨다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '개발자 도구에서 체크됨으로 보이면, 화면 낭독기도 체크됨이라고 읽었다고 말할 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '말할 수 없습니다. 같은 체크됨이라도 어디서 본 것이냐에 따라 뜻이 달라요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 컨트롤 하나를 세 관점에서 관찰하고 결과마다 출처를 적을 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 네 가지 관찰 출처를 구별하고, 도구가 증명하지 못하는 것을 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 컨트롤 하나를 세 관점에서 관찰해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 1장의 재현 기록에 관찰 출처를 더해 기록합니다.',
        pause: 'section',
      },
    ],
    'four-sources': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 관찰 결과는 어디서 올 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '네 곳입니다. 2장의 세 확인 수준에 교육용 모델을 더했어요.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림은 같은 체크박스를 네 곳에서 따로 관찰한다는 뜻입니다. 실제 보조기술 관찰은 별도의 확인이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '교육용 모델은 명세와 흔한 구현으로 세운 예상이고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '실제 DOM 관찰은 이 브라우저의 실제 속성과 포커스를 보여 줍니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '브라우저 도구 검사는 그 브라우저가 계산한 접근성 트리를 보여 주고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '실제 보조기술은 그 조합에서 실제로 들은 결과입니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 출처마다 증명하는 범위가 다릅니다.',
        pause: 'section',
      },
    ],
    'tools-are-not-at': [
      {
        target: ':scope > h2',
        text: '그럼 개발자 도구에서 본 값은 무엇을 증명할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '그 브라우저가 계산한 정보입니다. Firefox 문서는 검사기가 플랫폼 접근성 계층이 아니라, Gecko의 접근성 트리를 보여 준다고 설명해요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '자동 검사 도구의 결과도 그 도구가 계산한 값입니다. 운영체제 API로 나간 값이나 실제로 읽은 말까지 증명하지는 않아요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '일반 페이지의 스크립트는 DOM과 스타일, 포커스를 읽을 수 있지만, 접근성 트리 전체나 발화는 읽을 수 없습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 도구의 표현을 실제 발화로 여기지 않습니다.',
        pause: 'section',
      },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 이 장의 최종 과업입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol',
        text: '체크박스 하나를 이 장의 순서로 봅니다. 예상하고, 한 번 체크하고, DOM과 개발자 도구, 화면 낭독기에서 차례로 관찰한 뒤 차이를 해석해요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '화면 낭독기를 쓸 수 없으면, 셋째 관찰은 미실행으로 적습니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, 같은 컨트롤을 세 관점에서 따로 관찰합니다.',
        pause: 'section',
      },
    ],
    'observation-record': [
      {
        target: ':scope > h2',
        text: '그럼 관찰한 것을 어떻게 적을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '1장의 재현 기록을 넓힙니다. 가장 큰 차이는 관찰 위치 칸이에요.',
        pause: 'short',
      },
      {
        target: '[aria-label="01.5 재현 기록에서 이 장의 기록으로"]',
        text: '표는 1장의 칸이 이 장의 칸으로 어떻게 바뀌는지 보여 줍니다. 관찰 위치와 차이가 새로 생겼어요.',
        pause: 'short',
      },
      {
        target: '[aria-label="체크박스 하나를 세 관찰 위치에서 적은 예"]',
        text: '작성 예시는 체크박스 하나를 관찰 위치마다 한 줄씩 적었습니다. 보조기술 줄은 미실행이에요.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '기록 틀을 복사해 자신이 본 값으로 채웁니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 같은 컨트롤도 관찰 위치마다 한 줄씩 따로 적습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 관찰 출처는 네 가지이고 증명하는 범위가 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 개발자 도구와 테스트 도구의 표현은 운영체제 API나 실제 발화와 같지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 기록에는 관찰 위치를 적고, 해 보지 않은 것은 미실행으로 남깁니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 개발자 도구에서 체크됨으로 보이면, 화면 낭독기도 그렇게 읽었다고 말할 수 있을까요?',
        pause: 'think',
      },
      {
        text: '말할 수 없습니다. 실제로 들은 뒤에만, 그 환경과 함께 말할 수 있어요.',
        pause: 'long',
      },
      { text: '이 페이지는 여기까지예요. 이렇게 3장이 끝났습니다.', pause: 'short' },
      {
        text: '다음 페이지부터는 4장, 표준과 적용 범위예요. 4장은 이 질문으로 시작합니다.',
        pause: 'short',
      },
      {
        text: 'AA 기준을 못 지킨 것은, A 기준을 못 지킨 것보다 덜 심각할까요?',
        pause: 'section',
      },
    ],
  },
};
