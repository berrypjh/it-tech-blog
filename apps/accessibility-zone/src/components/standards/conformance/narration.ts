import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 04.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * 원문 인용은 영어 그대로 화면에 두고, 대본은 그 뜻을 우리말로 풀어 말한다. 성공 기준 번호는 이름으로 부른다.
 * 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '모든 컴포넌트가 검사를 통과하면, 그 서비스는 WCAG에 적합할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '바로 말할 수 없습니다. 적합성은 전체 페이지와 완전한 과정 단위로 주장하고, 다섯 요구를 모두 충족해야 해요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 짧은 예약 과정으로 적합성을 판단하고 그 근거를 말할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 검사 범위와 적합성 주장을 구분하고 다섯 요구를 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 적합 대체 버전이 성립하는 조건을 확인해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 일부를 범위에서 빼도 적합해지지 않는 이유를 정리합니다.',
        pause: 'section',
      },
    ],
    'component-vs-conformance': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 같은 통과라도 무엇을 검사했느냐에 따라 뜻이 다를까요?',
        pause: 'think',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '다릅니다. 컴포넌트 검사는 그 컴포넌트가 검사한 상태에서 기준을 충족한다는 것까지만 말하고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '표본 검사는 고른 페이지와 상태의 결과만 말합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '적합성은 전체 페이지와 완전한 과정 단위로 주장해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 통과에는 무엇을 검사했는지를 함께 적습니다.',
        pause: 'section',
      },
    ],
    'five-requirements': [
      {
        target: ':scope > h2',
        text: '그럼 적합하려면 무엇이 필요할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '원문의 다섯 요구를 모두 충족해야 합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '목표 수준까지의 기준을 모두 충족하고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '페이지의 일부를 빼지 않고, 화면 폭마다 달라지는 변형도 포함하며,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '과업에 필요한 모든 페이지가 적합해야 합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '그리고 접근성이 지원되는 방식에만 기대고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '기대지 않은 부분이 나머지 사용을 막지 않아야 해요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '접근성 지원은 정의된 용어입니다. 사용자의 보조기술과 실제로 시험해야 하므로, 원문만 읽어서는 판정할 수 없어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 다섯 요구 가운데 하나라도 빠지면 적합하지 않습니다.',
        pause: 'section',
      },
    ],
    'booking-process': [
      {
        target: ':scope > h2',
        text: '자, 강의실 예약 과정으로 판단해 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '목록, 예약 입력, 예약 확인 세 페이지가 하나의 과정이고, 목표는 AA입니다. 관찰은 교육 예시예요.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림은 한 페이지라도 막히면 과정 전체가 끊긴다는 뜻입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '목록 페이지는 외부 상담 위젯에 키보드가 갇혀 부적합합니다. 키보드 함정 없음 기준은 모든 콘텐츠에 적용되기 때문이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '예약 입력은 좁은 화면 변형에서 다음 버튼에 이름이 없어 부적합합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '그럼 기준을 충족한 예약 확인 페이지는 적합하다고 말할 수 있을까요?',
        pause: 'think',
      },
      {
        text: '이 과정의 페이지로서는 말할 수 없습니다. 과정의 한 페이지라도 부적합하면, 어느 페이지도 그 수준을 주장할 수 없어요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '표본으로 고르지 않은 상태와 보조기술 지원 증거는 확인하지 않았으니, 미확인으로 남깁니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 적합성은 과정 전체를 보고 판단합니다.',
        pause: 'section',
      },
    ],
    'conforming-alternate-version': [
      {
        target: ':scope > h2',
        text: '그럼 적합한 다른 버전을 따로 두면 될까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '조건을 모두 갖추면 됩니다. 원문은 대체 버전이 목표 수준에 적합하고, 같은 언어로 같은 정보와 기능을 주며, 원래 버전만큼 최신이어야 한다고 적어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그리고 접근성이 지원되는 방법으로 대체 버전에 갈 수 있어야 합니다. 기능 일부만 있는 간편 버전은 이 조건에 맞지 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 대체 버전은 정의된 조건을 모두 갖춰야 합니다.',
        pause: 'section',
      },
    ],
    'excluding-is-not-conforming': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 외부 위젯을 범위에서 빼면, 목록 페이지는 적합해질까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '아닙니다. 원문은 페이지의 일부를 빼면 적합성을 얻을 수 없다고 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '나중에 더해지는 제3자 콘텐츠에는 부분 적합성 선언이 있습니다. 하지만 그 선언은 이 페이지가 적합하지 않다고 말하는 형식이에요.',
        pause: 'short',
      },
      {
        text: '작성자가 골라서 끼워 넣은 위젯은, 통제하지 않는 콘텐츠라는 조건에 맞는지부터 따져야 합니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '범위 밖 항목을 보고서에 적는 것은 정직한 기록이지만, 그것으로 적합을 얻을 수는 없습니다. 고치거나 바꾼 뒤 다시 판단해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 범위에서 빼는 것은 적합하게 만드는 것이 아닙니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 검사는 검사한 범위만 말하고, 적합성은 전체 페이지와 완전한 과정 단위로 주장합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 다섯 요구가 모두 필요하고, 과정의 한 페이지라도 부적합하면 과정 전체가 그 수준을 주장할 수 없습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 대체 버전은 정의된 조건을 갖춰야 하고, 일부를 범위에서 빼도 적합해지지 않습니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 모든 컴포넌트가 검사를 통과하면, 그 서비스는 WCAG에 적합할까요?',
        pause: 'think',
      },
      {
        text: '그것만으로는 말할 수 없습니다. 전체 페이지와 과정을 다섯 요구로 판단해야 해요.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '자동 검사 도구가 통과라고 하면, 그 성공 기준을 충족한 걸까요?',
        pause: 'section',
      },
    ],
  },
};
