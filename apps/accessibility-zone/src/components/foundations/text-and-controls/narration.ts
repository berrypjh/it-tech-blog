import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 02.3 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 꺾쇠 · 등호 · 키 조합처럼 읽기 어려운 기호는 말로 푼다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '모양이 같아 보이는 요소들, 무엇을 기준으로 골라야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '모양이 같아 보여도, 요소마다 전달하는 의미와 기본 동작이 다릅니다. 그래서 모양이 아니라 목적에 따라 골라야 해요.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 글의 의미를 나타내는 요소와 사용자가 누르는 요소를 목적에 따라 고를 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 목록과 인용, 강조 요소가 무슨 뜻이고 어떻게 잘못 쓰이는지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 링크와 버튼을 고르는 기준과 두 요소의 기본 동작을 비교해요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, role 속성만으로 키보드 동작이 생기는지 직접 눌러 확인합니다.',
        pause: 'section',
      },
    ],
    'text-semantics': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 글의 구조는 어떻게 전달될까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '글의 구조도 마크업으로 전달됩니다. 목록으로 표시하면, 화면 낭독기는 흔히 목록, 항목 세 개처럼 개수를 먼저 알려 줘요.',
        pause: 'short',
      },
      {
        text: '사용자는 목록을 통째로 건너뛸 수도 있고요. 가운뎃점과 줄바꿈으로만 만든 목록에는 이런 정보가 없습니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 글의 의미를 나타내는 요소를, 뜻과 흔한 오용으로 정리했습니다. 몇 가지만 짚을게요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'ul과 ol은 순서 없는 목록과 순서 있는 목록입니다. 들여쓰기를 하려고 ul을 쓰는 건 오용이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(5)',
        text: 'cite는 작품의 제목에 씁니다. 말한 사람의 이름에 쓰는 건 흔한 오용이에요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(6)',
        text: '강조는 셋으로 나뉩니다. strong은 중요함을, em은 뜻이 달라지는 강세를 나타내요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(8)',
        text: 'b와 i는 문체만 구분합니다. 그래서 중요한 경고를 b로만 표시하는 건 오용이에요.',
        pause: 'short',
      },
      {
        text: '나머지 요소의 오용도 표에 정리했습니다. 대부분 모양을 내려고 쓰는 경우예요.',
        pause: 'long',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(1)',
        text: '코드를 보면, 고치기 전에는 가운뎃점을 붙인 div로 목록을 만들고, 인용은 따옴표로, 경고는 b로 표시했어요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(2)',
        text: '고친 후에는 목록을 ul로, 인용을 blockquote로 감싸고, 말한 사람은 인용 밖에 따로 적었습니다. 경고는 strong으로 바꿨고요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 strong으로 감싸기만 하면, 중요한 정보가 전달될까요?',
        pause: 'think',
      },
      {
        text: '많은 화면 낭독기는 기본 설정에서 strong과 em을 따로 읽어 주지 않습니다. 그래서 품절 시 자동 취소처럼 놓치면 안 되는 정보는, 문장 자체로 분명하게 씁니다.',
        pause: 'short',
      },
      {
        target: 'aside',
        text: '주의할 점이 하나 있어요. CSS로 목록 기호를 지우면, Safari 같은 일부 브라우저는 목록의 의미를 접근성 트리에서 빼기도 합니다. 브라우저마다 다르니, 실제 환경에서 확인해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 목록, 인용, 강조 요소는 모양이 아니라 의미로 고르고, 모양은 CSS로 바꿉니다.',
        pause: 'section',
      },
    ],
    'link-or-button': [
      {
        target: ':scope > h2',
        text: '자, 그럼 사용자가 누르는 요소로 넘어가 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '링크와 버튼, 무엇으로 나눠야 할까요?',
        pause: 'think',
      },
      {
        text: '기준은 하나입니다. 누르면 다른 페이지나 위치로 가는가, 그러니까 URL이 바뀌는가. 그렇다면 href가 있는 a 요소입니다.',
        pause: 'short',
      },
      {
        text: '제출하고, 열고, 추가하고, 삭제하는 것처럼 지금 페이지에서 무언가를 하는가. 그렇다면 button 요소입니다.',
        pause: 'short',
      },
      {
        text: '모양은 CSS로 바꿀 수 있으니, 버튼처럼 보이는 링크도, 링크처럼 보이는 버튼도 괜찮아요.',
        pause: 'short',
      },
      {
        target: ':scope > div:nth-of-type(1) > div:nth-child(1)',
        text: '두 카드로 줄이면, 이동한다면 링크,',
        pause: 'flow',
      },
      {
        target: ':scope > div:nth-of-type(1) > div:nth-child(2)',
        text: '동작한다면 버튼입니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '이 기준은 HTML이 정한 두 요소의 뜻과 널리 쓰는 관례에서 나왔고, WCAG 성공 기준의 문장은 아닙니다. 다만 잘못 고르면, 보조기술이 알리는 역할과 실제 동작이 달라져요.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '두 요소가 실제로 어떻게 다른지, 링크와 버튼의 기본 동작 표로 볼게요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '둘 다 Tab으로 포커스를 받고 Enter에 반응합니다. 링크는 이동하고, 버튼은 실행되죠.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '차이는 Space에서 나요. 링크는 실행되지 않고 페이지가 스크롤되고, 버튼은 키를 뗄 때 실행됩니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '나머지 행도 모두 차이입니다. 새 탭에서 열기는 링크에만 있고, type 없는 버튼은 폼을 제출해요.',
        pause: 'short',
      },
      {
        text: '보조기술도 두 요소를 각각 링크와 버튼으로 알립니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그래서 잘못 고르면 사용자의 예상이 깨집니다. 링크인 줄 알고 새 탭으로 열려 했는데 아무 일도 없거나, 버튼인 줄 알고 Space를 눌렀는데 페이지만 내려가죠.',
        pause: 'short',
      },
      {
        text: 'href가 없는 a는 링크가 아니어서, Tab으로 닿지도 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(1)',
        text: '코드를 보면, 고치기 전에는 장바구니 담기를 a로, 장바구니 보기를 button으로 만들었어요. 도움말은 href가 없는 a입니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(2)',
        text: '고친 후에는 장바구니 담기를 type을 적은 button으로, 장바구니 보기와 도움말을 href가 있는 a로 바꿨습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '그럼 링크와 버튼이 키에 어떻게 반응하는지, 직접 확인해 볼게요.',
        pause: 'short',
      },
      {
        text: '비교를 위해 div에 role을 button으로, tabindex를 0으로만 붙인 요소도 함께 두었어요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: 'Tab으로 세 요소에 차례로 가서, 각각 Enter와 Space를 한 번씩 눌러 보세요.',
        pause: 'short',
      },
      {
        text: '키보드가 없다면 터치·마우스로 해 보기를 골라 보세요. Enter와 Space 줄에 표에 적힌 결과가 보입니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(5)',
        text: '세 요소는 Enter와 Space에 어떻게 반응했을까요?',
        pause: 'think',
      },
      {
        text: '링크는 Enter에만 반응하고, Space에서는 페이지가 스크롤됩니다. 버튼은 둘 다에 반응하고요.',
        pause: 'short',
      },
      {
        text: 'role을 붙인 div는 Tab으로 닿고, 보조기술에 버튼으로 알려집니다. 하지만 두 키 모두 click을 일으키지 않아요.',
        pause: 'short',
      },
      {
        target: ':scope > aside',
        text: 'ARIA 역할은 무엇인지만 알리고, 동작은 더하지 않습니다.',
        pause: 'short',
      },
      {
        text: '키 처리를 직접 더해도 진짜 버튼과 똑같아지지는 않아요. disabled나 폼 제출까지 하나씩 다시 만들어야 하거든요. 그래서 같은 일을 하는 HTML 요소가 있으면 그 요소를 씁니다.',
        pause: 'short',
      },
      {
        text: '다시 만들어야 하는 것의 전체 목록은, 1장의 첫 번째 페이지인 누구의 어떤 활동인가의, 접근성과 시맨틱 HTML 부분에서 볼 수 있어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 다른 페이지나 위치로 가면 링크, 지금 페이지에서 무언가를 하면 버튼입니다. role 속성은 역할만 알릴 뿐 키보드 동작을 더하지 않아요.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 목록, 인용, 강조는 의미로 고르고, 놓치면 안 되는 정보는 문장 자체로 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 다른 곳으로 가면 링크, 지금 페이지에서 무언가를 하면 버튼입니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, role 속성은 역할만 알리고 키보드 동작을 더하지 않습니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 모양이 같아 보이는 요소들, 무엇을 기준으로 골라야 할까요?',
        pause: 'think',
      },
      {
        text: '모양이 아니라 목적입니다. 글은 의미로, 누르는 요소는 이동인지 동작인지로 고릅니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '입력 칸이 무엇을 묻는지, 보조기술은 어떻게 알 수 있을까요?',
        pause: 'section',
      },
    ],
  },
};
