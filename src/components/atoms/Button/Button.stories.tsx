import { Meta, Story } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
} as Meta;

const Template: Story = (args: any) => <Button {...args}>{args.label}</Button>;

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
  dark: true,
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};
