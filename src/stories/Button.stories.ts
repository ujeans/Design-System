import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../components/Button";

// Button이 받는 prop를 정의
const meta = {
  // 경로
  title: "Basic/Button",
  component: Button,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  //
  argTypes: {
    // control: color -> backgroundColor
    backgroundColor: { control: "color", description: "버튼은 배경컬러" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
