import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const WAI_EVALUATE = 'https://www.w3.org/WAI/test-evaluate/';
const WCAG_CONFORMANCE = 'https://www.w3.org/TR/WCAG22/#conformance';

const content = {
  ko: {
    intro:
      '"WCAG를 충족했으니 누구나 쓸 수 있다"처럼 세 판단은 자주 한 문장에 섞입니다. 하지만 확인하는 방법과 답을 정하는 주체가 다릅니다.',
    tableCaption: '세 판단의 확인 방법과 답을 정하는 주체',
    tableHead: ['판단', '확인 방법', '답을 정하는 주체'],
    rows: [
      [
        '표준 적합성',
        '범위 · 기준 버전 · 수준을 정하고 자동 검사와 수동 검사로 평가합니다',
        '평가자',
      ],
      ['과업 성공', '실제 사용자가 자기 방식으로 과업을 끝내는지 관찰합니다', '사용자의 실제 결과'],
      ['법적 의무', '관할 법령 원문, 조달 기준, 담당 기관 안내를 확인합니다', '법령과 담당 기관'],
    ],
    independence:
      '표준 적합성과 과업 성공은 서로를 보증하지 않습니다. 회원가입 사례처럼 기준을 모두 충족해도 과업에 실패할 수 있고, 기준 하나를 어겨도 사용자가 우회해서 끝낼 수 있습니다.',
    scope: (
      <>
        표준 적합성은 범위와 함께 말해야 의미가 있습니다. WCAG 2.2의{' '}
        <ExternalLink href={WCAG_CONFORMANCE}>적합성 요구사항</ExternalLink> 다섯 가지(적합성 수준,
        전체 페이지, 완전한 절차, 접근성이 지원되는 기술 사용 방식, 비간섭) 중 두 가지가 범위를
        정합니다. 페이지의 일부를 빼고는 적합성을 주장할 수 없고, 가입처럼 여러 페이지로 이어지는
        절차는 모든 페이지가 같은 수준을 충족해야 합니다.
      </>
    ),
    tools: (
      <>
        자동 검사 도구도 이 구분을 대신하지 않습니다. W3C WAI는{' '}
        <ExternalLink href={WAI_EVALUATE}>
          도구 단독으로는 사이트가 접근성 표준을 충족하는지 판단할 수 없고 사람의 평가가 필요하다
        </ExternalLink>
        고 설명합니다. 자동 검사의 오류 0건은 &quot;도구가 확인할 수 있는 항목에서 발견하지
        못했다&quot;는 뜻입니다.
      </>
    ),
    wordingTitle: '세 판단을 한 문장으로 합치지 않습니다',
    avoidLabel: '쓰지 않는 표현',
    avoid: [
      '"이 서비스는 법적으로 문제없습니다"',
      '"자동 검사 0건이므로 접근성을 준수합니다"',
      '"WCAG AA를 충족했으니 모든 사용자가 쓸 수 있습니다"',
    ],
    insteadLabel: '바꿔 쓰는 표현',
    instead:
      '"가입 절차 세 페이지를 WCAG 2.2 AA 기준으로 자동 · 수동 평가했고, 발견한 문제는 다음과 같습니다. 화면 낭독기 사용자 2명과 과업 평가를 했고, 결과는 다음과 같습니다. 법적 의무 여부는 이 평가의 범위가 아닙니다."',
  },
  en: {
    intro:
      'As in "We meet WCAG, so anyone can use it", the three are often mixed in one sentence. But they are checked differently and answered by different parties.',
    tableCaption: 'How each of the three is checked and who decides the answer',
    tableHead: ['Judgment', 'How it is checked', 'Who decides'],
    rows: [
      [
        'Standards conformance',
        'Set the scope, standard version, and level, then evaluate with automated and manual checks',
        'The evaluator',
      ],
      [
        'Task success',
        'Observe whether real users finish the task their own way',
        'What users actually achieve',
      ],
      [
        'Legal obligation',
        'Check the original legislation, procurement rules, and guidance from the responsible agency',
        'The law and the responsible agency',
      ],
    ],
    independence:
      'Conformance and task success do not guarantee each other. As in the sign-up case, a task can fail when every criterion is met, and users may work around a failed criterion and still finish.',
    scope: (
      <>
        Conformance only means something together with its scope. Of the five WCAG 2.2{' '}
        <ExternalLink href={WCAG_CONFORMANCE}>conformance requirements</ExternalLink> (conformance
        level, full pages, complete processes, only accessibility-supported ways of using
        technologies, and non-interference), two set the scope. Conformance cannot be claimed if
        part of a page is excluded, and in a multi-page process like sign-up every page must meet
        the same level.
      </>
    ),
    tools: (
      <>
        Automated tools do not replace this distinction either. W3C WAI explains that{' '}
        <ExternalLink href={WAI_EVALUATE}>
          no tool alone can determine whether a site meets accessibility standards and human
          evaluation is required
        </ExternalLink>
        . Zero automated errors means &quot;nothing was found among the things the tool can
        check&quot;.
      </>
    ),
    wordingTitle: 'Do not merge the three into one sentence',
    avoidLabel: 'Avoid',
    avoid: [
      '"This service has no legal issues"',
      '"Zero automated errors, so we are accessible"',
      '"We meet WCAG AA, so every user can use it"',
    ],
    insteadLabel: 'Write instead',
    instead:
      '"We evaluated the three sign-up pages manually and automatically against WCAG 2.2 AA, and found the issues below. We ran a task evaluation with 2 screen reader users, with the results below. Legal obligation is outside the scope of this evaluation."',
  },
};

export const GapsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.gaps.id}>
      <DocH2 {...toc.gaps} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
      <p>{c.independence}</p>
      <p>{c.scope}</p>
      <p>{c.tools}</p>

      <Callout variant="pitfall" title={c.wordingTitle}>
        <p className="font-semiBold">{c.avoidLabel}</p>
        <List marker className="flex flex-col gap-2xs">
          {c.avoid.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
        <p className="font-semiBold">{c.insteadLabel}</p>
        <p>{c.instead}</p>
      </Callout>
    </section>
  );
};
