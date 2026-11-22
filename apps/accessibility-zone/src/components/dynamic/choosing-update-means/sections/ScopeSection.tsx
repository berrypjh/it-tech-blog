import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { DYNAMIC_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { understanding, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        4.1.3은 상태 메시지만 다룹니다. WCAG의 정의로 상태 메시지는 맥락 전환이 아닌 내용
        변화이면서, 동작의 성공이나 결과, 기다리는 상태, 진행 상황, 오류가 있음을 알려 주는
        것입니다. 그래서 결과 목록이 바뀌는 것 자체나 펼침 메뉴가 열리는 것은 이 기준의 대상이
        아니고, 포커스를 옮겨 새 화면을 여는 것은 맥락 전환이라 역시 대상이 아닙니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 4.1.3 Status Messages (AA)',
    defCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — Glossary: status message',
    understanding: (
      <>
        Understanding 4.1.3은 검색 버튼을 누른 뒤 결과와 함께 “5 results returned” 같은 문구를 두고
        그 문구에 상태 메시지 역할을 주는 예를 듭니다. 목록이 아니라 결과 수를 알리는 문구가 상태
        메시지입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        4.1.3 covers only status messages. By WCAG’s definition, a status message is a change in
        content that is not a change of context and that reports the success or results of an
        action, a waiting state, the progress of a process, or the existence of errors. So the
        result list changing in itself, or a menu expanding, is not covered, and moving focus to
        open a new screen is a change of context, which is not covered either.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 4.1.3 Status Messages (AA)',
    defCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — Glossary: status message',
    understanding: (
      <>
        Understanding 4.1.3 gives the example of placing text such as “5 results returned” with the
        results after the search button is pressed, and giving that text a status message role. The
        message is the text reporting the count, not the list.
      </>
    ),
  },
};

export const ScopeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.scope.id}>
      <DocH2 {...toc.scope} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('status-messages')}
        cite={c.cite}
        checkedOn={DYNAMIC_CHECKED_ON}
      >
        In content implemented using markup languages, status messages can be programmatically
        determined through role or properties such that they can be presented to the user by
        assistive technologies without receiving focus.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={wcag22('dfn-status-messages')}
        cite={c.defCite}
        checkedOn={DYNAMIC_CHECKED_ON}
      >
        change in content that is not a change of context, and that provides information to the user
        on the success or results of an action, on the waiting state of an application, on the
        progress of a process, or on the existence of errors
      </NormativeQuote>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="informative" />
        <ExternalLink href={understanding('status-messages')}>
          Understanding SC 4.1.3 (2026-10-04)
        </ExternalLink>
      </p>
      <p>{c.understanding}</p>
    </section>
  );
};
