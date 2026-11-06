import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 04.1 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * 원문 인용은 영어 그대로 화면에 두고, 대본은 그 뜻을 우리말로 풀어 말한다. 성공 기준 번호는 이름으로 부른다.
 * 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'AA 기준을 못 지킨 것은, A 기준을 못 지킨 것보다 덜 심각할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇게 읽지 않습니다. A와 AA, AAA는 심각도가 아니라 적합 수준의 묶음이에요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 성공 기준 하나를 원칙에서 수준까지 따라가고, 목표 수준에 따라 판정할 기준을 정할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 원칙과 지침, 성공 기준의 관계를 기준 하나로 따라갑니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 수준이 뜻하는 것과 뜻하지 않는 것을 나눠요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 목표 수준에 따라 함께 검토할 기준을 정합니다.',
        pause: 'section',
      },
    ],
    'principle-to-criterion': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 원칙과 지침, 성공 기준은 어떻게 이어질까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '운용 가능 원칙 아래에 입력 방식 지침이 있고, 그 아래에 목표 크기 최소 기준이 있습니다. 이 기준은 WCAG 2.2에서 새로 생겼어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '원칙과 지침은 성공 기준을 묶는 틀입니다. 검사하고 판정하는 단위는 성공 기준이에요.',
        pause: 'short',
      },
      {
        target: 'figure:nth-of-type(2)',
        text: '규범 원문은 포인터 입력 대상의 크기가 적어도 가로세로 24 CSS 픽셀이어야 하고, 예외가 있다고 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 판정은 원칙이나 지침이 아니라 성공 기준 문장으로 합니다.',
        pause: 'section',
      },
    ],
    'what-levels-mean': [
      {
        target: ':scope > h2',
        text: '그럼 A와 AA, AAA는 무엇을 정할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '그 기준이 어느 적합 수준에 들어가는지를 정합니다. 적합 수준은 그 수준까지의 기준을 모두 충족한다는 묶음이에요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '원문은 AA 적합이 A와 AA 기준을 모두 충족하는 것, 또는 그 수준의 적합 대체 버전이 있는 것이라고 적습니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 수준을 심각도나 점수로 읽지 않습니다. 기준 하나라도 충족하지 못하면, 그 수준의 적합성은 성립하지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '원문은 사이트 전체에 AAA를 일반 정책으로 요구하는 것도 권하지 않습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 수준은 적합성의 묶음이지 심각도가 아닙니다.',
        pause: 'section',
      },
    ],
    'review-by-target-level': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 목표가 AA라면 어떤 기준을 판정할까요?',
        pause: 'think',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'A 기준 전부와 AA 기준 전부입니다. AAA 기준은 이 적합성 판정에 들어가지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '판정 대상이 아닌 기준도 버리지 않습니다. 진행 정도를 함께 적고, 사용자 과업에 주는 영향은 따로 봐요.',
        pause: 'short',
      },
      {
        text: '정리하면, 목표 수준을 먼저 정해야 판정할 기준이 정해집니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, WCAG는 원칙과 지침, 성공 기준으로 짜여 있고, 판정 단위는 성공 기준입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, A와 AA, AAA는 적합 수준의 묶음이고, 기준 하나라도 빠지면 그 수준은 성립하지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 판정 대상이 아닌 기준도 진행 정도를 적고, 사용자 영향은 따로 봅니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. AA 기준을 못 지킨 것은, A 기준을 못 지킨 것보다 덜 심각할까요?',
        pause: 'think',
      },
      {
        text: '수준으로는 말할 수 없습니다. 사용자에게 주는 영향은 사례마다 따로 판단해요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '버튼이 24 CSS 픽셀보다 작으면, 목표 크기 기준을 바로 어긴 걸까요?',
        pause: 'section',
      },
    ],
  },
};
