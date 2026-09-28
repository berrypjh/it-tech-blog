import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

import { DocH2 } from '@/components/doc';

import { getToc } from '../toc';

const points = {
  ko: [
    '웹접근성은 장애가 있는 사람이 콘텐츠를 동등하게 인식·이해·탐색·조작할 수 있게 설계하고 개발하는 일입니다.',
    '장벽은 능력, 환경, 입력 방식, 인터페이스 설계의 조합에서 생깁니다. 프론트엔드가 직접 통제하는 것은 설계입니다.',
    '일차 목적은 장애가 있는 사용자의 동등한 사용입니다. 다른 사용자에게 생기는 이점은 결과이지 대체 논거가 아닙니다.',
    '화면과 보조기술은 같은 마크업에서 갈라져 나옵니다. 접근성 결과는 프론트엔드 코드에서 시작됩니다.',
    '접근성과 사용성은 겹치지만 다른 질문에 답합니다. 사용성 절차만으로는 모든 접근성 문제를 찾을 수 없습니다.',
    '구현은 ARIA보다 먼저, HTML이 이미 제공하는 의미와 동작을 올바르게 쓰는 데서 시작합니다.',
    '접근성을 컴포넌트 계약에 넣으면 같은 결함이 화면마다 복제되지 않습니다.',
    'WCAG 2.2는 W3C 기술 기준, KWCAG 2.2(KS X OT0003)는 이를 반영한 국가표준입니다. 둘 다 법률 조문은 아닙니다.',
  ],
  en: [
    'Web accessibility is designing and developing so that people with disabilities can equally perceive, understand, navigate, and operate content.',
    'Barriers come from the mix of ability, environment, input method, and interface design. Frontend directly controls the design.',
    'The primary purpose is equal use for people with disabilities. Benefits for other users are a result, not a substitute argument.',
    'The screen and assistive technology branch from the same markup. Accessibility outcomes start in frontend code.',
    'Accessibility and usability overlap but answer different questions. Usability processes alone cannot find every accessibility problem.',
    'Implementation starts with correctly using the meaning and behavior HTML already provides, before ARIA.',
    'Putting accessibility into component contracts stops the same defect from being copied onto every screen.',
    'WCAG 2.2 is the W3C technical standard, and KWCAG 2.2 (KS X OT0003) is the national standard that reflects it. Neither is a legal text.',
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
