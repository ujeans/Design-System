import type { Meta, StoryObj } from "@storybook/react";

import DefaultTextField from "../components/DefaultTextField";
import { fn } from "@storybook/test";

// Button이 받는 prop를 정의
const meta: Meta<typeof DefaultTextField> = {
  // 경로
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    // 컴포넌트 위치
    layout: "centered",
  },
  tags: ["autodocs"],
  //
  argTypes: {
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 경로",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
      defaultValue: "텍스트를 입력해주세요",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    onChange: {
      action: "changed",
      description: "텍스트 필드 값 변경 이벤트",
    },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메세지",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
    id: {
      control: "text",
      description: "텍스트 필드의 id",
      defaultValue: "",
    },
  },
  args: { onIconClick: fn() },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

import deleteIcon from "../stories/assets/delete.svg";

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: deleteIcon,
    placeholder: "텍스트를 입력하세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    isError: false,
    id: "email",
  },
};
