import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { Steps } from '@/components/shared/Steps';

import { OneControlDemo } from '../demos/OneControlDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: <>아래 체크박스 하나를 대상으로 이 장에서 배운 순서를 그대로 밟습니다.</>,
    steps: [
      '예상 — 체크하면 DOM · 개발자 도구 · 화면 낭독기에서 각각 무엇이 바뀔지 적습니다.',
      '조작 — 체크박스를 한 번 체크합니다.',
      <>
        관찰 1 (DOM) — 실습 패널에서 <code>checked</code> 속성값과 HTML 속성을 봅니다.
      </>,
      '관찰 2 (개발자 도구) — 접근성 탭에서 역할 · 이름 · 상태를 봅니다.',
      <>
        관찰 3 (보조기술) — <PageLink locale="ko" id="screen-reader-start" />의 경로로 체크박스에
        가서 상태를 듣습니다. 할 수 없으면 미실행으로 적습니다.
      </>,
      '해석 — 세 관찰이 서로 다르면, 차이가 어느 단계에서 생겼는지 적습니다.',
    ],
  },
  en: {
    intro: <>Take the one checkbox below through the order this chapter taught.</>,
    steps: [
      'Predict — write what will change in the DOM, developer tools, and the screen reader when you check it.',
      'Change — check the checkbox once.',
      <>
        Observe 1 (DOM) — look at the <code>checked</code> property and HTML attribute in the
        exercise panel.
      </>,
      'Observe 2 (developer tools) — look at role, name, and state in the Accessibility tab.',
      <>
        Observe 3 (assistive technology) — reach the checkbox using a path from{' '}
        <PageLink locale="en" id="screen-reader-start" /> and listen to its state. If you cannot,
        write not run.
      </>,
      'Interpret — if the three observations differ, note at which step the difference arose.',
    ],
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <OneControlDemo />
    </section>
  );
};
