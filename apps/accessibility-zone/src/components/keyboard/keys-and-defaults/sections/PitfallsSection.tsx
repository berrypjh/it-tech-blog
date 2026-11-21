import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeCompare, DocH2, DocH3 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: {
    duplicateBefore: `<button
  onClick={save}
  onKeyDown={(e) => {
    // 버튼은 이미 Enter · Space를 click으로 바꾼다
    if (e.key === 'Enter' || e.key === ' ') save();
  }}
>저장</button>`,
    duplicateAfter: `<button onClick={save}>저장</button>`,
    globalBefore: `document.addEventListener('keydown', (e) => {
  // 입력 칸의 커서 이동, 글자 입력, 스크롤까지 막힌다
  if (e.key === ' ' || e.key.startsWith('Arrow')) e.preventDefault();
});`,
    globalAfter: `const onKeyDown = (e) => {
  // 조합 입력과 수정 키 조합은 위젯의 키가 아니다
  if (e.nativeEvent.isComposing || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === 'ArrowUp') { e.preventDefault(); increase(); }
  if (e.key === 'ArrowDown') { e.preventDefault(); decrease(); }
};
<div role="spinbutton" tabIndex={0} onKeyDown={onKeyDown} …>`,
  },
  en: {
    duplicateBefore: `<button
  onClick={save}
  onKeyDown={(e) => {
    // A button already turns Enter and Space into click
    if (e.key === 'Enter' || e.key === ' ') save();
  }}
>Save</button>`,
    duplicateAfter: `<button onClick={save}>Save</button>`,
    globalBefore: `document.addEventListener('keydown', (e) => {
  // Blocks caret movement, typing, and scrolling too
  if (e.key === ' ' || e.key.startsWith('Arrow')) e.preventDefault();
});`,
    globalAfter: `const onKeyDown = (e) => {
  // Composition and modifier combinations are not this widget's keys
  if (e.nativeEvent.isComposing || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === 'ArrowUp') { e.preventDefault(); increase(); }
  if (e.key === 'ArrowDown') { e.preventDefault(); decrease(); }
};
<div role="spinbutton" tabIndex={0} onKeyDown={onKeyDown} …>`,
  },
};

const content = {
  ko: {
    duplicateHeading: '네이티브 버튼에 활성화 처리를 또 붙이기',
    duplicate: (
      <>
        버튼에서 Enter나 Space를 누르면 브라우저가 click을 만듭니다. keydown에서 같은 함수를 부르면
        한 번 눌렀는데 두 번 실행될 수 있습니다. 버튼의 실행은 click 하나로 둡니다.
      </>
    ),
    globalHeading: '문서 전체에서 키 가로채기',
    global: (
      <>
        키 처리는 그 키를 맡은 요소에 답니다. 그러면 포커스가 위젯 밖에 있을 때는 코드가 실행되지
        않고, 입력 칸과 스크롤은 그대로 동작합니다.
      </>
    ),
    calloutTitle: '조합 입력과 수정 키',
    callout: (
      <>
        한글처럼 조합해서 입력하는 동안의 키는 글자를 만드는 중입니다. 이때 Enter나 방향키를
        가로채면 입력이 깨질 수 있습니다. Ctrl · Command · Alt 조합은 브라우저와 운영체제의 기능일
        수 있으니 위젯이 정한 조합이 아니면 건드리지 않습니다.
      </>
    ),
    limit: (
      <>
        keydown · input · 조합 이벤트의 순서와 값은 브라우저 · 운영체제 · 입력기에 따라 다를 수
        있습니다. 화면 낭독기가 키를 페이지에 넘기는지도 모드에 따라 달라집니다. 실습 기록은 지금
        실행한 환경의 결과로만 읽습니다.
      </>
    ),
  },
  en: {
    duplicateHeading: 'Adding activation handling to a native button',
    duplicate: (
      <>
        Pressing Enter or Space on a button makes the browser produce a click. Calling the same
        function from keydown can run it twice for one press. Keep a button&apos;s action in click
        alone.
      </>
    ),
    globalHeading: 'Intercepting keys across the document',
    global: (
      <>
        Attach key handling to the element that owns the key. Then the code does not run while focus
        is outside the widget, and text fields and scrolling keep working.
      </>
    ),
    calloutTitle: 'Composition and modifier keys',
    callout: (
      <>
        While text is being composed, as with Korean input, keys are still building characters.
        Intercepting Enter or arrows then can break the input. Ctrl, Command, and Alt combinations
        may belong to the browser or operating system, so leave them unless the widget defines them.
      </>
    ),
    limit: (
      <>
        The order and values of keydown, input, and composition events can differ by browser,
        operating system, and input method. Whether a screen reader passes keys to the page also
        depends on its mode. Read the exercise log only as a result of the environment you ran.
      </>
    ),
  },
};

export const PitfallsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const k = code[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.pitfalls.id}>
      <DocH2 {...toc.pitfalls} />
      <DocH3>{c.duplicateHeading}</DocH3>
      <p>{c.duplicate}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeCompare before={k.duplicateBefore} after={k.duplicateAfter} />
      <DocH3>{c.globalHeading}</DocH3>
      <p>{c.global}</p>
      <CodeCompare before={k.globalBefore} after={k.globalAfter} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
      <p>{c.limit}</p>
    </section>
  );
};
