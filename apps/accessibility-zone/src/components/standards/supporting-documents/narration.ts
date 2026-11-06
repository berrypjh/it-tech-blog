import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 04.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * 원문 인용은 영어 그대로 화면에 두고, 대본은 그 뜻을 우리말로 풀어 말한다. 규칙 ID · 판 날짜는 화면에 둔다.
 * 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '자동 검사 도구가 통과라고 하면, 그 성공 기준을 충족한 걸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇게 단정하지 않습니다. 판정의 근거는 규범 조항이고, 해설과 기법, 검사 규칙은 그것을 돕는 보충 자료예요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 판정은 규범 조항에, 이해와 구현은 보충 자료에 연결할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 규범 문서와 보충 자료의 역할을 나눕니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 충분 기법과 APG를 판정에서 어떻게 쓰는지 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, ACT 규칙의 결과를 성공 기준과 이어 읽습니다.',
        pause: 'section',
      },
    ],
    'document-roles': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. WCAG 주변의 문서는 각각 무엇을 할까요?',
        pause: 'think',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '판정의 근거는 WCAG 2.2의 성공 기준과 정의, 적합성 요구입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'Understanding과 Techniques, APG는 해석과 구현을 돕는 보충 자료예요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'ACT 규칙 형식은 권고안이지만, 그것은 규칙을 쓰는 형식에 대한 것입니다. 그 형식으로 쓴 개별 규칙은 보충 자료예요.',
        pause: 'short',
      },
      {
        text: '정리하면, 판정은 규범 문서에, 해석과 구현은 보충 자료에 연결합니다.',
        pause: 'section',
      },
    ],
    'techniques-are-not-the-only-way': [
      {
        target: ':scope > h2',
        text: '그럼 충분 기법을 쓰지 않으면 기준을 충족하지 못할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '그렇지 않습니다. 기법은 보충 자료이고 필수가 아니며, 적합성의 근거는 성공 기준이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '기법의 시험은 기법에 대한 시험이지, 성공 기준의 적합성 시험이 아닙니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '반면 실패 사례에 해당하면, 그 기준을 충족하지 못한 것입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '입력 목적 식별이라면, 판정 근거로는 기준의 원문을 적고, autocomplete 기법은 구현 설명으로 적어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 충분 기법은 기준을 충족하는 방법의 하나입니다.',
        pause: 'section',
      },
    ],
    'apg-is-guidance': [
      {
        target: ':scope > h2',
        text: '자, APG 패턴을 따르면 적합하다고 말할 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '말할 수 없습니다. APG는 규범 요구가 없고 적합성 모델도 없어요. 패턴을 쓴 뒤에도 실제 브라우저와 보조기술에서 확인합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, APG는 구현 안내이지 요구가 아닙니다.',
        pause: 'section',
      },
    ],
    'act-format-and-rules': [
      {
        target: ':scope > h2',
        text: '그럼 ACT 규칙을 통과하면 기준을 충족한 걸까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '원문은 실패가 하나라도 있으면 요구를 충족하지 않은 것이라고 적습니다. 모두 통과나 해당 없음이면, 충족일 수도 있고 추가 시험이 필요할 수도 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '예를 들어 이미지의 접근 가능한 이름이 비어 있지 않은지 보는 승인된 규칙이 있습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '이 규칙은 모두 통과해도, 대응하는 기준에는 추가 시험이 필요하다고 적혀 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '규칙은 이름이 비어 있지 않은지만 봅니다. 대체 텍스트가 같은 목적을 하는지는 따로 확인해요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 도구의 통과는, 그 규칙의 적용 범위 안에서 기대를 만족했다는 뜻으로 읽습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 규칙을 통과해도 대응 기준 전체의 통과를 단정하지 않습니다.',
        pause: 'section',
      },
    ],
    'what-to-cite': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 판정 기록에는 무엇을 인용할까요?',
        pause: 'think',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '판정 근거에는 WCAG의 판본과 절 번호, 원문 문장을 적고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '해석 메모에는 Understanding을,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '구현 방법에는 Techniques나 APG를,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '검사 결과에는 ACT 규칙과 남은 시험을 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 기록의 칸마다 인용할 문서가 다릅니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 판정의 근거는 WCAG의 규범 조항이고, 다른 문서는 보충 자료입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 충분 기법과 APG는 방법이고 요구가 아니며, 실제 환경에서 확인합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, ACT 규칙을 통과해도 대응 기준 전체의 통과를 단정하지 않습니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 자동 검사 도구가 통과라고 하면, 그 성공 기준을 충족한 걸까요?',
        pause: 'think',
      },
      {
        text: '그것만으로는 아닙니다. 규칙의 결과 대응과 남은 시험을 함께 봐야 해요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: 'KWCAG는 WCAG를 한국어로 옮긴 문서일까요?',
        pause: 'section',
      },
    ],
  },
};
