import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavItem from "./NavItem";

export default {
  title: 'NavItem',
  component: NavItem,
  argTypes: {
    color: {control: 'radio', options: ['red', 'blue', 'green']},
  }
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  linkDestination: 'https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/',
  iconName: 'gears',
  orientation: 'vertical',
}

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  linkDestination: 'https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/',
  iconName: 'tiktok',
  orientation: 'vertical',
}

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  linkDestination: 'https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/',
  iconName: 'terminal',
  orientation: 'vertical',
}
