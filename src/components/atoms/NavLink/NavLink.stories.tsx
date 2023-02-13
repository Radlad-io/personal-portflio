import { Meta, Story } from "@storybook/react";
import NavLink from "./NavLink";

export default {
  title: "Atoms/NavLink",
  component: NavLink,
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#000" }],
    },
  },
} as Meta;

const Template: Story = (args: any) => (
  <NavLink text={args.text} route={args.route} year={args.year} />
);

export const Main = Template.bind({});
Main.args = {
  text: "Hello World",
  year: "2022",
  route: "/",
};
