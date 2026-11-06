import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const template = {
  ko: `과업:
환경 · 버전: (보조기술 · 브라우저 · 운영체제와 각 버전)
관찰 위치: (교육용 모델 / 실제 DOM 관찰 / 브라우저 도구 / 실제 보조기술 중 하나)
수행 절차:
  1.
기대 의미:
실제 결과: (해 보지 않았으면 "미실행")
차이:
미확인 사항:`,
  en: `Task:
Environment · versions: (assistive technology, browser, OS, and each version)
Observed in: (one of teaching model / real DOM observation / browser tools / real AT)
Steps:
  1.
Expected meaning:
Actual result: ("not run" if you did not do it)
Difference:
Unconfirmed:`,
};

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="barrier-report" hash="write-record" />의 재현 기록을 넓힙니다.
        가장 큰 차이는 <strong>관찰 위치</strong> 칸입니다. 같은 컨트롤이라도 관찰 위치마다 한 줄씩
        따로 적습니다.
      </>
    ),
    mapCaption: '01.5 재현 기록에서 이 장의 기록으로',
    mapHead: ['이 장의 칸', '01.5에서', '적는 것'],
    map: [
      ['과업', '과업', '하려던 일 하나'],
      ['환경 · 버전', '환경', '보조기술 · 브라우저 · 운영체제와 각 버전'],
      ['관찰 위치', '새 칸', '네 가지 출처 가운데 하나'],
      ['수행 절차', '사용 방식 · 재현 절차', '다른 사람이 따라 할 수 있는 단계'],
      ['기대 의미', '기대 결과', '정확한 발화가 아니라 전달되어야 할 뜻'],
      ['실제 결과', '실제 결과', '본 것이나 들은 것. 해 보지 않았으면 미실행'],
      ['차이', '새 칸', '기대와 다른 점, 또는 다른 관찰 위치와 다른 점'],
      ['미확인 사항', '더 확인할 것', '이번에 확인하지 못한 조합과 질문'],
    ],
    exampleHeading: '작성 예시',
    exampleCaption: '체크박스 하나를 세 관찰 위치에서 적은 예',
    exampleHead: ['관찰 위치', '실제 결과', '차이'],
    example: [
      ['dom', 'checked 속성값 true, HTML 속성은 없음', '속성값만 바뀌는 것은 예상대로'],
      ['devtools', '역할 checkbox, 이름 "주문 내역을 이메일로 받기", 상태 checked', '없음'],
      ['at', '미실행 — 화면 낭독기를 쓸 수 없음', '확인하지 못함'],
    ] as const,
    exampleNote: (
      <>
        이 표는 칸을 채우는 방법을 보이는 예시입니다. 직접 관찰한 값이 아니므로 자신의 기록에는
        자신이 본 값을 적습니다.
      </>
    ),
    templateLabel: '복사해 쓰는 기록 틀',
  },
  en: {
    intro: (
      <>
        This extends the reproduction record from{' '}
        <PageLink locale="en" id="barrier-report" hash="write-record" />. The biggest difference is
        the <strong>Observed in</strong> field. Even for the same control, write one line per place
        of observation.
      </>
    ),
    mapCaption: 'From the 01.5 reproduction record to this chapter’s record',
    mapHead: ['Field here', 'In 01.5', 'What to write'],
    map: [
      ['Task', 'Task', 'The one thing you were trying to do'],
      [
        'Environment · versions',
        'Environment',
        'Assistive technology, browser, OS, and each version',
      ],
      ['Observed in', 'New', 'One of the four sources'],
      ['Steps', 'Way of use · Steps to reproduce', 'Steps someone else can follow'],
      [
        'Expected meaning',
        'Expected result',
        'The meaning that should come through, not exact speech',
      ],
      ['Actual result', 'Actual result', 'What you saw or heard; not run if you did not do it'],
      ['Difference', 'New', 'How it differs from expected, or from another place of observation'],
      ['Unconfirmed', 'Still to verify', 'Combinations and questions not checked this time'],
    ],
    exampleHeading: 'Example',
    exampleCaption: 'One checkbox recorded from three places of observation',
    exampleHead: ['Observed in', 'Actual result', 'Difference'],
    example: [
      [
        'dom',
        'checked property true, no HTML attribute',
        'Only the property changing is as expected',
      ],
      ['devtools', 'Role checkbox, name "Email me the order details", state checked', 'None'],
      ['at', 'Not run — no screen reader available', 'Not checked'],
    ] as const,
    exampleNote: (
      <>
        This table is an example of how to fill in the fields. It is not an observed value, so write
        the values you actually saw in your own record.
      </>
    ),
    templateLabel: 'A record template to copy',
  },
};

export const RecordSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.record.id}>
      <DocH2 {...toc.record} />
      <p>{c.intro}</p>
      <DocTable caption={c.mapCaption} head={c.mapHead} rows={c.map} />
      <DocH3>{c.exampleHeading}</DocH3>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable
        caption={c.exampleCaption}
        head={[...c.exampleHead]}
        rows={c.example.map(([source, result, diff]) => [
          <SourceTag key="source" locale={locale} id={source} />,
          result,
          diff,
        ])}
      />
      <p>{c.exampleNote}</p>
      <CodeBlock label={c.templateLabel} code={template[locale]} />
    </section>
  );
};
