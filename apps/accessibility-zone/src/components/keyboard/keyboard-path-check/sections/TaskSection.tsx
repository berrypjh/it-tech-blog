import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { PathCheckDemo } from '../demos/PathCheckDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        이 장에서 익힌 것을 경로 하나로 모읍니다. 실습은 삭제 뒤 복구가 빠진 결함 상태로 시작합니다.
        결함을 찾아 기록하고, 복구를 켠 뒤 같은 키로 다시 확인합니다.
      </>
    ),
    steps: [
      '"시작 지점" 버튼에 포커스를 두고 Tab으로 목록에 들어갑니다.',
      '방향키로 활성 항목을 옮기고 Space로 하나를 고릅니다.',
      'Tab으로 목록을 나가 "선택 항목 삭제" 버튼에서 Enter를 누릅니다.',
      'Shift+Tab으로 목록에 돌아올 수 있는지 봅니다. 돌아오면 Space로 다시 고릅니다.',
      '예상과 다른 단계를 기록하고, 복구를 켠 뒤 처음부터 다시 합니다.',
    ],
    recordHeading: '기록 틀',
    recordIntro: (locale: Locale) => (
      <>
        재현 조건은 <PageLink locale={locale} id="barrier-report" hash="write-record" />
        처럼 환경과 함께 적고, 출처는{' '}
        <PageLink locale={locale} id="observation-sources" hash="observation-record" />
        처럼 실제 DOM 관찰 · 키보드 · 실제 보조기술을 나눕니다.
      </>
    ),
    caption: '키보드 경로 기록 틀',
    head: ['키 입력', '예상 이동 · 동작', '실제 관찰', '수정', '재검증', '출처'],
    template: [
      ['Tab (진입)', '', '', '', '', ''],
      ['↓ · ↑', '', '', '', '', ''],
      ['Space', '', '', '', '', ''],
      ['Tab (이탈)', '', '', '', '', ''],
      ['Enter (삭제)', '', '', '', '', ''],
      ['Shift+Tab (재개)', '', '', '', '', ''],
    ],
    reveal: '풀이 보기',
    exampleNote:
      '실습 코드에서 기대되는 값으로 쓴 교육 예시입니다. 직접 관찰한 값과 다르면 관찰한 값을 적습니다.',
    exampleCaption: '기록 예시',
    example: [
      [
        'Enter (삭제)',
        '선택 항목이 사라지고 포커스는 삭제 버튼에 남음',
        '같음',
        '없음',
        '같음',
        '실제 DOM 관찰',
      ],
      [
        'Shift+Tab (재개)',
        '다음 항목으로 돌아와 과업을 이어 감',
        '결함 상태: tabindex="0"인 항목이 없어 목록을 건너뜀',
        '삭제 때 활성 항목을 다음 → 이전으로 복구',
        '복구 뒤: 다음 항목으로 돌아옴',
        '실제 DOM 관찰 · 키보드',
      ],
    ],
    atHeading: '보조기술에서 확인할 항목',
    at: [
      '목록의 이름과 항목 수, 활성 항목의 이름이 어떻게 전해지는가',
      'Space를 누른 뒤 선택 상태가 전해지는가',
      '삭제 뒤 돌아왔을 때 위치를 알 수 있는가',
    ],
    atNote: '이 세 줄은 DOM으로 증명할 수 없습니다. 직접 들은 결과만 조합 · 버전과 함께 적습니다.',
  },
  en: {
    intro: (
      <>
        This brings the chapter into one path. The exercise starts in a defect state with recovery
        after removal missing. Find and record the defect, turn recovery on, and check again with
        the same keys.
      </>
    ),
    steps: [
      'Put focus on the "Starting point" button and Tab into the list.',
      'Move the active item with arrows and choose one with Space.',
      'Tab out of the list and press Enter on "Remove selected item."',
      'See whether Shift+Tab returns to the list. If it does, choose again with Space.',
      'Record any step that differs from the expectation, turn recovery on, and start over.',
    ],
    recordHeading: 'Record template',
    recordIntro: (locale: Locale) => (
      <>
        Write the conditions with the environment, as in{' '}
        <PageLink locale={locale} id="barrier-report" hash="write-record" />, and split the source
        into real DOM observation, keyboard, and real assistive technology, as in{' '}
        <PageLink locale={locale} id="observation-sources" hash="observation-record" />.
      </>
    ),
    caption: 'Keyboard path record template',
    head: ['Key input', 'Expected movement or action', 'Observed', 'Fix', 'Retest', 'Source'],
    template: [
      ['Tab (enter)', '', '', '', '', ''],
      ['↓, ↑', '', '', '', '', ''],
      ['Space', '', '', '', '', ''],
      ['Tab (exit)', '', '', '', '', ''],
      ['Enter (remove)', '', '', '', '', ''],
      ['Shift+Tab (resume)', '', '', '', '', ''],
    ],
    reveal: 'Show solution',
    exampleNote:
      'A teaching example written from the values the exercise code is expected to produce. If what you observe differs, write what you observed.',
    exampleCaption: 'Example record',
    example: [
      [
        'Enter (remove)',
        'The selected item disappears and focus stays on the remove button',
        'Same',
        'None',
        'Same',
        'Real DOM observation',
      ],
      [
        'Shift+Tab (resume)',
        'Returns to the next item so the task continues',
        'Defect state: no item has tabindex="0", so the list is skipped',
        'On removal, recover the active item to next, then previous',
        'After the fix: returns to the next item',
        'Real DOM observation, keyboard',
      ],
    ],
    atHeading: 'Items to check with assistive technology',
    at: [
      'How are the list name, item count, and active item conveyed?',
      'Is the selected state conveyed after pressing Space?',
      'Can the position be understood after returning from removal?',
    ],
    atNote:
      'These three cannot be proven from the DOM. Record only what you heard, with the combination and versions.',
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
      <PathCheckDemo />
      <DocH3>{c.recordHeading}</DocH3>
      <p>{c.recordIntro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.template} />
      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
        <p className="mt-sm flex flex-wrap items-center gap-sm">
          <SourceTag locale={locale} id="example" />
          <span className="text-xxsm text-text-light">{c.exampleNote}</span>
        </p>
        <DocTable caption={c.exampleCaption} head={c.head} rows={c.example} />
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
