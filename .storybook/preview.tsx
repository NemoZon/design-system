import type { Preview } from "@storybook/react-vite";
import * as React from "react";
import "../src/index.css";
import { ThemeProvider } from "../src/providers/ThemeProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="min-h-screen bg-white p-8 text-zinc-900 dark:bg-zinc-950 dark:text-white">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    a11y: {
      test: "todo",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
