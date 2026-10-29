import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '가상의 회원가입 절차입니다. 이메일, 비밀번호, 휴대폰 문자 인증의 세 단계로 이루어지고, 다음 사실이 알려져 있다고 가정합니다.',
    facts: [
      '세 페이지를 WCAG 2.2 AA 기준으로 평가했고, 발견한 문제를 모두 고쳤습니다.',
      '비밀번호 규칙(10자 이상, 특수문자 포함)은 입력 칸 위에 글자로 안내합니다.',
      '제출하면 오류를 표시한 페이지를 새로 불러오고, 포커스는 페이지 맨 위에 있습니다. 오류는 해당 칸 옆에 글자로 표시되고 칸과 연결되어 있지만, 오류 요약은 없습니다.',
      '비장애 참여자 8명의 사용성 테스트에서 만족도가 높았습니다.',
      '본인 확인 방법은 본인 명의 휴대폰 문자 인증 하나뿐입니다.',
      '화면 낭독기 사용자 2명이 참여한 평가에서 두 사람 모두 오류가 있는 칸을 찾는 데 오래 걸렸고, 한 명은 찾지 못해 가입을 포기했습니다.',
    ],
    tableCaption: '같은 회원가입 절차를 네 관점으로 판단한 결과',
    tableHead: ['관점', '판단', '근거'],
    rows: [
      [
        '표준 적합성',
        '충족 (평가 범위 안)',
        '규칙을 입력 전에 글자로 안내하고(3.3.2 레이블 또는 설명), 오류를 글자로 알리며 어느 칸인지 보여줍니다(3.3.1 오류 식별). 페이지를 새로 불러오므로 4.1.3 상태 메시지의 대상도 아닙니다. 오류를 찾아가는 데 드는 시간은 성공 기준이 직접 요구하지 않습니다.',
      ],
      [
        '사용성',
        '양호 (비장애 참여자 기준)',
        '정해 둔 참여자 집단에서는 효과 · 효율 · 만족이 높았습니다. 그 집단에 장애가 있는 사람은 없었습니다.',
      ],
      [
        '접근성',
        '미흡 (과업 실패)',
        '화면 낭독기 사용자는 오류를 찾는 데 오래 걸렸고, 한 명은 가입을 끝내지 못했습니다. 동등하게 사용한다고 보기 어렵습니다.',
      ],
      [
        '포용적 설계',
        '미흡 (배제 있음)',
        '본인 명의 휴대폰이 없는 사람(단기 체류 외국인, 보호자 명의 회선을 쓰는 사람 등)은 처음부터 가입할 수 없습니다. 장애와 무관한 배제입니다.',
      ],
    ],
    outro:
      '네 판단은 서로 모순되지 않고, 다른 질문에 답할 뿐입니다. "WCAG를 충족했다"는 표준 적합성 행의 답이지, 화면 낭독기 사용자가 가입을 끝낼 수 있는지에 대한 답이 아닙니다.',
  },
  en: {
    intro:
      'A hypothetical sign-up process with three steps: email, password, and phone text verification. Assume the following facts are known.',
    facts: [
      'The three pages were evaluated against WCAG 2.2 AA, and every issue found was fixed.',
      'The password rule (10+ characters, including a symbol) is shown as text above the field.',
      'Submitting reloads the page with errors shown, and focus is at the top of the page. Errors appear in text next to each field and are associated with it, but there is no error summary.',
      'A usability test with 8 non-disabled participants showed high satisfaction.',
      'The only identity check is text verification on a phone registered in the user’s own name.',
      'In an evaluation with 2 screen reader users, both took a long time to find the field with the error, and one could not find it and gave up on signing up.',
    ],
    tableCaption: 'The same sign-up process judged from four perspectives',
    tableHead: ['Perspective', 'Judgment', 'Grounds'],
    rows: [
      [
        'Standards conformance',
        'Met (within scope)',
        'The rule is given in text before input (3.3.2 Labels or Instructions), and errors are described in text with their field (3.3.1 Error Identification). Because the page reloads, 4.1.3 Status Messages does not apply either. The time it takes to find errors is not something the success criteria directly require.',
      ],
      [
        'Usability',
        'Good (non-disabled participants)',
        'Effectiveness, efficiency, and satisfaction were high for the chosen group. The group included no disabled people.',
      ],
      [
        'Accessibility',
        'Falls short (task failure)',
        'Screen reader users took a long time to find errors, and one did not finish signing up. That is hard to call equal use.',
      ],
      [
        'Inclusive design',
        'Falls short (exclusion)',
        'People without a phone in their own name (short-term foreign visitors, people using a guardian’s line, and others) cannot sign up at all. This exclusion is unrelated to disability.',
      ],
    ],
    outro:
      'The four judgments do not contradict each other; they answer different questions. "We meet WCAG" answers the conformance row, not whether a screen reader user can finish signing up.',
  },
};

export const OneCaseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.oneCase.id}>
      <DocH2 {...toc.oneCase} />
      <p>{c.intro}</p>
      <div className="my-lg">
        <List ordered marker className="flex flex-col gap-xs">
          {c.facts.map((fact) => (
            <ListItem key={fact}>{fact}</ListItem>
          ))}
        </List>
      </div>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
      <p>{c.outro}</p>
    </section>
  );
};
