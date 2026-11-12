import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 06.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '오류 메시지를 연결하면, 설명처럼 함께 읽힐까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 도움말은 설명 계산으로, 오류는 상태와 별도의 관계로 전해져요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 이름과 설명, 오류를 서로 다른 경로로 추적할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 이름과 설명의 두 경로를 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, aria-describedby와 aria-description을 비교해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 안내와 오류의 네 가지 정보를 나눕니다.',
        pause: 'section',
      },
    ],
    'two-paths': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 이름과 설명은 같은 순서로 계산될까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '아닙니다. 예제의 이름은 label에서, 설명은 aria-describedby가 가리키는 문단에서 나와요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '설명은 처음 적용되는 출처 하나만 씁니다. 결과가 비어 있어도 다음으로 넘어가지 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 이름과 설명은 서로 다른 순서표로 계산합니다.',
        pause: 'section',
      },
    ],
    'describedby-or-description': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 설명을 직접 적는 속성은 써도 될까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: 'aria-description은 WAI-ARIA 1.3 초안에만 있는 속성입니다. 1.2 확정 규격에는 없어요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: '초안도 설명 글이 화면에 있으면 aria-description을 쓰지 말라고 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '쓰기 전에는 대상 환경에서 실제로 전해지는지 확인하고, 관찰값으로 기록합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 보이는 도움말은 aria-describedby로 가리킵니다.',
        pause: 'section',
      },
    ],
    'hint-invalid-errormessage': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 오류가 난 입력 칸에는 무엇이 겹쳐 있을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '안내, 오류 표시, 유효 상태, 그리고 오류 메시지 관계입니다. 넷은 서로 다른 정보예요.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'aria-errormessage는 aria-invalid와 함께 써야 합니다. 그리고 aria-invalid가 false면 노출되지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '오류 메시지는 설명 계산에 들어가지 않고, 즉시 읽힌다는 보장도 없습니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '폼 오류를 복구하는 설계는 뒤 장에서 다룹니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 안내와 오류 상태, 오류 메시지 관계를 나눠 봅니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 이름과 설명은 서로 다른 경로로 계산됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, aria-description은 초안 속성이라 지원을 확인한 뒤 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 오류 메시지 관계는 설명 계산이나 즉시 낭독과 같은 것이 아닙니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 오류 메시지는 설명처럼 계산되지 않습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 보이는 라벨이 이름에 들어 있는지 판정합니다.',
        pause: 'section',
      },
    ],
  },
};
