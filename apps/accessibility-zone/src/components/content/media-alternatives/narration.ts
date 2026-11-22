import type { NarrationScript } from '@it-tech-blog/ui';

/** 09.6 해설 모드 대본. 본문을 고치면 해당 섹션 대본도 함께 고친다. */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: '자막이 있으면 대본은 필요 없을까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '자막은 화면에만 있는 정보를 전하지 못합니다.',
        pause: 'short',
      },
      { text: '이 페이지를 마치면, 대안마다 맡는 일을 나눌 수 있어요.', pause: 'long' },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      { target: 'li:nth-child(1)', text: '먼저, 미디어 종류별 기준을 봅니다.', pause: 'short' },
      { target: 'li:nth-child(2)', text: '그다음, 한 클립을 나눠 봐요.', pause: 'short' },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 대안끼리 대신하지 못하는 이유를 봅니다.',
        pause: 'section',
      },
    ],
    'media-types-and-criteria': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 미디어는 어떻게 나뉠까요?',
        pause: 'think',
      },
      { text: '녹화인지 실시간인지, 소리와 영상이 함께인지로 나눕니다.', pause: 'short' },
      {
        target: 'table',
        text: '녹화 동기화 미디어에는 A 수준에서 자막과 오디오 설명 또는 대체 자료가 필요해요.',
        pause: 'short',
      },
      { text: '정리하면, 목표 수준에 따라 할 일이 달라집니다.', pause: 'section' },
    ],
    'clip-sounds-and-visuals': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 이 클립에서 화면에만 있는 정보는 무엇일까요?',
        pause: 'think',
      },
      { text: '정문이 막히고 동쪽 입구로 들어간다는 정보입니다.', pause: 'short' },
      { text: '정리하면, 자막이 정확해도 그 정보는 전해지지 않습니다.', pause: 'section' },
    ],
    'alternatives-do-not-replace': [
      {
        target: ':scope > h2',
        text: '자, 세 번째 주제입니다. 설명 대본이 있으면 자막을 빼도 될까요?',
        pause: 'think',
      },
      { text: '아닙니다. 대안마다 맡는 사람과 장벽이 다릅니다.', pause: 'short' },
      { text: '정리하면, 각 대안을 따로 판정합니다.', pause: 'section' },
    ],
    'classify-clip-information': [
      { target: ':scope > h2', text: '자, 직접 나눠 볼까요?', pause: 'short' },
      {
        text: '네 가지 정보를 자막과 설명으로 나눠 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      { text: '정리하면, 과업에 필요한 화면 정보는 설명이 맡습니다.', pause: 'section' },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 기준은 미디어 종류마다 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 자막은 소리를, 설명은 화면 정보를 맡습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 대안은 서로를 대신하지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 대본과 자막은 따로 필요합니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      { text: '다음 페이지는 묻습니다. 영상이 저절로 소리를 내면 어떨까요?', pause: 'section' },
    ],
  },
};
