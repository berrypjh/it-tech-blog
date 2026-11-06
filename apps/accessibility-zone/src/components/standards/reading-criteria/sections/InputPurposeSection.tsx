import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { type SourceId, SourceTag } from '@/components/shared/SourceTag';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const rows: { source: SourceId; ko: [string, React.ReactNode]; en: [string, React.ReactNode] }[] = [
  {
    source: 'normative',
    ko: [
      '정의',
      '"programmatically determined"는 사용자 에이전트와 보조기술이 작성자가 준 데이터에서 정보를 뽑아 다른 방식으로 보여 줄 수 있다는 뜻입니다',
    ],
    en: [
      'Definitions',
      '"Programmatically determined" means user agents and assistive technologies can extract the information from author-supplied data and present it in different modalities',
    ],
  },
  {
    source: 'normative',
    ko: ['적용 대상', '사용자 본인에 관한 정보를 받는 입력 칸'],
    en: ['Scope', 'Input fields collecting information about the user'],
  },
  {
    source: 'normative',
    ko: [
      '조건',
      '그 목적이 WCAG 7절 입력 목적 목록에 있고, 입력 데이터의 뜻을 알릴 수 있는 기술로 만들었을 때',
    ],
    en: [
      'Conditions',
      'When the purpose is in the WCAG section 7 list of input purposes and the technology supports identifying the expected meaning',
    ],
  },
  {
    source: 'informative',
    ko: [
      '기법',
      <>
        HTML에서는 알맞은 <code>autocomplete</code> 토큰을 쓰는 것이 충분 기법(H98)입니다. 결과를
        내는 방법의 하나이지 규범 문장 자체가 아닙니다
      </>,
    ],
    en: [
      'Technique',
      <>
        In HTML, using the right <code>autocomplete</code> token is a sufficient technique (H98). It
        is one way to produce the outcome, not the normative sentence itself
      </>,
    ],
  },
  {
    source: 'observed',
    ko: ['확인 증거', '칸이 본인 정보인지, 토큰이 목적과 맞는지, 브라우저가 그 토큰을 인식하는지'],
    en: [
      'Evidence',
      'Whether the field is about the user, whether the token matches the purpose, and whether the browser recognizes it',
    ],
  },
];

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="basic-forms" hash="types-and-ids" />
        에서 본 기준입니다. 이번에는 다섯 단계로 나눠 읽습니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.5',
    caption: '1.3.5를 다섯 단계로 읽기',
    head: ['단계', '1.3.5에서', '근거'],
    apply: (
      <>
        02.4의 문의 폼에서 &quot;이름&quot; · &quot;이메일&quot;은 질문하는 사람 본인의 정보이므로
        적용 대상이고, <code>autocomplete=&quot;name&quot;</code> · <code>&quot;email&quot;</code>이
        그 결과를 내는 기법입니다. 반면 &quot;받는 사람 이메일&quot;은 다른 사람의 정보라 적용
        대상이 아니므로 <strong>해당 없음</strong>이고, 근거는 적용 대상 문장입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        This is the criterion from <PageLink locale="en" id="basic-forms" hash="types-and-ids" />.
        This time read it in five steps.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.5',
    caption: 'Reading 1.3.5 in five steps',
    head: ['Step', 'In 1.3.5', 'Basis'],
    apply: (
      <>
        In the 02.4 contact form, &quot;Name&quot; and &quot;Email&quot; are the asker&apos;s own
        information, so they are in scope, and <code>autocomplete=&quot;name&quot;</code> and{' '}
        <code>&quot;email&quot;</code> are a technique that produces the outcome. A
        &quot;recipient&apos;s email,&quot; by contrast, is someone else&apos;s information and out
        of scope, so it is <strong>not applicable</strong>, with the scope sentence as the reason.
      </>
    ),
  },
};

export const InputPurposeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.inputPurpose.id}>
      <DocH2 {...toc.inputPurpose} />
      <p>{c.intro}</p>
      <NormativeQuote locale={locale} href={wcag22('identify-input-purpose')} cite={c.cite}>
        <p>
          <strong>Success Criterion 1.3.5 Identify Input Purpose</strong> (Level AA)
        </p>
        <p>
          The purpose of each input field collecting information about the user can be
          programmatically determined when:
        </p>
        <ul className="mt-xs flex list-disc flex-col gap-2xs pl-lg">
          <li>
            The input field serves a purpose identified in the Input Purposes for user interface
            components section; and
          </li>
          <li>
            The content is implemented using technologies with support for identifying the expected
            meaning for form input data.
          </li>
        </ul>
      </NormativeQuote>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={rows.map((row) => [
          row[locale][0],
          row[locale][1],
          <SourceTag key="source" locale={locale} id={row.source} />,
        ])}
      />
      <p>{c.apply}</p>
    </section>
  );
};
