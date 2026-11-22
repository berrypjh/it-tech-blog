import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        연장할 기회를 놓쳐 세션이 끝났더라도, 다시 인증한 뒤에는 하던 일을 이어 갈 수 있어야 합니다.
        이것은 2.2.1과 별개의 기준이고 수준도 다릅니다.
      </>
    ),
    cite: 'WCAG 2.2 — 2.2.5 Re-authenticating (Level AAA)',
    caption: '만료 상황의 조작마다 이 예제가 지키는 것',
    head: ['조작', '초안', '초점', '알림'],
    rows: [
      ['만료 상황 시작', '그대로', '경고의 제목', '경고의 글'],
      ['세션 연장', '그대로', '만료 상황 시작 버튼', '상태 메시지 하나'],
      ['연장하지 않고 만료', '그대로. 보내기와 확정만 멈춤', '만료 안내의 제목', '안내의 글'],
      ['재인증', '그대로', '하던 화면의 제목', '상태 메시지 하나'],
      ['취소', '그대로. 확정되지 않음', '옮기지 않음', '상태 메시지 하나'],
    ],
    tag: '표는 이 예제의 정책입니다. 여기서는 학습자가 만료 상황을 직접 시작하므로 초점을 경고로 옮겼습니다. 예고 없이 뜨는 실제 경고를 어떻게 알릴지는 제품이 따로 정해야 합니다.',
    after: (locale: Locale) => (
      <>
        재인증도 인증입니다. 다시 로그인하는 화면은{' '}
        <PageLink locale={locale} id="authentication-paths" />의 조건을 그대로 따라야 합니다. 이
        예제의 재인증은 버튼 하나로 된 모형이라 그 조건을 확인하지 않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Even if the chance to extend was missed and the session ended, the user should be able to
        continue after authenticating again. This is a criterion separate from 2.2.1, at a different
        level.
      </>
    ),
    cite: 'WCAG 2.2 — 2.2.5 Re-authenticating (Level AAA)',
    caption: 'What this example keeps for each action around expiry',
    head: ['Action', 'Draft', 'Focus', 'Announcement'],
    rows: [
      ['Start an expiry', 'Kept', 'Heading of the warning', 'Text of the warning'],
      ['Extend the session', 'Kept', 'The start-an-expiry button', 'One status message'],
      [
        'Let it expire',
        'Kept; only sending and confirming stop',
        'Heading of the expiry notice',
        'Text of the notice',
      ],
      ['Re-authenticate', 'Kept', 'Heading of the screen you were on', 'One status message'],
      ['Cancel', 'Kept; not confirmed', 'Not moved', 'One status message'],
    ],
    tag: 'The table is this example’s policy. Here the learner starts the expiry, so focus moves to the warning. How to announce a real warning that appears unprompted is for the product to decide.',
    after: (locale: Locale) => (
      <>
        Re-authentication is authentication. A screen for signing in again must meet the conditions
        on <PageLink locale={locale} id="authentication-paths" />. The re-authentication in this
        example is a one-button model, so it does not verify those conditions.
      </>
    ),
  },
};

export const ReauthSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.reauth.id}>
      <DocH2 {...toc.reauth} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('re-authenticating')}
        cite={c.cite}
        checkedOn={FORMS_CHECKED_ON}
      >
        When an authenticated session expires, the user can continue the activity without loss of
        data after re-authenticating.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="example" /> {c.tag}
      </p>
      <p>{c.after(locale)}</p>
    </section>
  );
};
