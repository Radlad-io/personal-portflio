import { Meta, Story } from "@storybook/react";
import { default as CardComponent } from "./Card";

export default {
  title: "Molecules/Card",
  component: CardComponent,
} as Meta;

const Template: Story = (args: any) => <CardComponent {...args} />;

export const Card = Template.bind({});
Card.args = {
  title:
    "His mother had always taught him not to ever think of himself as better than others.",
  route: "/posts/test",
};
