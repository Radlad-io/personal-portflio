import { Meta, Story } from "@storybook/react";
import { Children } from "react";
import Experience from "./Experience";

export default {
  title: "Atoms/Experience",
  component: Experience,
} as Meta;

const Template: Story = (args: any) => <Experience />;

export const Experience_Main = Template.bind({});
Experience_Main.args = {
  heading_text: "Testing",
};
