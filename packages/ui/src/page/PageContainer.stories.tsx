import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageContainer } from './PageContainer';

const meta: Meta<typeof PageContainer> = {
  title: 'Page/PageContainer',
  component: PageContainer,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
  render: () => (
    <PageContainer>
      <h1 className="text-xl font-bold mb-md">페이지 컨테이너</h1>
      <p className="text-sm">
        반응형 padding과 max-w-[1200px]가 적용된 보편 페이지 컨테이너입니다. 모든 zone이 동일한
        레이아웃을 공유합니다.
      </p>
    </PageContainer>
  ),
};

export const WithCustomClassName: Story = {
  render: () => (
    <PageContainer className="border border-dashed border-stroke-default rounded-md">
      <p className="text-sm">className으로 추가 스타일을 주입할 수 있습니다.</p>
    </PageContainer>
  ),
};
