import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Molecules/FormField",
  component: FormField,
  args: {
    label: "Email",
    placeholder: "name@example.com",
    hint: "Use your work email address.",
    type: "email",
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};
