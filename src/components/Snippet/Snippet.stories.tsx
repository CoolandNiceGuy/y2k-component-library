import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Snippet from "./Snippet";

export default {
  title: 'Snippet',
  component: Snippet,
  argTypes: {
    color: {control: 'color'},
    hasBackground: {control: 'radio', options: [true, false]}
  },
} as ComponentMeta<typeof Snippet>;

const Template: ComponentStory<typeof Snippet> = (args) => <Snippet {...args}/>

export const Default = Template.bind({});
Default.args = {
  title: 'Site of the week',
  imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/3298070013028763355/BD4D16C1AD991E3913DB0B3A8D57E5755B7DB204/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  ctaText: 'Launch',
  ctaDestination: '',
  bodyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam quas, maxime nihil impedit sapiente voluptatibus deleniti eos quidem. Fugit soluta obcaecati atque voluptas dolores reprehenderit et quas pariatur neque.',
  headerText: 'Get Safe Online',
}

export const Blue = Template.bind({});
Blue.args = {
  title: 'Site of the week',
  imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/3298070013028763355/BD4D16C1AD991E3913DB0B3A8D57E5755B7DB204/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  ctaText: 'Launch',
  ctaDestination: '',
  bodyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam quas, maxime nihil impedit sapiente voluptatibus deleniti eos quidem. Fugit soluta obcaecati atque voluptas dolores reprehenderit et quas pariatur neque.',
  headerText: 'Get Safe Online',
  color: '#0000FF',
  hasBackground: true,
}

export const Red = Template.bind({});
Red.args = {
  title: 'Site of the week',
  imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/3298070013028763355/BD4D16C1AD991E3913DB0B3A8D57E5755B7DB204/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  ctaText: 'Launch',
  ctaDestination: '',
  bodyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quam quas, maxime nihil impedit sapiente voluptatibus deleniti eos quidem. Fugit soluta obcaecati atque voluptas dolores reprehenderit et quas pariatur neque.',
  headerText: 'Get Safe Online',
  color: '#FF0000',
  hasBackground: true,
}