import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 05.6 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '화면에서 잘 열리는 상세 보기는, 접근성도 괜찮은 걸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '꼭 그렇지는 않습니다. 의미와 이름, 상태와 키보드 동작이 서로 다른 말을 할 수 있어요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 어긋난 컨트롤을 고치고 그 근거를 기록할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 수정 전 코드에서 불일치를 찾습니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 네이티브 버튼과 한 상태로 고쳐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, DOM으로 본 것과 보조기술에서 확인할 것을 나눠 기록합니다.',
        pause: 'section',
      },
    ],
    'four-mismatches': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 수정 전 코드는 어디가 어긋날까요?',
        pause: 'think',
      },
      {
        target: '[data-code-block]',
        text: '마우스로 누르면 패널은 열리고 닫힙니다. 화면만 보면 문제가 없어 보여요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '하지만 네 군데가 어긋납니다. 역할만 있고 포커스와 키 동작이 없고, 보이는 이름이 없습니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '펼침 상태는 고정이라 패널과 맞지 않고, aria-controls는 없는 ID를 가리켜요.',
        pause: 'short',
      },
      {
        text: '정리하면, 화면에서 동작해도 의미와 이름, 상태와 관계는 따로 확인합니다.',
        pause: 'section',
      },
    ],
    'one-state': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 어떻게 고칠까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '활성화는 버튼 요소에 맡기고, 이름은 보이는 글자로 줍니다. 펼침 여부는 변수 하나에 둬요.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '그 변수 하나에서 패널의 hidden과 aria-expanded를 함께 정합니다. 그래서 둘이 어긋나지 않아요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '펼칠 영역을 소유하지 않으면, 원문은 aria-controls로 그 영역을 가리키라고 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '이 구조는 APG의 Disclosure 패턴과 같습니다. 권장 패턴이라 따랐다는 것만으로 충족을 단정하지 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 한 상태에서 화면과 의미를 함께 만듭니다.',
        pause: 'section',
      },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 고친 근거는 어떻게 남길까요?',
        pause: 'think',
      },
      {
        target: ':scope > ol:nth-of-type(1)',
        text: '수정 전 컨트롤을 누르고 Tab으로 닿는지 봅니다. 그다음 수정 후 컨트롤에서 Enter와 Space를 눌러요.',
        pause: 'short',
      },
      {
        text: '실습에서 두 컨트롤을 직접 조작해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: 'h3:nth-of-type(1)',
        text: '기록 틀에는 항목마다 수정 전과 후의 관찰, 근거, 출처를 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ul',
        text: '역할과 이름, 상태가 실제로 어떻게 전해지는지는 DOM으로 증명할 수 없습니다. 보조기술로 들은 결과만 기록해요.',
        pause: 'short',
      },
      {
        text: '정리하면, DOM으로 본 사실과 보조기술에서 확인할 항목을 나눠 적습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 화면에서 동작하는 컨트롤도 의미와 이름, 상태와 관계가 어긋날 수 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 네이티브 버튼으로 활성화를 지키고, 한 상태에서 화면과 aria-expanded를 함께 만듭니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, DOM 관찰과 보조기술에서 확인할 항목을 나눠 기록합니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 화면에서 열린다고 끝이 아닙니다.',
        pause: 'short',
      },
      {
        text: '이 페이지는 여기까지예요. 이렇게 5장, ARIA와 HTML 의미가 끝났습니다.',
        pause: 'short',
      },
      {
        text: '다음 페이지부터는 6장, 접근 가능한 이름과 설명이에요. 6장은 이 질문으로 시작합니다.',
        pause: 'short',
      },
      {
        text: '화면에 보이는 라벨과 보조기술이 받는 이름은 같은 것일까요?',
        pause: 'section',
      },
    ],
  },
};
