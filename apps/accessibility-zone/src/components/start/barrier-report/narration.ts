import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 01.5 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 키 조합 · 창 폭 · 성공 기준 번호처럼 읽기 어려운 기호는 내용으로 푼다.
 * 실습과 양식은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '내가 본 실패를, 다른 사람도 똑같이 볼 수 있게 적으려면 어떻게 해야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이 페이지는 1장에서 본 사용자, 과업, 환경, 실패 단계를 한 장의 기록으로 모읍니다.',
        pause: 'short',
      },
      {
        text: '연습용 예약 변경 화면에서 장벽을 직접 찾아볼 거예요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 다른 사람이 같은 조건에서 같은 실패를 볼 수 있게 재현 기록을 쓸 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 재현 기록의 열한 항목에 무엇을 적는지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 준비된 화면에서 장벽을 찾고, 예시 기록에서 실패 단계를 고르는 법을 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 양식으로 자기 기록을 쓰고, 점검 질문으로 약한 기록을 고칩니다.',
        pause: 'section',
      },
    ],
    'what-is-record': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 재현 기록이란 뭘까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '내가 본 실패를, 다른 사람이 같은 조건에서 다시 보게 해 주는 문서입니다. 고칠 사람은 기록만 보고 문제를 확인하고, 고친 뒤에는 같은 절차로 다시 확인하죠.',
        pause: 'short',
      },
      {
        text: '이 장의 첫 페이지에서 본 사례 기록은, 누가 어떤 과업에서 막혔는지를 정리했어요. 재현 기록은 이것을 재현 절차와 기대 결과, 실제 결과를 중심으로 다시 묶습니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표에는 재현 기록의 열한 항목과, 항목마다 적는 것이 있습니다. 그중 몇 항목만 한 줄씩 볼게요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '사용자는 진단명이 아니라, 그 순간의 사용 방식을 적습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: '재현 절차는 다른 사람이 그대로 따라 할 수 있게, 한 단계씩 적고요,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(7)',
        text: '실제 결과에는 관찰한 사실만 적고, 해석은 덧붙이지 않습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(8)',
        text: '실패 단계는 과업 흐름 여섯 단계 중, 처음 막힌 단계 하나를 고릅니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(11)',
        text: '그리고 더 확인할 것에는, 직접 확인하지 못한 환경과 보조기술, 코드로만 예상한 것을 적어요.',
        pause: 'long',
      },
      {
        text: '정리하면, 재현 기록은 사례 기록에 절차와 결과를 더해, 다른 사람이 같은 실패를 다시 보게 하는 문서입니다.',
        pause: 'section',
      },
    ],
    'practice-screen': [
      {
        target: ':scope > h2',
        text: '자, 준비된 화면에서 장벽을 직접 찾아볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '이 페이지를 위해 만든 연습용 예약 변경 화면입니다. 결함 있는 화면에는 장벽 몇 가지를 일부러 넣었고, 비교용 수정 화면은 그 장벽을 고친 거예요.',
        pause: 'short',
      },
      {
        text: '포커스를 가두거나 깜박이거나 시간을 제한하는 결함은 없습니다. 언제든 Tab으로 빠져나오거나, 처음 상태로 버튼으로 되돌릴 수 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > aside > p:first-child',
        text: '실습 상자의 제목은, 같은 과업을 여러 방식으로 해 보기입니다. 할 일이 여섯 가지, 순서대로 있어요.',
        pause: 'short',
      },
      {
        target: 'aside li:nth-child(1)',
        text: '먼저 Tab과 Enter, Space만으로 과업을 끝까지 해 보고, 마우스나 터치로도 해 보며 차이를 적습니다.',
        pause: 'short',
      },
      {
        target: 'aside li:nth-child(3)',
        text: '날짜를 비운 채 확정해, 오류를 무엇으로 알 수 있는지와 칸의 뜻이 남는지도 봐요.',
        pause: 'short',
      },
      {
        target: 'aside li:nth-child(5)',
        text: '개발자 도구로 이름과 역할을 확인하고, 마지막에 비교용 수정 화면에서 다시 해 봅니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside > div > p:nth-of-type(1)',
        text: '맥의 사파리는 기본 설정에서 Tab이 버튼을 건너뜁니다. Option과 Tab을 함께 누르거나, 사파리 설정의 고급에서 Tab 키로 각 항목을 강조하는 설정을 켠 뒤 해 보세요.',
        pause: 'short',
      },
      {
        text: '같은 절차도 환경에 따라 결과가 달라서, 기록에 환경을 적는 거예요.',
        pause: 'short',
      },
      {
        target: ':scope > aside > div > p:nth-of-type(2)',
        text: '키보드가 없는 휴대폰에서는 Tab 이동을 확인할 수 없습니다. 터치로 과업을 해 본 뒤, 결함 목록과 코드를 수정 화면과 비교하면 됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-narration="skip"]',
        text: '준비된 화면에서는 결함 있는 화면과 비교용 수정 화면을 골라 바꿀 수 있습니다. 잠깐 멈추고, 실습 상자의 순서대로 직접 해 보셔도 좋아요.',
        pause: 'long',
      },
      {
        target: ':scope > details:nth-of-type(1)',
        text: '다 해 봤다면, 이 화면에 넣은 결함 목록을 펼쳐서 내가 찾은 것과 맞춰 보세요.',
        pause: 'short',
      },
      {
        target: ':scope > details:nth-of-type(2)',
        text: '결함 화면의 코드도 펼쳐 볼 수 있습니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 같은 과업을 방식을 바꿔 해 보면, 한 방식으로는 보이지 않던 장벽이 드러납니다.',
        pause: 'section',
      },
    ],
    'example-record': [
      {
        target: ':scope > h2',
        text: '자, 그럼 찾은 장벽 하나를 기록으로 옮긴 예를 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '변경 확정에 Tab으로 닿지 않는 문제를, 키보드 사용자의 관점에서 적은 예입니다. 열한 항목을 상황, 재현, 결과, 확인 네 묶음으로 나눠 보여 줘요.',
        pause: 'short',
      },
      {
        target: '[data-part="user"]',
        text: '먼저 상황 묶음. 보조기술 없이 키보드만 쓰는 사용자가, 진료 예약 날짜를 5월 20일로 바꾸려 합니다.',
        pause: 'short',
      },
      {
        target: '[data-part="environment"]',
        text: '환경에는 창 폭과 확대율을 적었습니다. 운영체제와 브라우저 버전은 직접 확인한 값을 적을 자리만 두었어요.',
        pause: 'short',
      },
      {
        target: '[data-part="steps"]',
        text: '다음은 재현 묶음. 결함 있는 화면에서 새 날짜를 입력한 뒤, Tab으로 변경 확정에 가려고 앞뒤로 오가 봅니다.',
        pause: 'short',
      },
      {
        target: '[data-part="expected"]',
        text: '기대 결과는, 변경 확정에 포커스가 가서 Enter나 Space로 확정할 수 있는 겁니다.',
        pause: 'short',
      },
      {
        target: '[data-part="actual"]',
        text: '실제로는 포커스가 변경 확정을 건너뛰고, 화면 아래 처음 상태로 버튼으로 갑니다. 어떤 키로도 닿지 않죠.',
        pause: 'short',
      },
      {
        target: '[data-part="stage"]',
        text: '결과 묶음에서 실패 단계는 탐색입니다.',
        pause: 'short',
      },
      {
        target: '[data-part="impact"]',
        text: '키보드만 쓰는 사용자는 예약 변경을 끝낼 수 없고, 이 화면 안에서 키보드로 복구할 경로도 없어요.',
        pause: 'short',
      },
      {
        target: '[data-part="unknowns"]',
        text: '마지막으로 확인. 화면 낭독기나 음성 입력, 모바일 터치와 다른 브라우저에서는 확인하지 않았다고 적어 둡니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 실패 단계는 왜 탐색일까요?',
        pause: 'think',
      },
      {
        text: '버튼이 눈에 보여서 인식과 이해는 되지만, 키보드 포커스가 그 위치로 가지 못해 처음 막히기 때문입니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 실패 단계는 처음 막힌 단계 하나를 고르고, 같은 결함도 사용자와 방식이 바뀌면 달라질 수 있습니다.',
        pause: 'section',
      },
    ],
    'write-record': [
      {
        target: ':scope > h2',
        text: '자, 직접 기록해 볼 차례입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '예시에서 다루지 않은 결함 세 가지 중 하나를 골라 기록해 보세요.',
        pause: 'short',
      },
      {
        text: '라벨 없이 안내 문구만 있는 날짜 칸, 색으로만 알리는 오류, 알리지 않는 완료 메시지예요. 사용자나 방식을 바꿔 변경 확정 결함을 다시 적어도 좋습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div',
        text: '양식은 빠진 필수 항목을 알려 주고, 다 채우면 기록을 평문으로 복사합니다. 입력한 내용은 저장되지 않으니, 다 쓴 기록은 복사해 두면 좋아요.',
        pause: 'short',
      },
      { text: '문서 편집기에 직접 써도 항목만 같으면 돼요.', pause: 'short' },
      { text: '잠깐 멈추고, 기록 하나를 끝까지 써 보셔도 좋아요.', pause: 'long' },
      {
        text: '정리하면, 열한 항목을 함께 적어야, 다른 사람이 같은 실패를 다시 볼 수 있습니다.',
        pause: 'section',
      },
    ],
    'review-record': [
      {
        target: ':scope > h2',
        text: '자, 마지막으로 다 쓴 기록을 점검해 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '표의 질문에 하나라도 아니오가 나오면, 그 항목을 고칩니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 점검 질문마다, 약한 기록과 고친 기록의 예를 나란히 보여 줍니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '다른 사람이 절차만 보고 같은 결과를 볼 수 있나요? 확정 버튼이 안 됨, 으로는 부족합니다. 새 날짜 입력 후 Tab을 누르면 포커스가 확정 버튼을 건너뜀, 처럼 적어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '실패 단계가 처음 막힌 단계인가요? 완료가 아니라 탐색입니다. 버튼은 보이지만 Tab으로 닿지 않으니까요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(6)',
        text: '영향을 과업 기준으로 적었나요? WCAG 기준 위반이 아니라, 예약 변경을 끝낼 수 없음이 영향이에요. 기준 번호는 덧붙이는 정보입니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '나머지 질문도 같은 식으로 봅니다. 사용자는 사용 방식으로, 환경은 설정값까지, 확인하지 못한 것도 빠짐없이 적어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 약한 기록에는 해석이나 규칙 이름만 있고, 고친 기록에는 관찰한 사실과 사용 방식이 있습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 재현 기록은 누가 무엇을 하려다 어디서 막혔나에서 출발해, 열한 항목을 함께 적습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 실패 단계는 처음 막힌 단계 하나를 고릅니다. 같은 결함도 사용자와 방식에 따라 달라질 수 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 직접 확인한 것과 예상한 것을 나누고, WCAG 번호는 영향과 재현 절차를 대신하지 않습니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 내가 본 실패를, 다른 사람도 똑같이 볼 수 있게 적으려면 어떻게 해야 할까요?',
        pause: 'think',
      },
      {
        text: '사용자, 과업, 환경과 재현 절차, 기대와 실제 결과를 한 장의 재현 기록으로 적습니다.',
        pause: 'long',
      },
      { text: '이 페이지는 여기까지예요. 이렇게 1장이 끝났습니다.', pause: 'short' },
      {
        text: '다음 페이지부터는 2장, 웹 플랫폼 기본이에요. 2장은 이 질문으로 시작합니다.',
        pause: 'short',
      },
      { text: '버튼 하나가 동작하지 않을 때, 원인은 어디에 있을까요?', pause: 'section' },
    ],
  },
};
