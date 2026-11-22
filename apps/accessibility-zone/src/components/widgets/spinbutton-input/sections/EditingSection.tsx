import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        숫자 칸에서는 값이 두 가지로 있습니다. 지금 칸에 보이는 글자와, 사용자가 입력을 마쳤다고 볼
        수 있는 값입니다. 치는 도중의 글자는 비어 있을 수도, 아직 숫자가 아닐 수도 있습니다. 이때
        검사하면 완성되지 않은 값을 틀렸다고 말하게 됩니다. 검사하는 시점은{' '}
        <PageLink locale={locale} id="error-summary" />의 원칙과 같습니다.
      </>
    ),
    caption: '상황마다 치는 도중과 칸을 떠날 때의 처리',
    head: ['칸의 글자', '치는 도중', '칸을 떠날 때'],
    rows: [
      ['비어 있음', '그대로 둠', '비어 있다고 알림. 값을 채워 넣지 않음'],
      ['“1” (“12”를 치는 중)', '그대로 둠', '범위 안이면 통과'],
      ['“12” (범위 밖)', '그대로 둠', '범위를 알리고 글자는 지우지 않음'],
      ['“2.5” (소수)', '그대로 둠', '정수로 입력하라고 알림'],
      ['숫자로 읽을 수 없는 글자', '브라우저가 받는 글자만 들어감', '숫자가 아니라고 알림'],
    ],
    tag: '이 표는 예제의 정책입니다. 칸을 떠날 때 값을 가장 가까운 숫자로 조용히 바꾸지 않고, 무엇이 틀렸는지 알린 뒤 사용자가 고치게 합니다. 한 단계씩 바꾸는 버튼을 누른 것은 가까운 값으로 가겠다는 뜻이므로 그때는 맞춥니다.',
    pitfallTitle: '글자를 칠 때마다 보정하지 않습니다',
    pitfall: (
      <>
        글자 하나마다 범위에 맞춰 값을 바꾸면 “1”을 지우고 “3”을 넣으려던 사용자의 빈 칸이 다시
        채워지고, 커서가 끝으로 튑니다. 화면을 보지 않는 사용자는 값이 바뀐 줄도 모릅니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        A number field holds two kinds of value: the characters now in the field, and the value the
        user can be taken to have finished entering. Characters being typed may be empty or not yet
        a number. Checking then calls an unfinished value wrong. When to check follows{' '}
        <PageLink locale={locale} id="error-summary" />.
      </>
    ),
    caption: 'Handling while typing and on leaving the field, per situation',
    head: ['Characters in the field', 'While typing', 'On leaving the field'],
    rows: [
      ['Empty', 'Left alone', 'Reported as empty; no value is filled in'],
      ['“1” (on the way to “12”)', 'Left alone', 'Passes if within range'],
      ['“12” (out of range)', 'Left alone', 'The range is reported and the characters are kept'],
      ['“2.5” (a decimal)', 'Left alone', 'Reported: enter a whole number'],
      [
        'Characters that are not a number',
        'Only characters the browser accepts go in',
        'Reported as not a number',
      ],
    ],
    tag: 'This table is the example’s policy. On leaving the field the value is not silently changed to the nearest number; what is wrong is reported and the user fixes it. Pressing a stepping button means going to a nearby value, so the value is aligned then.',
    pitfallTitle: 'Do not correct on every keystroke',
    pitfall: (
      <>
        Adjusting the value to the range on every character refills a field the user had emptied on
        the way from “1” to “3” and throws the cursor to the end. A user who does not look at the
        screen does not even know the value changed.
      </>
    ),
  },
};

export const EditingSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.editing.id}>
      <DocH2 {...toc.editing} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="example" /> {c.tag}
      </p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall}
      </Callout>
    </section>
  );
};
