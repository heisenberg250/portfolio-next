import { css } from "@emotion/react";
import { colors, utils } from "@styles/shared";

export const card = css({
  background: colors.TERTIARY_DARK,
  position: "relative",
  aspectRatio: "2/1",
  maxWidth: utils.remConverter(350),
  borderRadius: 15,
  border: `1px solid ${colors.LINES_GREY}`,
});

export const coverImage = css({
  width: "100%",
  minHeight: utils.remConverter(145),
});

export const floatingIconBox = css({
  position: "absolute",
  right: 15,
  top: 15,
});

export const cardCaption = css({
  padding: utils.remConverter(30),
});
