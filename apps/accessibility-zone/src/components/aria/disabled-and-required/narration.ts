import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 05.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'aria-disabled를 붙이면 버튼이 눌리지 않을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 네이티브 속성은 의미와 동작을 함께 바꾸고, ARIA 속성은 의미만 바꿔요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 폼 속성마다 무엇이 달라지는지 직접 확인할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, disabled와 readonly, required가 바꾸는 동작을 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, aria-disabled가 실행을 막지 않는다는 것을 확인해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, aria-required와 네이티브 필수 검증을 나눕니다.',
        pause: 'section',
      },
    ],
    'native-attributes': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 세 속성은 무엇을 다르게 바꿀까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: 'disabled는 편집과 포커스, 제출 데이터에서 모두 빠집니다. readonly는 편집만 막고 포커스와 제출 데이터는 남겨요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'required는 빈 값일 때 브라우저가 제출을 막습니다.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'HTML은 disabled인 컨트롤에 click 이벤트가 전달되지 않게 정합니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '적용되는 요소도 다릅니다. readonly는 체크박스에 효과가 없어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 속성마다 적용 요소와 바꾸는 동작을 따로 확인합니다.',
        pause: 'section',
      },
    ],
    'aria-disabled-meaning': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. aria-disabled는 무엇을 막을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '의미만 알립니다. 포커스도 click도 제출도 그대로 일어나요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'ARIA in HTML은 disabled를 쓸 수 있는 요소에는 disabled를 쓰라고 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '포커스를 남겨야 할 때만 aria-disabled를 쓰고, 실행 경로에서 같은 상태를 확인해 막습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, aria-disabled는 실행을 막지 않습니다.',
        pause: 'section',
      },
    ],
    'aria-required-meaning': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. aria-required가 있으면 빈 칸 제출이 막힐까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '막히지 않습니다. required는 의미와 검사를 함께 가져오고, aria-required는 의미만 알려요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '네이티브 칸에는 required를 쓰고, 두 속성을 함께 적지 않습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, aria-required는 주로 ARIA로 만든 컨트롤에 씁니다.',
        pause: 'section',
      },
    ],
    'form-practice': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 같은 폼에서 차이를 직접 볼까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '포커스와 제출, 제출 데이터는 실제 이벤트로 기록합니다. 보조기술에 전해질 상태는 따로 둬요.',
        pause: 'short',
      },
      {
        text: '받는 분을 비운 채 두 제출 버튼을 눌러 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, 비활성으로 알려진 버튼도 실행 경로가 막지 않으면 제출됩니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, disabled와 readonly, required는 편집과 포커스, 제출과 검사를 다르게 바꿉니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, aria-disabled는 의미만 알리므로 실행 경로에서 상태를 확인합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, aria-required는 네이티브 필수 검증을 대신하지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, aria-disabled만으로는 버튼이 눌립니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 이름과 상태, 키보드 동작이 서로 어긋난 컨트롤을 고칩니다.',
        pause: 'section',
      },
    ],
  },
};
