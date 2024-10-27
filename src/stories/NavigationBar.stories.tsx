import type { Meta, StoryObj } from "@storybook/react";

import NavigationBar from "../components/NavigationBar";
import { fn } from "@storybook/test";

// Button이 받는 prop를 정의
const meta = {
  // 경로
  title: "TextFields/NavigationBar",
  component: NavigationBar,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true,
    },
    showTitle: {
      control: "boolean",
      description: "페이지 이름 표시 여부",
      defaultValue: true,
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: "타이틀",
    },
  },
  args: { onBackButtonClick: fn(), onCloseButtonClick: fn() },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "타이틀",
  },
};
