import { createGlobalTheme } from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Inter",
    body: "Open Sans",
    bold: "Roboto Mono",
    button: "Roboto Mono",
  },
  colors: {
    // Semantic tokens
    background: "#fffbfc",
    // background: "#235585",
  },
  height: {
    "1x": "250px",
  },
  space: {
    none: "0",
    "1x": "8px",
    "2x": "16px",
    "3x": "24px",
    "4x": "32px",
    "5x": "40px",
    "6x": "48px",
  },
  fontSizes: {
    "1x": "8px",
    "2x": "12px",
    "3x": "16px",
    "4x": "20px",
    "5x": "24px",
    "6x": "28px",
    "7x": "32px",
    "8x": "36px",
    "9x": "40px",
    "10x": "44px",
    "11x": "48px",
    "12x": "52px",
    "13x": "56px",
    "14x": "60px",
    "15x": "64px",
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
  gap: {
    "1x": "8px",
    "2x": "12px",
    "3x": "16px",
    "4x": "20px",
  },
});
export const vars = { ...root };
