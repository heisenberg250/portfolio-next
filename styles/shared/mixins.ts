import { css } from "@emotion/react";
import colors from "./colors";

const mixins = {
  textFaded: css({
    color: colors.PRIMARY_GREY,
  }),
  flexAlignItemsCenter: css({
    display: "flex",
    alignItems: "center",
  }),
  flexAlignItemsStart: css({
    display: "flex",
    alignItems: "flex-start",
  }),
  flexAlignItemsEnd: css({
    display: "flex",
    alignItems: "flex-end",
  }),
  flexJustifyContentCenter: css({
    display: "flex",
    justifyContent: "center",
  }),
  flexJustifyContentStart: css({
    display: "flex",
    justifyContent: "flex-start",
  }),
  flexJustifyContentEnd: css({
    display: "flex",
    justifyContent: "flex-end",
  }),
  flexColumn: css({
    display: "flex",
    flexDirection: "column",
  }),
};
export default mixins;
