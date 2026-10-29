import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '네 개념은 서로 다른 질문을 묻습니다. 한 사례에서 판단이 달라도 모순이 아닙니다.',
    '사용성 평가는 참여자에 장애가 있는 사람이 없으면 접근성 문제를 찾지 못합니다.',
    '표준 적합성 · 과업 성공 · 법적 의무는 확인 방법과 답을 정하는 주체가 다르므로 나눠 말합니다. 자동 검사 0건은 그중 어느 것도 보증하지 않습니다.',
    'WCAG 성공 기준과 WAI-ARIA 명세는 규범, APG · Understanding · Techniques는 참고 자료, 디자인 원칙은 팀의 판단입니다.',
  ],
  en: [
    'The four concepts ask different questions. Different judgments on one case are not a contradiction.',
    'Usability evaluation does not find accessibility problems unless disabled people are among the participants.',
    'Conformance, task success, and legal obligation are checked differently and decided by different parties, so state them separately. Zero automated errors guarantees none of them.',
    'WCAG success criteria and the WAI-ARIA specification are normative; APG, Understanding, and Techniques are informative; design principles are team judgments.',
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
