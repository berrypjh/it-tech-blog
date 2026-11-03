import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Eye, Headphones, Wrench } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';

import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 사이트 안 관찰 · 개발자 도구 · 보조기술. */
const rowIcons = [Eye, Wrench, Headphones];

const content = {
  ko: {
    intro: (
      <>
        이 장의 데모 패널은 페이지의 스크립트가 DOM을 읽어 보여 주는 <strong>사이트 안 관찰</strong>
        입니다. 개발자 도구, 실제 보조기술과는 증명하는 범위가 다르므로 결과를 보고할 때 어느
        수준에서 확인했는지 함께 적습니다.
      </>
    ),
    caption: '확인 수준별로 증명하는 것',
    head: ['수준', '증명하는 것', '증명하지 못하는 것'],
    rows: [
      [
        '사이트 안 관찰 (이 장의 데모 패널)',
        '이 브라우저의 실제 DOM 값, 실제로 일어난 이벤트와 포커스 이동',
        '브라우저가 계산한 접근성 트리 전체, 보조기술이 읽는 방식',
      ],
      [
        '개발자 도구',
        '브라우저가 계산한 역할 · 이름 · 상태, 리스너, 속성 변화의 순간',
        '보조기술이 실제로 무엇을 어떤 순서로 읽는지',
      ],
      [
        '실제 보조기술',
        '그 보조기술 · 브라우저 · 운영체제 조합에서의 실제 결과',
        '다른 조합에서의 결과',
      ],
    ],
    after: (
      <>
        예를 들어 &quot;aria-expanded가 true로 바뀌었다&quot;는 사이트 안 관찰이나 개발자 도구로
        확인할 수 있지만, &quot;화면 낭독기가 펼침이라고 읽었다&quot;는 실제로 들어 봐야 말할 수
        있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The demo panels in this chapter are <strong>in-page observation</strong>: the page&apos;s
        own script reads the DOM and shows it. That proves something different from developer tools
        or real assistive technology, so when you report a result, say at which level you checked
        it.
      </>
    ),
    caption: 'What each level of checking proves',
    head: ['Level', 'Proves', 'Does not prove'],
    rows: [
      [
        'In-page observation (this chapter’s panels)',
        'Real DOM values in this browser; events and focus moves that actually happened',
        'The whole accessibility tree the browser computed; how assistive technology reads it',
      ],
      [
        'Developer tools',
        'Role, name, and state as the browser computed them; listeners; the moment an attribute changes',
        'What assistive technology actually reads, and in what order',
      ],
      [
        'Real assistive technology',
        'The actual result for that assistive technology, browser, and OS combination',
        'Results for other combinations',
      ],
    ],
    after: (
      <>
        For example, &quot;aria-expanded changed to true&quot; can be confirmed with in-page
        observation or developer tools, but &quot;the screen reader said expanded&quot; can only be
        stated after actually listening.
      </>
    ),
  },
};

export const LevelsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.levels.id}>
      <DocH2 {...toc.levels} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
      <p>{c.after}</p>
    </section>
  );
};
