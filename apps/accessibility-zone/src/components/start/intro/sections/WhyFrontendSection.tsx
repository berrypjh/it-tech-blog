import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeCompare, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { KeyboardDemo } from '../demos/KeyboardDemo';
import { LabelDemo } from '../demos/LabelDemo';
import { MarkupPipelineDiagram } from '../diagrams/MarkupPipelineDiagram';
import { getToc } from '../toc';

const DEVTOOLS_A11Y = 'https://developer.chrome.com/docs/devtools/accessibility/reference';

const content = {
  ko: {
    sourceHeading: '접근성 정보는 프론트엔드 코드에서 나온다',
    sourceBody:
      '접근성은 별도 부서가 마지막에 붙이는 레이어가 아닙니다. 사용자가 실제로 받는 정보는 프론트엔드가 작성한 마크업에서 출발합니다.',
    sourceNote: (
      <>
        개발자가 작성한 DOM과 의미 정보는 브라우저가 해석하며, 그 해석 결과가{' '}
        <strong>보조기술이 사용할 수 있는 정보</strong>를 결정합니다.
      </>
    ),
    exampleAHeading: '예제 A — 동작을 나타내는 요소',
    exampleABody: (
      <>
        저장 버튼이 필요합니다. 디자인상 <code>div</code>에 스타일을 입혀도 똑같아 보입니다.
      </>
    ),
    exampleACode: {
      before: `<div class="btn" onclick="save()">저장</div>`,
      after: `<button type="button" onclick="save()">저장</button>`,
    },
    diffCaption: 'div와 button의 기본 동작 비교',
    diffRows: [
      ['Tab으로 포커스', '안 됨', '됨'],
      ['Enter / Space로 실행', '안 됨', '됨'],
      ['보조기술에 전달되는 역할', '없음 (generic)', 'button'],
      ['추가로 작성한 코드', '—', '없음'],
    ],
    exampleAOutro:
      '마우스로는 둘 다 정상 동작하므로 개발자 화면에서는 문제가 드러나지 않습니다. 직접 확인해 보세요.',
    exampleBHeading: '예제 B — 입력 필드의 이름',
    exampleBBody: '입력 칸 위에 텍스트를 두지 않고 placeholder로만 안내하고 싶습니다.',
    exampleBCode: {
      before: `<input type="email" placeholder="이메일" />`,
      after: `<label for="email">이메일</label>\n<input id="email" type="email" />`,
    },
    exampleBExplain: (
      <>
        placeholder는 값을 입력하면 사라지는 <strong>힌트</strong>이지 필드의 이름이 아닙니다. 입력
        도중에는 무엇을 적는 칸이었는지 확인할 수 없습니다. <code>label</code>을 연결하면 필드에
        안정적인 이름이 생기고, 라벨을 눌러도 입력 칸이 활성화되어 클릭 대상도 넓어집니다.
      </>
    ),
    quickCheckTitle: '도구 없이 30초 확인',
    quickCheckTab: (
      <>
        마우스를 치우고 <strong>Tab 키만으로</strong> 작업 중인 화면을 훑어봅니다. 도구를 설치하기
        전에 할 수 있는 가장 저렴한 확인 방법입니다.
      </>
    ),
    quickCheckDevtools: (
      <>
        요소의 역할과 이름은 Chrome DevTools → Elements → <strong>Accessibility</strong> 탭에서 바로
        볼 수 있습니다. <ExternalLink href={DEVTOOLS_A11Y}>DevTools 접근성 레퍼런스</ExternalLink>
      </>
    ),
    outro: (
      <>
        이 예제들의 목적은 구현 방법이 아니라,{' '}
        <strong>비슷해 보이는 UI라도 DOM의 의미와 기본 상호작용 계약이 다를 수 있다</strong>는 것을
        보여 주는 데 있습니다. <code>div</code>에 버튼 동작을 직접 부여하는 방법은 ARIA, 키보드
        접근성 챕터에서 다룹니다.
      </>
    ),
  },
  en: {
    sourceHeading: 'Accessibility information comes from frontend code',
    sourceBody:
      'Accessibility is not a layer another team adds at the end. The information people actually receive starts from the markup frontend developers write.',
    sourceNote: (
      <>
        The browser interprets the DOM and semantics you write, and that interpretation decides{' '}
        <strong>what assistive technology can use</strong>.
      </>
    ),
    exampleAHeading: 'Example A — an element that performs an action',
    exampleABody: (
      <>
        You need a save button. Styling a <code>div</code> makes it look exactly the same.
      </>
    ),
    exampleACode: {
      before: `<div class="btn" onclick="save()">Save</div>`,
      after: `<button type="button" onclick="save()">Save</button>`,
    },
    diffCaption: 'Default behavior of div vs. button',
    diffRows: [
      ['Focus with Tab', 'No', 'Yes'],
      ['Activate with Enter / Space', 'No', 'Yes'],
      ['Role exposed to assistive tech', 'None (generic)', 'button'],
      ['Extra code written', '—', 'None'],
    ],
    exampleAOutro:
      'Both work with a mouse, so the problem never shows up on the developer’s screen. Try it yourself.',
    exampleBHeading: 'Example B — the name of an input field',
    exampleBBody: 'You want to guide users with a placeholder only, without text above the field.',
    exampleBCode: {
      before: `<input type="email" placeholder="Email" />`,
      after: `<label for="email">Email</label>\n<input id="email" type="email" />`,
    },
    exampleBExplain: (
      <>
        A placeholder is a <strong>hint</strong> that disappears once you type, not the field’s
        name. While typing, you can no longer check what the field was for. Connecting a{' '}
        <code>label</code> gives the field a stable name, and clicking the label also focuses the
        input, which enlarges the click target.
      </>
    ),
    quickCheckTitle: 'A 30-second check without tools',
    quickCheckTab: (
      <>
        Put the mouse away and move through the screen you are building with{' '}
        <strong>only the Tab key</strong>. It is the cheapest check you can do before installing
        anything.
      </>
    ),
    quickCheckDevtools: (
      <>
        You can see an element’s role and name in Chrome DevTools → Elements →{' '}
        <strong>Accessibility</strong>.{' '}
        <ExternalLink href={DEVTOOLS_A11Y}>DevTools accessibility reference</ExternalLink>
      </>
    ),
    outro: (
      <>
        These examples are not about implementation. They show that{' '}
        <strong>
          UI that looks the same can have different DOM semantics and default interaction contracts
        </strong>
        . How to give a <code>div</code> button behavior yourself is covered in the ARIA and
        keyboard accessibility chapters.
      </>
    ),
  },
};

export const WhyFrontendSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.whyFrontend.id}>
      <DocH2 {...toc.whyFrontend} />

      <DocH3>{c.sourceHeading}</DocH3>
      <p>{c.sourceBody}</p>
      <MarkupPipelineDiagram locale={locale} />
      <Callout variant="note">
        <p>{c.sourceNote}</p>
      </Callout>

      <DocH3>{c.exampleAHeading}</DocH3>
      <p>{c.exampleABody}</p>
      <CodeCompare {...c.exampleACode} />
      <DocTable
        caption={c.diffCaption}
        head={['', '<div onclick>', '<button>']}
        rows={c.diffRows}
      />
      <p>{c.exampleAOutro}</p>
      <KeyboardDemo locale={locale} />

      <DocH3>{c.exampleBHeading}</DocH3>
      <p>{c.exampleBBody}</p>
      <CodeCompare {...c.exampleBCode} />
      <p>{c.exampleBExplain}</p>
      <LabelDemo locale={locale} />

      <Callout variant="practice" title={c.quickCheckTitle}>
        <p>{c.quickCheckTab}</p>
        <p>{c.quickCheckDevtools}</p>
      </Callout>

      <p>{c.outro}</p>
    </section>
  );
};
