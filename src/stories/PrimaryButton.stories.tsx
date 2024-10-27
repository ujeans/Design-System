import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    Story => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "dark",
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "아이콘",
    },
    isDisabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: false,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "Button",
    theme: "dark",
    isDisabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    theme: "light",
    isDisabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    theme: "social",
    isDisabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "dark",
    isDisabled: true,
  },
};
