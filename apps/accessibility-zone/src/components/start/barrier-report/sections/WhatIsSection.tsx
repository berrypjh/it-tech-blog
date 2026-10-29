import Link from 'next/link';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { failureStages } from '@/components/shared/failureStages';
import { StageLabel } from '@/components/shared/StageLabel';

import { getToc as getIntroToc } from '../../intro/toc';
import { getToc } from '../toc';

/** 01.1의 사례 기록 섹션으로 가는 링크. 제목과 id는 intro의 toc를 그대로 쓴다. */
const CaseLink = ({ locale }: { locale: Locale }) => {
  const { id, title } = getIntroToc(locale).barrierCase;
  return <Link href={`/intro#${id}`}>01.1 {title}</Link>;
};

const StageList = ({ locale }: { locale: Locale }) => (
  <span className="mt-xs flex flex-wrap gap-x-md gap-y-2xs">
    {failureStages[locale].map((stage) => (
      <StageLabel key={stage.id} locale={locale} id={stage.id} />
    ))}
  </span>
);

const content = {
  ko: {
    intro: (
      <>
        재현 기록은 내가 본 실패를 다른 사람이 같은 조건에서 다시 보게 해 주는 문서입니다. 고칠
        사람은 기록만 보고 문제를 확인하고, 고친 뒤 같은 절차로 다시 확인합니다.{' '}
        <CaseLink locale="ko" />
        에서 본 사례 기록이 누가 어떤 과업에서 막혔는지를 정리했다면, 재현 기록은 여기에 재현 절차와
        기대 · 실제 결과를 더합니다.
      </>
    ),
    tableCaption: '재현 기록의 열한 항목과 각 항목에 적는 것',
    tableHead: ['항목', '적는 것'],
    rows: [
      ['사용자', '진단명이 아니라 그 순간의 사용 방식을 적습니다.'],
      ['과업', '사용자가 끝내려던 구체적인 일을 적습니다.'],
      ['환경', '운영체제 · 브라우저와 각 버전, 창 크기, 확대율을 적습니다.'],
      ['입력·출력 방식', '키보드, 보조기술과 그 모드를 적습니다.'],
      ['재현 절차', '다른 사람이 그대로 따라 할 수 있게 한 단계씩 적습니다.'],
      ['기대 결과', '그 절차에서 일어나야 했던 일을 적습니다.'],
      ['실제 결과', '관찰한 사실만 적고 해석은 덧붙이지 않습니다.'],
      [
        '실패 단계',
        <>
          과업 흐름 여섯 단계 중 처음 막힌 단계 하나를 고릅니다.
          <StageList locale="ko" />
        </>,
      ],
      ['영향', '사용자가 무엇을 못 하게 되는지 적습니다.'],
      ['복구 가능성', '우회 경로가 있는지, 누구의 도움이 필요한지 적습니다.'],
      ['미확인 사항', '직접 확인하지 못한 환경 · 보조기술과 코드로만 예상한 것을 적습니다.'],
    ],
  },
  en: {
    intro: (
      <>
        A reproduction record lets someone else see the failure you saw under the same conditions.
        Whoever fixes it confirms the problem from the record alone and rechecks with the same steps
        after the fix. The case record in <CaseLink locale="en" /> captured who got stuck on which
        task; a reproduction record adds steps to reproduce and the expected and actual results.
      </>
    ),
    tableCaption: 'The eleven fields of a reproduction record and what goes in each',
    tableHead: ['Field', 'What to write'],
    rows: [
      ['User', 'The way of use at that moment, not a diagnosis.'],
      ['Task', 'The specific thing the user was trying to finish.'],
      ['Environment', 'OS and browser with versions, window size, zoom level.'],
      ['Input and output', 'Keyboard, assistive technology and its mode.'],
      ['Steps to reproduce', 'One step at a time, so someone else can follow exactly.'],
      ['Expected result', 'What should have happened in those steps.'],
      ['Actual result', 'Only observed facts, without interpretation.'],
      [
        'Failure stage',
        <>
          The first of the six task-flow stages that failed.
          <StageList locale="en" />
        </>,
      ],
      ['Impact', 'What the user can no longer do.'],
      ['Recovery', 'Whether there is a workaround, and whose help is needed.'],
      [
        'Not verified',
        'Environments and assistive technology you did not check, and things only predicted from code.',
      ],
    ],
  },
};

export const WhatIsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.whatIs.id}>
      <DocH2 {...toc.whatIs} />
      <p>{c.intro}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={c.rows} />
    </section>
  );
};
