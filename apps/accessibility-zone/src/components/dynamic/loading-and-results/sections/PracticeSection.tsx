import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { LoadingResultsDemo } from '../demos/LoadingResultsDemo';
import { getToc } from '../toc';

const content = {
  ko: '폼 · 결과 영역 · 알림 · 초점은 실제이고, 서버의 응답과 그 순서만 아래 가상 서버에서 사람이 정합니다. 그래서 정해진 대기 시간 없이 같은 순서를 다시 만들 수 있습니다.',
  en: 'The form, results area, announcement, and focus are real; only the server’s responses and their order are set by hand in the simulated server below. So the same order can be reproduced without a fixed delay.',
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
      <LoadingResultsDemo />
    </section>
  );
};
