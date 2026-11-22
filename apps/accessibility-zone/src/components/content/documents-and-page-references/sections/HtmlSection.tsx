import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { eventFacts } from '@/components/content/shared/event';
import { SourceTag } from '@/components/shared/SourceTag';

import { PageMarkerDemo } from '../demos/PageMarkerDemo';
import { guideText } from '../guide';
import { getToc } from '../toc';

import { GuideArticle } from './GuideArticle';

const content = {
  ko: {
    intro: (
      <>
        같은 안내를 HTML로도 둡니다. 내려받지 않아도 읽을 수 있고, 화면 낭독기 · 확대 · 번역을
        브라우저에서 그대로 쓸 수 있습니다. 두 판이 같은 내용인지는 시간 · 장소 · 예외 같은 과업
        정보로 대조합니다.
      </>
    ),
    caption: '내려받는 문서와 HTML 판의 대조',
    head: ['항목', 'HTML 판의 값', '내려받는 문서에 같은 값이 있는가'],
    labels: ['시간 (마지막 회차)', '장소', '예외 (입구 변경)'],
    yes: '있음',
    no: '없음',
    note: '이 페이지는 두 판을 한 원자료에서 만들어 어긋날 수 없게 했습니다. 따로 만든 문서라면 같은 대조를 사람이 하고 결과를 기록합니다.',
  },
  en: {
    intro: (
      <>
        The same notice is also in HTML. It can be read without downloading, and screen readers,
        zoom, and translation work in the browser as usual. Whether the two versions agree is
        checked against task information such as time, place, and exceptions.
      </>
    ),
    caption: 'Comparing the downloaded document and the HTML version',
    head: ['Item', 'Value in the HTML version', 'Same value in the downloaded document'],
    labels: ['Time (last session)', 'Place', 'Exception (entrance change)'],
    yes: 'Present',
    no: 'Missing',
    note: 'This page builds both versions from one source so they cannot disagree. For a separately made document, a person does the same comparison and records the result.',
  },
};

export const HtmlSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const e = eventFacts[locale];
  const toc = getToc(locale);
  const text = guideText(locale);
  const values = [e.lastSession, e.place, e.entranceAfter];

  return (
    <section aria-labelledby={toc.html.id}>
      <DocH2 {...toc.html} />
      <p>{c.intro}</p>
      <PageMarkerDemo>
        <GuideArticle locale={locale} />
      </PageMarkerDemo>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="computed" />
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={values.map((value, i) => [c.labels[i], value, text.includes(value) ? c.yes : c.no])}
      />
      <p>{c.note}</p>
    </section>
  );
};
