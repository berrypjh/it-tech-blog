import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 06.6 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '보이는 라벨과 이름은 글자 하나까지 똑같아야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. WCAG 2.5.3은 이름이 보이는 텍스트를 포함하라고 요구해요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 이름의 출처와 브라우저 검사값으로 판정 기록을 쓸 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 원문에서 요구와 권장을 나눕니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 원문에 없는 판정 기준을 걸러 내요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 04.6 양식으로 판정 기록을 씁니다.',
        pause: 'section',
      },
    ],
    'criterion-scope': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 2.5.3은 무엇을 요구할까요?',
        pause: 'think',
      },
      {
        target: 'figure',
        text: '텍스트가 있는 라벨을 가진 컴포넌트라면, 이름이 보이는 텍스트를 포함해야 합니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '완전 일치는 요구하지 않습니다. 라벨을 이름 맨 앞에 두는 것은 권장이에요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '설명은 이름이 아니라 판정에 합치지 않습니다. 대소문자와 문장 부호 차이도 따지지 않아요.',
        pause: 'short',
      },
      {
        text: '정리하면, 요구는 포함이고 맨 앞은 권장입니다.',
        pause: 'section',
      },
    ],
    'judging-cases': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 여섯 버튼은 각각 어떻게 판정될까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: 'aria-label이 예약 수정하기인 버튼은 보이는 글자가 이름에 없어 미충족입니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '보이는 글자가 이름 뒤쪽에 있어도 포함하면 충족입니다. 다만 권장 방식은 아니에요.',
        pause: 'short',
      },
      {
        target: ':scope > p:last-of-type',
        text: '원문만으로 결론이 나지 않는 사례는 해석과 근거를 함께 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 판정은 이름 하나와 원문 요건으로만 합니다.',
        pause: 'section',
      },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 판정의 근거는 어떻게 남길까요?',
        pause: 'think',
      },
      {
        target: ':scope > ol',
        text: '보이는 라벨을 적고, 이름의 출처를 찾고, 브라우저 도구의 이름을 적습니다. 그다음 판정 기록을 채워요.',
        pause: 'short',
      },
      {
        text: '실습에서 두 버튼의 이름을 브라우저 도구로 읽어 적어 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: 'h3:nth-of-type(1)',
        text: '기록 예시는 검사값을 아직 적지 않아 미확인입니다. 직접 확인한 뒤 판정을 고칩니다.',
        pause: 'short',
      },
      {
        target: 'h3:nth-of-type(2)',
        text: '음성 입력과 화면 낭독기의 결과는 실제로 해 본 경우에만 관찰로 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 예상과 관찰을 나눠 적고 판정의 근거를 남깁니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 2.5.3은 이름이 보이는 텍스트를 포함하라고 요구합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 완전 일치나 설명 합치기는 원문의 기준이 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 이름의 출처와 검사값을 04.6 양식으로 기록합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문에 답하면, 똑같을 필요는 없고 포함하면 됩니다.',
        pause: 'short',
      },
      {
        text: '이 페이지는 여기까지예요. 이렇게 6장, 접근 가능한 이름과 설명이 끝났습니다.',
        pause: 'section',
      },
    ],
  },
};
