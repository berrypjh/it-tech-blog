import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ScopeDemo } from '../demos/ScopeDemo';
import { getToc } from '../toc';

const content = {
  ko: '좌석 현황 영역은 실제 live 영역이고, 아래 두 패널은 그 영역의 DOM 변화를 읽은 값과 설정에 따른 처리 모델입니다. 모델 값은 보조기술의 실제 발화가 아닙니다.',
  en: 'The seat status region is a real live region; the two panels below are the DOM changes read from it and a model of handling by setting. Model values are not real assistive technology speech.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <ScopeDemo />
    </section>
  );
};
