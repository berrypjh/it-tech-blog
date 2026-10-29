import type { Locale } from '@it-tech-blog/preferences';

import { cx } from '@berrypjh/react-ui';
import { ArrowDown, AudioLines, Code, Globe, type LucideIcon, Monitor } from 'lucide-react';

import { failureStages } from '@/components/shared/failureStages';

const content = {
  ko: {
    dom: {
      title: '개발자가 작성한 DOM과 의미 정보',
      detail: '요소 선택 · 속성 · 텍스트 · 연결 관계',
    },
    browser: { title: '브라우저', detail: '마크업을 해석해 두 갈래의 결과를 만듭니다' },
    screen: { title: '렌더링된 화면', detail: '보고 확대하고, 포인터·키보드·터치로 조작' },
    tree: {
      title: '접근성 트리',
      detail: '플랫폼 접근성 API를 거쳐 보조기술에 전달되는 역할 · 이름 · 상태',
    },
    caption:
      '개념 모형입니다. 화면이 멀쩡해 보여도 접근성 트리에서는 역할·이름·상태가 빠지거나 틀릴 수 있습니다. 둘 다 같은 마크업에서 나옵니다.',
  },
  en: {
    dom: {
      title: 'DOM and semantics you write',
      detail: 'Element choice · attributes · text · relationships',
    },
    browser: { title: 'Browser', detail: 'Interprets markup into two results' },
    screen: {
      title: 'Rendered screen',
      detail: 'Seen and zoomed, operated by pointer, keyboard, or touch',
    },
    tree: {
      title: 'Accessibility tree',
      detail: 'Role · name · state passed to assistive tech through platform accessibility APIs',
    },
    caption:
      'A conceptual model. The screen can look fine while roles, names, or states are missing or wrong in the accessibility tree. Both come from the same markup.',
  },
};

const Node = ({
  icon: Icon,
  title,
  detail,
  highlight,
}: {
  icon: LucideIcon;
  title: string;
  detail: string;
  highlight?: boolean;
}) => (
  <div
    className={cx(
      'flex h-full items-center gap-md rounded-md border p-md',
      highlight
        ? 'border-stroke-primary bg-[var(--ds-background-selected)]'
        : 'border-stroke-light bg-background-surface',
    )}
  >
    <Icon
      className={cx('h-5 w-5 shrink-0', highlight ? 'text-text-primary' : 'text-text-light')}
      aria-hidden="true"
    />
    <span className="flex flex-col gap-2xs">
      <span className="text-xsm font-semiBold text-text-default">{title}</span>
      <span className="text-xxsm text-text-light">{detail}</span>
    </span>
  </div>
);

const Arrow = () => (
  <ArrowDown className="h-4 w-4 justify-self-center text-text-light" aria-hidden="true" />
);

/** 화면과 보조기술은 같은 마크업에서 갈라져 나온다. */
export const MarkupPipelineDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-xl flex flex-col gap-md rounded-md border border-stroke-light bg-background-default p-lg">
      <div className="grid gap-sm">
        <Node icon={Code} {...c.dom} highlight />
        <Arrow />
        <Node icon={Globe} {...c.browser} />
      </div>

      <div className="grid gap-sm sm:grid-cols-2">
        <div className="grid grid-rows-[auto_1fr_auto] gap-sm">
          <Arrow />
          <Node icon={Monitor} {...c.screen} />
          <Arrow />
        </div>
        <div className="grid grid-rows-[auto_1fr_auto] gap-sm">
          <Arrow />
          <Node icon={AudioLines} {...c.tree} />
          <Arrow />
        </div>
      </div>

      <span className="rounded-md bg-success-su500/10 p-sm text-center text-xsm font-semiBold text-text-success">
        {failureStages[locale].map((stage) => stage.title).join(' → ')}
      </span>

      <figcaption className="text-center text-xxsm text-text-light">{c.caption}</figcaption>
    </figure>
  );
};
