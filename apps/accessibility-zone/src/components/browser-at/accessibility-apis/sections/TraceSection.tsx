import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { FileCode, Globe, Headphones, MonitorCog } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { type SourceId, SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<label>
  <input type="checkbox" checked>
  선물 포장
</label>`,
  en: `<label>
  <input type="checkbox" checked>
  Gift wrap
</label>`,
};

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘. 네 단계 흐름 도식과 같은 그림을 쓴다. */
const rowIcons = [FileCode, Globe, MonitorCog, Headphones];

const steps: { source: SourceId; ko: [string, string]; en: [string, string] }[] = [
  {
    source: 'dom',
    ko: [
      '1. HTML 의미',
      'input의 type은 checkbox이고 checked가 있습니다. label이 input을 감쌉니다. Elements 패널이나 스크립트로 확인할 수 있습니다.',
    ],
    en: [
      '1. HTML meaning',
      'The input’s type is checkbox and it has checked. A label wraps the input. You can confirm this in the Elements panel or with a script.',
    ],
  },
  {
    source: 'devtools',
    ko: [
      '2. 브라우저 정보',
      '역할 체크박스, 이름 "선물 포장", 상태 체크됨이 기대값입니다. 개발자 도구의 접근성 탭에서 확인합니다.',
    ],
    en: [
      '2. Browser information',
      'Expected: role checkbox, name "Gift wrap", state checked. Check in the Accessibility tab of developer tools.',
    ],
  },
  {
    source: 'model',
    ko: [
      '3. 플랫폼 API',
      'HTML-AAM이 플랫폼 API마다 기대하는 매핑을 적어 둡니다. 실제로 나간 값은 운영체제의 접근성 검사 도구로만 확인할 수 있고, 이 사이트는 확인하지 않았습니다.',
    ],
    en: [
      '3. Platform API',
      'HTML-AAM lists the expected mapping for each platform API. What actually went out can only be confirmed with an OS accessibility inspection tool, and this site has not checked it.',
    ],
  },
  {
    source: 'at',
    ko: [
      '4. 보조기술 해석',
      '화면 낭독기라면 "체크박스 · 선물 포장 · 체크됨"이라는 뜻을 전할 것으로 기대합니다. 낱말과 순서는 보조기술 · 버전 · 설정마다 다르고, 실제로 들어 봐야 말할 수 있습니다.',
    ],
    en: [
      '4. AT interpretation',
      'A screen reader is expected to convey the meaning "checkbox, Gift wrap, checked." The words and order differ by assistive technology, version, and settings, and can only be stated after listening.',
    ],
  },
];

const content = {
  ko: {
    intro: (
      <>
        체크박스 하나를 네 단계로 따라갑니다. 단계마다 확인할 수 있는 곳이 다르므로 출처를 함께
        적습니다.
      </>
    ),
    label: '추적할 체크박스',
    caption: '체크박스 하나의 네 단계와 확인할 수 있는 곳',
    head: ['단계', '무엇이 일어나나', '확인할 수 있는 곳'],
  },
  en: {
    intro: (
      <>
        Follow one checkbox through the four steps. Each step is checked in a different place, so
        the source is noted alongside.
      </>
    ),
    label: 'The checkbox to trace',
    caption: 'Four steps of one checkbox and where each can be checked',
    head: ['Step', 'What happens', 'Where it can be checked'],
  },
};

export const TraceSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.trace.id}>
      <DocH2 {...toc.trace} />
      <p>{c.intro}</p>
      <CodeBlock label={c.label} code={code[locale]} />
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={steps.map((step, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {step[locale][0]}
          </IconLabel>,
          step[locale][1],
          <SourceTag key="source" locale={locale} id={step.source} />,
        ])}
      />
    </section>
  );
};
