import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        AAM은 브라우저가 무엇을 내보내야 하는지 정합니다. 하지만 실제 결과에 대해서는 아래를
        약속하지 않습니다.
      </>
    ),
    items: [
      '모든 브라우저가 지금 그 매핑대로 구현했다는 것. 구현은 브라우저와 버전마다 다릅니다.',
      '초안의 매핑이 다음 판본에서도 같다는 것. 판본과 날짜를 함께 적는 이유입니다.',
      '보조기술이 그 정보를 어떤 낱말과 순서로 전하는지. 해석은 보조기술이 맡습니다.',
    ],
    calloutTitle: '이 페이지에는 플랫폼별 결과 표가 없습니다',
    callout: (
      <>
        플랫폼별로 &quot;이 역할은 이 값으로 나간다&quot;는 표는 실제 구현을 그 플랫폼 API를 관찰할
        수 있는 검사 도구로 확인한 뒤에만 채울 수 있습니다. 이 사이트는 그 확인을 하지 않았으므로
        표를 채우지 않습니다. 필요하면 명세의 해당 행과 직접 확인한 환경을 함께 기록합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        AAMs define what a browser should expose. But they do not promise the following about real
        results.
      </>
    ),
    items: [
      'That every browser implements the mapping today. Implementations differ by browser and version.',
      'That a draft’s mapping stays the same in the next edition. This is why you give the edition and date.',
      'What words and order assistive technology uses to convey it. Interpretation belongs to assistive technology.',
    ],
    calloutTitle: 'This page has no per-platform result table',
    callout: (
      <>
        A per-platform table of &quot;this role goes out as this value&quot; can only be filled in
        after checking real implementations with an inspection tool that can observe that platform
        API. This site has not done that check, so it does not include one. If you need one, record
        the spec row together with the environment you checked yourself.
      </>
    ),
  },
};

export const LimitsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.limits.id}>
      <DocH2 {...toc.limits} />
      <p>{c.intro}</p>
      <List className="flex list-disc flex-col gap-xs pl-xl">
        {c.items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
