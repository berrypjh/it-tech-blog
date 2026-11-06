import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';
import { CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

/** 다섯 요구의 원문 핵심 문장. 원문은 영어 그대로 둔다. */
const quotes = [
  { anchor: 'cc1', text: 'One of the following levels of conformance is met in full.' },
  {
    anchor: 'cc2',
    text: 'Conformance (and conformance level) is for full web page(s) only, and cannot be achieved if part of a web page is excluded.',
  },
  {
    anchor: 'cc3',
    text: 'When a web page is one of a series of web pages presenting a process …, all web pages in the process conform at the specified level or better.',
  },
  {
    anchor: 'cc4',
    text: 'Only accessibility-supported ways of using technologies are relied upon to satisfy the success criteria. …',
  },
  {
    anchor: 'cc5',
    text: 'If technologies are used in a way that is not accessibility supported, or if they are used in a non-conforming way, then they do not block the ability of users to access the rest of the page. …',
  },
];

const content = {
  ko: {
    intro: (
      <>
        WCAG 2.2 5.2절은 적합성의 요구를 다섯 가지로 적습니다. 다섯 가지를 모두 충족해야 적합합니다.
      </>
    ),
    caption: '적합성 요구 다섯 가지',
    head: ['요구', '원문 핵심 문장', '이 사례에서 묻는 것'],
    rows: [
      [
        '1. 적합 수준',
        '목표 수준까지의 성공 기준을 모두 충족하는가, 또는 그 수준의 적합 대체 버전이 있는가',
      ],
      [
        '2. 전체 페이지',
        '페이지의 일부를 빼고 판정하지 않았는가. 화면 폭마다 달라지는 변형도 모두 포함했는가',
      ],
      ['3. 완전한 과정', '과업을 끝내는 데 필요한 모든 페이지가 목표 수준에 적합한가'],
      [
        '4. 접근성이 지원되는 방식만 의존',
        '기준 충족에 기댄 기술 사용 방식이 사용자의 보조기술과 접근성을 지원하는 사용자 에이전트에서 실제로 동작하는가',
      ],
      [
        '5. 비간섭',
        '기준 충족에 기대지 않은 부분이 나머지 사용을 막지 않는가. 기대지 않은 기술을 켜거나 끄거나 지원하지 않는 환경에서도 페이지가 요구를 계속 충족하는가. 1.4.2 · 2.1.2 · 2.3.1 · 2.2.2는 페이지의 모든 콘텐츠에 적용됨',
      ],
    ],
    supported: (
      <>
        4번의 &quot;접근성 지원(accessibility supported)&quot;은 정의된 용어입니다. 그 기술 사용
        방식이 콘텐츠의 언어로 사용자의 보조기술과 상호운용 시험을 거쳤고, 접근성을 지원하는 사용자
        에이전트를 사용자가 실제로 쓸 수 있어야 합니다. 그래서 4번은 원문만 읽어서는 판정할 수 없고
        지원 증거가 필요합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Section 5.2 of WCAG 2.2 lists five conformance requirements. All five must be met for
        conformance.
      </>
    ),
    caption: 'The five conformance requirements',
    head: ['Requirement', 'Key sentence of the original', 'What this case asks'],
    rows: [
      [
        '1. Conformance level',
        'Are all success criteria up to the target level satisfied, or is there a conforming alternate version at that level?',
      ],
      [
        '2. Full pages',
        'Was no part of the page left out of the judgment? Were all variations for different screen widths included?',
      ],
      [
        '3. Complete processes',
        'Does every page needed to finish the task conform at the target level?',
      ],
      [
        '4. Only accessibility-supported ways',
        'Do the ways of using technologies relied on to meet criteria actually work with users’ assistive technology and accessibility-supported user agents?',
      ],
      [
        '5. Non-interference',
        'Does content not relied upon avoid blocking the rest of the page? Does the page keep meeting the requirements when technology not relied upon is turned on, turned off, or not supported? 1.4.2, 2.1.2, 2.3.1, and 2.2.2 apply to all content on the page',
      ],
    ],
    supported: (
      <>
        &quot;Accessibility supported&quot; in requirement 4 is a defined term. The way the
        technology is used must have been tested for interoperability with users&apos; assistive
        technology in the content&apos;s language, and accessibility-supported user agents must be
        available to users. So requirement 4 cannot be judged from the text alone; it needs evidence
        of support.
      </>
    ),
  },
};

export const RequirementsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.requirements.id}>
      <DocH2 {...toc.requirements} />
      <p>{c.intro}</p>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="normative" />
        <span className="text-xxsm text-text-light">
          WCAG 2.2 (W3C Recommendation, 2024-12-12) — 5.2 · {CHECKED_ON[locale]}
        </span>
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map(([name, ask], i) => [
          name,
          <ExternalLink key="quote" href={wcag22(quotes[i].anchor)}>
            <span lang="en">{quotes[i].text}</span>
          </ExternalLink>,
          ask,
        ])}
      />
      <p>{c.supported}</p>
    </section>
  );
};
