import { Meta, Story } from "@storybook/react";
import { Children } from "react";
import Heading from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#000" }],
    },
  },
} as Meta;

const Template: Story = (args: any) => <Heading>{args.heading_text}</Heading>;

export const Nav_List = Template.bind({});
Nav_List.args = {
  heading_text: "Creative Development",
};
