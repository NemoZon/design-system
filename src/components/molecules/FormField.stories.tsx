import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
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

export const Filled: Story = {
  args: {
    defaultValue: "alex@example.com",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "alex@example.com",
    disabled: true,
    hint: "This value cannot be changed.",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    hint: "Use at least 12 characters.",
    type: "password",
  },
};

export const WithoutHint: Story = {
  args: {
    hint: undefined,
  },
};

export const Typing: Story = {
  args: {
    hint: "Type an email address to test keyboard input.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Email");

    await userEvent.clear(input);
    await userEvent.type(input, "alex@example.com");

    await expect(input).toHaveValue("alex@example.com");
  },
};
