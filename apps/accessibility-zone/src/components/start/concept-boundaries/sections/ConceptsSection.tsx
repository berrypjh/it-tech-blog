import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const WAI_AUI = 'https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/';

const content = {
  ko: {
    intro: (
      <>
        W3C WAI의{' '}
        <ExternalLink href={WAI_AUI}>Accessibility, Usability, and Inclusion</ExternalLink>은 세
        개념을 이렇게 나눕니다. 접근성은 장애가 있는 사람이 동등한 경험을 하지 못하게 만드는 차별적
        측면을 다루고, 사용성은 제품을 효과적이고 효율적이며 만족스럽게 설계하는 일이며, 포용은
        다양성과 가능한 한 모든 사람의 참여를 다룹니다. 포용적 설계는 지역에 따라 유니버설 디자인,
        모두를 위한 디자인이라고도 부릅니다. 이 페이지는 여기에 표준 적합성을 더해 네 개념을
        비교합니다.
      </>
    ),
    tableCaption: '네 개념이 묻는 질문과 판단 근거',
    tableHead: ['개념', '묻는 질문', '판단 근거', '중심 대상'],
    rows: [
      [
        '접근성',
        '장애가 있는 사람이 동등하게 과업을 끝낼 수 있는가?',
        '장애가 있는 사용자 참여 평가, 표준 기준 검사, 보조기술 확인',
        '장애가 있는 사람',
      ],
      [
        '사용성',
        '정해 둔 사용자가 효과적이고 효율적이며 만족스럽게 쓰는가?',
        '사용성 테스트, 과업 성공률 · 소요 시간 · 만족도',
        '정해 둔 사용자와 사용 맥락',
      ],
      [
        '포용적 설계',
        '누가 빠지는가? 다양한 사람이 처음부터 참여했는가?',
        '설계에 참여한 사람의 다양성, 배제되는 조건',
        '나이 · 언어 · 문화 · 기기 · 인터넷 환경 · 경제 상황을 포함한 모든 사람',
      ],
      [
        '표준 적합성',
        '정한 범위의 페이지가 선택한 수준의 성공 기준을 모두 충족하는가?',
        'WCAG 같은 기술 기준에 따른 평가',
        '평가 범위로 정한 페이지와 절차',
      ],
    ],
    relationTitle: '네 개념은 겹치지만 서로를 대신하지 않습니다',
    relations: [
      '사용성은 ISO 9241-11의 정의대로 "정해 둔 사용자"를 봅니다. 그 사용자에 장애가 있는 사람이 들어 있지 않으면 접근성 문제를 찾지 못합니다.',
      '표준 적합성은 접근성의 일부를 검증할 수 있는 기준으로 만든 것입니다. WAI는 접근성을 기준 체크리스트로만 다루면 사람이 실제로 쓰는 측면을 놓친다고 설명합니다.',
      '포용적 설계는 언어 · 기기 · 경제 상황처럼 장애 밖의 배제까지 다룹니다. WAI는 접근성의 초점을 장애에 둘 때 장애가 있는 사람의 구체적인 요구에 맞는 연구와 해결책이 나온다고 설명합니다.',
    ],
  },
  en: {
    intro: (
      <>
        W3C WAI&apos;s{' '}
        <ExternalLink href={WAI_AUI}>Accessibility, Usability, and Inclusion</ExternalLink>{' '}
        separates three concepts. Accessibility addresses discriminatory aspects related to
        equivalent user experience for people with disabilities; usability is about designing
        products to be effective, efficient, and satisfying; inclusion is about diversity and
        involving everyone to the greatest extent possible. Inclusive design is also called
        universal design or design for all in some regions. This page adds standards conformance and
        compares all four.
      </>
    ),
    tableCaption: 'The question each concept asks and what it is judged on',
    tableHead: ['Concept', 'Question it asks', 'Judged on', 'Main focus'],
    rows: [
      [
        'Accessibility',
        'Can disabled people finish the task on equal terms?',
        'Evaluation with disabled users, checks against standards, assistive technology checks',
        'Disabled people',
      ],
      [
        'Usability',
        'Do specified users use it effectively, efficiently, and with satisfaction?',
        'Usability testing, task success rate, time on task, satisfaction',
        'Specified users and contexts of use',
      ],
      [
        'Inclusive design',
        'Who is left out? Were diverse people involved from the start?',
        'Diversity of people involved in design, conditions that exclude',
        'Everyone, including age, language, culture, device, connectivity, and economic situation',
      ],
      [
        'Standards conformance',
        'Do the pages in scope meet every success criterion at the chosen level?',
        'Evaluation against technical standards such as WCAG',
        'The pages and processes in the evaluation scope',
      ],
    ],
    relationTitle: 'The four overlap, but none replaces another',
    relations: [
      'Usability, as ISO 9241-11 defines it, looks at "specified users". If those users include no disabled people, it does not find accessibility problems.',
      'Conformance turns part of accessibility into testable criteria. WAI explains that treating accessibility only as a checklist of criteria loses the human interaction aspect.',
      'Inclusive design also covers exclusion beyond disability, such as language, devices, and economic situation. WAI explains that keeping accessibility focused on disability leads to research and solutions for the specific needs of disabled people.',
    ],
  },
};

export const ConceptsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.concepts.id}>
      <DocH2 {...toc.concepts} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
      <Callout variant="note" title={c.relationTitle}>
        <List marker className="flex flex-col gap-xs">
          {c.relations.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Callout>
    </section>
  );
};
