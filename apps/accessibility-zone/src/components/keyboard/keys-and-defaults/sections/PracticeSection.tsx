import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { KeyOwnersDemo } from '../demos/KeyOwnersDemo';
import { getToc } from '../toc';

const content = {
  ko: (
    <>
      주문 메모를 적고 쿠폰을 적용하는 작은 과업입니다. 먼저 그대로 조작한 뒤, 의도한 결함을 켜서
      같은 키가 어떻게 달라지는지 비교합니다. 결함은 이 실습 상자 안에서만 동작합니다.
    </>
  ),
  en: (
    <>
      A small task: write an order note and apply a coupon. Operate it as is first, then turn on the
      intentional defect and compare how the same keys change. The defect works only inside this
      exercise box.
    </>
  ),
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{content[locale]}</p>
      <KeyOwnersDemo />
    </section>
  );
};
