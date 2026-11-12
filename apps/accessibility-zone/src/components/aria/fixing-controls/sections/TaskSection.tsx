import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { DisclosureDemo } from '../demos/DisclosureDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        이 장에서 배운 것을 컨트롤 하나에 모읍니다. 아래 실습의 수정 전 · 후 컨트롤을 직접 조작하고,
        의미 · 이름 · 상태 · 관계 · 키보드 동작마다 관찰과 근거를 기록합니다.
      </>
    ),
    steps: [
      '수정 전 컨트롤을 마우스로 눌러 보고, Tab으로 닿는지 확인합니다.',
      '관찰 값에서 aria-expanded와 패널이 맞는지, aria-controls 대상이 있는지 봅니다.',
      '수정 후 컨트롤에 Tab으로 가서 Enter와 Space를 각각 눌러 봅니다.',
      '항목마다 수정 전 · 수정 후 관찰, 근거, 출처를 아래 기록 틀에 적습니다.',
      'DOM으로 확인하지 못한 것은 "보조기술에서 확인할 항목"으로 따로 남깁니다.',
    ],
    recordHeading: '기록 틀',
    recordIntro: (
      <>
        출처 칸은 <PageLink locale="ko" id="observation-sources" hash="observation-record" />의 관찰
        기록처럼 실제 DOM 관찰 · 브라우저 도구 · 실제 보조기술을 나눠 적습니다.
      </>
    ),
    templateCaption: '상세 보기 컨트롤 수정 기록 틀',
    templateHead: ['항목', '수정 전 관찰', '수정 후 관찰', '근거', '출처'],
    templateRows: [
      ['의미 · 키보드', '', '', '', ''],
      ['이름', '', '', '', ''],
      ['상태', '', '', '', ''],
      ['관계', '', '', '', ''],
    ],
    reveal: '풀이 보기',
    exampleNote:
      '실습 코드에서 기대되는 값으로 쓴 교육 예시 기록입니다. 직접 관찰한 값과 다르면 관찰한 값을 적습니다.',
    exampleCaption: '기록 예시',
    exampleRows: [
      [
        '의미 · 키보드',
        'div role="button", tabIndex -1. Tab으로 닿지 않아 받은 키 0회',
        'button, tabIndex 0. Enter · Space 각 1회에 펼침이 2번 바뀜',
        '역할 선언은 포커스 · 키 동작을 만들지 않음 (05.1)',
        '실제 DOM 관찰 · 키보드',
      ],
      [
        '이름',
        '보이는 글자 없음',
        '보이는 글자 "상세 보기", svg는 aria-hidden',
        'button 역할은 이름이 필요함 (WAI-ARIA 1.2)',
        '실제 DOM 관찰. 계산된 이름은 브라우저 도구',
      ],
      [
        '상태',
        'aria-expanded는 "true" 고정. 처음엔 패널이 숨어 맞지 않고, 누를 때마다 맞음 · 안 맞음이 번갈아 나옴 → 상태가 패널을 따르지 않음',
        '접힘 · 펼침마다 aria-expanded와 패널이 함께 바뀜 → 맞음',
        '상태는 실제 상태가 바뀔 때 함께 바꿈 (05.2)',
        '실제 DOM 관찰',
      ],
      [
        '관계',
        'aria-controls 대상 없음',
        'aria-controls 대상 있음',
        'aria-controls는 관계만 알리며 대상 ID가 있어야 함 (05.2)',
        '실제 DOM 관찰',
      ],
    ],
    atHeading: '보조기술에서 확인할 항목',
    at: [
      '포커스가 갔을 때 역할을 "버튼"으로, 이름을 "상세 보기"로 전하는가',
      'Enter · Space로 펼친 뒤 상태가 "펼쳐짐"으로 바뀌어 전해지는가',
      '수정 전 컨트롤을 화면 낭독기의 읽기 모드로 만났을 때 무엇이라고 전하는가',
      'aria-controls 관계를 따라가는 기능이 그 보조기술에 있는가',
    ],
    atNote: (
      <>
        이 네 줄은 DOM으로 증명할 수 없습니다. 보조기술 · 브라우저 · 운영체제 조합과 버전을 함께
        적고, 들은 결과만 기록합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        This brings what the chapter covered into one control. Operate the before and after controls
        in the exercise below, and record an observation and basis for meaning, name, state,
        relation, and keyboard behavior.
      </>
    ),
    steps: [
      'Click the before control with a mouse and check whether Tab reaches it.',
      'In the observed values, check whether aria-expanded and the panel agree, and whether the aria-controls target exists.',
      'Tab to the after control and press Enter and Space once each.',
      'For each item, write the before and after observations, the basis, and the source in the record template below.',
      'Keep anything you could not confirm in the DOM separately as "items to check with assistive technology."',
    ],
    recordHeading: 'Record template',
    recordIntro: (
      <>
        As in the observation record on{' '}
        <PageLink locale="en" id="observation-sources" hash="observation-record" />, split the
        source column into real DOM observation, browser tools, and real assistive technology.
      </>
    ),
    templateCaption: 'Record template for fixing the Show details control',
    templateHead: ['Item', 'Observed before', 'Observed after', 'Basis', 'Source'],
    templateRows: [
      ['Meaning and keyboard', '', '', '', ''],
      ['Name', '', '', '', ''],
      ['State', '', '', '', ''],
      ['Relation', '', '', '', ''],
    ],
    reveal: 'Show solution',
    exampleNote:
      'A teaching example record written from the values the exercise code is expected to produce. If what you observe differs, write what you observed.',
    exampleCaption: 'Example record',
    exampleRows: [
      [
        'Meaning and keyboard',
        'div role="button", tabIndex -1. Tab does not reach it; 0 keys received',
        'button, tabIndex 0. Enter and Space once each changed expansion twice',
        'A role declaration creates no focus or key behavior (05.1)',
        'Real DOM observation, keyboard',
      ],
      [
        'Name',
        'No visible text',
        'Visible text "Show details"; svg has aria-hidden',
        'The button role requires a name (WAI-ARIA 1.2)',
        'Real DOM observation; the computed name in browser tools',
      ],
      [
        'State',
        'aria-expanded fixed at "true". At first the panel is hidden and they disagree; each click flips between agree and disagree → the state does not follow the panel',
        'aria-expanded and the panel change together on each toggle → agree',
        'Change a state whenever the real state changes (05.2)',
        'Real DOM observation',
      ],
      [
        'Relation',
        'aria-controls target missing',
        'aria-controls target found',
        'aria-controls only tells a relation, and its target ID must exist (05.2)',
        'Real DOM observation',
      ],
    ],
    atHeading: 'Items to check with assistive technology',
    at: [
      'On focus, is the role conveyed as "button" and the name as "Show details"?',
      'After expanding with Enter or Space, is the state conveyed as changed to "expanded"?',
      'What is conveyed when the before control is met in a screen reader’s reading mode?',
      'Does that assistive technology have a feature that follows the aria-controls relation?',
    ],
    atNote: (
      <>
        These four cannot be proven from the DOM. Write down the assistive technology, browser, and
        operating system combination and versions, and record only what you heard.
      </>
    ),
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <DisclosureDemo />
      <DocH3>{c.recordHeading}</DocH3>
      <p>{c.recordIntro}</p>
      <DocTable caption={c.templateCaption} head={c.templateHead} rows={c.templateRows} />
      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
        <p className="mt-sm flex flex-wrap items-center gap-sm">
          <SourceTag locale={locale} id="example" />
          <span className="text-xxsm text-text-light">{c.exampleNote}</span>
        </p>
        <DocTable caption={c.exampleCaption} head={c.templateHead} rows={c.exampleRows} />
      </details>
      <DocH3>{c.atHeading}</DocH3>
      <p>
        <SourceTag locale={locale} id="at" />
      </p>
      <ul className="flex list-disc flex-col gap-xs pl-xl">
        {c.at.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{c.atNote}</p>
    </section>
  );
};
