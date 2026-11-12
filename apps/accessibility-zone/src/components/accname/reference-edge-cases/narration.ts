import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 06.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '숨긴 글자는 언제 이름에 들어가고, 언제 빠질까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '어디가 숨었는지, 어떻게 참조했는지에 따라 다릅니다. 판본마다 결과가 갈리는 곳도 있어요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 경계 사례를 판본과 엔진과 함께 기록할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 직접 참조된 숨김 대상과 숨김 자손을 나눕니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 네 가지 비어 있음을 구분해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 결과가 갈리는 사례를 기록합니다.',
        pause: 'section',
      },
    ],
    'hidden-references': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 숨긴 요소를 가리키면 그 안의 글자도 다 들어갈까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '숨은 곳이 참조 대상 자신인지, 그 안의 자손인지에 따라 다릅니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '참조 대상 자신이 숨었으면 포함합니다. 보이는 대상 안의 숨김 자손은 빼요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '숨은 대상 안의 자손은 판본마다 다릅니다. 1.1은 빼고, 1.2 초안은 포함해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 숨김은 위치와 참조 방식을 함께 봐야 합니다.',
        pause: 'section',
      },
    ],
    'empty-values': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 비어 있으면 언제나 다음 출처로 넘어갈까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '아닙니다. 속성이 없을 때, 빈 문자열일 때, 유효한 참조가 없을 때는 그 단계가 적용되지 않아요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '그런데 참조는 유효한데 결과가 빈 경우는 다릅니다. 1.1은 빈 이름으로 끝나고, 1.2 초안은 다음 단계로 넘어가요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 정답을 하나로 적지 않고, 판본과 엔진, 재현 조건을 함께 기록합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 네 가지 비어 있음은 같은 대체 경로가 아닙니다.',
        pause: 'section',
      },
    ],
    'edge-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 경계 사례는 어떻게 기록할까요?',
        pause: 'think',
      },
      {
        target: '[data-code-block]',
        text: '읽은 판본과 단계, 명세상 예상, 관찰한 엔진과 값, 재현 조건을 나눠 적습니다.',
        pause: 'short',
      },
      {
        text: '실습에서 사례를 골라 경로를 따라가고, 브라우저 도구의 이름을 적어 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, 예상과 관찰은 다른 칸에 적습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 직접 참조된 숨김 대상은 포함되고, 보이는 대상 안의 숨김 자손은 빠집니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 네 가지 비어 있음은 같은 대체 경로가 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 결과가 갈리는 사례는 판본과 엔진, 재현 조건과 함께 기록합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 숨김의 위치와 참조 방식, 판본에 따라 달라집니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 이름이 아닌 설명과 오류 메시지가 어디서 오는지 봅니다.',
        pause: 'section',
      },
    ],
  },
};
