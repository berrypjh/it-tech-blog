import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  AccessibilityIcon,
  BackArrowIcon,
  ChevronDownIcon,
  CollapseAllIcon,
  ExpandAllIcon,
  HtmlIcon,
  KeyboardIcon,
  RocketIcon,
  VolumeIcon,
} from '../icons';

import { AppShell } from './AppShell';
import { SettingsPopover } from './SettingsPopover';
import { useSidebarNav } from './useSidebarNav';

const navData = [
  {
    title: '시작하기',
    items: [
      { id: 'intro', label: '접근성이란?' },
      { id: 'why', label: '왜 중요한가' },
      { id: 'disabilities', label: '장애 유형' },
      { id: 'assistive-tech', label: '보조 기술' },
      { id: 'roadmap', label: '학습 로드맵' },
    ],
  },
  {
    title: 'HTML/시맨틱',
    items: [
      { id: 'semantic', label: '시맨틱 마크업' },
      { id: 'landmarks', label: '랜드마크' },
      { id: 'headings', label: '헤딩 계층' },
    ],
  },
  {
    title: '키보드 접근성',
    items: [
      { id: 'focus', label: '포커스 관리' },
      { id: 'tabindex', label: 'tabindex 사용법', badge: 'NEW', badgeColor: 'warning' as const },
    ],
  },
  {
    title: '스크린 리더',
    items: [
      { id: 'aria', label: 'ARIA 기초', badge: 'WIP', badgeColor: 'purple' as const },
      { id: 'live-region', label: '라이브 리전' },
    ],
  },
];

const sectionIcons = [RocketIcon, HtmlIcon, KeyboardIcon, VolumeIcon];

const DemoSidebar = ({ pathname }: { pathname: string }) => {
  const { expanded, toggle, toggleAll, anyExpanded } = useSidebarNav(navData, pathname);

  return (
    <aside className="flex flex-col h-full bg-background-surface border-r border-stroke-default">
      <div className="px-lg pt-lg pb-lg space-y-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <div className="w-7 h-7 rounded bg-background-primary flex items-center justify-center">
              <AccessibilityIcon color="white" />
            </div>

            <span className="font-bold text-sm tracking-tight text-text-default">
              Accessibility
            </span>
          </div>

          <SettingsPopover />
        </div>

        <p className="text-xxsm text-text-light/60 leading-snug">
          웹 접근성 학습을 위한 가이드와 도구
        </p>
      </div>

      <div className="h-px bg-stroke-default mx-lg" />

      <div className="flex justify-end px-md pt-sm">
        <button
          onClick={toggleAll}
          className="flex items-center gap-xs px-sm py-xs rounded text-text-light/40 hover:text-text-light hover:bg-background-grey/10 transition-colors"
        >
          {anyExpanded ? <CollapseAllIcon /> : <ExpandAllIcon />}

          <span className="text-[10px]">{anyExpanded ? 'Collapse all' : 'Expand all'}</span>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-xs" aria-label="네비게이션">
        {navData.map((group, groupIndex) => {
          const isExpanded = expanded.has(groupIndex);
          const hasActiveItem = group.items.some((item) => pathname === `/${item.id}`);
          const SectionIcon = sectionIcons[groupIndex] ?? RocketIcon;

          return (
            <div key={groupIndex}>
              <button
                onClick={() => toggle(groupIndex)}
                aria-expanded={isExpanded}
                className={
                  'w-full flex items-center gap-2.5 px-lg py-2.5 text-left transition-colors ' +
                  (hasActiveItem ? 'text-text-default' : 'text-text-light hover:text-text-default')
                }
              >
                <span
                  className={
                    'shrink-0 ' + (hasActiveItem ? 'text-text-primary' : 'text-text-light/40')
                  }
                >
                  <SectionIcon />
                </span>

                <span className="flex-1 text-xsm font-semiBold uppercase tracking-[0.07em]">
                  {group.title}
                </span>

                <ChevronDownIcon
                  className={
                    'transition-all duration-200 ' +
                    (hasActiveItem ? 'text-text-primary' : 'text-text-light/30') +
                    (isExpanded ? ' rotate-180' : '')
                  }
                />
              </button>

              <div
                className={
                  'grid transition-all duration-200 ease-in-out ' +
                  (isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')
                }
              >
                <div className="overflow-hidden">
                  <ul className="px-lg pb-sm pt-0.5 space-y-px">
                    {group.items.map((item) => {
                      const isActive = pathname === `/${item.id}`;

                      return (
                        <li key={item.id}>
                          <button
                            aria-current={isActive ? 'page' : undefined}
                            className={
                              'w-full flex items-center justify-between px-2.5 py-1.5 rounded-xs transition-colors text-left ' +
                              (isActive
                                ? 'bg-primary-pr100 text-text-primary font-medium'
                                : 'text-text-light hover:text-text-default hover:bg-background-grey/10')
                            }
                          >
                            <span className="truncate text-xxsm leading-snug">{item.label}</span>

                            {item.badge && (
                              <span
                                className={
                                  'ml-sm shrink-0 text-[10px] px-sm py-0.5 rounded-xs font-bold uppercase tracking-wide ' +
                                  (item.badgeColor === 'warning'
                                    ? 'bg-warning-wa100 text-text-warning'
                                    : 'bg-secondary-se100 text-text-secondary')
                                }
                              >
                                {item.badge}
                              </span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div className="h-px bg-stroke-default mx-lg" />

      <div className="px-lg py-md">
        <button className="flex items-center gap-sm text-xxsm text-text-light/50 hover:text-text-light transition-colors">
          <BackArrowIcon />
          홈으로 돌아가기
        </button>
      </div>
    </aside>
  );
};

const DemoContent = ({ longBody = false }: { longBody?: boolean }) => (
  <article className="mx-auto w-full max-w-[1200px] px-lg py-xl">
    <header className="mb-xl">
      <p className="text-xxsm text-text-light/60 uppercase tracking-wider mb-sm">
        시작하기 · Section 01
      </p>

      <h1 className="text-3xl font-bold mb-md text-text-default">접근성이란 무엇인가</h1>

      <p className="text-sm text-text-light leading-relaxed">
        웹 접근성(Web Accessibility)이란 장애가 있는 사람들이 동등하게 웹을 사용할 수 있도록
        보장하는 설계와 구현 원칙입니다.
      </p>
    </header>

    <section className="space-y-md mb-xl">
      <h2 className="text-xl font-semiBold text-text-default">왜 중요한가요?</h2>

      <p className="text-sm text-text-light leading-relaxed">
        접근성은 단순히 법적 의무가 아닙니다. 전 세계 인구의 약 15%가 어떤 형태의 장애를 가지고
        있으며, 노화로 인한 일시적 제약을 포함하면 그 비율은 훨씬 더 커집니다.
      </p>

      <ul className="text-sm text-text-light list-disc pl-lg space-y-xs leading-relaxed">
        <li>시각, 청각, 운동, 인지 장애를 가진 사용자에게 동등한 경험 제공</li>
        <li>SEO, UX, 성능 등 비기능 요구사항과 자연스럽게 연결</li>
        <li>국가별 접근성 법규 준수 (WCAG, ADA, EAA 등)</li>
      </ul>
    </section>

    {longBody && (
      <section className="space-y-md">
        <h2 className="text-xl font-semiBold text-text-default">스크롤 검증</h2>

        <p className="text-sm text-text-light leading-relaxed">
          본문이 충분히 길어져도 사이드바·헤더는 고정되고 main 영역만 스크롤됩니다. 브라우저 전체
          스크롤은 발생하지 않아야 합니다.
        </p>

        {Array.from({ length: 80 }).map((_, i) => (
          <p key={i} className="text-sm text-text-light/80 leading-relaxed">
            더미 단락 #{i + 1} — 사이드바·헤더 고정 여부와 main 내부 스크롤바 위치를 확인하세요.
          </p>
        ))}
      </section>
    )}
  </article>
);

const MobileBrand = () => (
  <div className="flex items-center gap-sm">
    <div className="w-6 h-6 rounded bg-background-primary flex items-center justify-center">
      <AccessibilityIcon color="white" />
    </div>

    <span className="font-bold text-xsm tracking-tight">Accessibility</span>
  </div>
);

const meta: Meta<typeof AppShell> = {
  title: 'Shell/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'zone 공통 셸 레이아웃. 좌측 사이드바(280px) + 우측 main(내부 스크롤). 모바일에선 햄버거 메뉴.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  name: '실제 zone 스타일',
  args: {
    sidebar: <DemoSidebar pathname="/intro" />,
    mobileBrand: <MobileBrand />,
    children: <DemoContent />,
  },
  parameters: {
    docs: {
      description: {
        story: '본문 분량이 화면을 채우지 않는 보통 상태. 스크롤바가 표시되지 않습니다.',
      },
    },
  },
};

export const ScrollContained: Story = {
  name: '내부 스크롤 검증',
  args: {
    ...Default.args,
    children: <DemoContent longBody />,
  },
  parameters: {
    docs: {
      description: {
        story:
          '본문이 viewport보다 길 때, 스크롤바는 main 영역에만 나타나고 사이드바·헤더는 고정됩니다.',
      },
    },
  },
};
