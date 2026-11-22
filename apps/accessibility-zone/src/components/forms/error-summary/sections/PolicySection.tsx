import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        제출이 실패하면 사용자가 그 사실을 알아야 합니다.{' '}
        <PageLink locale={locale} id="choosing-update-means" />의 구분으로 보면 수단은 초점 이동과
        상태 알림 가운데 하나면 됩니다. 이 예제는 한 가지를 고릅니다.{' '}
        <strong className="text-text-default">
          처음 실패했을 때 초점을 오류 요약의 제목으로 옮깁니다.
        </strong>{' '}
        초점이 닿는 제목이 오류 수를 말하므로 같은 내용을 alert로 다시 알리지 않습니다.
      </>
    ),
    caption: '실패했을 때 초점을 둘 곳의 두 선택지',
    head: ['정책', '맞는 경우', '함께 지킬 것'],
    rows: [
      [
        '오류 요약으로 이동 (이 예제)',
        '오류가 여러 개일 수 있는 폼',
        '요약의 링크가 정확한 칸으로 가야 함',
      ],
      [
        '첫 오류 칸으로 이동',
        '칸이 적고 오류가 하나씩 나는 폼',
        '나머지 오류를 찾을 방법을 남겨야 함',
      ],
    ],
    tag: '어느 쪽이 더 낫다는 규범은 없습니다. 두 정책 모두 WAI 자습서가 보여 주는 방식이고, 여기서는 예제의 정책으로 요약을 골랐습니다.',
    pitfallTitle: '같은 오류를 세 번 알리지 않습니다',
    pitfall: (locale: Locale) => (
      <>
        초점을 요약으로 옮기고, 요약을 alert로 만들고, 칸마다 오류를 live 영역에 넣으면 같은 오류가
        세 번 들릴 수 있습니다. 이동한 뒤의 초점 위치는{' '}
        <PageLink locale={locale} id="focus-after-changes" />의 원칙대로 한 곳만 정합니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        When submission fails, the user needs to know. By the distinction on{' '}
        <PageLink locale={locale} id="choosing-update-means" />, one means is enough: a focus move
        or a status message. This example picks one.{' '}
        <strong className="text-text-default">
          On the first failure, focus moves to the heading of the error summary.
        </strong>{' '}
        The focused heading states the number of errors, so the same content is not announced again
        with an alert.
      </>
    ),
    caption: 'Two options for where focus goes on failure',
    head: ['Policy', 'When it fits', 'What to keep with it'],
    rows: [
      [
        'Move to the error summary (this example)',
        'Forms that can have several errors',
        'Summary links must go to the exact field',
      ],
      [
        'Move to the first field in error',
        'Short forms where errors come one at a time',
        'Leave a way to find the remaining errors',
      ],
    ],
    tag: 'No normative text says one is better. Both are shown in the WAI tutorial; the summary is this example’s policy.',
    pitfallTitle: 'Do not announce the same error three times',
    pitfall: (locale: Locale) => (
      <>
        Moving focus to the summary, making the summary an alert, and putting each field’s error in
        a live region can make the same error heard three times. Where focus lands follows{' '}
        <PageLink locale={locale} id="focus-after-changes" />: choose one place.
      </>
    ),
  },
};

export const PolicySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.policy.id}>
      <DocH2 {...toc.policy} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="example" /> {c.tag}
      </p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall(locale)}
      </Callout>
    </section>
  );
};
