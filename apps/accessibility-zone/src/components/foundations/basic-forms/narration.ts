import type { NarrationScript } from '@it-tech-blog/ui';

/**
 * 02.4 해설 모드 대본. 화면 글을 그대로 읽지 않고 사람이 발표하듯 풀어 말한다(합쇼체 뼈대에 해요체 · '-죠' · '-거든요').
 * target은 섹션 안의 강조 대상이다. 속성 값 · 성공 기준 번호 · 기호처럼 읽기 어려운 표기는 내용으로 푼다.
 * 실습은 멈추지 않고 안내만 한다. 본문 사실을 바꾸지 않고, 본문을 고치면 해당 섹션 대본도 함께 고친다.
 */
export const narration: NarrationScript = {
  ko: {
    header: [
      {
        target: 'h1',
        text: '입력 칸이 무엇을 묻는지, 보조기술은 어떻게 알 수 있을까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '보는 사람은 배치로 알 수 있지만, 보조기술에는 마크업의 연결로만 전달됩니다.',
        pause: 'short',
      },
      {
        text: '이 페이지를 마치면, 그 연결을 HTML로 만들고 브라우저가 실제로 계산한 결과로 확인할 수 있어요.',
        pause: 'long',
      },
      { target: '#learn-heading', text: '오늘 내용은 크게 셋으로 나뉩니다.', pause: 'short' },
      {
        target: 'li:nth-child(1)',
        text: '먼저, 라벨을 입력 칸에 잇는 두 방법과 placeholder가 라벨이 아닌 이유를 봅니다.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(2)',
        text: '그다음, 입력을 돕는 속성들과 id가 하나여야 하는 이유를 살펴요.',
        pause: 'short',
      },
      {
        target: 'li:nth-child(3)',
        text: '마지막으로, 한 질문에 속한 선택지를 fieldset과 legend로 묶습니다.',
        pause: 'section',
      },
    ],
    labels: [
      {
        target: ':scope > h2',
        text: '자, 첫 번째 주제입니다. label을 입력 칸과 연결하면 무엇이 생길까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '두 가지가 생깁니다. 하나는 보조기술이 입력 칸에 도착했을 때 읽을 이름입니다. 이 이름을 접근 가능한 이름이라고 해요.',
        pause: 'short',
      },
      {
        text: '다른 하나는, 라벨 글자를 눌러도 입력 칸에 포커스가 가는 넓은 누름 영역입니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '연결 방법은 두 가지이고, 결과는 같습니다. 코드를 보면, 첫 번째는 label의 for에 입력 칸의 id를 적어 연결해요.',
        pause: 'short',
      },
      {
        text: '두 번째는 label이 입력 칸을 감싸서 연결합니다. 이때는 id가 필요 없어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'id와 name은 하는 일이 다릅니다. id는 문서 안에서 요소를 가리키는 이름이라, label의 for가 이것을 씁니다.',
        pause: 'short',
      },
      {
        text: 'name은 폼을 제출할 때 값에 붙는 이름이에요. 그래서 라벨을 연결하는 두 방법 예제는 id와 name을 일부러 다르게 썼습니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'placeholder는 입력 예시를 보여 주는 힌트이지, 라벨이 아닙니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '보이는 라벨과 placeholder의 역할 표로, 둘을 비교해 볼게요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'label은 입력 중에도 보이지만, placeholder는 글자를 쓰면 사라지고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: '누르면 입력 칸에 포커스가 가는 건 label뿐이고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '기본 글자 대비도 label은 본문과 같지만, placeholder는 흐리게 표시되는 경우가 많습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '접근 가능한 이름도 다릅니다. label은 라벨 글자가 이름이 되고, placeholder는 다른 이름이 없을 때 마지막 후보로 쓰여요. 그마저 브라우저와 보조기술 조합에 따라 다르게 전달될 수 있습니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(4)',
        text: '그래서 보이는 라벨을 두고, 형식 예시가 필요하면 라벨 아래 설명 글로 씁니다.',
        pause: 'short',
      },
      {
        text: 'placeholder만 있는 칸과 라벨이 있는 칸은 직접 비교해 볼 수 있어요. 이 비교는 1장의 첫 번째 페이지인 누구의 어떤 활동인가의, 프론트엔드에게 중요한 이유 부분에 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > aside',
        text: '그럼 라벨이 화면에 보이기만 하면 될까요?',
        pause: 'think',
      },
      {
        text: '아닙니다. 화면에 보이는 라벨도 연결해야 이름이 됩니다. 라벨이 화면에 있어도 연결되지 않으면, 보조기술에는 이름 없는 입력 칸입니다. 라벨 글자를 눌러서 입력 칸에 포커스가 가는지 보면, 연결 여부를 빠르게 확인할 수 있어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 보이는 라벨을 입력 칸에 연결해야 이름과 넓은 누름 영역이 생기고, placeholder는 라벨을 대신하지 못합니다.',
        pause: 'section',
      },
    ],
    'types-and-ids': [
      {
        target: ':scope > h2',
        text: '자, 그럼 입력 칸의 속성과 id를 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: 'input의 속성은 입력을 돕는 정보를, 브라우저와 보조기술에 함께 줍니다. 필요한 것만 정확히 씁니다.',
        pause: 'short',
      },
      {
        target: 'table',
        text: '표는 입력을 돕는 속성 네 가지를 정리했습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(1)',
        text: 'type을 email로 두면, 모바일에서 골뱅이 기호가 있는 자판이 뜨고 브라우저가 형식을 검사하고,',
        pause: 'flow',
      },
      {
        target: 'tbody tr:nth-child(2)',
        text: 'tel로 두면 모바일에서 숫자 자판이 뜨지만, 형식 검사는 없습니다.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: 'autocomplete를 email로 두면, 저장된 값으로 자동 완성되고 입력 목적을 기계가 알 수 있어요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: 'required는 브라우저 기본 검사를 켜고, 보조기술에 필수라는 정보를 전달합니다. type과 required의 근거는 HTML이에요.',
        pause: 'long',
      },
      {
        target: ':scope > aside',
        text: '그럼 WCAG의 입력 목적 식별 기준은 무엇을 요구할까요?',
        pause: 'think',
      },
      {
        text: '이 기준은 사용자 본인에 관한 정보를 받는 칸에 적용됩니다.',
        pause: 'short',
      },
      {
        text: '요구하는 결과는 그 칸의 목적을 프로그램이 알 수 있는 것입니다.',
        pause: 'short',
      },
      {
        text: 'HTML에서는 알맞은 autocomplete 토큰을 쓰는 것이, 그 결과를 내는 기법이에요.',
        pause: 'short',
      },
      {
        text: '받는 사람 이메일처럼 다른 사람의 정보를 받는 칸은 대상이 아닙니다.',
        pause: 'long',
      },
      {
        target: ':scope > h3',
        text: '그럼 id는 왜 문서 안에서 하나여야 할까요?',
        pause: 'think',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'label의 for는 id가 같은 첫 번째 요소를 가리키기 때문입니다.',
        pause: 'short',
      },
      {
        text: '같은 입력 컴포넌트를 한 페이지에 두 번 그리면서 id를 고정해 두면, 두 라벨이 모두 첫 번째 칸에 연결되고, 두 번째 칸은 이름이 없어져요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(1)',
        text: '코드 비교를 보면, 고치기 전에는 받는 사람 이메일 칸과 보내는 사람 이메일 칸이 같은 id를 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(2)',
        text: '고친 코드는 두 칸에 서로 다른 id를 줬어요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'React에서는 useId로 인스턴스마다 다른 id를 만듭니다. 이 페이지의 문의 폼도 이 방법으로 id를 만들어요.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-block]',
        text: '코드를 보면, 이메일 입력 컴포넌트가 useId로 만든 id를 label과 입력 칸에 함께 씁니다.',
        pause: 'short',
      },
      {
        text: '정리하면, 속성은 필요한 것만 정확히 쓰고, id는 문서 안에서 하나가 되게 만듭니다.',
        pause: 'section',
      },
    ],
    'fieldset-legend': [
      {
        target: ':scope > h2',
        text: '자, 이번에는 여러 선택지를 한 질문으로 묶어 볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '라디오 버튼 하나의 라벨은 이메일뿐입니다. 무엇을 묻는 질문의 답인지는, 따로 쓴 글에 있습니다.',
        pause: 'short',
      },
      {
        text: '그럼 그 질문을 p 요소로 쓰면 어떻게 될까요?',
        pause: 'think',
      },
      {
        text: '보조기술 사용자는 라디오에 도착했을 때, 이메일, 라디오 버튼만 듣고 질문을 모를 수 있습니다.',
        pause: 'short',
      },
      {
        text: 'fieldset으로 묶고 legend에 질문을 쓰면, 그 질문이 그룹의 이름이 됩니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(1)',
        text: '코드 비교를 보면, 고치기 전에는 답변 받을 방법이라는 질문이 p 요소에 있습니다.',
        pause: 'short',
      },
      {
        target: ':scope > [data-code-compare] > [data-code-block]:nth-child(2)',
        text: '고친 코드는 fieldset이 두 라디오를 묶고, legend가 그 질문을 담아요.',
        pause: 'long',
      },
      {
        target: 'table',
        text: '그럼 fieldset은 언제 필요할까요?',
        pause: 'think',
      },
      { text: '표는 다섯 가지 상황을 나눕니다.', pause: 'short' },
      {
        target: 'tbody tr:nth-child(1)',
        text: '한 질문에 대한 라디오 버튼들과 체크박스들은 fieldset과 legend를 사용합니다. 각 선택지 라벨만으로는 질문을 알 수 없으니까요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(3)',
        text: '생년월일처럼 여러 칸이 한 값을 이루면, 묶기를 권장합니다. 년, 월, 일 칸이 무엇의 일부인지 알려 주거든요.',
        pause: 'short',
      },
      {
        target: 'tbody tr:nth-child(4)',
        text: '나머지 둘은 필요 없는 경우입니다. 혼자 뜻이 통하는 체크박스 하나와, 폼 전체를 감싸는 경우예요.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: 'legend는 fieldset의 첫 번째 자식으로 둡니다.',
        pause: 'short',
      },
      {
        text: '화면 낭독기가 그룹 이름을 그룹에 들어갈 때 한 번 읽는지, 칸마다 읽는지는 제품마다 달라요. 그래서 legend는 짧은 질문으로 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(3)',
        text: 'WCAG의 정보와 관계 기준이 요구하는 것은 fieldset 자체가 아닙니다. 화면에서 보이는 묶음과 질문을 기계도 읽을 수 있게 하는 것이고, A 수준의 요구입니다.',
        pause: 'short',
      },
      {
        text: 'fieldset과 legend는 그 요구를 충족하는 대표적인 방법이라서, 표에 사용으로 적었어요.',
        pause: 'short',
      },
      {
        text: '정리하면, 한 질문에 속한 라디오와 체크박스는 fieldset으로 묶고, legend에 짧은 질문을 씁니다.',
        pause: 'section',
      },
    ],
    'contact-form': [
      {
        target: ':scope > h2',
        text: '자, 앞의 세 가지를 모두 적용한 문의 폼을 살펴볼게요.',
        pause: 'short',
      },
      {
        target: ':scope > p:nth-of-type(1)',
        text: '라벨은 for와 id로 연결하는 방법과 감싸는 방법을 모두 쓰고, 문의 종류는 fieldset으로 묶었어요. 검사는 브라우저 기본 검사를 그대로 씁니다.',
        pause: 'short',
      },
      {
        target: ':scope > figure figcaption',
        text: 'label은 입력 칸에, legend는 묶음에 이름을 줍니다. 제출되는 값은 입력 칸의 값과, 선택된 라디오 하나의 값입니다.',
        pause: 'long',
      },
      {
        target: ':scope > p:nth-of-type(2)',
        text: '직접 빈 채로 문의 보내기를 눌러 보면, 브라우저 기본 검사가 어떻게 동작하는지 보입니다.',
        pause: 'short',
      },
      {
        target: '[data-narration="skip"]',
        text: '모두 채워 다시 보내도 괜찮아요. 실제로 전송되지는 않습니다.',
        pause: 'short',
      },
      { text: '잠깐 멈추고 직접 해 보셔도 좋아요.', pause: 'long' },
      {
        target: ':scope > p:nth-of-type(3)',
        text: '빈 채로 보내면 무슨 일이 일어날까요?',
        pause: 'think',
      },
      {
        text: '브라우저가 첫 번째 빈 칸에 포커스를 옮기고 안내를 보여 줍니다. 다만 이 안내의 문구와 위치, 보조기술이 읽는 방식은 브라우저마다 달라요.',
        pause: 'short',
      },
      {
        text: '입력 칸의 연결 보기를 누르면, 칸마다 브라우저가 계산한 라벨과, 가장 가까운 fieldset의 legend 글자가 나옵니다. 이때 id는 useId가 만든 값이에요.',
        pause: 'short',
      },
      {
        target: ':scope > aside',
        text: '기본 폼만으로는 오류와 제출 결과를 충분히 알리지 못합니다. 이 문의 폼은 기본 폼까지만 다룹니다. 오류를 칸 옆 글자로 알리고 고칠 방법을 안내하는 일, 제출 결과를 알리는 일은 브라우저 기본 검사만으로는 충분하지 않아요.',
        pause: 'short',
      },
      {
        text: '그래서 별도의 설계가 필요하고, 뒤 장에서 다룹니다.',
        pause: 'short',
      },
      {
        text: '정리하면, label은 입력 칸에, legend는 묶음에 이름을 주고, 그 연결은 브라우저가 계산한 결과로 확인할 수 있습니다.',
        pause: 'section',
      },
    ],
    summary: [
      { target: ':scope > h2', text: '자, 오늘 내용을 세 가지로 정리해 볼게요.', pause: 'short' },
      {
        target: ':scope > ol > li:nth-child(1)',
        text: '첫째, 보이는 라벨을 연결해 이름을 주고, placeholder로 라벨을 대신하지 않습니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(3)',
        text: '둘째, type, autocomplete, required는 필요한 것만 쓰고, id는 문서 안에서 하나로 만듭니다.',
        pause: 'short',
      },
      {
        target: ':scope > ol > li:nth-child(5)',
        text: '셋째, 한 질문에 속한 라디오와 체크박스는 fieldset으로 묶고 legend에 질문을 씁니다.',
        pause: 'long',
      },
      {
        text: '처음 질문으로 돌아가 볼게요. 입력 칸이 무엇을 묻는지, 보조기술은 어떻게 알 수 있을까요?',
        pause: 'think',
      },
      {
        text: '배치가 아니라 마크업의 연결로 압니다. label은 입력 칸에, legend는 묶음에 이름을 줍니다.',
        pause: 'long',
      },
      {
        text: '이 페이지는 여기까지예요. 다음 페이지에서는 이 질문을 다룹니다.',
        pause: 'short',
      },
      {
        text: 'CSS로 버튼을 화면 맨 앞에 옮기면, Tab을 눌렀을 때도 그 버튼이 먼저일까요?',
        pause: 'section',
      },
    ],
  },
};
