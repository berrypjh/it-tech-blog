import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { PageLink } from '@/components/shared/PageLink';

import { PourDiagram } from '../diagrams/PourDiagram';
import { getToc } from '../toc';

const WCAG22 = 'https://www.w3.org/TR/WCAG22/';

const content = {
  ko: {
    intro: 'WCAG, KWCAG, 법령은 자주 같은 말처럼 쓰이지만 서로 다른 층에 있습니다.',
    layers: [
      { title: '목표', detail: '접근성 — 동등한 사용' },
      { title: '기술 기준·지침', detail: 'WCAG, KWCAG — 검증 가능한 성공 기준' },
      { title: '정책·조달·인증·법령', detail: '기술 기준을 참조해 의무를 정합니다' },
      { title: '실제 적용 범위', detail: '국가 · 기관 · 서비스 유형에 따라 달라집니다' },
    ],
    wcag: (
      <>
        <ExternalLink href={WCAG22}>Web Content Accessibility Guidelines 2.2</ExternalLink>는 W3C의
        웹 콘텐츠 접근성 지침입니다. 2023년 10월 5일 W3C Recommendation으로 공개됐고 2024년 12월
        12일 갱신본이 나왔습니다. WCAG는 네 가지 원칙(POUR) 아래에 성공 기준을 묶습니다.
      </>
    ),
    levelsLead: 'WCAG 2.2의 성공 기준 86개에는 각각 세 수준 중 하나가 붙습니다.',
    levels: [
      { level: 'A', detail: '가장 기본 수준입니다. 못 지키면 일부 사용자는 아예 쓸 수 없습니다.' },
      { level: 'AA', detail: 'A를 포함합니다. 대부분의 정책과 조달이 목표로 삼는 수준입니다.' },
      {
        level: 'AAA',
        detail: 'AA를 포함합니다. 가장 높은 수준이며, 모든 콘텐츠에 요구하지는 않습니다.',
      },
    ],
    kwcagHeading: '한국의 국가표준 KWCAG',
    kwcag: (
      <>
        「한국형 웹 콘텐츠 접근성 지침 2.2」(KS X OT0003)는 국립전파연구원이 2022년 12월 28일 개정
        고시했습니다. WCAG 2.1과, 당시 초안이던 2.2를 반영해 기존 24개 검사 항목에 9개를
        추가했습니다. 즉 KWCAG는 WCAG를 참조한 한국의 국가표준이지,{' '}
        <strong>번역본도 법률 조문도 아닙니다</strong>.
      </>
    ),
    pitfallTitle: '확인 없이 단정하지 않습니다',
    mythsLead: '이런 말은 상황에 따라 틀립니다.',
    myths: [
      '"모든 웹사이트는 WCAG 2.2 AA를 법적으로 지켜야 한다"',
      '"KWCAG를 만족하면 모든 법적 의무가 충족된다"',
    ],
    legal:
      '법적 요구는 국가, 기관 유형, 서비스 성격, 적용 법령, 조달 기준, 인증 제도에 따라 달라집니다. 이 문서는 법률 자문이 아니므로, 필요하면 관할 법령 원문과 담당 기관 안내를 직접 확인합니다.',
    more: (
      <>
        기준이 있고 법적 요구로 이어질 수 있으니, 접근성은 설계 초기부터 다룹니다. 표준 적합성과
        사용자의 과업 성공, 법적 의무가 왜 서로 다른 질문인지는{' '}
        <PageLink locale="ko" id="concept-boundaries" />
        에서 다룹니다.
      </>
    ),
  },
  en: {
    intro:
      'WCAG, KWCAG and the law are often used as if they meant the same thing, but they sit on different layers.',
    layers: [
      { title: 'Goal', detail: 'Accessibility — equal use' },
      {
        title: 'Technical standards · guidelines',
        detail: 'WCAG, KWCAG — testable success criteria',
      },
      {
        title: 'Policy · procurement · certification · law',
        detail: 'Set obligations by referencing standards',
      },
      { title: 'Actual scope', detail: 'Varies by country, organization, and service type' },
    ],
    wcag: (
      <>
        <ExternalLink href={WCAG22}>Web Content Accessibility Guidelines 2.2</ExternalLink> are the
        W3C guidelines for web content accessibility. They became a W3C Recommendation on October 5,
        2023, and an updated edition was published on December 12, 2024. WCAG groups its success
        criteria under four principles (POUR).
      </>
    ),
    levelsLead: 'Each of the 86 success criteria in WCAG 2.2 is assigned one of three levels.',
    levels: [
      { level: 'A', detail: 'The basic level. Miss one and some users cannot use it at all.' },
      { level: 'AA', detail: 'Includes A. It is the level most policies and procurement aim for.' },
      {
        level: 'AAA',
        detail: 'Includes AA. It is the highest level and is not required for all content.',
      },
    ],
    kwcagHeading: 'KWCAG, the Korean national standard',
    kwcag: (
      <>
        The Korean Web Content Accessibility Guidelines 2.2 (KS X OT0003) were revised and announced
        by the National Radio Research Agency on December 28, 2022. Reflecting WCAG 2.1 and the then
        draft of 2.2, the revision added 9 items to the existing 24. KWCAG is Korea&apos;s national
        standard that references WCAG — <strong>neither a translation nor a legal text</strong>.
      </>
    ),
    pitfallTitle: 'Do not assert without checking',
    mythsLead: 'These statements can be wrong depending on the situation.',
    myths: [
      '"Every website is legally required to meet WCAG 2.2 AA"',
      '"Meeting KWCAG satisfies every legal obligation"',
    ],
    legal:
      'Legal requirements vary by country, organization type, nature of the service, applicable law, procurement rules, and certification schemes. This document is not legal advice; when needed, check the original legislation and guidance from the responsible agency.',
    more: (
      <>
        Because there are standards and they can lead to legal requirements, accessibility belongs
        at the start of design. Why standards conformance, task success, and legal obligation are
        different questions is covered in <PageLink locale="en" id="concept-boundaries" />.
      </>
    ),
  },
};

export const StandardsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.standards.id}>
      <DocH2 {...toc.standards} />
      <p>{c.intro}</p>

      <div className="my-xl">
        <List ordered className="flex flex-col gap-xs">
          {c.layers.map((layer, i) => (
            <ListItem
              key={layer.title}
              className="flex items-baseline gap-md rounded-sm border border-stroke-light bg-background-default px-lg py-sm"
              style={{ marginLeft: `calc(${i} * var(--ds-spacing-lg))` }}
            >
              <span className="text-xsm font-semiBold">{layer.title}</span>
              <span className="text-xxsm text-text-light">{layer.detail}</span>
            </ListItem>
          ))}
        </List>
      </div>

      <DocH3>WCAG 2.2</DocH3>
      <p>{c.wcag}</p>
      <PourDiagram locale={locale} />
      <p>{c.levelsLead}</p>
      <dl className="my-md grid grid-cols-[auto_1fr] items-baseline gap-x-lg gap-y-sm">
        {c.levels.map(({ level, detail }) => (
          <Fragment key={level}>
            <dt className="font-bold text-text-primary">{level}</dt>
            <dd className="text-xsm text-text-light">{detail}</dd>
          </Fragment>
        ))}
      </dl>

      <DocH3>{c.kwcagHeading}</DocH3>
      <p>{c.kwcag}</p>

      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.mythsLead}</p>
        <List marker className="flex flex-col gap-xs">
          {c.myths.map((myth) => (
            <ListItem key={myth}>{myth}</ListItem>
          ))}
        </List>
        <p className="mt-md">{c.legal}</p>
      </Callout>
      <p>{c.more}</p>
    </section>
  );
};
