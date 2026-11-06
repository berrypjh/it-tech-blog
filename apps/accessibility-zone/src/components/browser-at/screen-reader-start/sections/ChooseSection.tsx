import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { CircleSlash, Laptop, Monitor } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';

import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: Windows · macOS · 보조기술 없음. */
const rowIcons = [Monitor, Laptop, CircleSlash];

const content = {
  ko: {
    intro: <>할 수 있는 경로 하나를 고릅니다. 두 경로를 모두 할 필요는 없습니다.</>,
    caption: '환경별 경로',
    head: ['환경', '경로', '이 페이지의 절'],
    rows: [
      ['Windows', 'NVDA (무료, NV Access 배포)', 'nvda'],
      ['macOS', 'VoiceOver (운영체제에 들어 있음)', 'voiceover'],
      ['둘 다 없음', '설명과 기록 예시로 학습하고, 실제 수행은 미실행으로 남김', 'noAt'],
    ] as const,
    calloutTitle: '키 조합과 발화는 환경마다 다릅니다',
    callout: (
      <>
        이 페이지의 키는 NVDA 사용자 안내서 2026.3과 Apple의 macOS 27용 VoiceOver 사용 설명서를
        기준으로 적었습니다. 브라우저 · 운영체제 · 보조기술의 버전과 설정에 따라 키 조합과 읽어 주는
        말이 달라질 수 있습니다. 다르면 쓰는 버전의 공식 안내서를 따릅니다.
      </>
    ),
  },
  en: {
    intro: <>Pick one path you can do. You do not need to do both.</>,
    caption: 'Paths by environment',
    head: ['Environment', 'Path', 'Section on this page'],
    rows: [
      ['Windows', 'NVDA (free, from NV Access)', 'nvda'],
      ['macOS', 'VoiceOver (built into the OS)', 'voiceover'],
      [
        'Neither',
        'Learn from the explanations and a sample record, and leave the real run as not done',
        'noAt',
      ],
    ] as const,
    calloutTitle: 'Key combinations and speech differ by environment',
    callout: (
      <>
        The keys on this page follow the NVDA User Guide 2026.3 and Apple&apos;s VoiceOver User
        Guide for macOS 27. Key combinations and what is spoken can differ with browser, OS, and
        assistive technology versions and settings. If they differ, follow the official guide for
        your version.
      </>
    ),
  },
};

export const ChooseSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.choose.id}>
      <DocH2 {...toc.choose} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={[...c.head]}
        rows={c.rows.map(([env, path, key], i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {env}
          </IconLabel>,
          path,
          <a key="link" href={`#${toc[key].id}`}>
            {toc[key].title}
          </a>,
        ])}
      />
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
