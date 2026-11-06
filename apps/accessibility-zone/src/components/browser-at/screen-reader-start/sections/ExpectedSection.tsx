import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

import { tasks } from './tasks';

const meanings = {
  ko: [
    '화면 낭독기가 켜졌다는 것을 알 수 있음',
    '제목이고, 수준이 3이며, 이름이 "예제: 배송 메모"임',
    '"예제: 배송 메모"라는 이름의 영역에 들어왔음',
    '링크이고, 이름이 "배송 정책 보기"임',
    '입력란이고, 이름이 "배송 메모"이며, 적은 글자가 값으로 들림',
    '체크박스이고, 이름이 "부재 시 문 앞에 두기"이며, 바꾼 뒤 상태가 반대로 들림',
    '화면 낭독기가 꺼졌음',
  ],
  en: [
    'You can tell the screen reader is on',
    'It is a heading, level 3, named "Example: Delivery note"',
    'You have entered a region named "Example: Delivery note"',
    'It is a link named "View delivery policy"',
    'It is a text field named "Delivery note", and the typed text is heard as its value',
    'It is a checkbox named "Leave at the door if no one is home", and after changing it the opposite state is heard',
    'The screen reader is off',
  ],
};

const content = {
  ko: {
    intro: (
      <>
        아래 표는 과업마다 전달되기를 기대하는 <strong>뜻</strong>입니다. 정확히 어떤 낱말과 순서로
        읽는지는 적지 않았습니다. 같은 뜻이 다른 말로 전해지면 기대에 맞는 것으로 봅니다.
      </>
    ),
    caption: '과업별로 기대하는 뜻',
    head: ['과업', '기대하는 뜻'],
    calloutTitle: '자동 합격은 없습니다',
    callout: (
      <>
        이 페이지는 화면 낭독기가 무엇을 읽었는지 알 수 없고, 맞고 틀림을 판정하지 않습니다. 들은
        것을 직접 적고, 사용한 보조기술 · 브라우저 · 운영체제와 버전을 함께 기록합니다. 기록 형식은{' '}
        <PageLink locale="ko" id="observation-sources" />
        에서 다룹니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The table below is the <strong>meaning</strong> each task is expected to convey. It does not
        say which exact words or order are spoken. If the same meaning comes through in other words,
        treat it as matching.
      </>
    ),
    caption: 'Expected meaning per task',
    head: ['Task', 'Expected meaning'],
    calloutTitle: 'There is no automatic pass',
    callout: (
      <>
        This page cannot know what the screen reader said, and it does not mark anything right or
        wrong. Write down what you heard, with the assistive technology, browser, OS, and versions
        you used. <PageLink locale="en" id="observation-sources" /> covers the record format.
      </>
    ),
  },
};

export const ExpectedSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.expected.id}>
      <DocH2 {...toc.expected} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={tasks[locale].map((task, i) => [task, meanings[locale][i]])}
      />
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
