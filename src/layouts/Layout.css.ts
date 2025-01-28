import { style } from "@vanilla-extract/css";
import { vars } from "./../styles/themes.css";
export const app = style({
  display: "flex",
  backgroundColor: vars.colors.background,
  flexDirection: "column",

  fontFamily: "Inter",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  minHeight: "100vh", // Ensure the container takes full viewport height
  width: "100vw",
});

export const appBody = style({
  display: "flex",
  flexDirection: "column",
  margin: "0 15rem",
});

export const header = style({
  display: "flex",
  flex: "1 1 100%",
  flexDirection: "column",
  padding: "0 90px",
  overflowX: "auto",
  width: "100%",
});
