import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Button",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["outline", "solid"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm" variant="outline">
          Outline small
        </Button>
        <Button size="md" variant="outline">
          Outline medium
        </Button>
        <Button size="lg" variant="outline">
          Outline large
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm" variant="solid">
          Solid small
        </Button>
        <Button size="md" variant="solid">
          Solid medium
        </Button>
        <Button size="lg" variant="solid">
          Solid large
        </Button>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled button",
    disabled: true,
  },
};

export const LongLabel: Story = {
  args: {
    children: "Continue with the selected configuration",
    size: "lg",
    variant: "solid",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Add to cart",
    className: "w-full",
    variant: "solid",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const Clickable: Story = {
  args: {
    children: "Save changes",
    variant: "solid",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Save changes" }));

    await expect(args.onClick).toHaveBeenCalled();
  },
};
