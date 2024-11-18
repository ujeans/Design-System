import type { Meta, StoryObj } from "@storybook/react";

import CategoryButton from "../components/CategoryButton";
import { fn } from "@storybook/test";

// Button이 받는 prop를 정의
const meta = {
  // 경로
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  //
  argTypes: {
    iconAlt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "",
    },
    iconPath: { control: "text", description: "이미지의 경로" },
    text: {
      control: "text",
      description: "버튼에 표시될 텍스트",
      defaultValue: "카테고리",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

import tagIcon from "../stories/assets/tag.svg";

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: tagIcon,
    text: "카테고리",
  },
};
