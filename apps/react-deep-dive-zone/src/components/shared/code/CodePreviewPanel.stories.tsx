import type { Meta, StoryObj } from '@storybook/react-vite';

import { CodePreviewPanel } from './CodePreviewPanel';

const sampleCode = `export function jsx(type, config, maybeKey) {
  const props = {};
  let key = null;
  if (maybeKey !== undefined) key = '' + maybeKey;
  return ReactElement(type, key, props);
}`;

const meta: Meta<typeof CodePreviewPanel> = {
  title: 'React Deep Dive/CodePreviewPanel',
  component: CodePreviewPanel,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof CodePreviewPanel>;

export const Default: Story = {
  args: {
    code: sampleCode,
    language: 'javascript',
    header: 'packages/react/src/jsx/ReactJSXElement.js',
    badge: 'main',
  },
};

export const WithCaption: Story = {
  args: {
    code: sampleCode,
    language: 'javascript',
    header: 'ReactJSXElement.js',
    caption: 'JSX가 React Element 객체로 변환되는 진입점',
  },
};
