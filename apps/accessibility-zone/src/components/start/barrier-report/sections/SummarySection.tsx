import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '재현 기록은 다른 사람이 같은 조건에서 같은 실패를 보게 하는 문서이고, "누가 무엇을 하려다 어디서 막혔나"에서 출발합니다.',
    '사용자 · 과업 · 환경 · 사용 방식 · 절차 · 기대와 실제 결과 · 실패 단계 · 영향 · 복구 경로 · 더 확인할 것을 함께 적습니다.',
    '실패 단계는 처음 막힌 단계 하나를 고르고, 같은 결함도 사용자와 방식에 따라 달라질 수 있음을 기억합니다.',
    '직접 확인한 것과 코드로 예상한 것을 나누고, 확인하지 못한 환경은 더 확인할 것으로 남깁니다.',
    'WCAG 기준 번호는 기록을 돕는 정보일 뿐 영향과 재현 절차를 대신하지 않습니다.',
  ],
  en: [
    'A reproduction record lets someone else see the same failure under the same conditions, and it starts from "who was trying to do what, and where they got stuck".',
    'Record the user, task, environment, way of use, steps, expected and actual results, failure stage, impact, recovery path, and what is still to verify together.',
    'Choose the one stage that failed first, and remember the same defect can fail at a different stage for another user or method.',
    'Separate what you checked directly from what you predicted from code, and leave unchecked environments under still to verify.',
    'WCAG criterion numbers support a record; they do not replace the impact and reproduction steps.',
  ],
};

export const SummarySection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.summary.id}>
      <DocH2 {...toc.summary} />
      <List ordered className="flex flex-col gap-sm">
        {points[locale].map((point, i) => (
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
};
