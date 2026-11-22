import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { RaceDemo } from '../demos/RaceDemo';
import { getToc } from '../toc';

const content = {
  ko: '교육용 문서 목록에서 “자막”(A)은 3건, “대본”(B)은 1건입니다. 시뮬레이션하는 것은 서버와 응답 순서뿐이고, 폼 · 결과 · 알림 · 초점은 실제입니다. 응답을 보내는 동안에도 입력은 계속 쓸 수 있습니다.',
  en: 'In the teaching document list, “caption” (A) has 3 results and “transcript” (B) has 1. Only the server and the response order are simulated; the form, results, announcement, and focus are real. The input stays usable while you send responses.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="model" />
      </p>
      <p>{content[locale]}</p>
      <RaceDemo />
    </section>
  );
};
