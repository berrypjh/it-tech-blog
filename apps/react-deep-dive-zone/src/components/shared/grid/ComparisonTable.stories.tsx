import type { Meta, StoryObj } from '@storybook/react-vite';

import { ComparisonTable } from './ComparisonTable';

const meta: Meta<typeof ComparisonTable> = {
  title: 'React Deep Dive/ComparisonTable',
  component: ComparisonTable,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof ComparisonTable>;

export const TwoPerspectives: Story = {
  render: () => (
    <ComparisonTable
      caption="같은 현상, 다른 해석"
      headers={['현상', '사용법 설명', '내부 구조 설명']}
      columnWidths={['20%', '40%', '40%']}
      rows={[
        {
          label: '버튼 클릭',
          cells: ['사용자가 +1 버튼을 클릭한다.', 'Click 이벤트가 발생하고 React가 이를 감지한다.'],
        },
        {
          label: 'setState 호출',
          cells: [
            'setCount(count + 1)을 호출한다.',
            'dispatchSetState가 실행되어 update를 생성한다.',
          ],
        },
        {
          label: '화면 갱신',
          cells: [
            'count 값이 바뀌며 다시 그려진다.',
            '스케줄링 → 렌더링 → 커밋으로 DOM이 갱신된다.',
          ],
        },
      ]}
    />
  ),
};

export const SingleColumn: Story = {
  render: () => (
    <ComparisonTable
      caption="단계별 설명"
      headers={['단계', '설명']}
      rows={[
        { label: 'Render', cells: ['변경 사항을 계산한다.'] },
        { label: 'Commit', cells: ['변경 사항을 DOM에 반영한다.'] },
      ]}
    />
  ),
};
