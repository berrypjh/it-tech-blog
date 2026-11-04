import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { Keyboard, Link, Send, SquareCheck } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { Kbd } from '@/components/shared/Kbd';

import { EventPathDemo } from '../demos/EventPathDemo';
import { getToc } from '../toc';

const MDN_PREVENT_DEFAULT = 'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 링크의 click · 폼의 submit · 체크박스의 click · keydown. */
const rowIcons = [Link, Send, SquareCheck, Keyboard];

const content = {
  ko: {
    intro: (
      <>
        많은 이벤트에는 브라우저가 실행하는 <strong>기본 동작</strong>이 있습니다. 리스너에서{' '}
        <ExternalLink href={MDN_PREVENT_DEFAULT}>
          <code>event.preventDefault()</code>
        </ExternalLink>
        를 부르면 그 동작이 실행되지 않습니다. 기본 동작에는 키보드 · 보조기술 사용자가 기대는
        기능이 많으므로, 막을 때는 그 기능을 직접 대신할 수 있을 때만 막습니다.
      </>
    ),
    caption: '기본 동작과 막을 때의 판단',
    head: ['이벤트', '기본 동작', '막아도 되는 경우', '막으면 생기는 문제'],
    rows: [
      [
        '링크의 click',
        '주소로 이동',
        '프레임워크 링크가 href를 유지한 채 화면만 바꿀 때',
        'href 없이 막으면 새 탭 열기 · 주소 복사가 사라집니다',
      ],
      [
        '폼의 submit',
        '서버로 전송하고 새 페이지',
        '스크립트가 전송하고 결과를 직접 알릴 때',
        '결과를 알리지 않으면 아무 일도 없는 것처럼 보입니다',
      ],
      ['체크박스의 click', 'checked 바꾸기', '거의 없음', '눌러도 상태가 바뀌지 않습니다'],
      [
        'keydown',
        '글자 입력 · Tab 이동 · Space 스크롤',
        '위젯이 그 키를 직접 처리할 때',
        '모든 키를 막으면 입력도 Tab 이동도 안 됩니다',
      ],
    ],
    demoIntro: (
      <>
        이벤트 경로와 기본 동작은 직접 눌러 보면 한눈에 보입니다. 아래 점선 상자(
        <code>div.card</code>)와 그 안의 <code>form</code>에는 <code>addEventListener</code>로
        리스너를 캡처 · 버블링 양쪽에 붙였고, 기록은 이 브라우저에서 실제로 실행된 리스너의
        순서입니다.
      </>
    ),
    observeIntro: '기록을 보면 네 가지가 드러납니다.',
    observe: [
      <>
        링크를 누르면 <code>div.card</code> 캡처 → <code>form</code> 캡처 → <code>form</code> 버블링
        → <code>div.card</code> 버블링 순서로 기록되고, target은 내내 <code>a</code>입니다.
      </>,
      <>
        &quot;선물 포장&quot; 글자를 누르면 click이 두 번 기록됩니다. 첫 번째는 <code>label</code>,
        두 번째는 라벨의 기본 동작이 체크박스에 보낸 click입니다.
      </>,
      <>
        주문하기를 누르면 click 뒤에 submit이 이어집니다. submit 버튼 click의 기본 동작이 폼
        제출이기 때문입니다. 키보드로 눌러도 같은 순서입니다. submit은 <code>form</code>에서
        생기므로 <code>form</code>의 리스너는 &quot;대상&quot; 단계로 기록됩니다.
      </>,
      <>
        체크박스의 기본 동작을 막으면 click 이벤트는 그대로 기록되지만 <code>checked</code>는 바뀌지
        않습니다. 사용자가 눌렀다는 사실과 상태가 바뀌었다는 사실은 별개입니다.
      </>,
    ],
    deviceHeading: '이벤트 하나로 입력 장치를 단정하지 않는다',
    device: (
      <>
        <code>click</code>은 마우스 클릭에서만 생기지 않습니다. 버튼에서 <Kbd>Enter</Kbd> ·{' '}
        <Kbd>Space</Kbd>를 눌러도, 화면 낭독기가 요소를 실행해도, 음성 입력으로 눌러도 생깁니다.
        <code>event.detail</code>이 0이거나 <code>pointerType</code>이 비어 있으면 키보드일 때가
        많지만, 보조기술은 마우스 이벤트를 흉내 내기도 하므로 확실하지 않습니다. 실행은{' '}
        <code>click</code> 하나로 처리하고, 장치에 따라 동작을 다르게 만들지 않습니다.
      </>
    ),
    tipTitle: '장치를 추측해 동작을 나누면 추측이 틀린 사용자가 막힙니다',
    tip: (
      <>
        &quot;마우스로 누르면 열고, 키보드로 누르면 무시&quot;처럼 장치를 추측해 나누면, 추측이 틀린
        사용자는 기능을 쓸 수 없습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Many events have a <strong>default action</strong> the browser runs. Calling{' '}
        <ExternalLink href={MDN_PREVENT_DEFAULT}>
          <code>event.preventDefault()</code>
        </ExternalLink>{' '}
        in a listener stops it. Default actions include many features keyboard and assistive
        technology users rely on, so block one only when you can replace what it did.
      </>
    ),
    caption: 'Default actions and when blocking them is fine',
    head: ['Event', 'Default action', 'Fine to block when', 'What breaks if you block it'],
    rows: [
      [
        'Link click',
        'Navigate to the address',
        'A framework link keeps the href and only swaps the screen',
        'Blocking without an href loses open-in-new-tab and copy-link',
      ],
      [
        'Form submit',
        'Send to the server and load a new page',
        'A script sends it and announces the result itself',
        'Without announcing a result, nothing seems to happen',
      ],
      ['Checkbox click', 'Toggle checked', 'Almost never', 'Pressing it does not change the state'],
      [
        'keydown',
        'Type characters, move with Tab, scroll with Space',
        'A widget handles that key itself',
        'Blocking every key breaks typing and Tab',
      ],
    ],
    demoIntro: (
      <>
        The event path and default actions are easiest to see by pressing things yourself. The
        dashed box below (<code>div.card</code>) and the <code>form</code> inside it have listeners
        attached with <code>addEventListener</code> in both the capturing and bubbling phases, and
        the log is the order in which listeners actually ran in this browser.
      </>
    ),
    observeIntro: 'The log shows four things.',
    observe: [
      <>
        Pressing the link logs <code>div.card</code> capturing → <code>form</code> capturing →{' '}
        <code>form</code> bubbling → <code>div.card</code> bubbling, and the target stays{' '}
        <code>a</code> throughout.
      </>,
      <>
        Pressing the &quot;Gift wrap&quot; text logs two clicks: the first on the <code>label</code>
        , the second the click the label&apos;s default action sends to the checkbox.
      </>,
      <>
        Pressing Place order logs a submit after the click, because the default action of clicking a
        submit button is submitting the form. The order is the same with the keyboard. submit starts
        at the <code>form</code>, so the <code>form</code> listeners are logged in the &quot;at
        target&quot; phase.
      </>,
      <>
        When the checkbox&apos;s default action is blocked, the click is still logged but{' '}
        <code>checked</code> does not change. That the user pressed it and that the state changed
        are separate facts.
      </>,
    ],
    deviceHeading: 'Do not infer the input device from one event',
    device: (
      <>
        <code>click</code> does not come only from a mouse. Pressing <Kbd>Enter</Kbd> or{' '}
        <Kbd>Space</Kbd> on a button, a screen reader activating an element, and voice input all
        fire it. An <code>event.detail</code> of 0 or an empty <code>pointerType</code> often means
        a keyboard, but assistive technology may simulate mouse events, so it is not certain. Handle
        activation with <code>click</code> alone, and do not make behavior depend on the device.
      </>
    ),
    tipTitle: 'Guessing the device blocks the users the guess gets wrong',
    tip: (
      <>
        If you guess the device and split behavior — &quot;open on mouse click, ignore on
        keyboard&quot; — users for whom the guess is wrong cannot use the feature.
      </>
    ),
  },
};

export const DefaultsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.defaults.id}>
      <DocH2 {...toc.defaults} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
      <p>{c.demoIntro}</p>
      <EventPathDemo />
      <p>{c.observeIntro}</p>
      <ul>
        {c.observe.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <DocH3>{c.deviceHeading}</DocH3>
      <p>{c.device}</p>
      <Callout variant="pitfall" title={c.tipTitle}>
        <p>{c.tip}</p>
      </Callout>
    </section>
  );
};
