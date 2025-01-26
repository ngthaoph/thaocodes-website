import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const navbar = style({
  // display: "flex",
  // color: "black",
  // position: "fixed",
  // flexDirection: "row",
  // width: "100%",
  // top: 0,
  // left: 0,
  // padding: "32px 0",
  fontFamily: vars.fonts.brand,
  fontSize: "1.5rem",
  fontWeight: "400",
  // alignContent: "center",
});
export const container = style({
  display: "flex",
  flex: 1,
  margin: "0 15rem",
});
export const leftSection = style({
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});
export const rightSection = style({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "20px",
});
