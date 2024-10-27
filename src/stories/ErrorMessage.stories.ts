import type { Meta, StoryObj } from "@storybook/react";

import ErrorMessage from "../components/ErrorMessage";

// ErrorMessage이 받는 prop를 정의
const meta = {
  // 경로
  title: "Text/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  //
  argTypes: {
    children: { control: "text", description: "ErrorMessage의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "에러 메세지는 여기로",
  },
};
