import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../components/IconButton";
import { fn } from "@storybook/test";

// Button이 받는 prop를 정의
const meta = {
  // 경로
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  //
  argTypes: {
    alt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "",
    },
    iconPath: { control: "text", description: "이미지의 경로" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import deleteIcon from "../stories/assets/delete.svg";

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: deleteIcon,
  },
};
