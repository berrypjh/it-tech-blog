import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 06.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'aria-labelledby가 있으면 언제나 그것이 이름이 될까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 우선순위는 각 출처가 적용될 수 있을 때만 성립해요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 이름 하나가 어느 단계에서 정해졌는지 기록할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 같은 버튼의 세 가지 이름 출처를 비교합니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 순서 대신 네 가지를 기록하는 법을 익혀요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 작성자 문자열이 화면 라벨을 덮는 경우를 봅니다.',
        pause: 'section',
      },
    ],
    'three-sources': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 같은 글자가 보이는 세 버튼은 이름도 같을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '다릅니다. 첫째 버튼은 내용에서, 둘째는 aria-label에서, 셋째는 aria-labelledby에서 이름이 정해져요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '앞 단계가 비어 있지 않은 결과를 돌려주면, 내용 단계까지 가지 않습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 끝난 단계를 적으면 화면 글자가 이름에 없는 이유를 설명할 수 있습니다.',
        pause: 'section',
      },
    ],
    'record-four-things': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 우선순위 목록만으로 충분할까요?',
        pause: 'think',
      },
      {
        target: 'ol',
        text: '부족합니다. 역할의 이름 허용, 적용 가능한 출처, 참조의 유효성, 끝난 단계를 적어요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '원문은 실제로 있는 ID가 하나라도 있어야 aria-labelledby 단계를 적용합니다. 공백뿐인 aria-label은 건너뛰어요.',
        pause: 'short',
      },
      {
        text: '실습에서는 사례를 골라 경로를 따라가고, 브라우저 도구의 이름과 비교합니다. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, 순서를 외우지 말고 네 가지를 기록합니다.',
        pause: 'section',
      },
    ],
    'author-string-overrides': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. aria-label을 붙이면 무엇이 사라질까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '화면 라벨이 이름에서 사라질 수 있습니다. 그러면 보는 사용자와 듣는 사용자가 다른 이름을 만나요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '보이는 글자로 이름이 되면 aria-label을 지웁니다. 이 어긋남은 마지막 페이지에서 판정해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 작성자 문자열은 화면 라벨을 덮어쓸 수 있습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 우선순위는 각 출처가 적용될 수 있을 때만 성립합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 역할과 출처, 참조와 끝난 단계를 기록합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 작성자 문자열이 화면 라벨을 덮으면 마지막 페이지에서 판정합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, aria-labelledby도 참조가 유효해야 이름이 됩니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 숨긴 참조와 빈 값 같은 경계 사례를 봅니다.',
        pause: 'section',
      },
    ],
  },
};
