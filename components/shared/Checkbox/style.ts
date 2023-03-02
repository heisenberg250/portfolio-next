import { css } from "@emotion/react";
import { colors, typography } from "@styles/shared";

export const container = css({
  display: "flex",
  alignItems: "center",
  position: "relative",
  paddingLeft: "35px",
  cursor: "pointer",
  webkitUserSelect: "none",
  mozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
  width: "max-content",
  ...typography.LABELS_16,
  marginBottom: 20,
  input: {
    position: "absolute",
    opacity: "0",
    cursor: "pointer",
    height: "0",
    width: "0",
  },
});

export const checkedCheckmark = css({
  backgroundColor: colors.PRIMARY_GREY,
  ":after": {
    display: "block",
  },
});

export const checkmark = css({
  position: "absolute",
  top: "0",
  left: "0",
  height: 20,
  width: 20,
  backgroundColor: "transparent",
  border: `1px solid ${colors.PRIMARY_GREY}`,
  borderRadius: 2,
  ":after": {
    content: "' '",
    position: "absolute",
    display: "none",
    left: 6,
    top: 2,
    width: 5,
    height: 10,
    border: `solid ${colors.PRIMARY_LIGHT}`,
    borderWidth: "0 1px 1px 0",
    webkitTransform: "rotate(45deg)",
    msTransform: "rotate(45deg)",
    transform: "rotate(45deg)",
  },
});
