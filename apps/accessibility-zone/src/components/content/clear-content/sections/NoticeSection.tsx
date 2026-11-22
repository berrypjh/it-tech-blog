import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { NoticeCompareDemo } from '../demos/NoticeCompareDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      수정 전 안내는 문법은 맞지만, 독자가 할 일을 숨깁니다. “소정의 절차”와 “기한 내”는 무엇을
      어디에서 언제까지 하는지 말하지 않습니다. 수정 후 안내는 할 일 하나를 맨 앞에 두고, 기한과
      장소를 숫자와 이름으로 적고, 당일 바뀐 점을 따로 둡니다. 판단은 문장이 예쁜지가 아니라 같은
      과업을 마칠 수 있는지로 합니다.
    </>
  ),
  en: (
    <>
      The notice before is grammatical, but it hides what the reader must do. “The prescribed
      procedure” and “by the deadline” do not say what, where, or by when. The notice after puts the
      one action first, gives the deadline and place as numbers and names, and lists what changes on
      the day separately. The judgment is not whether the sentence reads nicely but whether the same
      task can be finished.
    </>
  ),
};

export const NoticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.notice.id}>
      <DocH2 {...toc.notice} />
      <p>{content[locale]}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <NoticeCompareDemo />
    </section>
  );
};
