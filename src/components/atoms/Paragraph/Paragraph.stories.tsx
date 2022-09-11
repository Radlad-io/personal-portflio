import { Meta, Story } from "@storybook/react";
import { default as ParagraphFC } from "./Paragraph";

export default {
  title: "Atoms/Paragraph",
  component: ParagraphFC,
} as Meta;

const Template: Story = (args: any) => (
  <ParagraphFC>{args.children}</ParagraphFC>
);

export const Paragraph = Template.bind({});
Paragraph.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis pretium pellentesque. Curabitur ac quam et mi finibus sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque magna diam, porttitor eu justo et, pellentesque vestibulum arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquam varius iaculis. Aliquam nisi arcu, sollicitudin at vestibulum facilisis, sollicitudin non leo. Suspendisse potenti. Mauris ultrices sagittis sapien ac viverra. Nam rhoncus eros sapien, ut gravida sapien congue sit amet. Morbi elementum risus lorem, rhoncus egestas tortor interdum luctus. Pellentesque nec nunc eu odio pharetra fermentum ut eget ligula. Nullam a enim magna.",
};
