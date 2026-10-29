import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { getToc } from '../toc';

const points = {
  ko: [
    '사용 방식은 입력 · 출력 · 탐색 단위의 세 축으로 나눠 봅니다. 축이 다르면 같은 화면에서도 막히는 곳이 다릅니다.',
    '키보드는 포커스, 화면 낭독기는 이름·역할·상태와 구조, 확대는 리플로우와 배치, 음성 입력은 보이는 이름, 스위치는 단계 수와 시간에 의존합니다.',
    '한 요소가 방식마다 다른 단계에서 막히고, 해결은 보이는 글자 같은 하나의 설계 선택으로 모이기도 합니다.',
    '코드로 예상한 결과와 실제 보조기술에서 확인한 결과를 구분해서 기록합니다. 고정된 발화 문자열을 결과로 적지 않습니다.',
    '실제 확인에는 운영체제 · 브라우저 · 보조기술의 버전과 모드, 설정값을 함께 적습니다.',
  ],
  en: [
    'Split ways of use along input, output, and unit of navigation. When the axes differ, the same screen fails in different places.',
    'Keyboard depends on focus, screen readers on names, roles, states, and structure, magnification on reflow and layout, speech input on visible names, and switches on step count and time.',
    'One element fails at different stages for each method, and the fix can converge on a single design choice such as visible text.',
    'Record predictions from code separately from results checked with real assistive technology. Do not write fixed announcement strings as results.',
    'With real checks, record the OS, browser, and assistive technology versions and modes, plus settings.',
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
