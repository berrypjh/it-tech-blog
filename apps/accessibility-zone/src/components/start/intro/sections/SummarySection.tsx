import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '웹 접근성은 장애가 있는 사람이 웹을 인식 · 이해 · 탐색 · 상호작용하고 웹에 기여할 수 있게 설계하고 개발하는 일입니다. 기준은 화면이 보이는지가 아니라 과업을 끝낼 수 있는지입니다.',
    '장벽은 능력, 환경, 사용 방식, 인터페이스 설계의 조합에서 생깁니다. 프론트엔드가 직접 통제하는 것은 설계입니다.',
    '일차 목적은 장애가 있는 사용자의 동등한 사용입니다. 일시적 · 상황적 제약과 장벽은 겹치지만 경험은 같지 않습니다.',
    '장벽은 "규칙 위반"보다 "누가 어떤 과업의 어느 단계에서 막히는가"로 기록해야 우선순위와 재확인 방법이 분명해집니다.',
    '화면과 보조기술은 같은 마크업에서 갈라져 나옵니다. 접근성 결과는 프론트엔드 코드에서 시작됩니다.',
    '접근성과 사용성은 겹치지만 다른 질문에 답합니다. 사용성 절차만으로는 모든 접근성 문제를 찾을 수 없습니다.',
    '구현은 ARIA보다 먼저, HTML이 이미 제공하는 의미와 동작을 올바르게 쓰는 데서 시작합니다.',
    '접근성을 컴포넌트 계약에 넣으면 같은 결함이 화면마다 복제되지 않습니다.',
    'WCAG 2.2는 W3C 기술 기준, KWCAG 2.2(KS X OT0003)는 이를 반영한 국가표준입니다. 둘 다 법률 조문은 아닙니다.',
    '접근성은 비용만 늘리지 않습니다. 구조 · 상태 · 키보드 계약이 분명해져 구현과 테스트도 함께 정리됩니다.',
  ],
  en: [
    'Web accessibility is designing and developing so that people with disabilities can perceive, understand, navigate, interact with, and contribute to the web. The test is whether they can finish the task, not whether the screen is visible.',
    'Barriers come from the mix of ability, environment, way of use, and interface design. Frontend directly controls the design.',
    'The primary purpose is equal use for people with disabilities. Temporary and situational limits overlap with those barriers, but the experience is not the same.',
    'Record a barrier as "who is blocked at which stage of which task" rather than "a rule violation" so that priority and how to recheck become clear.',
    'The screen and assistive technology branch from the same markup. Accessibility outcomes start in frontend code.',
    'Accessibility and usability overlap but answer different questions. Usability processes alone cannot find every accessibility problem.',
    'Implementation starts with correctly using the meaning and behavior HTML already provides, before ARIA.',
    'Putting accessibility into component contracts stops the same defect from being copied onto every screen.',
    'WCAG 2.2 is the W3C technical standard, and KWCAG 2.2 (KS X OT0003) is the national standard that reflects it. Neither is a legal text.',
    'Accessibility does not only add cost. Clearer structure, state, and keyboard contracts also tidy up implementation and testing.',
  ],
};

export const SummarySection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.summary.id}>
      {/* 흔한 오해 섹션을 요약에 합쳤다. 예전 #misconceptions 링크가 여기로 오게 둔다. */}
      <span id="misconceptions" />
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
