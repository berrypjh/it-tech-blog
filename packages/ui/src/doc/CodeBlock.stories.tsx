import type { Meta, StoryObj } from '@storybook/react-vite';

import { CodeBlock, CodeCompare } from './CodeBlock';

const divButton = `<div class="btn" onclick="save()">저장</div>`;
const nativeButton = `<button type="button" onclick="save()">저장</button>`;

const meta: Meta<typeof CodeBlock> = {
  title: 'Doc/CodeBlock',
  component: CodeBlock,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div className="doc-prose max-w-[46rem]">
        <Story />
      </div>
    ),
  ],
  args: { label: 'HTML', code: nativeButton },
};
export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {};

export const Bad: Story = { args: { tone: 'bad', code: divButton } };

export const Good: Story = { args: { tone: 'good' } };

/** 문단 사이에 놓였을 때의 간격. */
export const BetweenParagraphs: Story = {
  render: (args) => (
    <section>
      <p>버튼 요소는 역할과 키보드 동작을 기본으로 가집니다.</p>
      <CodeBlock {...args} />
      <p>div로 만들면 이 동작을 직접 다시 만들어야 합니다.</p>
    </section>
  ),
};

export const Compare: StoryObj<typeof CodeCompare> = {
  render: () => <CodeCompare before={divButton} after={nativeButton} />,
};

/** 한 줄이 반 칸에 들어가지 않으면 가로 스크롤 대신 위아래로 쌓는다. */
export const CompareStacked: StoryObj<typeof CodeCompare> = {
  render: () => (
    <CodeCompare
      before={`<p>"쉽게 연결된다"고 리뷰어 김민지가 말했다.</p>`}
      after={`<blockquote>\n  <p>쉽게 연결된다.</p>\n</blockquote>\n<p><strong>품절 시 자동 취소됩니다.</strong></p>`}
    />
  ),
};
