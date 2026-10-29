import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const APG_INTRO = 'https://www.w3.org/WAI/ARIA/apg/about/introduction/';
const UNDERSTANDING = 'https://www.w3.org/WAI/WCAG22/Understanding/';
const TECHNIQUES = 'https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques';

type Quiz = { statement: React.ReactNode; answer: string; reason: string };

const content: Record<
  Locale,
  {
    intro: React.ReactNode;
    tableCaption: string;
    tableHead: string[];
    rows: string[][];
    informative: React.ReactNode;
    quizHeading: string;
    quizIntro: string;
    answerLabel: string;
    quiz: Quiz[];
  }
> = {
  ko: {
    intro: (
      <>
        접근성 자료에는 성격이 다른 문장이 섞여 있습니다. <strong>규범</strong>(normative) 문서는
        지켜야 하는 요구이고, <strong>참고</strong>(informative) 문서는 이해와 구현을 돕지만 요구가
        아닙니다. WCAG 성공 기준과 WAI-ARIA 명세는 규범이고,{' '}
        <ExternalLink href={UNDERSTANDING}>Understanding 문서</ExternalLink>와 Techniques는
        참고용입니다. ARIA Authoring Practices Guide(APG)도{' '}
        <ExternalLink href={APG_INTRO}>스스로 규범적 표준이 아니라고</ExternalLink> 밝힙니다.
      </>
    ),
    tableCaption: '문장의 성격별 근거 문서와 따르지 않았을 때의 의미',
    tableHead: ['성격', '근거 문서의 예', '따르지 않았을 때'],
    rows: [
      [
        '규범적 요구',
        'WCAG 2.2 성공 기준, WAI-ARIA 명세',
        '요구를 어긴 것입니다. WCAG라면 그 범위에서 해당 수준의 적합성을 주장할 수 없습니다.',
      ],
      [
        '참고 자료',
        'APG 패턴, WCAG Understanding · Techniques',
        '그 자체로는 위반이 아닙니다. 다르게 만든다면 근거를 남깁니다.',
      ],
      [
        '일반 UX 제안',
        '디자인 가이드, 사내 원칙',
        '팀의 판단입니다. 표준의 이름으로 강제하지 않습니다.',
      ],
    ],
    informative: (
      <>
        참고 자료라고 가볍게 볼 수는 없습니다. APG는 패턴이 규범 요구를 전하고 있고, 널리 굳은
        키보드 관례는 요구처럼 다루는 편이 낫다고 설명합니다.{' '}
        <ExternalLink href={TECHNIQUES}>Techniques의 실패 사례(Failures)</ExternalLink>는 성공
        기준을 충족하지 못하는 경우를 모은 것이라, 해당하면 원칙적으로 그 기준을 충족하지 못합니다.
      </>
    ),
    quizHeading: '자가 점검 — 이 문장은 어떤 성격인가?',
    quizIntro: '각 문장을 읽고 먼저 스스로 답한 다음 펼쳐서 확인합니다.',
    answerLabel: '답',
    quiz: [
      {
        statement: '버튼의 보이는 글자가 그 버튼의 접근 가능한 이름 안에 들어 있어야 한다.',
        answer: '규범적 요구',
        reason:
          'WCAG 2.2 성공 기준 2.5.3 이름의 레이블(A)이 요구합니다. 01.3의 음성 입력 사례와 이어집니다.',
      },
      {
        statement: '탭 목록에서는 화살표 키로 탭 사이를 이동한다.',
        answer: '참고 자료 (APG 권장 패턴)',
        reason:
          'APG의 Tabs 패턴이 권장하는 키보드 조작입니다. 널리 굳은 관례라 따르는 편이 낫지만, 규범으로 확인할 지점은 모든 탭에 키보드로 닿는지(2.1.1 키보드, A)입니다.',
      },
      {
        statement: '오류 메시지는 친근한 말투로 쓴다.',
        answer: '일반 UX 제안',
        reason:
          '말투는 표준이 정하지 않습니다. 오류가 무엇이고 어떻게 고치는지 알려주는 것은 3.3.1 오류 식별(A)과 3.3.3 오류 제안(AA)이 다루는 별개의 문제입니다.',
      },
      {
        statement: '포커스 표시는 두께 3px의 테두리로 그린다.',
        answer: '일반 UX 제안 (디자인 시스템 결정)',
        reason:
          '2.4.7 포커스 표시(AA)는 키보드 포커스가 보일 것만 요구합니다. 2.4.13 포커스 모양(AAA)도 최소 면적(2 CSS 픽셀 두께의 둘레 이상)과 대비 3:1을 정할 뿐, 3px이라는 값은 팀의 결정입니다.',
      },
      {
        statement: (
          <>
            접근성을 위해 모든 버튼에 <code>aria-label</code>을 붙인다.
          </>
        ),
        answer: '어느 쪽도 아님 — 근거 없는 규칙',
        reason:
          '보이는 글자가 있는 버튼에 다른 문구의 aria-label을 붙이면 이름이 덮어써져, 1번 문항의 2.5.3을 어길 수 있습니다. 규칙처럼 들리지만 근거 문서가 없습니다.',
      },
    ],
  },
  en: {
    intro: (
      <>
        Accessibility material mixes sentences of different kinds. <strong>Normative</strong>{' '}
        documents set requirements; <strong>informative</strong> documents help understanding and
        implementation but are not requirements. WCAG success criteria and the WAI-ARIA
        specification are normative, while the{' '}
        <ExternalLink href={UNDERSTANDING}>Understanding documents</ExternalLink> and Techniques are
        informative. The ARIA Authoring Practices Guide (APG){' '}
        <ExternalLink href={APG_INTRO}>states that it is not a normative standard</ExternalLink>.
      </>
    ),
    tableCaption: 'Source documents by kind of statement and what not following them means',
    tableHead: ['Kind', 'Example sources', 'If not followed'],
    rows: [
      [
        'Normative requirement',
        'WCAG 2.2 success criteria, WAI-ARIA specification',
        'The requirement is broken. For WCAG, you cannot claim conformance at that level for that scope.',
      ],
      [
        'Informative resource',
        'APG patterns, WCAG Understanding and Techniques',
        'Not a failure by itself. If you diverge, record your reasoning.',
      ],
      [
        'General UX advice',
        'Design guides, team principles',
        'A team judgment. Do not enforce it in the name of a standard.',
      ],
    ],
    informative: (
      <>
        Informative does not mean optional in practice. APG explains that its patterns convey
        normative requirements and that well-established keyboard conventions are best treated as
        requirements. <ExternalLink href={TECHNIQUES}>Failures in Techniques</ExternalLink> collect
        cases that fail success criteria, so content that matches one generally does not meet that
        criterion.
      </>
    ),
    quizHeading: 'Self-check — what kind of statement is this?',
    quizIntro: 'Read each statement, answer for yourself first, then expand to check.',
    answerLabel: 'Answer',
    quiz: [
      {
        statement: 'A button’s visible text must be included in its accessible name.',
        answer: 'Normative requirement',
        reason:
          'WCAG 2.2 success criterion 2.5.3 Label in Name (A) requires it. It connects to the speech input case in 01.3.',
      },
      {
        statement: 'In a tab list, arrow keys move between tabs.',
        answer: 'Informative resource (APG recommended pattern)',
        reason:
          'This is the keyboard interaction recommended by the APG Tabs pattern. It is a well-established convention worth following, but the normative check is whether every tab is reachable by keyboard (2.1.1 Keyboard, A).',
      },
      {
        statement: 'Write error messages in a friendly tone.',
        answer: 'General UX advice',
        reason:
          'Tone is not set by the standard. Saying what the error is and how to fix it is a separate matter covered by 3.3.1 Error Identification (A) and 3.3.3 Error Suggestion (AA).',
      },
      {
        statement: 'Draw the focus indicator as a 3px border.',
        answer: 'General UX advice (a design system decision)',
        reason:
          '2.4.7 Focus Visible (AA) only requires keyboard focus to be visible. 2.4.13 Focus Appearance (AAA) sets a minimum area (at least a 2 CSS pixel thick perimeter) and 3:1 contrast, but the 3px value is a team decision.',
      },
      {
        statement: (
          <>
            For accessibility, add <code>aria-label</code> to every button.
          </>
        ),
        answer: 'None of these — a rule with no source',
        reason:
          'Adding a differently worded aria-label to a button with visible text overrides its name and can break 2.5.3 from question 1. It sounds like a rule but has no source.',
      },
    ],
  },
};

export const LevelsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.levels.id}>
      <DocH2 {...toc.levels} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
      <p>{c.informative}</p>

      <DocH3>{c.quizHeading}</DocH3>
      <p>{c.quizIntro}</p>
      <ol className="my-lg flex flex-col gap-sm">
        {c.quiz.map((item) => (
          <li key={item.answer}>
            <details className="overflow-hidden rounded-md border border-stroke-light bg-background-surface">
              <summary className="cursor-pointer px-lg py-md text-xsm font-semiBold text-text-default hover:bg-background-grey/20">
                {item.statement}
              </summary>
              <div className="border-t border-stroke-light px-lg py-md text-xsm">
                <p className="font-semiBold text-text-primary">
                  {c.answerLabel}: {item.answer}
                </p>
                <p className="mt-xs text-text-light">{item.reason}</p>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
};
