import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 01.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 사전에 없는 기호(1:1 · OS · px)는 문장을 바꿔 피한다.
 * 본문 사실을 바꾸지 않는다. 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '같은 장애가 있는 두 사람은, 웹을 똑같이 쓸까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇지 않습니다. 같은 장애가 있어도 웹을 쓰는 방식은 사람마다 다르고, 한 사람에게 여러 특성과 환경이 동시에 있거든요.',
        pause: 'short',
      },
      {
        text: '그래서 이 페이지는 장애를 분류표로 외우지 않습니다. 대신 한 과업이 어떤 조건에서 막히고, 어떻게 복구되는지를 봅니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 한 과업이 어떤 조건에서 막히는지 기능적 필요로 설명할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 네 가지 특성을 기능적 필요로 설명하고, 보조기술과 일대일로 맞지 않는 이유를 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '그다음, 특성과 환경이 겹친 상황에서, 한 과업이 맥락마다 어디서 막히는지 비교해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(5)',
        text: '마지막으로, 직접 따라 해 보기로 알 수 있는 것과 없는 것을 구분합니다.',
        pause: 'section',
      },
    ],
    'functional-needs': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 특성을 기능적 필요로 본다는 건, 무슨 뜻일까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '진단명이 아니라, 지각하고 조작하고 이해하는 데 무엇이 필요한지로 설명한다는 뜻입니다.',
        pause: 'short',
      },
      {
        text: '앞 페이지에서 본 기능적 필요를, 이번에는 특성별로 펼쳐 봅니다.',
        pause: 'short',
      },
      {
        text: 'W3C WAI는 사람마다 능력, 기술, 도구, 선호, 기대가 모두 다르다고 강조합니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 네 가지 특성마다, 필요한 것과 웹을 쓰는 방식의 예를 정리했습니다. 필요한 것부터 한 줄씩 볼게요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '시각 특성에 필요한 건, 화면을 보지 않거나 크게 키워서 보아도 같은 정보를 얻는 것,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '청각은 소리를 듣지 않고도 같은 정보를 얻는 것,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '운동은 정밀하거나 빠른 동작 없이 조작하는 것,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '인지는 기억과 주의에 크게 기대지 않고, 이해하고 끝까지 진행하는 것입니다.',
        pause: 'long',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '시각 행의 웹을 쓰는 방식 칸을 다시 볼게요. 화면 낭독기부터 도구 없이 가까이 보기까지, 한 행에도 방식이 여럿이죠.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '그래서 장애 유형과 보조기술은 일대일로 대응하지 않습니다.',
        pause: 'short',
      },
      {
        text: '저시력이 있는 사람은 확대만 쓸 수도, 화면 낭독기와 확대를 함께 쓸 수도, 아무 도구 없이 쓸 수도 있어요.',
        pause: 'short',
      },
      {
        text: '키보드도 운동 특성이 있는 사람만 쓰지 않습니다. 컴퓨터에서 화면 낭독기를 쓰는 사람도 키보드를 써요.',
        pause: 'short',
      },
      {
        text: '그래서 시각장애 대응을 화면 낭독기 테스트로만 정하면, 확대 사용자의 장벽을 통째로 놓칩니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3',
        text: '하나 더 있습니다. 필요는 고정되어 있지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '증상이 진행되거나 되풀이되는 사람은, 날마다 필요한 기능이 달라질 수 있습니다. 피로나 통증도 사용 방식을 바꾸고요.',
        pause: 'short',
      },
      {
        text: '그래서 사용자를 기록할 때는 시각장애인, 이렇게 적지 않습니다. 브라우저 확대 400%로 사용, 화면 낭독기는 쓰지 않음, 처럼 그 순간의 사용 방식을 적어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 특성은 진단명이 아니라 필요로 보고, 그 필요는 바뀔 수 있습니다.',
        pause: 'section',
      },
    ],
    'combined-contexts': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 특성과 환경이 겹칠 때를 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '실제 사용은 특성 하나에 도구 하나로 끝나지 않습니다. 여러 특성이 함께 있고, 그 위에 기기, 장소, 네트워크가 더해집니다.',
        pause: 'short',
      },
      { text: '그럼 한 요구를 풀면, 다 해결될까요?', pause: 'think' },
      {
        text: '그렇지 않습니다. 한 요구를 풀면, 다른 요구가 생기기도 하거든요.',
        pause: 'long',
      },
      {
        target: ':scope > dl > dd:nth-of-type(1)',
        text: '청각장애와 저시력이 겹치면, 자막이 소리 정보를 대신해 줍니다. 그런데 글자 크기와 색을 바꿀 수 없으면, 그 자막을 읽지 못해요.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dd:nth-of-type(2)',
        text: '저시력과 손 떨림이 겹치면, 확대로 버튼이 커져 누르기는 쉬워집니다. 하지만 버튼이 화면 밖으로 밀려나, 찾으려면 스크롤이 늘어나요.',
        pause: 'short',
      },
      { text: '확대가 조작은 돕고, 탐색은 어렵게 만드는 겁니다.', pause: 'short' },
      {
        target: ':scope > dl > dd:nth-of-type(3)',
        text: '수어가 첫 언어인 청각장애인에게 자막은 글로 쓴 언어라, 읽기 부담이 클 수 있습니다. 자막이 있어도, 길고 전문 용어가 많은 문장은 이해를 막아요.',
        pause: 'short',
      },
      {
        target: ':scope > dl > dd:nth-of-type(4)',
        text: '화면 낭독기를 휴대폰으로, 이동 중에, 느린 네트워크에서 쓰기도 합니다. 한 손으로 제스처를 쓰고, 소음 속에서 듣죠.',
        pause: 'short',
      },
      {
        text: '늦게 뜨는 콘텐츠가 읽던 위치를 밀어내면, 읽던 곳을 다시 찾아야 합니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '정리하면, 환경은 사용자를 설명하는 배경이 아니라 장벽이 생기는 조건입니다. 같은 화면도 확대율, 기기, 시간 제한이 바뀌면 다른 단계에서 막혀요.',
        pause: 'section',
      },
    ],
    'one-task': [
      {
        target: ':scope > h2',
        text: '자, 그럼 한 과업을 네 가지 맥락에 놓아 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '가상의 예약 변경 화면입니다. 과업은 병원 진료 예약 변경이에요. 예약을 조회하고, 새 날짜를 고르고, 변경을 확정하는 일입니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 맥락마다 막히는 조건, 실패 단계, 영향, 복구 경로를 정리했습니다.',
        pause: 'short',
      },
      {
        text: '실패 단계는 맥락마다 처음 막힌 단계 하나를 고른 것입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '화면 낭독기를 데스크톱에서 쓰면, 고른 날짜를 색으로만 표시해서 선택 상태를 읽어 주지 않습니다. 인식 단계에서 막혀, 잘못된 날짜로 예약하게 돼요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '브라우저 확대 400%에서는, 고정 헤더와 쿠키 배너가 화면 대부분을 덮습니다. 탐색 단계에서 막혀, 확정 버튼을 찾지 못하죠.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림은 같은 페이지를 보통 크기와 400% 확대로 나란히 보여 줍니다. 보통 크기에서 얇던 고정 헤더와 쿠키 배너가, 확대하면 화면 대부분을 차지해요.',
        pause: 'short',
      },
      { text: '그래서 확정 버튼이 배너 뒤로 가려집니다.', pause: 'short' },
      {
        target: 'tbody tr:nth-child(3)',
        text: '손 떨림이 있는 사람이 휴대폰을 쓰면, 작고 서로 붙은 날짜 칸 때문에 옆 날짜가 눌립니다. 조작 단계에서 막히는 거예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '기억이나 주의 특성이 있고 세션 제한이 10분이면, 만료를 알리지 않은 채 입력이 사라집니다. 상태와 오류를 이해하는 단계에서 막혀, 처음부터 반복하다 포기하게 돼요.',
        pause: 'long',
      },
      {
        target: 'table',
        text: '같은 화면인데, 왜 막히는 단계가 모두 다를까요?',
        pause: 'think',
      },
      {
        text: '맥락이 다르기 때문입니다. 그래서 장벽은 맥락과 함께 기록해야 해요.',
        pause: 'long',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '표의 마지막 열, 복구 경로를 줄마다 다시 볼게요. 날짜를 글자로도 보여줄지,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '고정 요소를 얼마나 크게 둘지,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '확정 전에 확인 단계를 둘지,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '시간 제한을 연장할 수 있게 할지.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '이건 모두 설계 결정입니다. 정하는 쪽은 사용자가 아니라, 화면을 만드는 쪽이에요.',
        pause: 'short',
      },
      {
        text: '정리하면, 같은 과업도 맥락마다 다른 단계에서 막히고, 복구 경로는 화면을 만드는 쪽이 정합니다.',
        pause: 'section',
      },
    ],
    'simulation-limits': [
      {
        target: ':scope > h2',
        text: '자, 다음은 직접 따라 해 보기입니다. 눈을 가리고 웹을 써 보면, 시각장애가 있는 사람의 경험을 알 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '그렇게 해서 느끼는 건, 처음 겪는 사람의 당황이에요.',
        pause: 'short',
      },
      {
        text: '오래 써 온 보조기술의 숙련, 자기만의 우회 전략, 매일 반복되는 비용까지는 느낄 수 없습니다.',
        pause: 'short',
      },
      {
        text: '그래서 이 결과를, 시각장애인은 이렇게 느낀다, 로 일반화하면 당사자의 경험을 잘못 전하게 됩니다.',
        pause: 'short',
      },
      {
        text: '다만 개발자가 직접 써 보는 확인은, 경험이 아니라 장벽을 찾는 데에는 쓸모가 있어요.',
        pause: 'long',
      },
      {
        target: ':scope > div > div:nth-child(1)',
        text: '알 수 있는 것부터 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > div > div:nth-child(1) li:nth-child(1)',
        text: '키보드만으로 움직일 때 포커스가 사라지는 지점처럼, 누구에게나 재현되는 장벽,',
        pause: 'flow',
      },
      {
        target: ':scope > div > div:nth-child(1) li:nth-child(2)',
        text: '확대 400%에서 잘리는 영역처럼, 설정으로 만들 수 있는 조건,',
        pause: 'flow',
      },
      {
        target: ':scope > div > div:nth-child(1) li:nth-child(3)',
        text: '그리고 보조기술이 받는 역할과 이름이 비어 있는지입니다.',
        pause: 'short',
      },
      {
        target: ':scope > div > div:nth-child(2)',
        text: '반대로, 알 수 없는 것도 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div > div:nth-child(2) li:nth-child(1)',
        text: '당사자가 무엇을 먼저 고쳐야 한다고 느끼는지,',
        pause: 'flow',
      },
      {
        target: ':scope > div > div:nth-child(2) li:nth-child(2)',
        text: '숙련된 사용자의 실제 속도와 전략,',
        pause: 'flow',
      },
      {
        target: ':scope > div > div:nth-child(2) li:nth-child(3)',
        text: '그리고 반복되는 배제의 피로와 사회적 경험이에요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '알 수 없는 것은, 장애가 있는 사용자를 평가에 참여시키거나, 당사자가 직접 보여 주는 자료에서 배웁니다.',
        pause: 'short',
      },
      {
        text: '재현되는 장벽을 찾아 기록하는 실습은, 이 장의 다섯 번째 페이지인 장벽 재현 기록에서 해 볼 거예요.',
        pause: 'short',
      },
      {
        text: '정리하면, 직접 따라 해 보기는 재현되는 장벽을 찾는 데 쓸모가 있지만, 당사자의 경험을 대신하지는 못합니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 특성은 진단명이 아니라 기능적 필요로 보고, 장애 유형과 보조기술은 일대일이 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 실제 사용은 특성과 환경이 겹친 상황이라, 사용 방식과 발생 조건을 재현할 수 있게 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(5)',
        text: '셋째, 복구 경로는 설계 결정이고, 직접 따라 해 보기는 당사자의 경험을 대신하지 못합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 같은 장애가 있는 두 사람은, 웹을 똑같이 쓸까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. 같은 장애가 있어도 기능적 필요와 사용 방식은 사람마다 다르고, 환경이 겹치면 또 달라집니다.',
        pause: 'long',
      },
      { text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.', pause: 'short' },
      {
        text: '같은 페이지를 키보드로, 화면 낭독기로, 확대해서, 말로, 스위치로 쓴다면, 막히는 곳도 같을까요?',
        pause: 'section',
      },
    ],
  },
};
