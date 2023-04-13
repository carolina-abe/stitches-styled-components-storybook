import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    label: {
      name: 'Label'
    },
    style: {
      name: 'Estilo'
    },
    variant: {
      name: 'Variant',
      defaultValue: 'primary'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Stitches: Story = {
  args: {
    style: 'stitches',
    label: 'Botão com Istchitches',
    variant: 'primary'
  },
};

export const StyledComponents: Story = {
  args: {
    style: 'styled-component',
    label: 'Botão com Stailed Componentis',
    variant: 'secondary'
  },
};

