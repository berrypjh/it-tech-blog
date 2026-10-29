import { Fragment } from 'react';
import Link from 'next/link';

import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, ExternalLink } from '@it-tech-blog/ui';

import { Chip, List, ListItem, VisuallyHidden } from '@berrypjh/react-ui';

import { Kbd } from '@/components/shared/Kbd';

import { getToc as getIntroToc } from '../../intro/toc';
import { getToc } from '../toc';

const WCAG22 = 'https://www.w3.org/TR/WCAG22/';

type Criterion = { id: string; name: string; level: 'A' | 'AA' };

type Check = {
  name: string;
  start: React.ReactNode[];
  note?: React.ReactNode;
  look: string[];
  criteria: Criterion[];
};

/** 설정 메뉴 경로. 구분 기호는 화면에만 보이고, 보조기술에는 쉼표로 읽힌다. */
const Path = ({ steps }: { steps: string[] }) => (
  <span className="font-semiBold text-text-default">
    {steps.map((step, i) => (
      <Fragment key={step}>
        {i > 0 && (
          <>
            <span aria-hidden="true" className="px-2xs text-text-light">
              ›
            </span>
            <VisuallyHidden>, </VisuallyHidden>
          </>
        )}
        {step}
      </Fragment>
    ))}
  </span>
);

const plus = <span className="px-2xs">+</span>;

const content: Record<
  Locale,
  {
    intro: string;
    criteriaNote: (standards: React.ReactNode) => React.ReactNode;
    startLabel: string;
    lookLabel: string;
    criteriaLabel: string;
    checks: Check[];
    recordTitle: string;
    record: string[];
  }
> = {
  ko: {
    intro:
      '아래는 개발자가 자기 기기에서 바로 시작할 수 있는 확인입니다. 숙련된 사용자의 실제 사용을 대신하지는 않지만, 코드로 예상한 결과를 직접 확인한 결과로 바꿔 줍니다.',
    criteriaNote: (standards) => (
      <>
        카드 아래에는 확인 항목과 이어지는 <ExternalLink href={WCAG22}>WCAG 2.2</ExternalLink> 성공
        기준을 적었습니다. 괄호 안의 A·AA는 기준의 수준이며, 수준의 뜻은 01.1의 {standards}에서
        설명합니다. 각 기준의 정확한 조건은 원문에서 확인합니다.
      </>
    ),
    startLabel: '시작하기',
    lookLabel: '확인할 것',
    criteriaLabel: '관련 WCAG 2.2 기준',
    checks: [
      {
        name: '키보드',
        start: [
          '마우스와 트랙패드에서 손을 뗍니다.',
          <>
            <Kbd>Tab</Kbd> <Kbd>Shift</Kbd>
            {plus}
            <Kbd>Tab</Kbd> <Kbd>Enter</Kbd> <Kbd>Space</Kbd> <Kbd>방향키</Kbd> <Kbd>Esc</Kbd>만
            씁니다.
          </>,
        ],
        note: (
          <>
            macOS Safari는 기본 설정에서 Tab이 링크와 버튼을 건너뜁니다. <Kbd>Option</Kbd>
            {plus}
            <Kbd>Tab</Kbd>을 쓰거나 Safari 설정의 고급에서 Tab으로 각 항목을 강조하는 옵션을 켭니다.
            키보드를 연결하지 않은 휴대기기에서는 이 확인을 할 수 없습니다.
          </>
        ),
        look: [
          '과업의 모든 단계를 키로 끝낼 수 있나요?',
          '포커스가 언제나 보이고, 고정 요소에 가려지지 않나요?',
          '이동 순서가 화면의 의미 순서와 맞나요?',
          '어떤 곳에서도 빠져나올 수 있나요?',
        ],
        criteria: [
          { id: '2.1.1', name: '키보드', level: 'A' },
          { id: '2.1.2', name: '키보드 함정 없음', level: 'A' },
          { id: '2.4.3', name: '포커스 순서', level: 'A' },
          { id: '2.4.7', name: '포커스 표시', level: 'AA' },
          { id: '2.4.11', name: '가려지지 않는 포커스(최소)', level: 'AA' },
        ],
      },
      {
        name: '화면 낭독기',
        start: [
          <>
            macOS VoiceOver: <Kbd>Command</Kbd>
            {plus}
            <Kbd>F5</Kbd>로 켜고 끕니다.
          </>,
          <>
            Windows 내레이터: <Kbd>Windows 로고 키</Kbd>
            {plus}
            <Kbd>Ctrl</Kbd>
            {plus}
            <Kbd>Enter</Kbd>로 켜고 끕니다.
          </>,
          'NVDA(Windows)는 무료로 설치할 수 있습니다.',
          <>
            iOS: <Path steps={['설정', '손쉬운 사용', 'VoiceOver']} />
          </>,
          'Android: TalkBack',
        ],
        look: [
          '제목과 랜드마크만으로 페이지 구조를 파악할 수 있나요?',
          '과업에 쓰는 컨트롤마다 이름·역할·상태가 전달되나요?',
          '오류와 완료 같은 상태 메시지가 포커스를 옮기지 않아도 전달되나요?',
        ],
        criteria: [
          { id: '1.3.1', name: '정보와 관계', level: 'A' },
          { id: '4.1.2', name: '이름, 역할, 값', level: 'A' },
          { id: '4.1.3', name: '상태 메시지', level: 'AA' },
        ],
      },
      {
        name: '확대',
        start: [
          '브라우저 창 폭을 1280px 정도로 둡니다.',
          <>
            <Kbd>Ctrl</Kbd>(맥은 <Kbd>Command</Kbd>){plus}
            <Kbd>+</Kbd>로 200%, 400%까지 올립니다. 1280px에서 400%는 320 CSS px 폭입니다.
          </>,
          '운영체제 화면 확대기도 따로 켜 봅니다.',
        ],
        look: [
          '세로로 읽을 때 가로 스크롤이 필요하지 않나요?',
          '글자가 잘리거나 겹치지 않나요?',
          '고정 헤더·배너가 남은 화면을 얼마나 차지하나요?',
          '알림·툴팁이 확대된 영역 안에서 보이나요?',
        ],
        criteria: [
          { id: '1.4.4', name: '텍스트 크기 조정 (200%)', level: 'AA' },
          { id: '1.4.10', name: '리플로우 (320 CSS px)', level: 'AA' },
        ],
      },
      {
        name: '음성 입력',
        start: [
          <>
            macOS: <Path steps={['시스템 설정', '손쉬운 사용', '음성 제어']} />
          </>,
          <>
            Windows 11(22H2 이상): <Path steps={['설정', '접근성', '음성']} />의 음성 액세스
          </>,
          'Android: Voice Access 앱',
        ],
        note: 'Windows 음성 액세스는 한국어를 지원하지 않습니다(2026년 10월 기준). 다른 제품도 한국어 명령을 쓸 수 있는지 먼저 확인합니다.',
        look: [
          '화면에 보이는 라벨을 말해서 컨트롤을 누를 수 있나요?',
          '번호나 격자 표시에 의존해야 하는 컨트롤은 무엇인가요?',
          '받아쓰기로 입력 칸을 채울 수 있나요?',
        ],
        criteria: [
          { id: '2.5.3', name: '이름의 레이블', level: 'A' },
          { id: '4.1.2', name: '이름, 역할, 값', level: 'A' },
        ],
      },
      {
        name: '스위치',
        start: [
          <>
            iOS: <Path steps={['설정', '손쉬운 사용', '스위치 제어']} />
          </>,
          'Android: Switch Access',
        ],
        note: '외부 스위치가 없어도 화면 탭이나 키보드 키를 스위치로 지정할 수 있는지 각 기기 설정에서 확인합니다.',
        look: [
          '과업의 핵심 컨트롤까지 몇 번의 스캔과 선택이 필요한가요?',
          '시간 제한 안에 끝낼 수 있나요?',
          '드래그나 마우스 올리기 없이 같은 결과를 낼 수 있나요?',
        ],
        criteria: [
          { id: '2.2.1', name: '시간 조절 가능', level: 'A' },
          { id: '2.5.7', name: '드래그 동작', level: 'AA' },
        ],
      },
    ],
    recordTitle: '기록에 적을 환경',
    record: [
      '운영체제와 버전, 기기',
      '브라우저와 버전',
      '보조기술과 버전, 쓴 모드(예: 화면 낭독기의 읽기 모드와 포커스 모드)',
      '설정값: 확대율, 창 크기, 글자 크기, 스캔 방식',
      '직접 확인한 것과 코드로만 예상한 것의 구분',
    ],
  },
  en: {
    intro:
      'These are checks a developer can start right away on their own device. They do not replace real use by experienced users, but they turn predictions from code into results you checked directly.',
    criteriaNote: (standards) => (
      <>
        Each card ends with the <ExternalLink href={WCAG22}>WCAG 2.2</ExternalLink> success criteria
        its checks connect to. The A or AA in parentheses is the level of the criterion; levels are
        explained in {standards} in 01.1. Check the exact conditions of each criterion in the
        original text.
      </>
    ),
    startLabel: 'Getting started',
    lookLabel: 'What to check',
    criteriaLabel: 'Related WCAG 2.2 criteria',
    checks: [
      {
        name: 'Keyboard',
        start: [
          'Take your hand off the mouse and trackpad.',
          <>
            Use only <Kbd>Tab</Kbd> <Kbd>Shift</Kbd>
            {plus}
            <Kbd>Tab</Kbd> <Kbd>Enter</Kbd> <Kbd>Space</Kbd> <Kbd>arrow keys</Kbd> <Kbd>Esc</Kbd>.
          </>,
        ],
        note: (
          <>
            In macOS Safari, Tab skips links and buttons by default. Use <Kbd>Option</Kbd>
            {plus}
            <Kbd>Tab</Kbd>, or turn on the option to highlight each item with Tab under Safari
            settings, Advanced. This check cannot be done on a mobile device without a keyboard.
          </>
        ),
        look: [
          'Can every step of the task be finished by key?',
          'Is focus always visible and never hidden by fixed elements?',
          'Does the order match the meaning of the screen?',
          'Can you get out of every place?',
        ],
        criteria: [
          { id: '2.1.1', name: 'Keyboard', level: 'A' },
          { id: '2.1.2', name: 'No Keyboard Trap', level: 'A' },
          { id: '2.4.3', name: 'Focus Order', level: 'A' },
          { id: '2.4.7', name: 'Focus Visible', level: 'AA' },
          { id: '2.4.11', name: 'Focus Not Obscured (Minimum)', level: 'AA' },
        ],
      },
      {
        name: 'Screen reader',
        start: [
          <>
            macOS VoiceOver: turn on or off with <Kbd>Command</Kbd>
            {plus}
            <Kbd>F5</Kbd>.
          </>,
          <>
            Windows Narrator: turn on or off with <Kbd>Windows logo key</Kbd>
            {plus}
            <Kbd>Ctrl</Kbd>
            {plus}
            <Kbd>Enter</Kbd>.
          </>,
          'NVDA (Windows) is free to install.',
          <>
            iOS: <Path steps={['Settings', 'Accessibility', 'VoiceOver']} />
          </>,
          'Android: TalkBack',
        ],
        look: [
          'Can you grasp the page structure from headings and landmarks alone?',
          'Does each control in the task convey name, role, and state?',
          'Are status messages like errors and confirmations conveyed without moving focus?',
        ],
        criteria: [
          { id: '1.3.1', name: 'Info and Relationships', level: 'A' },
          { id: '4.1.2', name: 'Name, Role, Value', level: 'A' },
          { id: '4.1.3', name: 'Status Messages', level: 'AA' },
        ],
      },
      {
        name: 'Magnification',
        start: [
          'Set the browser window to about 1280px wide.',
          <>
            Zoom with <Kbd>Ctrl</Kbd> (<Kbd>Command</Kbd> on Mac)
            {plus}
            <Kbd>+</Kbd> to 200% and 400%. 400% at 1280px corresponds to a 320 CSS px width.
          </>,
          'Also try the OS screen magnifier.',
        ],
        look: [
          'Can you read vertically without horizontal scrolling?',
          'Is any text cut off or overlapping?',
          'How much of the remaining screen do sticky headers and banners take?',
          'Do alerts and tooltips appear inside the magnified area?',
        ],
        criteria: [
          { id: '1.4.4', name: 'Resize Text (200%)', level: 'AA' },
          { id: '1.4.10', name: 'Reflow (320 CSS px)', level: 'AA' },
        ],
      },
      {
        name: 'Speech input',
        start: [
          <>
            macOS: <Path steps={['System Settings', 'Accessibility', 'Voice Control']} />
          </>,
          <>
            Windows 11 (22H2 or later): voice access under{' '}
            <Path steps={['Settings', 'Accessibility', 'Speech']} />
          </>,
          'Android: the Voice Access app',
        ],
        note: 'Windows voice access supports a limited set of languages (Korean is not among them as of October 2026). For any product, check first that your language is supported.',
        look: [
          'Can you press controls by saying their visible label?',
          'Which controls force you to rely on numbers or a grid?',
          'Can you fill fields by dictation?',
        ],
        criteria: [
          { id: '2.5.3', name: 'Label in Name', level: 'A' },
          { id: '4.1.2', name: 'Name, Role, Value', level: 'A' },
        ],
      },
      {
        name: 'Switch',
        start: [
          <>
            iOS: <Path steps={['Settings', 'Accessibility', 'Switch Control']} />
          </>,
          'Android: Switch Access',
        ],
        note: 'Even without an external switch, check in each device’s settings whether a screen tap or keyboard key can be assigned as a switch.',
        look: [
          'How many scans and selections does it take to reach the key controls?',
          'Can the task be finished within time limits?',
          'Can the same result be reached without dragging or mouse hover?',
        ],
        criteria: [
          { id: '2.2.1', name: 'Timing Adjustable', level: 'A' },
          { id: '2.5.7', name: 'Dragging Movements', level: 'AA' },
        ],
      },
    ],
    recordTitle: 'Environment to record',
    record: [
      'Operating system, version, and device',
      'Browser and version',
      'Assistive technology, version, and the mode used (e.g. a screen reader’s reading and focus modes)',
      'Settings: zoom level, window size, text size, scan method',
      'Which results were checked directly and which were only predicted from code',
    ],
  },
};

const termClass = 'mb-xs text-xxsm font-semiBold text-text-light';

/** 한 가지 사용 방식을 실제로 확인하는 방법 — 시작하기 · 확인할 것 · 관련 기준. */
const CheckCard = ({ check, c }: { check: Check; c: (typeof content)[Locale] }) => (
  <div className="rounded-md border border-stroke-light bg-background-surface p-lg">
    <h3 className="text-md leading-md font-bold text-text-default">{check.name}</h3>
    <dl className="mt-md grid gap-lg text-xsm leading-xsm sm:grid-cols-2">
      <div>
        <dt className={termClass}>{c.startLabel}</dt>
        <dd>
          <List marker className="flex flex-col gap-xs">
            {check.start.map((step, i) => (
              <ListItem key={i}>{step}</ListItem>
            ))}
          </List>
          {check.note && <p className="mt-sm text-xxsm text-text-light">{check.note}</p>}
        </dd>
      </div>
      <div>
        <dt className={termClass}>{c.lookLabel}</dt>
        <dd>
          <List marker className="flex flex-col gap-xs">
            {check.look.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </dd>
      </div>
      <div className="border-t border-stroke-light pt-md sm:col-span-2">
        <dt className={termClass}>{c.criteriaLabel}</dt>
        <dd>
          <List className="flex flex-wrap gap-xs">
            {check.criteria.map((criterion) => (
              <ListItem key={criterion.id}>
                <Chip size="sm">
                  {criterion.id} {criterion.name} ({criterion.level})
                </Chip>
              </ListItem>
            ))}
          </List>
        </dd>
      </div>
    </dl>
  </div>
);

export const RealCheckSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const standards = getIntroToc(locale).standards;

  return (
    <section aria-labelledby={toc.realCheck.id}>
      <DocH2 {...toc.realCheck} />
      <p>{c.intro}</p>
      <p>{c.criteriaNote(<Link href={`/intro#${standards.id}`}>{standards.title}</Link>)}</p>
      <div className="my-xl flex flex-col gap-md">
        {c.checks.map((check) => (
          <CheckCard key={check.name} check={check} c={c} />
        ))}
      </div>
      <Callout variant="practice" title={c.recordTitle}>
        <List marker className="flex flex-col gap-2xs">
          {c.record.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Callout>
    </section>
  );
};
