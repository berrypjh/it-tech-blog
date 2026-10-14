import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '둘은 같은 일을 더 잘하는 것이 아니라 다른 일을 합니다. 요구를 나란히 놓고, 각각의 약점을 어떻게 다루는지도 함께 봅니다.',
    caption: 'Notebook과 서비스 코드의 요구 비교',
    head: ['관점', 'Notebook (탐색)', '서비스 코드', 'Notebook에서 줄일 수 있는 방법'],
    rows: [
      [
        '상태',
        '커널의 숨은 상태가 남는다',
        '요청마다 입력이 명시된다',
        'Kernel을 재시작하고 처음부터 전체 실행해 재현되는지 확인',
      ],
      [
        '실행 순서',
        '셀을 임의 순서로 실행할 수 있다',
        '정해진 제어 흐름',
        '결과가 위에서 아래 순서의 실행만으로 나오게 정리',
      ],
      [
        '수동 수정',
        '값이나 셀을 손으로 고칠 수 있다',
        '변경은 코드 리뷰와 배포를 거친다',
        '손으로 고친 값을 코드와 기록으로 옮김',
      ],
      [
        '환경 의존성',
        '라이브러리 버전과 실행 환경에 기대기 쉽다',
        '환경이 선언되고 고정된다',
        '환경과 버전을 기록하고 필요한 입력을 인자로 분리',
      ],
      [
        '오류 처리 · timeout · 재시도',
        '실패하면 다시 실행하면 된다',
        '실패와 지연의 정책이 필요하다',
        '실패 사례를 목록으로 남겨 계약의 실패 정책에 옮김',
      ],
      [
        '권한 · 테스트 · 관측',
        '대개 필요 없다',
        '권한 검사, 테스트, 로그와 지표가 필요하다',
        '확인 사례를 테스트로 옮기고 측정 정의를 맞춤',
      ],
    ],
  },
  en: {
    intro:
      'The two do not do the same job better; they do different jobs. Put the requirements side by side and see how each one’s weaknesses are handled.',
    caption: 'Notebook vs. service code requirements',
    head: ['Aspect', 'Notebook (exploration)', 'Service code', 'What reduces it in a notebook'],
    rows: [
      [
        'State',
        'Hidden kernel state remains',
        'Input is explicit per request',
        'Restart the kernel and run everything from the top to confirm it reproduces',
      ],
      [
        'Execution order',
        'Cells can run in any order',
        'A defined control flow',
        'Arrange it so results come from running top to bottom alone',
      ],
      [
        'Manual edits',
        'Values or cells can be edited by hand',
        'Changes pass through code review and deployment',
        'Move hand-edited values into code and the record',
      ],
      [
        'Environment dependency',
        'Easy to lean on library versions and runtime',
        'The environment is declared and pinned',
        'Record environment and versions, and separate needed inputs as arguments',
      ],
      [
        'Error handling, timeout, retry',
        'If it fails, run it again',
        'Policies for failure and delay are needed',
        'Keep failure cases as a list and carry them to the contract’s failure policy',
      ],
      [
        'Permissions, tests, observability',
        'Usually not needed',
        'Authorization checks, tests, logs, and metrics are needed',
        'Move confirmation cases into tests and match measurement definitions',
      ],
    ],
  },
};

export const CompareSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([aspect, ...rest]) => [
    <span key={aspect} className="font-semiBold text-text-default">
      {aspect}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.compare.id}>
      <DocH2 {...toc.compare} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
    </section>
  );
};
