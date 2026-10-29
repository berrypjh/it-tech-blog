import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { RecordForm } from '../demos/RecordForm';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '준비된 화면에 넣은 결함 가운데 예시에서 다루지 않은 세 가지(라벨 없이 안내 문구만 있는 날짜 칸, 색으로만 알리는 오류, 알리지 않는 완료 메시지) 중 하나를 골라 기록해 보세요. 사용자나 방식을 바꿔 "변경 확정" 결함을 다시 기록해도 좋습니다. 양식은 빠진 필수 항목을 알려 주고, 다 채우면 기록을 평문으로 복사합니다. 문서 편집기에 직접 써도 항목만 같으면 됩니다.',
  },
  en: {
    intro:
      'Of the defects in the prepared screen, pick one of the three the example did not cover (a date field with a hint but no label, an error shown only by color, a completion message that is not announced) and record it. You can also record the "Confirm change" defect again with a different user or method. The form points out missing required fields and copies the record as plain text when it is complete. Writing it in a document editor works too, as long as the fields match.',
  },
};

export const WriteSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.write.id}>
      <DocH2 {...toc.write} />
      <p>{content[locale].intro}</p>
      <RecordForm />
    </section>
  );
};
