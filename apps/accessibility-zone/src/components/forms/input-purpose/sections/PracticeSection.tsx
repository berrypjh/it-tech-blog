import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { InputPurposeDemo } from '../demos/InputPurposeDemo';
import { getToc } from '../toc';

const content = {
  ko: '익명 행사 신청서(가상의 자료)입니다. 값을 넣어 보고, 속성 읽기로 브라우저 DOM에 실제로 있는 값을 확인하세요. 가상 키보드의 종류와 자동 채움 제안은 기기와 브라우저마다 달라서 이 페이지가 읽을 수 없습니다.',
  en: 'This is an anonymous event application (fictional data). Enter values, then use the read button to check what is actually in the browser DOM. The kind of virtual keyboard and autofill suggestions differ by device and browser, and this page cannot read them.',
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <InputPurposeDemo />
    </section>
  );
};
