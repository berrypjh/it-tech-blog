import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3 } from '@it-tech-blog/ui';

import { type CaseFields, CaseRecord } from '@/components/shared/CaseRecord';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '장벽을 찾았을 때 가장 흔한 기록은 "img에 alt 없음" 같은 코드 규칙 한 줄입니다. 틀린 말은 아니지만, 이 문장만으로는 누가 무엇을 못 하게 되는지, 얼마나 급한지, 어떻게 확인하는지를 알 수 없습니다.',
    compareHeading: '규칙 위반 한 줄과 과업 실패 기록',
    compare: {
      weakLabel: '규칙 위반 한 줄',
      weak: '색상 선택 버튼 이미지에 alt 없음',
      strongLabel: '과업 실패 기록',
      strong:
        '화면 낭독기 사용자가 색상 견본 버튼의 색 이름을 알 수 없어 원하는 색을 고르지 못한다 (실패 단계: 이해)',
    },
    compareBody: (
      <>
        과업 실패 기록은 <strong>사람과 과업에서 출발</strong>합니다. 같은 결함이라도 어떤 과업을
        막는지에 따라 우선순위가 달라지고, 고친 뒤에 무엇을 다시 확인해야 하는지도 분명해집니다.
      </>
    ),
    caseHeading: '사례 기록의 모양',
    caseIntro:
      '가상의 쇼핑몰에서 색상을 고르는 과업을 사례 기록으로 옮겨 봅니다. 사용자는 진단명이 아니라 사용 방식을 적습니다.',
    caseTitle: '사례 — 쇼핑몰 색상 선택, 화면 낭독기 (가상의 화면)',
    fields: {
      user: '화면 낭독기와 키보드로 웹을 쓰는 사용자',
      task: '티셔츠 상세 페이지에서 "남색"을 골라 장바구니에 담기',
      context: '데스크톱 브라우저, 화면 낭독기, 키보드로 탐색',
      barrier: '색상 견본이 글자 없는 이미지 버튼이고, 화면 낭독기가 읽을 이름이 없습니다.',
      condition: '색 이름이 견본 이미지 안에만 있고 다른 곳에 텍스트로 없을 때',
      stage: 'understand',
      impact:
        '버튼이 여러 개 있다는 것은 알지만 어느 것이 남색인지 알 수 없습니다. 추측해서 고르면 잘못 주문할 수 있습니다.',
      recovery:
        '상품 설명에 색 이름 목록이 있으면 순서로 짐작할 수 있지만 확실하지 않습니다. 없으면 고객센터나 다른 사람의 도움이 필요합니다.',
      observed: '코드에서 버튼 안에 텍스트 · alt · aria-label이 모두 없는 것을 확인했습니다.',
      verify:
        '실제 화면 낭독기와 브라우저 조합에서 이 버튼이 무엇으로 읽히는지, 모바일 화면 낭독기에서도 같은지는 아직 확인하지 않았습니다.',
    } satisfies CaseFields,
    outro:
      '01.3은 음성 입력 사례를 이 형식으로 하나 더 보여주고, 01.5는 이 형식에 재현 절차를 더한 재현 기록을 씁니다.',
  },
  en: {
    intro:
      'The most common note when someone finds a barrier is a one-line code rule such as "img has no alt". It is not wrong, but that line alone does not say who cannot do what, how urgent it is, or how to check it.',
    compareHeading: 'A rule violation line vs. a task failure record',
    compare: {
      weakLabel: 'A rule violation line',
      weak: 'Color picker button images have no alt',
      strongLabel: 'A task failure record',
      strong:
        'A screen reader user cannot tell the color name of the swatch buttons and cannot pick the color they want (failure stage: understand)',
    },
    compareBody: (
      <>
        The task failure record <strong>starts from a person and a task</strong>. The same defect
        gets a different priority depending on which task it blocks, and it becomes clear what to
        recheck after the fix.
      </>
    ),
    caseHeading: 'What a case record looks like',
    caseIntro:
      'Here the task of choosing a color in a hypothetical shop is turned into a case record. The user is written as a way of use, not a diagnosis.',
    caseTitle: 'Case — choosing a color in a shop, screen reader (hypothetical screen)',
    fields: {
      user: 'Someone who uses the web with a screen reader and keyboard',
      task: 'Pick "navy" on a T-shirt detail page and add it to the cart',
      context: 'Desktop browser, screen reader, navigating with the keyboard',
      barrier:
        'Color swatches are image buttons with no text, so a screen reader has no name to read.',
      condition: 'When the color name exists only inside the swatch image and nowhere as text',
      stage: 'understand',
      impact:
        'They know there are several buttons but not which one is navy. Guessing can lead to a wrong order.',
      recovery:
        'If the description lists color names, they may guess by order, but not with certainty. Otherwise they need customer support or another person.',
      observed: 'Checked in the code that the button has no text, alt, or aria-label.',
      verify:
        'What the button is read as with a real screen reader and browser, and whether mobile screen readers behave the same, has not been checked yet.',
    } satisfies CaseFields,
    outro:
      '01.3 shows one more case in this format, with speech input, and 01.5 uses a reproduction record that adds reproduction steps to it.',
  },
};

export const BarrierCaseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.barrierCase.id}>
      <DocH2 {...toc.barrierCase} />
      <p>{c.intro}</p>

      <DocH3>{c.compareHeading}</DocH3>
      <div className="my-lg grid gap-sm sm:grid-cols-2">
        <div className="flex flex-col gap-xs rounded-md border border-stroke-light bg-background-surface p-lg">
          <span className="text-xsm font-semiBold text-text-default">{c.compare.weakLabel}</span>
          <span className="text-xsm leading-xsm text-text-light">{c.compare.weak}</span>
        </div>
        <div className="flex flex-col gap-xs rounded-md border border-stroke-primary bg-[var(--ds-background-selected)] p-lg">
          <span className="text-xsm font-semiBold text-text-primary">{c.compare.strongLabel}</span>
          <span className="text-xsm leading-xsm text-text-default">{c.compare.strong}</span>
        </div>
      </div>
      <p>{c.compareBody}</p>

      <DocH3>{c.caseHeading}</DocH3>
      <p>{c.caseIntro}</p>
      <CaseRecord locale={locale} title={c.caseTitle} fields={c.fields} />
      <p>{c.outro}</p>
    </section>
  );
};
