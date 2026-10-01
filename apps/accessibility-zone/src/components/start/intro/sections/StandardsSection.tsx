import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const WCAG22 = 'https://www.w3.org/TR/WCAG22/';

const content = {
  ko: {
    intro:
      '이 절의 목적은 용어를 섞지 않는 것입니다. 접근성 문서에서 자주 뒤섞이는 층은 다음과 같습니다.',
    layers: [
      { title: '목표', detail: '접근성 — 동등한 사용' },
      { title: '기술 기준 · 지침', detail: 'WCAG, KWCAG — 검증 가능한 Success Criteria' },
      { title: '정책 · 조달 · 인증 · 법령', detail: '기술 기준을 참조해 의무를 정합니다' },
      { title: '실제 적용 범위', detail: '국가 · 기관 · 서비스 유형에 따라 달라집니다' },
    ],
    wcag: (
      <>
        <ExternalLink href={WCAG22}>Web Content Accessibility Guidelines 2.2</ExternalLink>는 W3C의
        웹 콘텐츠 접근성 지침입니다. 2023년 10월 5일 W3C Recommendation으로 공개됐고 2024년 12월
        12일 갱신본이 나왔습니다. 최상위 계층은 네 가지 원칙(POUR)입니다.
      </>
    ),
    pourCaption: 'WCAG의 네 가지 원칙 POUR',
    pourHead: ['원칙', '다루는 질문'],
    pour: [
      ['Perceivable (인식 가능)', '정보를 사용자가 인식할 수 있는 형태로 제공하나요?'],
      ['Operable (운용 가능)', '기능을 조작하고 탐색할 수 있나요?'],
      ['Understandable (이해 가능)', '내용과 동작을 읽고 예측할 수 있나요?'],
      ['Robust (견고성)', '다양한 사용자 도구와 보조기술이 안정적으로 해석하나요?'],
    ],
    levels: (
      <>
        적합성 수준은 <strong>A · AA · AAA</strong> 세 단계입니다. 원칙별 Success Criteria와 수준
        차이는 WCAG 챕터에서 다룹니다.
      </>
    ),
    kwcagHeading: '한국의 국가표준 KWCAG',
    kwcag: (
      <>
        「한국형 웹 콘텐츠 접근성 지침 2.2」(KS X OT0003)는 국립전파연구원이 2022년 12월 28일 개정
        고시했습니다. WCAG 2.1과 2.2의 내용을 반영해 기존 24개 검사 항목에 9개를 추가했습니다. 즉
        KWCAG는 WCAG를 참조한 <strong>한국의 국가표준</strong>이지, 번역본도 법률 조문도 아닙니다.
      </>
    ),
    pitfallTitle: '확인 없이 단정하지 마세요',
    myths: [
      '"WCAG는 법률이다"',
      '"모든 웹사이트는 WCAG 2.2 AA를 법적으로 지켜야 한다"',
      '"KWCAG를 만족하면 모든 법적 의무가 충족된다"',
    ],
    legal:
      '법적 요구는 국가, 기관 유형, 서비스 성격, 적용 법령, 조달 기준, 인증 제도에 따라 달라집니다. 이 문서는 법률 자문이 아니므로, 필요하면 관할 법령 원문과 담당 기관 안내를 직접 확인하세요.',
    note: (
      <>
        접근성은 UI 취향이 아니라 <strong>검증 가능한 기술 기준</strong>이 존재하는 영역이며, 표준과
        정책, 법적 요구로 이어질 수 있습니다. 그래서 설계 초기부터 다뤄야 합니다.
      </>
    ),
  },
  en: {
    intro:
      'The goal of this section is to keep terms apart. These are the layers that most often get mixed up in accessibility writing.',
    layers: [
      { title: 'Goal', detail: 'Accessibility — equal use' },
      {
        title: 'Technical standards · guidelines',
        detail: 'WCAG, KWCAG — testable Success Criteria',
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
        2023, and an updated edition was published on December 12, 2024. The top level consists of
        four principles (POUR).
      </>
    ),
    pourCaption: 'The four WCAG principles (POUR)',
    pourHead: ['Principle', 'Question it asks'],
    pour: [
      ['Perceivable', 'Is information presented in ways users can perceive?'],
      ['Operable', 'Can users operate and navigate the functionality?'],
      ['Understandable', 'Can users read and predict the content and behavior?'],
      ['Robust', 'Do diverse user agents and assistive technologies interpret it reliably?'],
    ],
    levels: (
      <>
        There are three conformance levels: <strong>A · AA · AAA</strong>. Success Criteria per
        principle and the differences between levels are covered in the WCAG chapter.
      </>
    ),
    kwcagHeading: 'KWCAG, the Korean national standard',
    kwcag: (
      <>
        The Korean Web Content Accessibility Guidelines 2.2 (KS X OT0003) were revised and announced
        by the National Radio Research Agency on December 28, 2022. Reflecting WCAG 2.1 and 2.2, the
        revision added 9 items to the existing 24. KWCAG is{' '}
        <strong>Korea&apos;s national standard</strong> that references WCAG — neither a translation
        nor a legal text.
      </>
    ),
    pitfallTitle: 'Do not assert without checking',
    myths: [
      '"WCAG is a law"',
      '"Every website is legally required to meet WCAG 2.2 AA"',
      '"Meeting KWCAG satisfies every legal obligation"',
    ],
    legal:
      'Legal requirements vary by country, organization type, nature of the service, applicable law, procurement rules, and certification schemes. This document is not legal advice; when needed, check the original legislation and guidance from the responsible agency.',
    note: (
      <>
        Accessibility is not a matter of UI taste. It is a field with{' '}
        <strong>testable technical standards</strong> that can lead to standards, policy, and legal
        requirements. That is why it belongs at the start of design.
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
              <span className="font-mono text-xxsm text-text-light">L{i + 1}</span>
              <span className="text-xsm font-semiBold">{layer.title}</span>
              <span className="text-xxsm text-text-light">{layer.detail}</span>
            </ListItem>
          ))}
        </List>
      </div>

      <DocH3>WCAG 2.2</DocH3>
      <p>{c.wcag}</p>
      <DocTable caption={c.pourCaption} head={c.pourHead} rows={c.pour} />
      <p>{c.levels}</p>

      <DocH3>{c.kwcagHeading}</DocH3>
      <p>{c.kwcag}</p>

      <Callout variant="pitfall" title={c.pitfallTitle}>
        <List marker className="flex flex-col gap-xs">
          {c.myths.map((myth) => (
            <ListItem key={myth}>{myth}</ListItem>
          ))}
        </List>
        <p>{c.legal}</p>
      </Callout>
      <Callout variant="note">
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
