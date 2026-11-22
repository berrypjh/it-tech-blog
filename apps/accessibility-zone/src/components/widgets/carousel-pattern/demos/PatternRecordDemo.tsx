'use client';

import { DocTable, PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { TextField } from '@berrypjh/react-ui';

const fields = ['name', 'keys', 'limits', 'observed'] as const;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '채택하지 않은 패턴 하나의 이유와, 채택한 요소 셋의 기록을 채운 뒤 모범 기록과 대조하세요. 입력은 어디에도 보내거나 저장하지 않습니다.',
    rejected: '채택하지 않은 패턴 하나와 맞지 않는 이유',
    labels: {
      name: '이름 · 상태',
      keys: '진입 · 조작 · 종료 키',
      limits: '취소 · 복원 · 경계값',
      observed: '실제 관찰과 남은 보조기술 검증',
    },
    reveal: '모범 기록 보기',
    caption: '모범 기록 (교육 예시)',
    head: ['칸', '기록'],
    rejectedModel:
      '예: Tabs. 표시할 안내를 고르는 일은 여러 개를 따로 고르는 선택인데, 탭은 하나만 골라 그 패널만 보여 줍니다. 예: 자동 넘김. 사용자가 읽고 직접 넘기는 과업이라 저절로 넘어갈 이유가 없습니다.',
    elements: [
      {
        title: '표시할 안내 (checkbox 묶음)',
        model: {
          name: 'legend “표시할 안내”가 묶음의 이름. 칸마다 안내 제목이 이름이고 상태는 checked',
          keys: 'Tab으로 칸마다 들어가고 나감. Space로 고르고 풂',
          limits:
            '같은 칸을 다시 눌러 취소. 하나만 고르면 이동 버튼이 없고, 모두 풀면 “표시할 안내가 없습니다”',
          observed:
            '고른 칸의 수와 “n개 중 m번째”의 n이 같은지. 미확인: 묶음 이름과 선택 상태의 실제 낭독',
        },
      },
      {
        title: '세부 설명 (details)',
        model: {
          name: 'summary “일정 세부 설명”. 펼침 상태는 브라우저가 관리',
          keys: 'Tab으로 summary에 들어가고 Enter · Space로 여닫음',
          limits: '다시 눌러 닫음. 다른 안내로 넘겼다 돌아와도 펼친 상태는 그대로',
          observed:
            '닫힌 동안 세부 글이 보이지 않는지. 미확인: 펼침 상태의 낭독, 숨은 안내의 summary가 읽히지 않는지',
        },
      },
      {
        title: '이전 · 다음 (수동 캐러셀)',
        model: {
          name: 'section “고른 행사 안내”, 버튼 “이전 안내” · “다음 안내”, 안내마다 “2개 중 1번째: 일정” 같은 이름',
          keys: 'Tab으로 버튼에 들어가고 Enter · Space로 넘김. 초점은 누른 버튼에 그대로',
          limits: '“이전 안내”로 되돌아감. 마지막에서 다음은 처음으로',
          observed:
            '보이는 안내의 이름과 hidden인 안내의 수. 미확인: 넘겼을 때 바뀐 안내가 낭독되는지와 그 횟수',
        },
      },
    ],
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Fill in the reason for one pattern not adopted and the records of the three adopted elements, then compare with the model record. Nothing you type is sent or stored.',
    rejected: 'One pattern not adopted, and why it does not fit',
    labels: {
      name: 'Name and state',
      keys: 'Keys to enter, operate, and leave',
      limits: 'Cancel, restore, and limits',
      observed: 'Actual observation and remaining assistive technology checks',
    },
    reveal: 'Show the model record',
    caption: 'Model record (teaching example)',
    head: ['Field', 'Record'],
    rejectedModel:
      'Example: tabs. Choosing guides to show is choosing several independently, while tabs pick one and show only its panel. Example: automatic rotation. The task is for the user to read and move by hand, so there is no reason for it to move by itself.',
    elements: [
      {
        title: 'Guides to show (checkbox group)',
        model: {
          name: 'The legend “Guides to show” names the group; each box is named by a guide title, with the state checked',
          keys: 'Tab enters and leaves each box; Space chooses and clears',
          limits:
            'Press the same box again to cancel. With one chosen there are no movement buttons; with none, “There is no guide to show.”',
          observed:
            'Whether the number of chosen boxes equals the total in “m of n”. Unconfirmed: how the group name and checked state are actually spoken',
        },
      },
      {
        title: 'Details (details element)',
        model: {
          name: 'The summary “Schedule Details”; the open state is managed by the browser',
          keys: 'Tab reaches the summary; Enter and Space open and close',
          limits:
            'Press again to close. The open state stays after moving to another guide and back',
          observed:
            'Whether the detail text is not visible while closed. Unconfirmed: how the open state is spoken; that summaries of hidden guides are not read',
        },
      },
      {
        title: 'Previous and next (manual carousel)',
        model: {
          name: 'The section “Chosen event guides”, the buttons “Previous guide” and “Next guide”, and a name like “1 of 2: Schedule” on each guide',
          keys: 'Tab reaches the buttons; Enter and Space move. Focus stays on the pressed button',
          limits: '“Previous guide” goes back. Next on the last goes to the first',
          observed:
            'The name of the visible guide and the number of hidden guides. Unconfirmed: whether and how many times the changed guide is spoken',
        },
      },
    ],
  },
};

/** 최종 과업의 기록 양식. 채택하지 않은 패턴 하나의 이유와, 채택한 요소마다 네 칸을 적는다. */
export const PatternRecordDemo = () => {
  const c = useLang(content);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <TextField label={c.rejected} multiline rows={3} />
      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">
          {c.reveal} — {c.rejected}
        </summary>
        <p className="mt-sm">{c.rejectedModel}</p>
      </details>
      {c.elements.map((element) => (
        <fieldset
          key={element.title}
          className="flex flex-col gap-sm rounded-sm border border-stroke-light p-md"
        >
          <legend className="px-xs font-semiBold text-text-default">{element.title}</legend>
          <div className="grid gap-sm sm:grid-cols-2">
            {fields.map((field) => (
              <TextField
                key={field}
                label={`${element.title} — ${c.labels[field]}`}
                multiline
                rows={2}
              />
            ))}
          </div>
          <details className="rounded-sm border border-stroke-light p-md text-xsm">
            <summary className="cursor-pointer font-semiBold text-text-default">
              {c.reveal} — {element.title}
            </summary>
            <DocTable
              caption={`${c.caption} — ${element.title}`}
              head={c.head}
              rows={fields.map((field) => [c.labels[field], element.model[field]])}
            />
          </details>
        </fieldset>
      ))}
    </PracticeFrame>
  );
};
