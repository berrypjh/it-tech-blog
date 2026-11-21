import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        기준별 조건은 <PageLink locale="ko" id="focus-visibility" hash="focus-criteria" />
        에서 나눴습니다. 여기서는 폼을 쓰는 과정에서 가림이 생기는 원인과 고칠 위치를 봅니다.
      </>
    ),
    caption: '수정안 비교',
    head: ['수정안', '두는 곳', '맞는 경우', '주의'],
    rows: [
      [
        <code key="a">scroll-padding</code>,
        '스크롤 영역',
        '고정 영역의 높이가 일정할 때',
        '높이가 바뀌면 값도 맞춰야 함',
      ],
      [
        <code key="a">scroll-margin</code>,
        '대상 요소',
        '특정 입력만 여백이 필요할 때',
        '대상마다 지정',
      ],
      [
        '고정 범위 줄이기',
        'sticky 요소',
        '작은 높이에서 고정이 꼭 필요하지 않을 때',
        '조작 위치가 바뀌는 것을 확인',
      ],
    ],
    calloutTitle: '강제 이동으로 감추지 않습니다',
    callout: (
      <>
        입력할 때마다 스크롤을 강제하거나 포커스를 옮기면 사용자의 위치를 빼앗을 수 있습니다. 먼저
        브라우저의 기본 스크롤이 가리지 않는 위치에 멈추도록 배치를 고칩니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <PageLink locale="en" id="focus-visibility" hash="focus-criteria" /> separated the
        conditions by criterion. Here we look at what causes covering while using a form, and where
        to fix it.
      </>
    ),
    caption: 'Comparing fixes',
    head: ['Fix', 'Goes on', 'Fits when', 'Watch for'],
    rows: [
      [
        <code key="a">scroll-padding</code>,
        'The scroll area',
        'The fixed area has a steady height',
        'Update the value if the height changes',
      ],
      [
        <code key="a">scroll-margin</code>,
        'The target element',
        'Only certain inputs need room',
        'Set per target',
      ],
      [
        'Reduce what stays fixed',
        'The sticky element',
        'It need not stay fixed at small heights',
        'Check that the action’s new position works',
      ],
    ],
    calloutTitle: 'Do not hide it with forced movement',
    callout: (
      <>
        Forcing a scroll or moving focus on each input can take the user&apos;s place. First fix the
        layout so the browser&apos;s default scrolling stops where nothing covers the field.
      </>
    ),
  },
};

export const FixesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.fixes.id}>
      <DocH2 {...toc.fixes} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
