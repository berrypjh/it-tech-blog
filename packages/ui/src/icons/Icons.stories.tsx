import type { Meta, StoryObj } from '@storybook/react-vite';

import * as General from './general';
import * as Tech from './tech';
import * as Theme from './theme';

type IconComponent = React.ComponentType<Record<string, never>>;
type IconMap = Record<string, IconComponent>;

const meta: Meta = {
  title: 'Icons/Gallery',
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj;

const IconGrid = ({ icons }: { icons: IconMap }) => (
  <ul className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-md">
    {Object.entries(icons).map(([name, Icon]) => (
      <li
        key={name}
        className="flex flex-col items-center justify-center gap-sm p-md border border-stroke-default rounded-sm text-text-default"
      >
        <Icon />
        <span className="text-xxsm text-text-light text-center">{name}</span>
      </li>
    ))}
  </ul>
);

export const GeneralIcons: Story = {
  render: () => <IconGrid icons={{ ...General } as IconMap} />,
};

export const TechIcons: Story = {
  render: () => <IconGrid icons={{ ...Tech } as IconMap} />,
};

export const ThemeIcons: Story = {
  render: () => <IconGrid icons={{ ...Theme } as IconMap} />,
};
