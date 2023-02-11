import { Meta, Story } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Atoms/Header",
  component: Header,
} as Meta;

export const Template: Story = () => <Header />;

Template.storyName = "Main";

// export const Large = Template.bind({});
// Large.args = {
//   backgroundColor: "red",
//   label: "Press Me",
//   size: "lg",
//   dark: true,
// };
