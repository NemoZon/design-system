import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { UserCard } from "./UserCard";

const meta = {
  title: "Molecules/UserCard",
  component: UserCard,
  args: {
    name: "Alex Morgan",
    role: "Product Designer",
    onDelete: fn(),
  },
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongText: Story = {
  args: {
    name: "Alexandria Morgan-Smith",
    role: "Senior Product Designer, Accessibility Systems",
  },
};
