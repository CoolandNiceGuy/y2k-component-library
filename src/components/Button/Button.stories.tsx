import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: { control: 'radio', options:['blue', 'red', 'green'] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  label: 'Button',
  color: 'blue',
};

export const Red = Template.bind({});
Red.args = {
  label: 'Button',
  color: 'red',
};

export const Green = Template.bind({});
Green.args = {
  label: 'Button',
  color: 'green',
};
