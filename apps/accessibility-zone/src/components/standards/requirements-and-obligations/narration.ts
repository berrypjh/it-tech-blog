import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 04.6 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * 판정 기록 예시는 다 읽지 않고 판정 네 가지가 어떻게 갈리는지만 짚는다. 법적 판단은 하지 않는다고 말한다.
 * 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: 'WCAG 2.2가 W3C 권고안이면, 모든 서비스에 그것을 지킬 법적 의무가 생길까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 기술 기준의 발행 상태와 지원 증거, 계약과 인증, 법령 의무는 서로 다른 축이에요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 네 축을 나누고 한 서비스의 판정 기록을 끝까지 쓸 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 네 가지 판단 축과 의무를 확인하는 절차를 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 통과와 실패, 해당 없음과 미확인을 나눠요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 한 서비스의 판정 기록을 씁니다.',
        pause: 'section',
      },
    ],
    'four-axes': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 무엇을 지켜야 하는지는 몇 가지 축으로 나뉠까요?',
        pause: 'think',
      },
      {
        target: ':scope > figure',
        text: '네 가지입니다. 그림처럼 네 축은 서로 따로 움직여요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '기술 기준의 발행 상태는 그 문서가 권고안인지 초안인지를 묻고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '구현 지원 증거는 실제 브라우저와 보조기술에서 동작하는지를 묻습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '계약과 인증은 그 문서가 어느 기준과 판본을 지정했는지를 묻고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '법령 의무는 그 서비스가 어느 법령의 대상인지를 묻습니다. 이 둘은 이 사이트가 답할 수 없어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'WCAG 2.2가 권고안이라는 것은 첫째 축의 답일 뿐입니다. 계약서가 KWCAG를 지정했다면, 계약상 판정 문서는 KWCAG예요.',
        pause: 'short',
      },
      {
        text: '정리하면, 한 축의 답이 다른 축의 답을 정하지 않습니다.',
        pause: 'section',
      },
    ],
    'checking-obligations': [
      {
        target: ':scope > h2',
        text: '그럼 특정 서비스의 의무는 어떻게 확인할까요?',
        pause: 'think',
      },
      {
        target: ':scope > ol',
        text: '관할과 대상, 시점과 적용 문서를 차례로 확인합니다. 그리고 법령과 계약서 원문, 담당 기관의 안내로 확인해요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '이 사이트는 법적 적합성을 판단하지 않습니다. 이 장의 판정 기록은 기술 기준에 대한 판단이에요.',
        pause: 'short',
      },
      {
        text: '정리하면, 의무는 절차를 거쳐 권한 있는 곳에서 정합니다.',
        pause: 'section',
      },
    ],
    'four-verdicts': [
      {
        target: ':scope > h2',
        text: '자, 판정은 몇 가지로 나눌까요?',
        pause: 'think',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '네 가지입니다. 통과와 실패에는 관찰 증거와 환경을 남기고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '해당 없음에는 왜 적용 대상이 아닌지를 남기고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '미확인에는 확인할 환경이나 자료를 남깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '해당 없음은 문제 없음이 아니고, 미확인은 통과로 세지 않습니다. 네 판정을 섞어 하나의 숫자로 만들지도 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 네 판정을 나누고 각각의 근거를 남깁니다.',
        pause: 'section',
      },
    ],
    'final-judgment-record': [
      {
        target: ':scope > h2',
        text: '자, 이 장의 최종 과업입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol',
        text: '판정 문서를 정하고, 조항마다 원문과 조건을 읽고, 관찰 증거를 남긴 뒤, 네 판정 가운데 하나로 판정합니다. 마지막으로 미확인과 후속 확인을 적어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '작성 예시는 강의실 예약 서비스의 네 기록이고, 이 페이지가 만든 교육 예시입니다.',
        pause: 'short',
      },
      {
        text: '별점 버튼은 예외가 없어 실패이고, 동행자 이메일은 본인 정보가 아니라 해당 없음이에요. 대비를 재지 않은 안내 문구는 미확인으로 남겼습니다.',
        pause: 'short',
      },
      {
        target: '[data-code-block]',
        text: '기록 틀을 복사해, 자신이 아는 서비스 하나로 같은 기록을 써 보세요.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, 판정마다 기준과 판본, 조항과 증거를 함께 남깁니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 발행 상태와 지원 증거, 계약과 인증, 법령 의무는 서로 다른 축입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 의무는 관할과 대상, 시점과 적용 문서를 원문으로 확인한 뒤 권한 있는 곳에서 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, 판정은 통과, 실패, 해당 없음, 미확인으로 나누고 각각의 근거를 남깁니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. WCAG 2.2가 W3C 권고안이면, 모든 서비스에 그것을 지킬 법적 의무가 생길까요?',
        pause: 'think',
      },
      {
        text: '그렇지 않습니다. 발행 상태는 한 축의 답일 뿐이고, 의무는 관할 법령과 계약이 정해요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 이렇게 4장, 표준과 적용 범위가 끝났습니다.',
        pause: 'section',
      },
    ],
  },
};
