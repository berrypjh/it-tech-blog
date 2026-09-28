import type { Locale } from '@it-tech-blog/preferences';

import { Chip, List, ListItem, VisuallyHidden } from '@berrypjh/react-ui';
import { X } from 'lucide-react';

import { Callout, DocH2, DocH3, ExternalLink } from '@/components/doc';

import { TaskFlowDiagram } from '../diagrams/TaskFlowDiagram';
import { getToc } from '../toc';

const WAI_INTRO = 'https://www.w3.org/WAI/fundamentals/accessibility-intro/';

const content = {
  ko: {
    intro: (
      <>
        W3C의 Web Accessibility Initiative(WAI)는 웹접근성을{' '}
        <ExternalLink href={WAI_INTRO}>이렇게 정의합니다</ExternalLink>.
      </>
    ),
    definitionTitle: '정의',
    definition: (
      <>
        웹접근성은 장애가 있는 사람이 웹사이트, 도구, 기술을 <strong>사용할 수 있도록</strong>{' '}
        설계하고 개발하는 것입니다.
      </>
    ),
    usable:
      '"사용할 수 있다"는 말이 핵심입니다. 사용자는 화면을 감상하러 오지 않습니다. 회원가입을 하고, 주문을 취소하고, 예약을 변경하러 옵니다.',
    flowHeading: '사용자가 작업을 끝내기까지',
    flowBody: (
      <>
        접근성은 사용자의 능력이나 사용하는 기술 때문에 이 흐름에 <strong>불필요한 장벽</strong>이
        생기지 않도록 만드는 일입니다.
      </>
    ),
    notHeading: '접근성이 아닌 것',
    notPrefix: '아님: ',
    notItems: [
      '스크린 리더 대응만',
      'aria-* 속성을 추가하는 일',
      '색상 대비 검사만',
      '출시 직전 QA 체크리스트',
      '장애가 있는 사용자를 위한 별도 화면',
    ],
    notBody: (
      <>
        마지막 항목이 특히 중요합니다. 목표는 분리된 대체 화면이 아니라{' '}
        <strong>하나의 제품을 여러 방식으로 사용할 수 있게</strong> 만드는 것입니다.
      </>
    ),
    scopeHeading: '접근성이 실제로 포괄하는 범위',
    scope: [
      'HTML 구조와 의미',
      '키보드 조작',
      '포커스 위치와 순서',
      '이름(name)과 상태(state)',
      '대비 · 크기 · 확대',
      '입력과 오류 안내',
      '모션과 시간 제약',
      '보조기술 호환성',
      '예측 가능한 상호작용',
    ],
    scopeBody: (
      <>
        각 항목은 이 트랙의 개별 챕터가 됩니다. 지금 필요한 것은 구현 방법이 아니라,{' '}
        <strong>접근성이 이 전부의 합</strong>이라는 사실입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The W3C Web Accessibility Initiative (WAI){' '}
        <ExternalLink href={WAI_INTRO}>defines web accessibility</ExternalLink> as follows.
      </>
    ),
    definitionTitle: 'Definition',
    definition: (
      <>
        Web accessibility means that websites, tools, and technologies are designed and developed so
        that people with disabilities <strong>can use them</strong>.
      </>
    ),
    usable:
      '"Can use" is the key phrase. People do not come to admire a screen. They come to sign up, cancel an order, or change a booking.',
    flowHeading: 'From arrival to a finished task',
    flowBody: (
      <>
        Accessibility means making sure no <strong>unnecessary barrier</strong> appears in this flow
        because of a person&apos;s abilities or the technology they use.
      </>
    ),
    notHeading: 'What accessibility is not',
    notPrefix: 'Not: ',
    notItems: [
      'Only screen reader support',
      'Adding aria-* attributes',
      'Only color contrast checks',
      'A QA checklist right before release',
      'A separate screen for users with disabilities',
    ],
    notBody: (
      <>
        The last item matters most. The goal is not a separate alternative screen, but{' '}
        <strong>one product that works in many ways</strong>.
      </>
    ),
    scopeHeading: 'What accessibility actually covers',
    scope: [
      'HTML structure and meaning',
      'Keyboard operation',
      'Focus position and order',
      'Name and state',
      'Contrast · size · zoom',
      'Input and error guidance',
      'Motion and time limits',
      'Assistive technology support',
      'Predictable interaction',
    ],
    scopeBody: (
      <>
        Each item becomes its own chapter in this track. What matters now is not how to implement
        them, but that <strong>accessibility is the sum of all of them</strong>.
      </>
    ),
  },
};

export const WhatIsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.whatIs.id}>
      <DocH2 {...toc.whatIs} />
      <p>{c.intro}</p>

      <Callout variant="note" title={c.definitionTitle}>
        <p>{c.definition}</p>
      </Callout>

      <p>{c.usable}</p>

      <DocH3>{c.flowHeading}</DocH3>
      <TaskFlowDiagram locale={locale} />
      <p>{c.flowBody}</p>

      <DocH3>{c.notHeading}</DocH3>
      <div className="my-lg">
        <List className="flex flex-col gap-xs">
          {c.notItems.map((item) => (
            <ListItem key={item} className="flex items-center gap-sm">
              <X className="h-4 w-4 shrink-0 text-text-error" aria-hidden="true" />
              <span>
                <VisuallyHidden>{c.notPrefix}</VisuallyHidden>
                {item}
              </span>
            </ListItem>
          ))}
        </List>
      </div>
      <p>{c.notBody}</p>

      <DocH3>{c.scopeHeading}</DocH3>
      <div className="my-lg">
        <List className="flex flex-wrap gap-sm">
          {c.scope.map((item) => (
            <ListItem key={item}>
              <Chip variant="filled">{item}</Chip>
            </ListItem>
          ))}
        </List>
      </div>
      <p>{c.scopeBody}</p>
    </section>
  );
};
