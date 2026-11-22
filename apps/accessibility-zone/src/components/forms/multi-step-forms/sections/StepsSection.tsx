import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        폼을 단계로 나누면 한 번에 볼 칸이 줄어듭니다. 대신 화면이 바뀔 때마다 지금 어디인지와 이미
        넣은 값이 어떻게 되는지를 정해야 합니다. 단계가 바뀌면 화면의 내용이 통째로 바뀌므로,{' '}
        <PageLink locale={locale} id="focus-after-changes" />의 원칙대로 초점을 새 단계의 제목으로
        옮깁니다.
      </>
    ),
    caption: '단계를 옮길 때 이 예제가 지키는 것',
    head: ['조작', '검증', '값', '초점'],
    rows: [
      ['다음', '지금 단계의 칸만 검사. 틀리면 넘어가지 않음', '모두 유지', '새 단계의 제목'],
      ['이전', '검사하지 않음', '지금 단계의 값도 유지', '이전 단계의 제목'],
      ['다음에서 실패', '지금 단계의 칸만', '모두 유지', '첫 오류 칸'],
    ],
    tag: '단계 제목에 “1 / 2단계”처럼 위치를 글자로 적는 것과 실패했을 때 첫 오류 칸으로 가는 것은 이 예제의 정책입니다. 한 단계의 칸이 적어서 요약 대신 첫 오류 칸을 골랐습니다.',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Splitting a form into steps reduces the fields seen at once. In return, each screen change
        needs a decision about where the user is and what happens to values already entered. A step
        change replaces the whole content, so focus moves to the heading of the new step, following{' '}
        <PageLink locale={locale} id="focus-after-changes" />.
      </>
    ),
    caption: 'What this example keeps when moving between steps',
    head: ['Action', 'Validation', 'Values', 'Focus'],
    rows: [
      [
        'Next',
        'Only the fields of the current step; does not advance on failure',
        'All kept',
        'Heading of the new step',
      ],
      ['Back', 'None', 'Current step’s values kept too', 'Heading of the previous step'],
      ['Next fails', 'Only the fields of the current step', 'All kept', 'First field in error'],
    ],
    tag: 'Writing the position in the step heading, like “Step 1 of 2”, and going to the first field in error on failure are this example’s policies. A step has few fields, so the first field was chosen over a summary.',
  },
};

export const StepsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.steps.id}>
      <DocH2 {...toc.steps} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="example" /> {c.tag}
      </p>
    </section>
  );
};
