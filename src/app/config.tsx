"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/defaultTheme";

const Config = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export default Config;
