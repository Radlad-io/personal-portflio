import { Meta, Story } from "@storybook/react";
import { Children } from "react";
import Heading from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
} as Meta;

const Template: Story = (args: any) => <Heading>{args.heading_text}</Heading>;

export const Heading_One = Template.bind({});
Heading_One.args = {
  heading_text: "Testing",
};
