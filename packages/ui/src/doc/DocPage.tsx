import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { Check, Clock, FlaskConical } from 'lucide-react';

import { ListenButton } from './listen/ListenButton';
import type { NarrationScript } from './listen/script';
import { DocH2 } from './DocHeading';
import { type DocReference, ReferenceList } from './ReferenceList';
import type { TocItem } from './Toc';

export type HeaderContent = {
  eyebrow: string;
  title: string;
  lead: React.ReactNode;
  readingTime: string;
  /** 브라우저 실습 수. 실습이 없는 페이지는 두지 않는다. */
  practices?: string;
  learnItems: string[];
};

const learnHeading = { ko: '이 페이지에서 배우는 것', en: 'What you will learn' };

/** 페이지 제목, 핵심 명제, 읽는 시간, 학습 목표를 보여주는 머리말. script는 듣기 버튼의 해설 대본이다. */
export const DocPageHeader = ({
  locale,
  content: c,
  script,
}: {
  locale: Locale;
  content: HeaderContent;
  script?: NarrationScript;
}) => (
  <header>
    <p className="mb-sm text-xsm font-semiBold text-text-primary">{c.eyebrow}</p>
    <h1 className="text-3xl leading-3xl font-bold tracking-sm text-text-default">{c.title}</h1>
    <p className="mt-lg text-md leading-md text-text-light">{c.lead}</p>

    <div className="mt-lg flex flex-wrap gap-x-xl gap-y-xs text-xxsm text-text-light">
      <span className="flex items-center gap-xs">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {c.readingTime}
      </span>
      {c.practices && (
        <span className="flex items-center gap-xs">
          <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
          {c.practices}
        </span>
      )}
      <ListenButton script={script} />
    </div>

    <section
      aria-labelledby="learn-heading"
      className="mt-2xl rounded-md border border-stroke-light bg-background-default p-xl"
    >
      <h2 id="learn-heading" className="mb-md text-xsm font-bold text-text-default">
        {learnHeading[locale]}
      </h2>
      <List className="flex flex-col gap-sm text-xsm">
        {c.learnItems.map((item) => (
          <ListItem key={item} className="flex gap-sm">
            <Check className="mt-xs h-4 w-4 shrink-0 text-text-success" aria-hidden="true" />
            {item}
          </ListItem>
        ))}
      </List>
    </section>
  </header>
);

/** 번호를 붙인 핵심 요약 섹션. */
export const SummarySection = ({ item, points }: { item: TocItem; points: string[] }) => (
  <section aria-labelledby={item.id}>
    <DocH2 {...item} />
    <List ordered className="flex flex-col gap-sm">
      {points.map((point, i) => (
        <ListItem key={point} className="flex gap-md">
          <span className="font-mono text-xsm text-text-light">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span>{point}</span>
        </ListItem>
      ))}
    </List>
  </section>
);

/** 참고 자료 섹션. */
export const ReferencesSection = ({
  item,
  locale,
  references,
}: {
  item: TocItem;
  locale: Locale;
  references: DocReference[];
}) => (
  <section aria-labelledby={item.id}>
    <DocH2 {...item} />
    <ReferenceList references={references} locale={locale} />
  </section>
);
