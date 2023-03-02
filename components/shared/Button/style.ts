import { css } from "@emotion/react";
import { colors, typography, utils } from "@styles/shared";
import { ButtonTypes } from ".";

export const button = css({
  padding: `${utils.remConverter(10)} ${utils.remConverter(14)}`,
  cursor: "pointer",
  borderRadius: 8,
  ...typography.CODE_SNIPPETS_14,
  border: "1px solid transparent",
});

export const getButtonStyles = (type: ButtonTypes) => {
  switch (type) {
    case "primary":
      return css({
        background: colors.ACCENT_YELLOW,
        color: colors.PRIMARY_DARK,
      });
    case "ghost":
      return css({
        background: "transparent",
        border: `1px solid ${colors.PRIMARY_LIGHT}`,
      });
    default:
      return css({
        background: colors.BUTTON_DEFAULT_GREY,
      });
  }
};
