import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { PracticeScreen } from '../demos/PracticeScreen';
import { getToc } from '../toc';

const defectCode = (c: { placeholder: string; confirm: string; onError: string; onDone: string }) =>
  `<input type="text" placeholder="${c.placeholder}" />

<!-- ${c.onError} -->
<input type="text" class="border-error" />

<div class="btn" onclick="confirmChange()">${c.confirm}</div>

<!-- ${c.onDone} -->
<p class="text-success">…</p>`;

const content = {
  ko: {
    intro:
      '아래는 이 페이지를 위해 만든 연습용 예약 변경 화면입니다. "결함 있는 화면"에는 장벽 몇 가지를 일부러 넣었고, "비교용 수정 화면"은 같은 화면에서 그 장벽을 고친 것입니다. 포커스를 가두거나 깜박이거나 시간을 제한하는 결함은 없으므로 언제든 Tab으로 빠져나오거나 "처음 상태로"로 되돌릴 수 있습니다.',
    howTitle: '같은 과업을 여러 방식으로 해 보기',
    how: [
      '마우스를 쓰지 않고 Tab · Shift+Tab · Enter · Space만으로 과업을 끝까지 해 봅니다.',
      '마우스나 터치로 같은 과업을 해 보고 차이를 적습니다.',
      '날짜를 비운 채로 확정해 보고, 오류를 무엇으로 알 수 있는지 봅니다.',
      '날짜를 입력하는 도중에 무엇을 적는 칸이었는지 다시 확인할 수 있는지 봅니다.',
      '컴퓨터 브라우저라면 DevTools의 Accessibility 탭에서 입력 칸과 확정 버튼의 이름 · 역할을 확인합니다.',
      '"비교용 수정 화면"에서 같은 과업을 다시 해 보고 무엇이 달라졌는지 비교합니다.',
    ],
    safari:
      'macOS Safari는 기본 설정에서 Tab이 입력 칸과 팝업 메뉴로만 이동해, 수정 화면의 "변경 확정" 버튼까지 건너뜁니다. Option+Tab으로 이동하거나, 시스템 설정 > 키보드에서 "키보드 탐색"을 켠 뒤 해 보세요. 같은 절차라도 환경에 따라 결과가 달라지므로 기록에 환경을 적습니다.',
    phone:
      '키보드가 없는 휴대폰에서는 Tab 이동을 확인할 수 없습니다. 터치로 과업을 해 본 뒤, 아래 결함 목록과 코드를 수정 화면과 비교하면 같은 내용을 기록할 수 있습니다.',
    defectsSummary: '이 화면에 넣은 결함 보기 (먼저 직접 찾아보세요)',
    defects: [
      <>
        새 날짜 칸에 보이는 라벨이 없고 <code>placeholder</code>만 있습니다. 입력을 시작하면 안내가
        사라집니다.
      </>,
      <>
        &quot;변경 확정&quot;은 <code>div</code>에 click 처리만 붙인 요소라서 Tab으로 닿지 않고
        Enter · Space로 누를 수 없습니다.
      </>,
      <>날짜를 비우고 확정하면 테두리 색만 바뀌고, 무엇이 잘못됐는지 글자로 알려주지 않습니다.</>,
      <>
        변경이 끝나면 글자만 나타납니다. 상태 메시지(<code>role=&quot;status&quot;</code>)가
        아니라서, 포커스를 옮기지 않으면 화면 낭독기가 알리지 않을 수 있습니다.
      </>,
    ],
    codeSummary: '결함 화면의 코드 보기',
    codeLabel: '결함 화면의 핵심 마크업 (요약)',
    placeholder: '새 날짜 (예: 5월 20일)',
    confirm: '변경 확정',
    onError: '오류일 때: 테두리 색만 바뀜',
    onDone: '완료일 때: 화면에 글자만 나타남',
  },
  en: {
    intro:
      'Below is a practice rebooking screen made for this page. The "screen with defects" has a few barriers added on purpose, and the "fixed screen for comparison" is the same screen with those barriers fixed. Nothing traps focus, flashes, or imposes a time limit, so you can always Tab out or press "Reset" to start over.',
    howTitle: 'Do the same task in several ways',
    how: [
      'Without a mouse, try to finish the task using only Tab, Shift+Tab, Enter, and Space.',
      'Do the same task with a mouse or touch and note the differences.',
      'Confirm with the date left empty and see how you can tell there is an error.',
      'While typing the date, see whether you can still check what the field was for.',
      'In a desktop browser, check the name and role of the field and the confirm button in the DevTools Accessibility pane.',
      'Do the task again on the "fixed screen for comparison" and compare what changed.',
    ],
    safari:
      'By default, Tab in macOS Safari moves only to text fields and pop-up menus, so it skips even the fixed screen’s "Confirm change" button. Move with Option+Tab, or turn on "Keyboard navigation" in System Settings > Keyboard first. The same steps can give different results in different environments, which is why a record includes the environment.',
    phone:
      'On a phone without a keyboard you cannot check Tab movement. Do the task by touch, then compare the defect list and code below with the fixed screen; you can record the same things that way.',
    defectsSummary: 'Show the defects in this screen (try finding them first)',
    defects: [
      <>
        The new date field has no visible label, only a <code>placeholder</code>. The hint
        disappears once you start typing.
      </>,
      <>
        &quot;Confirm change&quot; is a <code>div</code> with only a click handler, so Tab never
        reaches it and Enter or Space cannot press it.
      </>,
      <>
        Confirming with an empty date only changes the border color and never says in text what is
        wrong.
      </>,
      <>
        When the change is done, text simply appears. It is not a status message (
        <code>role=&quot;status&quot;</code>), so a screen reader may not announce it unless focus
        moves there.
      </>,
    ],
    codeSummary: 'Show the defect screen code',
    codeLabel: 'Key markup of the defect screen (summary)',
    placeholder: 'New date (e.g. May 20)',
    confirm: 'Confirm change',
    onError: 'On error: only the border color changes',
    onDone: 'When done: text simply appears on screen',
  },
};

const detailsClass =
  'my-md overflow-hidden rounded-md border border-stroke-light bg-background-surface';
const summaryClass =
  'cursor-pointer px-lg py-md text-xsm font-semiBold text-text-default hover:bg-background-grey/20';

export const ScreenSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.screen.id}>
      <DocH2 {...toc.screen} />
      <p>{c.intro}</p>

      <Callout variant="practice" title={c.howTitle}>
        <List ordered marker className="flex flex-col gap-2xs">
          {c.how.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
        <p className="text-xxsm text-text-light">{c.safari}</p>
        <p className="text-xxsm text-text-light">{c.phone}</p>
      </Callout>

      <PracticeScreen />

      <details className={detailsClass}>
        <summary className={summaryClass}>{c.defectsSummary}</summary>
        <div className="border-t border-stroke-light px-lg py-md text-xsm">
          <List ordered marker className="flex flex-col gap-xs">
            {c.defects.map((item, i) => (
              <ListItem key={i}>{item}</ListItem>
            ))}
          </List>
        </div>
      </details>
      <details className={detailsClass}>
        <summary className={summaryClass}>{c.codeSummary}</summary>
        <div className="border-t border-stroke-light p-md">
          <CodeBlock label={c.codeLabel} tone="bad" code={defectCode(c)} />
        </div>
      </details>
    </section>
  );
};
