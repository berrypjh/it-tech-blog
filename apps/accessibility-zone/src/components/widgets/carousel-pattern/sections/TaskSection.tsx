import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { Steps } from '@/components/shared/Steps';

import { FinalTaskDemo } from '../demos/FinalTaskDemo';
import { PatternRecordDemo } from '../demos/PatternRecordDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '이 장을 과업 하나에 맞는 패턴을 고르는 일로 마칩니다. 과업은 “행사 안내에서 표시할 항목을 고르고, 세부 설명을 펼친 뒤, 다음 안내로 이동한다”입니다. 이 장에서 배운 위젯을 모두 넣는 것이 아니라, 과업의 부분마다 맞는 것 하나씩만 씁니다.',
    caption: '과업의 부분마다 고른 패턴',
    head: ['과업의 부분', '고른 패턴', '배운 곳'],
    rows: (locale: Locale) => [
      [
        '표시할 안내를 여러 개 고른다',
        'fieldset 안의 checkbox 묶음',
        <PageLink key="a" locale={locale} id="selection-controls" />,
      ],
      [
        '세부 설명을 펼친다',
        'details와 summary',
        <PageLink key="b" locale={locale} id="disclosure-and-accordion" />,
      ],
      ['다음 안내로 이동한다', '이전 · 다음 버튼만 있는 수동 캐러셀', '이 페이지'],
    ],
    steps: [
      '“표시할 안내”에서 세 개를 고릅니다.',
      '보이는 안내의 세부 설명을 펼칩니다.',
      '“다음 안내”로 옮기고, 초점과 위치 글자를 확인합니다.',
      '고른 안내를 하나로 줄여 이동 버튼이 사라지는지, 모두 풀어 조작이 사라지는지 봅니다.',
    ],
    record:
      '조합을 직접 조작한 뒤 기록을 남깁니다. 먼저 이 장의 패턴 가운데 이 과업에 쓰지 않은 것 하나를 골라 맞지 않는 이유를 적습니다. 그다음 채택한 요소마다 이름과 상태, 키, 취소와 경계값, 실제로 관찰한 것과 보조기술로 더 확인할 것을 적습니다. 화면에서 읽은 값만 관찰로 적습니다.',
  },
  en: {
    intro:
      'The chapter ends by choosing the patterns that fit one task: “choose the items to show in an event guide, open the details, then move to the next guide.” Rather than putting in every widget from this chapter, use just one that fits each part of the task.',
    caption: 'The pattern chosen for each part of the task',
    head: ['Part of the task', 'Chosen pattern', 'Where it was taught'],
    rows: (locale: Locale) => [
      [
        'Choose several guides to show',
        'A group of checkboxes in a fieldset',
        <PageLink key="a" locale={locale} id="selection-controls" />,
      ],
      [
        'Open the details',
        'details and summary',
        <PageLink key="b" locale={locale} id="disclosure-and-accordion" />,
      ],
      [
        'Move to the next guide',
        'A manual carousel with only previous and next buttons',
        'This page',
      ],
    ],
    steps: [
      'Choose three in “Guides to show”.',
      'Open the details of the visible guide.',
      'Move with “Next guide” and check focus and the position text.',
      'Reduce the chosen guides to one and see the movement buttons disappear; clear all and see the controls disappear.',
    ],
    record:
      'After operating the combination, leave a record. First pick one pattern of this chapter that this task does not use and write why it does not fit. Then, for each adopted element, write its name and state, its keys, cancel and limits, what you actually observed, and what remains to check with assistive technology. Record as observations only values read on the screen.',
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows(locale)} />
      <Steps items={c.steps} />
      <FinalTaskDemo />
      <p>{c.record}</p>
      <PatternRecordDemo />
    </section>
  );
};
