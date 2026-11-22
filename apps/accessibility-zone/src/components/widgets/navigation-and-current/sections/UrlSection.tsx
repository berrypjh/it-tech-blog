import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        목록의 다음 쪽을 보여 주는 방법은 둘입니다. 주소가 바뀌는 이동과, 주소는 그대로 두고 같은
        화면에서 목록만 바꾸는 갱신입니다. 겉모습은 같아도 지킬 것이 다릅니다. 갱신을 고르면{' '}
        <PageLink locale={locale} id="choosing-update-means" />의 수단 선택과{' '}
        <PageLink locale={locale} id="loading-and-results" />의 상태 메시지가 필요해집니다.
      </>
    ),
    caption: '주소가 바뀌는 이동과 같은 화면의 갱신',
    head: ['항목', '주소가 바뀌는 이동 (이 예제)', '같은 화면의 갱신'],
    rows: [
      ['요소', '링크', '버튼'],
      ['주소', '쪽마다 다른 주소. 복사해 공유할 수 있음', '바뀌지 않음'],
      ['뒤로 가기', '이전 쪽으로 돌아감', '페이지를 떠남'],
      ['현재 표시', 'aria-current="page"', '눌림 · 선택 상태 등 위젯의 상태'],
      ['바뀐 사실 알리기', '이동 뒤 초점 위치를 정함', '상태 메시지나 초점 이동 가운데 하나'],
    ],
    after: (
      <>
        이 예제의 쪽 번호는 <code>?page=2</code>처럼 주소의 쿼리를 바꾸는 링크입니다. 브라우저가
        전체 페이지를 다시 불러오지 않으므로, 쪽이 바뀌면 초점을 목록의 제목으로 옮겨 새 내용이
        시작되는 곳을 알립니다.
      </>
    ),
    pitfallTitle: '갈 곳이 없는 링크를 만들지 않습니다',
    pitfall: (
      <>
        마지막 쪽의 “다음 쪽”처럼 목적지가 없는 항목은 링크로 만들지 않습니다.{' '}
        <code>href=&quot;#&quot;</code>나 눌러도 아무 일이 없는 링크는 목록에 올라와 사용자를
        속입니다. 이 예제는 첫 쪽에서 “이전 쪽”을, 마지막 쪽에서 “다음 쪽”을 아예 두지 않습니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        There are two ways to show the next page of a list: navigation that changes the address, and
        an update that keeps the address and changes only the list on the same screen. They look
        alike but call for different things. Choosing the update brings in the choice of means on{' '}
        <PageLink locale={locale} id="choosing-update-means" /> and the status message on{' '}
        <PageLink locale={locale} id="loading-and-results" />.
      </>
    ),
    caption: 'Address-changing navigation versus an in-place update',
    head: ['Item', 'Address-changing navigation (this example)', 'In-place update'],
    rows: [
      ['Element', 'Link', 'Button'],
      ['Address', 'A different address per page; can be copied and shared', 'Unchanged'],
      ['Back button', 'Returns to the previous page of the list', 'Leaves the page'],
      ['Current marker', 'aria-current="page"', 'A widget state such as pressed or selected'],
      [
        'Conveying the change',
        'Decide where focus is after moving',
        'One of a status message or a focus move',
      ],
    ],
    after: (
      <>
        The page numbers here are links that change the query of the address, like{' '}
        <code>?page=2</code>. The browser does not reload the whole page, so when the page changes
        focus moves to the list heading to show where the new content starts.
      </>
    ),
    pitfallTitle: 'Do not make links that go nowhere',
    pitfall: (
      <>
        An item without a destination, like “Next page” on the last page, is not made a link. An{' '}
        <code>href=&quot;#&quot;</code> or a link that does nothing when activated shows up in the
        list of links and misleads users. This example simply omits “Previous page” on the first
        page and “Next page” on the last.
      </>
    ),
  },
};

export const UrlSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.url.id}>
      <DocH2 {...toc.url} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall}
      </Callout>
    </section>
  );
};
