import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '한 기능은 성격이 다른 작업 단위로 나뉩니다. 규칙이 명확한 형식 검사 · 값 계산 · 권한 확인 · 상태 전이는 코드와 시스템이, 해석 · 생성 · 분류 · 추출은 검증 전략과 함께 모델이 맡습니다.',
    '실시간성, 비용, 오류 허용도, 상태 변경의 피해, 사람 검토 가능성, 데이터 제약이 판단 기준입니다. 위험한 변경은 검증, 권한 확인, 명시적 승인을 거친 뒤 시스템이 실행합니다.',
    '단순한 baseline에서 시작해 LLM이 무엇을 개선했고 무엇을 대가로 했는지 비교합니다.',
  ],
  en: [
    'A feature splits into task units of different natures. Format checks, value calculation, permission checks, and state transitions with clear rules belong to code and the system, while interpretation, generation, classification, and extraction go to a model with a verification strategy.',
    'Real-time need, cost, error tolerance, damage of a state change, human review, and data constraints are the criteria. A risky change is executed by the system only after validation, a permission check, and explicit approval.',
    'Start from a simple baseline and compare what the LLM improved and what it cost.',
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
            <span className="break-keep">{point}</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
