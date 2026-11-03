import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 02.2 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 성공 기준 번호 · 꺾쇠 태그 · 코드처럼 읽기 어려운 기호는 수준과 내용으로 푼다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '화면을 훑어볼 수 없는 사용자는, 페이지를 어떻게 구분하고 원하는 곳으로 어떻게 찾아갈까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '탭에 보이는 페이지 제목으로 페이지를 구분하고, 제목 목록과 영역 목록으로 원하는 곳에 바로 이동합니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 페이지 제목과 언어, 제목 단계, 페이지의 큰 영역을 알리는 랜드마크를 탐색 수단으로 작성할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 페이지 제목과 lang이 무엇을 알리고 언제 바뀌어야 하는지 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 제목 단계와 랜드마크로 페이지의 뼈대를 세워요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(4)',
        text: '마지막으로, 실제 페이지의 구조를 읽어 점검하고 고칩니다.',
        pause: 'section',
      },
    ],
    'title-and-lang': [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. 화면 낭독기 사용자가 페이지를 열면, 보통 무엇부터 들을까요?',
        pause: 'think',
      },
      {
        target: ':scope > h3:nth-of-type(1)',
        text: '브라우저 탭과 방문 기록, 북마크에 쓰이는 이름, 바로 페이지 제목입니다. 화면 낭독기는 보통 페이지가 열릴 때 이것부터 읽어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '탭이 여러 개 열려 있을 때, 사용자는 이 이름으로 페이지를 구분합니다. 그래서 WCAG는 A 수준에서, 주제나 목적을 설명하는 페이지 제목을 요구합니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '모든 페이지가 마켓처럼 같은 페이지 제목이면, 구분할 수 없죠. 페이지마다 다르게 쓰고, 주문 확인 다음에 마켓을 붙이듯 구별되는 내용을 앞에 둡니다.',
        pause: 'short',
      },
      {
        text: '앞에 두는 순서는 규정이 아니라 널리 쓰는 권장 방식이에요. 그리고 페이지를 새로 불러오지 않고 화면만 바꾸는 앱은, 경로가 바뀔 때 페이지 제목도 직접 바꿔야 합니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3:nth-of-type(2)',
        text: '다음은 언어입니다. 화면 낭독기는 어떤 발음 규칙으로 읽을지 어떻게 알까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '문서의 기본 언어는 html 요소의 lang으로 알립니다. A 수준 요구예요. 화면 낭독기는 이 값으로 발음 규칙과 음성을 고르고, 브라우저는 번역 제안과 맞춤법 검사 등에 씁니다.',
        pause: 'short',
      },
      {
        text: '언어가 빠지거나 틀리면, 한국어 문장을 영어 발음 규칙으로 읽는 일이 생깁니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '본문 중 다른 언어로 된 구절에는, 그 요소에 lang을 붙입니다. 이건 AA 수준 요구예요. 단, 고유명사와 기술 용어, 이미 우리말처럼 쓰는 단어는 이 요구에서 빠집니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '코드는 페이지 제목과 언어를 갖춘 문서의 뼈대입니다. 문서의 언어를 한국어로, 페이지 제목을 주문 확인 다음에 마켓으로 정하고, 영어로 된 제품 문구에만 영어를 따로 표시했어요.',
        pause: 'short',
      },
      {
        target: ':scope > aside',
        text: '주의할 점이 있습니다. lang이 맞아도 음성이 바뀌는지는 보조기술로 따로 확인합니다. 실제로 음성이 바뀌는지는 화면 낭독기와 음성 엔진, 설치된 언어에 따라 다르거든요. 마크업이 맞는지는 개발자 도구로 확인해요.',
        pause: 'short',
      },
      {
        text: '정리하면, 페이지 제목은 페이지를 구분하는 이름이고, lang은 어떤 언어로 읽을지 알리는 값입니다.',
        pause: 'section',
      },
    ],
    headings: [
      { target: ':scope > h2', text: '자, 그럼 문서의 개요가 되는 제목을 볼게요.', pause: 'short' },
      { text: 'h4는 작은 제목이고, h1은 큰 제목일까요?', pause: 'think' },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '아닙니다. h1부터 h6까지는 글자 크기가 아니라, 내용의 계층을 나타냅니다.',
        pause: 'short',
      },
      {
        text: '많은 화면 낭독기는 제목만 모아 목록으로 보여 주거나, 키 하나로 다음 제목에 이동하게 해 줘요. 제목이 계층대로 있으면, 사용자는 페이지 전체를 듣지 않고도 원하는 부분으로 바로 갑니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 제목 작성 기준을, 요구와 권장으로 나눠 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: '제목처럼 보이는 글은 h1부터 h6까지의 제목 요소로 씁니다. WCAG의 A 수준 요구예요. 굵은 글씨만으로 보이는 구조는 보조기술에 전달되지 않거든요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '제목은 내용을 설명해야 합니다. 이건 AA 수준 요구입니다. 기타, 정보처럼 무엇이든 될 수 있는 제목은 이동에 도움이 되지 않아요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '페이지 주제를 h1 하나로 두는 건 권장입니다. HTML이 h1 개수를 제한하지는 않지만, 하나로 두면 페이지 주제가 분명해져요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '단계를 건너뛰지 않는 것도 권장입니다. h2 다음 바로 h4가 오면, 사이에 빠진 내용이 있는지 혼란스럽죠.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '크기와 굵기는 CSS로 정합니다. 작게 보이려고 h4를, 크게 보이려고 h1을 쓰면, 화면의 모양과 문서의 계층이 어긋나요.',
        pause: 'short',
      },
      {
        target: '[data-code-compare] > :nth-child(1)',
        text: '고치기 전 코드를 보면, 상품명은 div이고, 배송은 작게 보이려고 h4로 썼고, 교환과 반품은 굵은 글씨일 뿐 제목 요소가 아닙니다.',
        pause: 'short',
      },
      {
        target: '[data-code-compare] > :nth-child(2)',
        text: '고친 뒤에는 상품명이 h1, 배송이 h2, 그 아래 하위 주제인 교환과 반품이 h3이 됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'section 안에 h1을 다시 써도, 단계는 자동으로 낮아지지 않습니다. 그런 규칙을 문서 개요 알고리즘이라고 하는데, 브라우저와 보조기술이 구현한 적이 없고 HTML 표준에서도 삭제됐어요. 단계는 숫자로 직접 정합니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 제목 단계는 글자 크기가 아니라 내용의 계층으로 정하고, 모양은 CSS로 바꿉니다.',
        pause: 'section',
      },
    ],
    landmarks: [
      {
        target: ':scope > h2',
        text: '자, 이번에는 랜드마크입니다. 화면 낭독기 사용자는 메뉴를 지나 본문으로 어떻게 바로 갈까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '페이지를 머리글, 메뉴, 본문, 바닥글 같은 큰 영역으로 나눠 두면 됩니다. 이렇게 나눈 영역이 랜드마크예요. 많은 화면 낭독기는 랜드마크 목록을 보여 주거나, 영역 사이를 키 하나로 이동하게 합니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure',
        text: '그림은 페이지를 머리글, 사이드바, 본문, 바닥글의 네 영역으로 나눠 보여 줍니다. 본문 안에는 제목 단계도 있어요.',
        pause: 'short',
      },
      {
        text: '랜드마크가 페이지를 영역으로 나눈다면, 제목은 본문 안의 계층을 나눕니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: 'HTML 요소 몇 개는 조건에 따라 자동으로 랜드마크가 됩니다. 표는 요소와 역할, 랜드마크가 되는 조건을 정리했어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'header와 footer는 위치에 따라 정해집니다. article이나 main, section 같은 요소 안에 있지 않을 때만 랜드마크예요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '반면 nav와 main은 항상 랜드마크가 됩니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(6)',
        text: 'section과 form은 이름이 있을 때만 랜드마크가 됩니다. aside의 조건은 표에서 따로 확인해 보세요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '그럼 같은 종류가 둘 이상이면, 어떻게 구분할까요?',
        pause: 'think',
      },
      {
        text: '이름으로 구분합니다. 이 사이트의 nav에는 사이드바의 메뉴, 페이지 끝 카드의 다음 페이지, 그리고 넓은 화면에서 보이는 목차가 있어요. 목차는 보이는 제목을 이름으로 삼습니다.',
        pause: 'short',
      },
      {
        text: '이름에 내비게이션을 다시 쓰지 않습니다. 역할은 보조기술이 이미 알려 주니까요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '코드는 랜드마크를 갖춘 상품 페이지입니다. 맨 앞에 본문으로 건너뛰기 링크가 있고, header 안에 주 메뉴 nav가, main 안에 상품 제목과 페이지 이동 nav가 있어요. main 안의 article에 든 header는 banner가 아닙니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'WCAG는 A 수준에서, 여러 페이지에 반복되는 메뉴를 건너뛸 방법을 요구합니다. 랜드마크와 제목은 보조기술 사용자에게 그 방법이 되지만, 화면 낭독기 없이 키보드만 쓰는 사용자는 랜드마크로 이동할 수 없어요.',
        pause: 'short',
      },
      {
        text: '그래서 이 사이트는 Tab을 처음 누르면 나타나는 본문으로 건너뛰기 링크도 함께 둡니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside',
        text: '랜드마크가 많으면 목록이 길어져 이동이 느려집니다. 이름 있는 section은 모두 region 랜드마크가 되고, 이 사이트의 문서 섹션도 제목으로 이름을 붙여 region이 돼요. 어떤 영역을 랜드마크로 둘지는, 과업에 따라 정하는 설계 판단입니다.',
        pause: 'short',
      },
      {
        text: '정리하면, header와 footer는 위치에 따라 랜드마크가 됩니다. section과 form은 이름이 있을 때만 랜드마크가 되고, 같은 종류가 여럿이면 이름으로 구분해요.',
        pause: 'section',
      },
    ],
    'fix-case': [
      {
        target: ':scope > h2',
        text: '자, 마지막 주제입니다. 실제 페이지의 구조를 점검하고 고쳐 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '가상의 상품 페이지는 화면에서는 멀쩡해 보이지만, 구조를 읽으면 다섯 군데가 비어 있습니다.',
        pause: 'short',
      },
      {
        text: '점검은 페이지 제목, 언어, 제목 단계, 랜드마크, 건너뛰기 순서로 하고, 항목마다 사용자가 무엇을 못 하게 되는지를 함께 적습니다.',
        pause: 'short',
      },
      {
        target: '[data-code-compare] > :nth-child(1)',
        text: '고치기 전 코드는 페이지 제목이 그냥 마켓이고, lang이 없고, 영역이 모두 div입니다.',
        pause: 'short',
      },
      {
        target: '[data-code-compare] > :nth-child(2)',
        text: '고친 후 코드는 상품 이름을 앞에 둔 페이지 제목과 한국어 lang을 갖췄어요. 건너뛰기 링크와 header, nav, main, footer도 있습니다.',
        pause: 'short',
      },
      { target: ':scope > div > ol', text: '점검 결과는 다섯 가지입니다.', pause: 'short' },
      {
        target: ':scope > div > ol > li:nth-child(1)',
        text: '페이지 제목과 lang이 비어 있어, 어느 상품인지도, 어떤 발음 규칙으로 읽을지도 알 수 없습니다.',
        pause: 'short',
      },
      {
        target: ':scope > div > ol > li:nth-child(3)',
        text: '상품명은 div이고 첫 제목은 h4라서, 제목 목록에 페이지 주제가 없어요.',
        pause: 'short',
      },
      {
        target: ':scope > div > ol > li:nth-child(4)',
        text: '나머지 둘, 랜드마크와 건너뛰기 링크가 없으니 메뉴를 건너뛰고 본문으로 갈 방법이 없습니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '그럼 지금 보고 있는 이 페이지의 구조는 어떨까요?',
        pause: 'think',
      },
      {
        text: '같은 점검을 이 페이지에 직접 해 볼 수 있습니다. 결과는 실제 DOM에서 읽은 값이에요.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '버튼을 누르면 이 페이지의 페이지 제목과 lang, 제목 목록, 랜드마크 목록을 읽어 보여 줍니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '읽은 결과에서는, 제목 목록이 h1 하나에서 시작해 h2와 h3로 들여쓰기가 맞는지,',
        pause: 'flow',
      },
      { text: '이름이 같은 nav가 없는지,', pause: 'flow' },
      {
        text: '이 페이지의 header가 article 안에 있어 banner로 잡히지 않는지 확인합니다.',
        pause: 'short',
      },
      {
        text: '언어 설정을 바꾸고 다시 읽으면, 페이지 제목과 lang이 함께 바뀌어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 구조 점검은 페이지 제목, 언어, 제목 단계, 랜드마크, 건너뛰기 순서로 합니다. 항목마다 사용자가 무엇을 못 하게 되는지도 적어요. 지금 보는 이 페이지도 실제 DOM에서 구조를 읽어 같은 순서로 점검할 수 있어요.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 페이지 제목은 페이지마다 다르게 쓰고, 다른 언어로 된 구절은 lang으로 알립니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, 제목 단계는 글자 크기가 아니라 내용의 계층으로 정합니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(4)',
        text: '셋째, 랜드마크는 위치나 이름으로 정해지고, 같은 종류가 여럿이면 이름으로 구분합니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 화면을 훑어볼 수 없는 사용자는, 페이지를 어떻게 구분하고 원하는 곳으로 어떻게 찾아갈까요?',
        pause: 'think',
      },
      {
        text: '페이지 제목으로 페이지를 구분하고, 제목과 랜드마크로 원하는 곳에 바로 이동합니다. 그래서 이 구조는 꾸밈이 아니라 탐색 수단입니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: '모양이 같아 보이는 요소들, 무엇을 기준으로 골라야 할까요?',
        pause: 'section',
      },
    ],
  },
};
