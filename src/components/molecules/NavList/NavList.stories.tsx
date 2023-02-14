import { Meta, Story } from "@storybook/react";
import NavList from "./NavList";

export default {
  title: "Molecules/NavList",
  component: NavList,
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#000" }],
    },
  },
} as Meta;

const Template: Story = ({ links }: any) => <NavList links={links} />;

export const Main = Template.bind({});
Main.args = {
  links: [
    {
      text: "Lunar Lander",
      route: "/posts/lunar-lander",
      year: 2023,
    },
    {
      text: "Something Else",
      route: "/posts/something-else",
      year: 2022,
    },
    {
      text: "Unicorn Origami",
      route: "/posts/unicorn-origami",
      year: 2021,
    },
  ],
};
