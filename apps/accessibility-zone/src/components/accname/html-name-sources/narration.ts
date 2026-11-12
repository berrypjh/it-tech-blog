import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 06.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다.
 * target은 섹션 안의 강조 대상이다. 실습은 멈추지 않고 안내만 한다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '버튼과 입력 칸, 이미지는 이름을 같은 곳에서 얻을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '아닙니다. 입력 칸은 label에서, 버튼은 안의 글자에서, 이미지는 alt에서 이름을 얻어요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 끊긴 label 연결을 찾아 실제 관계를 고칠 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 세 요소의 이름 출처를 비교합니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 끊긴 for와 id를 추적해 고쳐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, placeholder가 라벨이 아닌 이유를 봅니다.',
        pause: 'section',
      },
    ],
    'element-sources': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 요소마다 이름을 어디서 찾을까요?',
        pause: 'think',
      },
      {
        target: 'table',
        text: '세 요소 모두 aria-labelledby와 aria-label을 먼저 봅니다. 그다음 입력 칸은 label을, 버튼은 안의 글자를, 이미지는 alt를 봐요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '버튼이 내용에서 이름을 얻는 것은 버튼 역할이 그것을 허용하기 때문입니다.',
        pause: 'short',
      },
      {
        target: 'figure',
        text: 'alt가 빈 이미지는 presentation 역할이 되고 이름이 없습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 이름의 출처는 요소와 역할에 따라 다릅니다.',
        pause: 'section',
      },
    ],
    'broken-for-id': [
      {
        target: ':scope > h2',
        text: '자, 두 번째 주제입니다. 라벨이 바로 위에 보이면 연결된 걸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '꼭 그렇지는 않습니다. for는 phone이고 id는 tel이라 둘은 이어지지 않아요.',
        pause: 'short',
      },
      {
        target: 'ol',
        text: 'for 값을 읽고, 그 id를 가진 요소를 찾고, 입력 칸의 labels를 봅니다. 그다음 관계를 고치고 다시 확인해요.',
        pause: 'short',
      },
      {
        text: '실습에서 관계를 고치기 전과 후의 값을 비교해 보세요. 잠깐 멈추고 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        text: '정리하면, 이름은 aria-label로 덮지 않고 끊긴 관계를 고칩니다.',
        pause: 'section',
      },
    ],
    'placeholder-is-not-a-label': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. placeholder가 이름이 되면 라벨로 써도 될까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '안 됩니다. 초안이 적은 끝 쪽의 대체 경로일 뿐이고, placeholder는 입력하면 사라져요.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '한 브라우저의 결과는 그 엔진과 버전의 관찰로만 적습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 보이는 label을 두고 for와 id로 연결합니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 이름의 출처는 요소와 역할에 따라 다릅니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(2)',
        text: '둘째, 끊긴 for와 id는 DOM으로 추적하고 관계 자체를 고칩니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '셋째, placeholder는 라벨을 대신하지 않습니다.',
        pause: 'short',
      },
      {
        text: '처음 질문에 답하면, 세 요소는 이름을 서로 다른 곳에서 얻습니다. 이 페이지는 여기까지예요.',
        pause: 'short',
      },
      {
        text: '다음 페이지에서는 여러 이름 출처가 함께 있을 때 어느 것이 쓰이는지 봅니다.',
        pause: 'section',
      },
    ],
  },
};
