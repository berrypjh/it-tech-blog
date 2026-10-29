import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

type Method = {
  name: string;
  input: string;
  output: string;
  unit: string;
  what: string;
  who: string;
  expects: string[];
  barriers: string[];
};

const labels = {
  ko: {
    tableCaption: '다섯 가지 사용 방식의 입력 · 출력 · 탐색 단위 비교',
    tableHead: ['방식', '입력', '출력', '탐색 단위'],
    who: '누가 쓰나',
    expects: '페이지에 기대하는 것',
    barriers: '흔한 장벽',
  },
  en: {
    tableCaption: 'Input, output, and unit of navigation for the five ways of use',
    tableHead: ['Method', 'Input', 'Output', 'Unit of navigation'],
    who: 'Who uses it',
    expects: 'What it expects of the page',
    barriers: 'Common barriers',
  },
};

const content: Record<Locale, { intro: string; detailIntro: React.ReactNode; methods: Method[] }> =
  {
    ko: {
      intro: '다섯 방식을 세 축으로 먼저 한눈에 비교합니다.',
      detailIntro: (
        <>
          아래 카드의 &quot;누가 쓰나&quot;는 예시일 뿐 방식과 사람의 짝이 아닙니다. 한 사람이 여러
          방식을 섞어 쓰고, 같은 방식을 서로 다른 이유로 쓰기 때문입니다. 이런 조합은{' '}
          <PageLink locale="ko" id="people-and-contexts" />
          에서 다룹니다.
        </>
      ),
      methods: [
        {
          name: '키보드',
          input: 'Tab, Enter, Space, 방향키, Esc',
          output: '화면',
          unit: '포커스를 받을 수 있는 요소',
          what: '마우스 없이 키로 이동하고 실행합니다. Tab과 Shift+Tab으로 포커스를 옮기고, Enter나 Space로 실행하고, 메뉴나 탭 같은 컴포넌트 안에서는 방향키와 Esc를 씁니다.',
          who: '정밀한 포인터 조작이 어려운 사람, 화면 낭독기 사용자, 키 입력을 흉내 내는 스위치·음성 도구 사용자, 빠른 조작을 원하는 사람',
          expects: [
            '모든 기능이 키로 동작합니다',
            '포커스가 어디 있는지 보입니다',
            '이동 순서가 화면의 의미 순서와 맞습니다',
            '포커스가 갇히거나 다른 요소에 가려지지 않습니다',
          ],
          barriers: [
            'div로 만든 버튼',
            '지워진 포커스 표시',
            '고정 헤더 밑에 가려진 포커스',
            '마우스를 올려야만 열리는 메뉴',
          ],
        },
        {
          name: '화면 낭독기',
          input: '키보드 단축키, 터치 제스처',
          output: '음성, 점자',
          unit: '제목, 랜드마크, 링크, 폼 요소, 한 줄',
          what: '화면의 내용과 요소의 역할·이름·상태를 음성이나 점자로 전달하는 소프트웨어입니다. 운영체제 기본 기능(VoiceOver, 내레이터, TalkBack)과 따로 설치하는 프로그램(NVDA 등)이 있습니다.',
          who: '화면을 보지 않거나 보기 어려운 사람',
          expects: [
            '제목과 랜드마크로 페이지 구조가 드러납니다',
            '모든 컨트롤에 이름과 역할이 있습니다',
            '펼침·선택 같은 상태가 전달됩니다',
            '오류·완료 같은 상태 메시지가 전달됩니다',
          ],
          barriers: [
            '이름 없는 아이콘 버튼',
            '제목 없이 굵은 글자로만 만든 구조',
            '눈으로만 보이는 오류와 완료 메시지',
          ],
        },
        {
          name: '확대',
          input: '마우스, 키보드, 터치 그대로',
          output: '확대된 화면이나 그 일부',
          unit: '스크롤과 확대 영역 이동',
          what: '브라우저 확대, 운영체제 화면 확대기, 글자 크기 설정으로 화면이나 글자를 크게 봅니다. 화면 확대기는 화면의 일부만 크게 보여줍니다.',
          who: '저시력인 사람, 작은 화면에서 글자를 읽기 어려운 사람',
          expects: [
            '가로 스크롤 없이 한 열로 다시 배치됩니다',
            '글자가 잘리거나 겹치지 않습니다',
            '관련 정보가 가까이 있어 확대 영역 안에서 함께 보입니다',
          ],
          barriers: [
            '확대하면 잘리는 고정 너비',
            '화면을 덮는 고정 헤더와 배너',
            '확대 영역 밖에서 뜨는 알림과 툴팁',
          ],
        },
        {
          name: '음성 입력',
          input: '말 (받아쓰기, 명령)',
          output: '화면',
          unit: '이름으로 부를 수 있는 컨트롤, 번호·격자 표시',
          what: '말로 받아쓰기를 하고, 보이는 이름을 말해 컨트롤을 누르는 음성 인식 소프트웨어입니다. 이름을 모를 때는 화면에 번호나 격자를 띄워 고릅니다.',
          who: '손으로 키보드나 마우스를 쓰기 어려운 사람, 손을 쓸 수 없는 상황의 사람',
          expects: [
            '화면에 보이는 라벨과 같은 단어로 컨트롤을 부를 수 있습니다',
            '누를 수 있는 것은 실제 컨트롤 요소입니다',
          ],
          barriers: [
            '아이콘만 있는 버튼',
            '보이는 글자와 다른 접근 가능한 이름',
            '컨트롤로 인식되지 않는 커스텀 요소',
          ],
        },
        {
          name: '스위치',
          input: '스위치 한두 개',
          output: '화면',
          unit: '스캔되는 항목과 그룹',
          what: '버튼 한두 개(스위치)로 기기를 조작합니다. 하이라이트가 항목이나 그룹을 하나씩 지나가는 스캐닝 중에 원하는 곳에서 스위치를 눌러 선택합니다.',
          who: '움직일 수 있는 신체 부위나 동작이 제한된 사람',
          expects: [
            '핵심 기능에 적은 단계로 닿습니다',
            '스캔 순서가 의미 순서와 맞습니다',
            '조작할 시간이 충분합니다',
            '드래그 없이도 같은 일을 할 수 있습니다',
          ],
          barriers: ['본문 전에 지나야 하는 긴 메뉴', '짧은 시간 제한', '드래그로만 하는 조작'],
        },
      ],
    },
    en: {
      intro: 'First, compare the five methods at a glance along the three axes.',
      detailIntro: (
        <>
          The &quot;who uses it&quot; lines in the cards below are examples, not pairings of method
          and person, because one person mixes several methods and people use the same method for
          different reasons. Such combinations are covered in{' '}
          <PageLink locale="en" id="people-and-contexts" />.
        </>
      ),
      methods: [
        {
          name: 'Keyboard',
          input: 'Tab, Enter, Space, arrow keys, Esc',
          output: 'Screen',
          unit: 'Focusable elements',
          what: 'Moving and acting with keys instead of a mouse. Tab and Shift+Tab move focus, Enter or Space activate, and arrow keys and Esc work inside components such as menus and tabs.',
          who: 'People for whom precise pointing is hard, screen reader users, users of switch or speech tools that emulate keys, people who want speed',
          expects: [
            'Every function works by key',
            'You can see where focus is',
            'The order matches the meaning of the screen',
            'Focus is never trapped or hidden by other elements',
          ],
          barriers: [
            'Buttons made of div',
            'Removed focus indicators',
            'Focus hidden under a sticky header',
            'Menus that only open on mouse hover',
          ],
        },
        {
          name: 'Screen reader',
          input: 'Keyboard shortcuts, touch gestures',
          output: 'Speech, braille',
          unit: 'Headings, landmarks, links, form fields, lines',
          what: 'Software that conveys content and each element’s role, name, and state as speech or braille. Some are built into the OS (VoiceOver, Narrator, TalkBack); others are installed separately (such as NVDA).',
          who: 'People who do not or cannot easily see the screen',
          expects: [
            'Headings and landmarks reveal the page structure',
            'Every control has a name and role',
            'States like expanded or selected are conveyed',
            'Status messages such as errors and confirmations are conveyed',
          ],
          barriers: [
            'Unnamed icon buttons',
            'Structure made only of bold text instead of headings',
            'Errors and confirmations that are only visual',
          ],
        },
        {
          name: 'Magnification',
          input: 'Mouse, keyboard, or touch as usual',
          output: 'The enlarged screen or a part of it',
          unit: 'Scrolling and panning',
          what: 'Browser zoom, OS screen magnifiers, and text size settings make the screen or text larger. A screen magnifier shows only part of the screen enlarged.',
          who: 'People with low vision, people who struggle to read small screens',
          expects: [
            'Content reflows into one column without horizontal scrolling',
            'Text is not cut off or overlapping',
            'Related information stays close enough to see together when magnified',
          ],
          barriers: [
            'Fixed widths that get cut off',
            'Sticky headers and banners covering the screen',
            'Alerts and tooltips appearing outside the magnified area',
          ],
        },
        {
          name: 'Speech input',
          input: 'Speech (dictation, commands)',
          output: 'Screen',
          unit: 'Controls callable by name, number or grid overlays',
          what: 'Speech recognition software for dictation and for pressing controls by saying their visible name. When the name is unknown, numbers or a grid can be overlaid to choose from.',
          who: 'People for whom using a keyboard or mouse by hand is hard, people whose hands are busy',
          expects: [
            'Controls can be called by the same words as their visible label',
            'Anything pressable is a real control',
          ],
          barriers: [
            'Icon-only buttons',
            'Accessible names that differ from the visible text',
            'Custom elements not recognized as controls',
          ],
        },
        {
          name: 'Switch',
          input: 'One or two switches',
          output: 'Screen',
          unit: 'Scanned items and groups',
          what: 'Operating a device with one or two buttons (switches). During scanning, a highlight moves through items or groups one at a time, and the user presses the switch when it reaches the target.',
          who: 'People with limited movement or limited body parts they can move',
          expects: [
            'Key functions are reachable in few steps',
            'Scan order matches the order of meaning',
            'There is enough time to act',
            'The same thing can be done without dragging',
          ],
          barriers: ['Long menus to pass before content', 'Short time limits', 'Drag-only actions'],
        },
      ],
    },
  };

const termClass = 'mb-xs text-xxsm font-semiBold text-text-light';

/** 한 가지 사용 방식의 상세. 입력 · 출력 · 탐색 단위는 위 비교 표에만 둔다. */
const MethodCard = ({ method, locale }: { method: Method; locale: Locale }) => {
  const l = labels[locale];

  return (
    <div className="rounded-md border border-stroke-light bg-background-surface p-lg">
      <h3 className="text-md leading-md font-bold text-text-default">{method.name}</h3>
      <p className="mt-sm text-xsm leading-xsm">{method.what}</p>
      <dl className="mt-lg grid gap-lg text-xsm leading-xsm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dt className={termClass}>{l.who}</dt>
          <dd className="text-text-light">{method.who}</dd>
        </div>
        <div>
          <dt className={termClass}>{l.expects}</dt>
          <dd>
            <List marker className="flex flex-col gap-2xs">
              {method.expects.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </dd>
        </div>
        <div>
          <dt className={termClass}>{l.barriers}</dt>
          <dd>
            <List marker className="flex flex-col gap-2xs">
              {method.barriers.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export const MethodsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const l = labels[locale];
  const toc = getToc(locale);
  const rows = c.methods.map((m) => [
    <strong key="name" className="text-text-default">
      {m.name}
    </strong>,
    m.input,
    m.output,
    m.unit,
  ]);

  return (
    <section aria-labelledby={toc.methods.id}>
      <DocH2 {...toc.methods} />
      <p>{c.intro}</p>
      <DocTable caption={l.tableCaption} head={l.tableHead} rows={rows} />
      <p>{c.detailIntro}</p>
      <div className="my-xl flex flex-col gap-md">
        {c.methods.map((method) => (
          <MethodCard key={method.name} method={method} locale={locale} />
        ))}
      </div>
    </section>
  );
};
