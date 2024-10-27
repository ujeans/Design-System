import type { Meta, StoryObj } from "@storybook/react";

import TagButton from "../components/TagButton";
import { fn } from "@storybook/test";

// Button이 받는 prop를 정의
const meta = {
  // 경로
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  //
  argTypes: {
    children: {
      control: "text",
      description: "button의 텍스트",
      defaultValue: "button",
    },
    isChecked: {
      control: "boolean",
      description: "버튼 활성화 여부",
      defaultValue: false,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "button",
    isChecked: false,
  },
};
