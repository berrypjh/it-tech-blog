import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { Steps } from '@/components/shared/Steps';

import { FinalTaskDemo } from '../demos/FinalTaskDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        이 장의 행사 안내로 두 질문에 답합니다. 마지막 회차는 언제인가, 바뀐 입구는 어디인가. 그림 ·
        표 · 영상 경로는 <PageLink locale={locale} id="data-tables" />의 일정표와{' '}
        <PageLink locale={locale} id="media-player" />의 영상 장면, 글 · 자막 · 대본 경로는 이
        페이지의 HTML 판과 09.7의 자막 · 대본입니다.
      </>
    ),
    steps: [
      '두 질문에 그림 · 표 · 영상 경로로 답합니다.',
      '같은 질문에 글 · 자막 · 대본 경로로 답합니다.',
      '한 경로에서 잃은 정보 하나를 찾고, 그 정보를 위한 대안을 직접 씁니다.',
      '수정 전후 답 · 출처 · 미확인을 기록합니다.',
      '모범 답의 사실은 각 대안이 아니라 원자료와 대조합니다.',
    ],
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Use this chapter’s event notice to answer two questions: when is the last session, and where
        is the changed entrance? The picture, table, and video path is the schedule on{' '}
        <PageLink locale={locale} id="data-tables" /> and the video scenes on{' '}
        <PageLink locale={locale} id="media-player" />; the text, caption, and transcript path is
        the HTML version on this page and the captions and transcript on 09.7.
      </>
    ),
    steps: [
      'Answer both questions through the picture, table, and video path.',
      'Answer the same questions through the text, caption, and transcript path.',
      'Find one piece of information lost on one path, and write an alternative for it yourself.',
      'Record the answers before and after, the sources, and what is unconfirmed.',
      'Check the model answer’s facts against the source data, not against each alternative.',
    ],
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p>{c.intro(locale)}</p>
      <Steps items={c.steps} />
      <FinalTaskDemo />
    </section>
  );
};
