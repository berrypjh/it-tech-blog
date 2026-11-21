import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '같은 화면을 봐도 출처에 따라 증명하는 범위가 다릅니다. 표의 칸을 섞지 않습니다.',
    caption: '출처별 기록 방법',
    head: ['출처', '적을 것', '보고할 수 있는 말'],
    rows: [
      ['페이지의 시스템 색 모형', '모형 스위치의 결과', '교육용 모형에서의 차이'],
      ['개발자 도구 · 자동화 에뮬레이션', '도구, 브라우저, 버전', '에뮬레이션에서의 결과'],
      [
        '실제 운영체제 대비 설정',
        '운영체제 · 대비 테마 · 브라우저 · 버전',
        '그 환경에서 실제로 본 결과',
      ],
    ],
    after: (
      <>
        에뮬레이션을 Windows 환경 확인이라고 보고하지 않습니다. 실제 환경을 확인하지 못했다면 미확인
        칸에 남깁니다.
      </>
    ),
  },
  en: {
    intro:
      'The same screen proves different things depending on its source. Keep the rows separate.',
    caption: 'How to record by source',
    head: ['Source', 'What to record', 'What you can report'],
    rows: [
      [
        'System color model on this page',
        'The result with the model switch',
        'A difference in a teaching model',
      ],
      ['DevTools or automation emulation', 'Tool, browser, version', 'A result under emulation'],
      [
        'Real OS contrast settings',
        'OS, contrast theme, browser, version',
        'What you actually saw in that environment',
      ],
    ],
    after: (
      <>
        Do not report emulation as a check on Windows. If you did not check a real environment,
        leave it as unconfirmed.
      </>
    ),
  },
};

export const RecordsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.records.id}>
      <DocH2 {...toc.records} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
