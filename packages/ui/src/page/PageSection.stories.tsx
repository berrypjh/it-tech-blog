import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageContainer } from './PageContainer';
import { PageSection } from './PageSection';

const meta: Meta<typeof PageSection> = {
  title: 'Page/PageSection',
  component: PageSection,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof PageSection>;

export const SimpleHeader: Story = {
  render: () => (
    <PageContainer>
      <PageSection
        id="01"
        className="mb-xl"
        renderHeader={(headingId) => (
          <h2
            id={headingId}
            className="text-sm font-semiBold text-text-default mb-md pb-sm border-b border-stroke-default"
          >
            심플 헤더 스타일
          </h2>
        )}
      >
        <p className="text-sm text-text-light">
          accessibility-zone에서 사용하는 일반 블로그 톤의 헤더입니다.
        </p>
      </PageSection>
    </PageContainer>
  ),
};

export const TerminalHeader: Story = {
  render: () => (
    <PageContainer>
      <PageSection
        id="01"
        renderHeader={(headingId) => (
          <h2 id={headingId} className="flex items-baseline gap-sm text-xsm mb-lg text-text-light">
            <span className="text-text-light">{'//'}</span>
            <span className="tabular-nums">01</span>
            <span
              aria-hidden="true"
              className="flex-1 border-t border-dashed border-stroke-default translate-y-[-0.25em]"
            />
            <span className="text-text-default font-medium">터미널 헤더 스타일</span>
          </h2>
        )}
      >
        <p className="text-sm text-text-light">
          react-deep-dive-zone에서 사용하는 터미널 톤의 헤더입니다. renderHeader prop으로 임의
          구조를 주입할 수 있습니다.
        </p>
      </PageSection>
    </PageContainer>
  ),
};
