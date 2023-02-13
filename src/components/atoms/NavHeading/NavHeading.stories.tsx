import { Meta, Story } from "@storybook/react";
import NavHeading from "./NavHeading";

export default {
  title: "Atoms/NavHeading",
  component: NavHeading,
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#000" }],
    },
  },
} as Meta;

export const Template: Story = (args: any) => (
  <NavHeading>{args.children}</NavHeading>
);

export const Heading_Text = Template.bind({});
Heading_Text.args = {
  children: "Creative Development",
};
