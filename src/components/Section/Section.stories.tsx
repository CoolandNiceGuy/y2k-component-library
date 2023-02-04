import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Section from './Section';

export default {
  title: 'Section',
  component: Section,
  argTypes: {
    mainColor: { control: 'color' },
    textColor: { control: 'color'},
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: 'Title',
  children: <h1>Put content here</h1>,
  mainColor: '#b4b5c8',
  textColor: 'black',
}
