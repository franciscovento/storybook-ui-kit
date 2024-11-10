import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";


const meta = {
  title: "Example/Card",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
