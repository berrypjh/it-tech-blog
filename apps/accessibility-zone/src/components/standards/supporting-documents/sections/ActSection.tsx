import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';

import { getToc } from '../toc';

const ACT_FORMAT = 'https://www.w3.org/TR/2026/REC-act-rules-format-1.1-20260205/';

const content = {
  ko: {
    intro: (
      <>
        ACT Rules Format 1.1은 규칙 결과(통과 · 실패 · 해당 없음)가 접근성 요구 충족과 어떻게
        이어지는지 정합니다. 실패는 곧 미충족입니다. 통과는 &quot;충족일 수도, 추가 시험이 필요할
        수도&quot; 있고, 충족을 판정할 수 있는 규칙(satisfying test)으로 정해진 경우에만 모두 통과가
        충족을 뜻합니다.
      </>
    ),
    cite: 'ACT Rules Format 1.1 (W3C Recommendation, 2026-02-05) — 4.4.1.1',
    caseIntro: (
      <>
        개별 규칙 하나를 봅니다. 승인된 규칙 &quot;Image has non-empty accessible name&quot;(23a2a8,
        2023-08-31 판)은 성공 기준 1.1.1과 다음처럼 이어집니다.
      </>
    ),
    caption: '규칙 23a2a8의 결과가 1.1.1에 뜻하는 것',
    head: ['규칙 결과', '1.1.1에 대해'],
    rows: [
      ['하나라도 실패', '충족하지 않음'],
      ['모두 통과', '추가 시험 필요'],
      ['해당 없음', '추가 시험 필요'],
    ],
    after: (
      <>
        이 규칙은 이미지 이름이 &quot;비어 있지 않은지&quot;만 봅니다. 1.1.1은 대체 텍스트가 같은
        목적을 하는지까지 묻기 때문에, 규칙을 모두 통과해도 1.1.1 전체를 통과했다고 단정하지
        않습니다.
      </>
    ),
    calloutTitle: '자동 검사 도구의 "통과"를 읽는 법',
    callout: (
      <>
        ACT 규칙을 구현한 도구가 &quot;통과&quot;를 보이면, 그 규칙의 적용 범위 안에서 그 규칙의
        기대를 만족했다는 뜻입니다. 대응 성공 기준의 판정은 규칙의 결과 대응표와 남은 시험을 함께
        보고 냅니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The ACT Rules Format 1.1 defines how rule outcomes (passed, failed, inapplicable) relate to
        satisfying accessibility requirements. Failed means not satisfied. Passed means &quot;could
        be satisfied or needs further testing&quot;; only for rules defined as satisfying tests does
        all-passed mean satisfied.
      </>
    ),
    cite: 'ACT Rules Format 1.1 (W3C Recommendation, 2026-02-05) — 4.4.1.1',
    caseIntro: (
      <>
        Look at one individual rule. The approved rule &quot;Image has non-empty accessible
        name&quot; (23a2a8, 2023-08-31 version) relates to success criterion 1.1.1 like this.
      </>
    ),
    caption: 'What the outcomes of rule 23a2a8 mean for 1.1.1',
    head: ['Rule outcome', 'For 1.1.1'],
    rows: [
      ['Any failed', 'Not satisfied'],
      ['All passed', 'Needs further testing'],
      ['Inapplicable', 'Needs further testing'],
    ],
    after: (
      <>
        The rule only checks that an image&apos;s name is &quot;not empty.&quot; 1.1.1 also asks
        whether the text alternative serves the equivalent purpose, so even when every outcome
        passes, do not conclude that all of 1.1.1 passed.
      </>
    ),
    calloutTitle: 'How to read "passed" in automated tools',
    callout: (
      <>
        When a tool that implements an ACT rule shows &quot;passed,&quot; it means the rule&apos;s
        expectation was met within that rule&apos;s applicability. Judge the mapped success
        criterion from the rule&apos;s outcome mapping together with the remaining testing.
      </>
    ),
  },
};

export const ActSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.act.id}>
      <DocH2 {...toc.act} />
      <p>{c.intro}</p>
      <NormativeQuote locale={locale} href={ACT_FORMAT} cite={c.cite}>
        <p>
          When one or more of the outcomes for a test subject is <code>failed</code>, the
          accessibility requirement is not satisfied for the test subject, and
        </p>
        <p className="mt-xs">
          When all of the outcomes are <code>passed</code> or <code>inapplicable</code> for a test
          subject, the accessibility requirement could be satisfied or further testing is needed for
          the test subject.
        </p>
      </NormativeQuote>
      <p>{c.caseIntro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
