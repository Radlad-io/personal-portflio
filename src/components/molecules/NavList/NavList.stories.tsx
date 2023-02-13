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
      route: "/posts/test",
      year: 2022,
    },
    {
      text: "Test",
      route: "/posts/test",
      year: 2022,
    },
  ],
};
