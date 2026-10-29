import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { StageLabel } from '@/components/shared/StageLabel';

import { type RecordFields, recordLabels, type TextKey } from '../demos/recordText';
import { getToc } from '../toc';

type FieldKey = TextKey | 'steps' | 'stage';

const groups: { name: Record<Locale, string>; keys: FieldKey[] }[] = [
  { name: { ko: '상황', en: 'Situation' }, keys: ['user', 'task', 'environment', 'method'] },
  { name: { ko: '재현', en: 'Reproduction' }, keys: ['steps', 'expected', 'actual'] },
  { name: { ko: '판단', en: 'Assessment' }, keys: ['stage', 'impact', 'recovery'] },
  { name: { ko: '확인', en: 'Verification' }, keys: ['unknowns'] },
];

const content: Record<
  Locale,
  { intro: string; title: string; record: RecordFields & { stage: 'navigate' }; outro: string }
> = {
  ko: {
    intro:
      '준비된 화면의 결함 가운데 "변경 확정"이 Tab으로 닿지 않는 문제를 키보드 사용자의 관점에서 기록한 예입니다. 항목은 아래 양식과 같습니다. 운영체제와 브라우저 버전은 직접 확인한 값을 적어야 하므로 자리만 표시했습니다.',
    title: '예시 — 예약 변경 확정 버튼에 키보드로 닿지 않음',
    record: {
      user: '키보드만으로 웹을 쓰는 사용자. 마우스 사용이 어렵고 보조기술은 쓰지 않습니다.',
      task: '진료 예약 날짜를 5월 20일로 바꾸고 변경을 확정하기',
      environment: '[운영체제와 버전] · [브라우저와 버전], 창 폭 1280px, 확대 100%',
      method: '키보드 (Tab, Shift+Tab, Enter, Space)',
      steps: [
        '01.5 페이지의 "준비된 화면"에서 "결함 있는 화면"을 고릅니다.',
        'Tab으로 새 날짜 칸에 이동해 "5월 20일"을 입력합니다.',
        'Tab을 눌러 "변경 확정"으로 이동하려 합니다.',
        'Shift+Tab과 Tab으로 앞뒤를 여러 번 오가 봅니다.',
      ],
      expected: '"변경 확정"에 포커스가 가고, Enter나 Space로 변경을 확정할 수 있습니다.',
      actual:
        '포커스가 새 날짜 칸에서 "변경 확정"을 건너뛰고 화면 아래 "처음 상태로" 버튼으로 갑니다. "변경 확정"에는 어떤 키로도 닿지 않습니다. 마우스로 누르면 "변경되었습니다"가 나타납니다.',
      stage: 'navigate',
      impact:
        '키보드만 쓰는 사용자는 예약 변경을 끝낼 수 없습니다. 다른 사람의 도움을 받거나 전화로 처리해야 합니다.',
      recovery: '이 화면 안에서는 키보드로 복구할 경로가 없습니다.',
      unknowns:
        '화면 낭독기의 읽기 모드나 음성 제어로 이 요소를 누를 수 있는지는 확인하지 않았습니다. 모바일 터치와 다른 브라우저에서도 확인하지 않았습니다.',
    },
    outro:
      '실패 단계를 "탐색"으로 고른 이유는, 버튼이 눈에 보여 인식과 이해는 되지만 키보드 포커스가 그 위치로 이동하지 못해 처음 막히기 때문입니다. 같은 결함이라도 사용자와 방식이 바뀌면 처음 막히는 단계가 달라질 수 있습니다.',
  },
  en: {
    intro:
      'An example recording one defect of the prepared screen, "Confirm change" being unreachable with Tab, from a keyboard user’s perspective. The fields match the form below. OS and browser versions must be values you actually checked, so only their place is marked.',
    title: 'Example — the rebooking confirm button cannot be reached by keyboard',
    record: {
      user: 'Someone who uses the web with the keyboard only. Using a mouse is hard; no assistive technology.',
      task: 'Change the appointment date to May 20 and confirm the change',
      environment: '[OS and version] · [browser and version], 1280px window, 100% zoom',
      method: 'Keyboard (Tab, Shift+Tab, Enter, Space)',
      steps: [
        'On page 01.5, in "Prepared screen", choose "Screen with defects".',
        'Tab to the new date field and type "May 20".',
        'Press Tab to try to move to "Confirm change".',
        'Move back and forth several times with Shift+Tab and Tab.',
      ],
      expected: 'Focus reaches "Confirm change", and Enter or Space confirms the change.',
      actual:
        'Focus skips "Confirm change" after the date field and goes to the "Reset" button below the screen. No key reaches "Confirm change". Clicking it with a mouse shows "Changed".',
      stage: 'navigate',
      impact:
        'Keyboard-only users cannot finish rebooking. They need someone else’s help or have to call.',
      recovery: 'There is no keyboard recovery path within this screen.',
      unknowns:
        'Not checked whether a screen reader reading mode or voice control can press this element. Not checked on mobile touch or other browsers.',
    },
    outro:
      'The example picks "navigate" because the button is visible, so perceiving and understanding work, but it first fails because keyboard focus cannot move to it. With a different user and method, the same defect can first fail at a different stage.',
  },
};

/** 재현 기록 열한 항목을 상황 · 재현 · 판단 · 확인 네 묶음으로 보여준다. */
const RecordView = ({ locale, title }: { locale: Locale; title: string }) => {
  const { record } = content[locale];
  const labels = recordLabels[locale];

  const value = (key: FieldKey) => {
    if (key === 'stage') return <StageLabel locale={locale} id={record.stage} />;
    if (key === 'steps')
      return (
        <List ordered marker className="flex flex-col gap-2xs">
          {record.steps.map((step) => (
            <ListItem key={step}>{step}</ListItem>
          ))}
        </List>
      );
    return record[key];
  };

  return (
    <div className="my-xl rounded-md border border-stroke-light bg-background-default p-lg">
      <p className="mb-md text-xsm font-bold text-text-default">{title}</p>
      <div className="flex flex-col divide-y divide-stroke-light">
        {groups.map((group) => (
          <div key={group.name.en} className="flex flex-col gap-sm py-md last:pb-0">
            <p className="text-xxsm font-semiBold tracking-xsm text-text-primary">
              {group.name[locale]}
            </p>
            <dl className="grid gap-x-lg gap-y-sm text-xsm sm:grid-cols-[8rem_1fr]">
              {group.keys.map((key) => (
                <Fragment key={key}>
                  <dt className="font-semiBold text-text-default">{labels[key]}</dt>
                  <dd
                    className={
                      key === 'stage' ? 'font-semiBold text-text-default' : 'text-text-light'
                    }
                  >
                    {value(key)}
                  </dd>
                </Fragment>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ExampleSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.example.id}>
      <DocH2 {...toc.example} />
      <p>{c.intro}</p>
      <RecordView locale={locale} title={c.title} />
      <p>{c.outro}</p>
    </section>
  );
};
