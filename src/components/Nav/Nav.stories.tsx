import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Nav from './Nav'

// [{linkDestination: '', icon: 'house'},{linkDestination: '', icon: 'bars'}, {linkDestination: '', icon: 'user'}, {linkDestination: '', icon: 'code'}, {linkDestination: '', icon: 'terminal'}, {linkDestination: '', icon: 'gears'}, {linkDestination: '', icon: 'facebook'}, {linkDestination: '', icon: 'twitter'},{linkDestination: '', icon: 'github'}, {linkDestination: '', icon: 'linkedin'}, {linkDestination: '', icon: 'tiktok'}, {linkDestination: '', icon: 'twitch'}]

export default {
  title: 'Nav',
  component: Nav,
  argTypes: {
    color: {control: 'radio', options: ['blue', 'red', 'green']},
    direction: {control: 'radio', options: ['vertical', 'horizontal']},
  }
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  color: 'red',
  direction: 'vertical',
  buttons: [{linkDestination: '', icon: 'bars'},{linkDestination: '', icon: 'tiktok'},{linkDestination: '', icon: 'twitch'}]
}

export const Horizontal = Template.bind({});
Horizontal.args = {
  color: 'green',
  direction: 'horizontal',
  buttons: [{linkDestination: '', icon: 'tiktok'},{linkDestination: '', icon: 'house'},{linkDestination: '', icon: 'gears'}]
}