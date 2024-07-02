import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Button  from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ReactComponentLibrary/MyButton',
  component: Button,

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Click',
  },
};