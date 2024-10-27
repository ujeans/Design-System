import type { Meta, StoryObj } from "@storybook/react";

import Label from "../components/Label";

// Button이 받는 prop를 정의
const meta = {
  // 경로
  title: "Text/Label",
  component: Label,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  //
  argTypes: {
    htmlFor: { control: "text", description: "label의 for 속성" },
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "이메일",
  },
};
