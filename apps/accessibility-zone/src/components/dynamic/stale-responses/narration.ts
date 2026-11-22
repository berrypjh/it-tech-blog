import type { NarrationScript } from '@it-tech-blog/ui';

/** 10.5 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '늦게 온 응답이 화면을 덮으면 어떨까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '사용자는 틀린 정보를 믿게 됩니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 경쟁 상태를 재현하고 고칠 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 요청 정체성을 정합니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 네 가지 상황을 재현해요.', pause: 'short' },
      { target: 'li:nth-child(3)', text: '마지막으로, 재현 기록을 남깁니다.', pause: 'section' },
    ],
    'request-identity': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 어떤 응답이 화면을 바꿀까요?',
        pause: 'think',
      },
      { text: '활성 요청의 응답만 바꿉니다.', pause: 'short' },
      { text: '정리하면, 반영한 뒤에는 활성 요청을 비웁니다.', pause: 'section' },
    ],
    'race-practice': [
      { target: ':scope > h2', text: '자, 응답 순서를 직접 정해 볼까요?', pause: 'short' },
      {
        text: '두 번 검색하고 나중 요청부터 응답해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 늦게 온 응답은 아무것도 바꾸지 않습니다.', pause: 'section' },
    ],
    'before-after-comparison': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 수정 전에는 무엇이 보였을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '역전에서는 대본을 검색했는데 자막 결과 3건이 남습니다.',
        pause: 'short',
      },
      { text: '정리하면, 같은 입력으로 전후를 비교합니다.', pause: 'section' },
    ],
    'abort-is-not-enough': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 중단 신호만 보내면 될까요?',
        pause: 'think',
      },
      { text: '아닙니다. 신호가 닿지 않는 틈이 있습니다.', pause: 'short' },
      { text: '정리하면, 반영 여부는 언제나 id로 정합니다.', pause: 'section' },
    ],
    'final-task': [
      {
        target: ':scope > h2',
        text: '자, 최종 과업입니다. 취소한 뒤 늦게 온 성공은 어떻게 될까요?',
        pause: 'think',
      },
      { target: 'ol', text: '입력 순서와 요청 ID, 기대값과 관찰값을 적습니다.', pause: 'short' },
      { text: '두 상황을 재현하고 기록해 보세요. 잠깐 멈추고 해 보셔도 좋아요.', pause: 'long' },
      { text: '정리하면, 확인하지 않은 발화는 미확인으로 남깁니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 활성 요청만 화면을 바꿉니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 중복은 문구가 아니라 요청으로 가립니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 중단 신호와 id 확인을 함께 씁니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 늦은 응답은 무시해야 합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '이렇게 10장, 동적 상태와 비동기 결과가 끝났습니다.', pause: 'section' },
    ],
  },
};
