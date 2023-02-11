import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "./Image";

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    shape: {control: 'radio', options: ['DEFAULT', 'LEFT_CHEVRON', 'RIGHT_CHEVRON', 'PARALLELOGRAM']}
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args}/>

export const Default = Template.bind({});
Default.args = {
  src:'https://www.slashfilm.com/img/gallery/astro-boy-reboot-everything-we-know-so-far/l-intro-1657292510.jpg',
  alt: 'astroboy',
}

export const LeftChevron = Template.bind({});
LeftChevron.args = {
  src:'https://www.slashfilm.com/img/gallery/astro-boy-reboot-everything-we-know-so-far/l-intro-1657292510.jpg',
  alt: 'astroboy',
  shape: 'LEFT_CHEVRON'
}

export const RightChevron = Template.bind({});
RightChevron.args = {
  src:'https://www.slashfilm.com/img/gallery/astro-boy-reboot-everything-we-know-so-far/l-intro-1657292510.jpg',
  alt: 'astroboy',
  shape: 'RIGHT_CHEVRON'
}

export const Parallelogram = Template.bind({});
Parallelogram.args = {
  src:'https://www.slashfilm.com/img/gallery/astro-boy-reboot-everything-we-know-so-far/l-intro-1657292510.jpg',
  alt: 'astroboy',
  shape: 'PARALLELOGRAM'
}