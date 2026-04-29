import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
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

export const CompactContainer: Story = {
  args: {
    name: "Jordan Lee",
    role: "Accessibility Lead",
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const TeamList: Story = {
  render: (args) => (
    <div className="grid max-w-2xl gap-3">
      <UserCard {...args} name="Alex Morgan" role="Product Designer" />
      <UserCard {...args} name="Taylor Chen" role="Frontend Engineer" />
      <UserCard {...args} name="Jordan Lee" role="Accessibility Lead" />
    </div>
  ),
};

export const DeleteAction: Story = {
  args: {
    name: "Taylor Chen",
    role: "Frontend Engineer",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: "Delete user Taylor Chen" }),
    );

    await expect(args.onDelete).toHaveBeenCalled();
  },
};
