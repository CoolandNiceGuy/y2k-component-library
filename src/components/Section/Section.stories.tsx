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

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  children: <h1>Put content here</h1>,
}

export const Red = Template.bind({});
Red.args = {
  title: 'Title',
  children: <h1>Put content here</h1>,
  mainColor: '#FF0000',
  textColor: 'white',
}
