import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 01.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 성공 기준 번호 · 표준 번호처럼 읽기 어려운 기호는 이름이나 내용으로 푼다.
 * 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      { target: 'h1', text: 'WCAG를 통과했다면, 접근성은 다 된 걸까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '흔히 이렇게 말하죠. WCAG를 통과했으니 접근성은 됐다, 사용성 테스트를 했으니 누구나 쓸 수 있다.',
        pause: 'short',
      },
      { text: '그런데 두 문장 모두, 서로 다른 질문의 답을 섞고 있습니다.', pause: 'short' },
      {
        text: '이 페이지를 마치면, 한 사례를 네 개념의 질문으로 각각 판단하고, 그 답을 섞지 않고 말할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 접근성, 사용성, 포용적 설계, 표준 적합성이 각각 무엇을 묻는지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 한 사례에서 판단이 갈리는 이유와, 표준 적합성과 과업 성공, 법적 의무를 나눠 말하는 법을 봐요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 규범 문서와 참고 문서로 문장의 근거를 가려 봅니다.',
        pause: 'section',
      },
    ],
    'four-concepts': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 네 개념은 각각 무엇을 물을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'W3C WAI는 세 개념을 이렇게 나눕니다. 접근성은 장애가 있는 사람이 동등한 경험을 하지 못하게 만드는 차별적 측면을 다루고요,',
        pause: 'flow',
      },
      {
        text: '사용성은 제품을 효과적이고 효율적이며 만족스럽게 설계하는 일, 포용은 다양성과 가능한 한 모든 사람의 참여를 다룹니다.',
        pause: 'short',
      },
      { text: '이 페이지는 여기에 표준 적합성을 더해, 네 개념을 비교해요.', pause: 'short' },
      {
        target: 'table',
        text: '표는 네 개념마다 묻는 질문, 판단 근거, 중심 대상을 정리했습니다. 묻는 질문부터 한 줄씩 볼게요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '접근성은, 장애가 있는 사람이 동등하게 과업을 끝낼 수 있나요?',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '사용성은, 정해 둔 사용자가 효과적이고 효율적이며 만족스럽게 쓰나요?',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '포용적 설계는, 누가 빠지나요? 다양한 사람이 처음부터 참여했나요?',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '표준 적합성은, 정한 범위의 페이지가 선택한 수준의 성공 기준을 모두 충족하나요?',
        pause: 'long',
      },
      {
        target: ':scope > aside > p:first-child',
        text: '네 개념은 겹치지만, 서로를 대신하지는 않습니다. 상자에 그 이유가 세 가지 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > aside li:nth-child(1)',
        text: '사용성은 정해 둔 사용자를 봅니다. 그 안에 장애가 있는 사람이 없으면, 접근성 문제를 찾지 못하죠.',
        pause: 'short',
      },
      {
        target: ':scope > aside li:nth-child(2)',
        text: '표준 적합성은 접근성의 일부를 검증할 수 있는 기준으로 만든 거예요. 체크리스트로만 다루면, 사람이 실제로 쓰는 측면을 놓칩니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside li:nth-child(3)',
        text: '포용적 설계는 언어, 기기, 경제 상황처럼 장애 밖의 배제까지 다룹니다.',
        pause: 'short',
      },
      {
        text: '그래도 접근성의 초점을 장애에 두어야, 장애가 있는 사람의 구체적인 요구에 맞는 해결책이 나와요.',
        pause: 'short',
      },
      {
        text: '정리하면, 네 개념은 묻는 질문도, 판단 근거도, 중심 대상도 다릅니다.',
        pause: 'section',
      },
    ],
    'one-case': [
      {
        target: ':scope > h2',
        text: '자, 그럼 한 사례에 네 질문을 차례로 던져 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '가상의 회원가입 절차입니다. 이메일, 비밀번호, 휴대폰 문자 인증의 세 단계로 되어 있어요. 알려진 사실 여섯 가지를 묶어서 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > div ol > li:nth-child(1)',
        text: '첫째, 세 페이지는 WCAG 2.2 AA 기준으로 평가했고, 발견한 문제를 모두 고쳤습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div ol > li:nth-child(2)',
        text: '둘째와 셋째는 안내와 오류 표시입니다. 비밀번호 규칙은 칸 위에, 오류는 칸 옆에 글자로 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > div ol > li:nth-child(3)',
        text: '하지만 제출 뒤 포커스는 새로 불러온 페이지 맨 위에 있고, 오류 요약은 없습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div ol > li:nth-child(4)',
        text: '넷째와 다섯째, 비장애 참여자 8명의 만족도는 높았고, 본인 확인은 본인 명의 휴대폰 문자 인증뿐입니다.',
        pause: 'short',
      },
      {
        target: ':scope > div ol > li:nth-child(6)',
        text: '여섯째, 화면 낭독기 사용자 2명이 참여한 평가에서는, 두 사람 모두 오류 칸을 찾는 데 오래 걸렸고, 한 명은 가입을 포기했습니다.',
        pause: 'long',
      },
      { text: '이 절차는, 접근성이 좋은 걸까요, 나쁜 걸까요?', pause: 'think' },
      {
        target: 'table',
        text: '답은 어느 질문으로 묻느냐에 따라 달라집니다. 표는 같은 절차를 네 관점으로 판단한 결과예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '표준 적합성으로 보면, 평가 범위 안에서 충족입니다.',
        pause: 'short',
      },
      {
        text: '규칙과 오류를 글자로 알리고 어느 칸인지 보여 줍니다. 오류를 찾아가는 시간은 성공 기준이 직접 요구하지 않고요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '사용성은 양호합니다. 다만 그 참여자 집단에 장애가 있는 사람은 없었어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '접근성은 미흡입니다. 화면 낭독기 사용자 한 명이 가입을 끝내지 못했으니, 동등하게 쓴다고 보기 어렵죠.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '포용적 설계도 미흡입니다. 본인 명의 휴대폰이 없는 사람은 처음부터 가입할 수 없거든요. 장애와 무관한 배제예요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'WCAG를 충족했다는 건 표준 적합성 행의 답이지, 화면 낭독기 사용자가 가입을 끝낼 수 있는지에 대한 답이 아닙니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 네 판단은 서로 모순되지 않고, 다른 질문에 답할 뿐입니다.',
        pause: 'section',
      },
    ],
    'conformance-vs-success': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 표준 적합성, 과업 성공, 법적 의무, 이 세 판단을 나눠 말하는 법입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'WCAG를 충족했으니 누구나 쓸 수 있다. 이 문장처럼 세 판단은 자주 한 문장에 섞여요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '그럼 세 판단은 각각 무엇으로 확인하고, 누가 답을 정할까요?',
        pause: 'think',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '표준 적합성은 범위와 기준 버전, 수준을 정하고, 자동 검사와 수동 검사로 평가합니다. 답은 평가자가 정해요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '과업 성공은 실제 사용자가 자기 방식으로 과업을 끝내는지 관찰하고, 답은 사용자의 실제 결과가 정합니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '법적 의무는 관할 법령 원문과 조달 기준, 담당 기관 안내로 확인하고, 답은 법령과 담당 기관이 정합니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그래서 표준 적합성과 과업 성공은 서로를 보증하지 않습니다. 회원가입 사례처럼 기준을 다 충족해도 과업에 실패할 수 있고, 기준 하나를 어겨도 사용자가 우회해서 끝낼 수 있죠.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '표준 적합성은 범위와 함께 말해야 의미가 있습니다. WCAG 2.2의 적합성 요구사항 다섯 가지 중, 두 가지가 범위를 정해요.',
        pause: 'short',
      },
      {
        text: '페이지 일부를 빼고는 적합성을 주장할 수 없고, 가입처럼 이어지는 절차는 모든 페이지가 같은 수준을 충족해야 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '자동 검사 도구도 이 구분을 대신하지 못합니다. W3C WAI는 도구만으로는 표준 충족을 판단할 수 없고, 사람의 평가가 필요하다고 설명해요.',
        pause: 'short',
      },
      {
        text: '자동 검사에서 오류가 하나도 없다는 건, 도구가 확인할 수 있는 항목에서 발견하지 못했다는 뜻입니다.',
        pause: 'long',
      },
      {
        target: ':scope > aside > p:first-child',
        text: '그래서 세 판단은 한 문장으로 합치지 않습니다. 상자에는 쓰지 않는 표현 세 가지와, 바꿔 쓰는 표현이 있어요.',
        pause: 'short',
      },
      {
        target: ':scope > aside li:nth-child(1)',
        text: '이 서비스는 법적으로 문제없다,',
        pause: 'flow',
      },
      {
        target: ':scope > aside li:nth-child(2)',
        text: '자동 검사에서 오류가 없으니 접근성을 준수한다,',
        pause: 'flow',
      },
      {
        target: ':scope > aside li:nth-child(3)',
        text: 'WCAG AA를 충족했으니 모든 사용자가 쓸 수 있다.',
        pause: 'short',
      },
      {
        target: ':scope > aside > div > p:last-child',
        text: '대신 바꿔 쓰는 표현은 범위와 방법, 결과를 나눠 말합니다. 어떤 페이지를 어떤 기준으로 평가했는지, 누구와 어떤 과업을 확인했는지, 그리고 법적 의무는 이 평가의 범위가 아니라는 것까지요.',
        pause: 'short',
      },
      {
        text: '정리하면, 세 판단은 확인 방법과 답을 정하는 주체가 다르니, 한 문장으로 합치지 않습니다.',
        pause: 'section',
      },
    ],
    'normative-vs-informative': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 어떤 문장이 꼭 지켜야 하는 요구인지, 참고인지는 어떻게 가릴까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '접근성 자료에는 성격이 다른 문장이 섞여 있습니다. 지켜야 하는 요구를 담은 문서를 규범 문서, 이해와 구현을 돕지만 요구는 아닌 문서를 참고 문서라고 해요.',
        pause: 'short',
      },
      {
        text: 'WCAG 성공 기준과 WAI-ARIA 명세는 규범입니다. Understanding 문서와 Techniques, 그리고 APG는 참고용이에요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 문장의 성격마다, 근거 문서의 예와 따르지 않았을 때의 의미를 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '규범적 요구를 따르지 않으면, 요구를 어긴 겁니다. WCAG라면 그 범위에서 해당 수준의 적합성을 주장할 수 없고요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '참고 자료는 그 자체로는 위반이 아닙니다. 다르게 만든다면 근거를 남기면 돼요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '디자인 가이드나 사내 원칙 같은 일반 UX 제안은 팀의 판단입니다. 표준의 이름으로 강제하지 않아요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그렇다고 참고 자료를 가볍게 볼 수는 없습니다. APG는 널리 굳은 키보드 관례를 요구처럼 다루는 편이 낫다고 설명해요.',
        pause: 'short',
      },
      {
        text: 'Techniques의 실패 사례는 성공 기준을 충족하지 못하는 경우를 모은 거라, 해당하면 원칙적으로 그 기준을 충족하지 못하거든요.',
        pause: 'short',
      },
      {
        text: '정리하면, 문장의 근거가 규범인지 참고인지 가려야, 무엇을 반드시 고칠지 정할 수 있습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 네 개념은 서로 다른 질문을 묻습니다. 장애가 있는 참여자가 없는 사용성 평가는 접근성 문제를 찾지 못해요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 표준 적합성, 과업 성공, 법적 의무는 나눠 말하고, 자동 검사는 그 어느 것도 보증하지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 규범은 WCAG 성공 기준과 WAI-ARIA 명세이고, APG 같은 문서는 참고용이에요.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. WCAG를 통과했다면, 접근성은 다 된 걸까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. WCAG 통과는 표준 적합성의 답입니다. 과업 성공과 법적 의무는 따로 확인해야 해요.',
        pause: 'long',
      },
      { text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.', pause: 'short' },
      {
        text: '내가 본 실패를, 다른 사람도 똑같이 볼 수 있게 적으려면 어떻게 해야 할까요?',
        pause: 'section',
      },
    ],
  },
};
