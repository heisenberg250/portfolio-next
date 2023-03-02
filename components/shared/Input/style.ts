import { css } from "@emotion/react";
import { colors, typography, utils } from "@styles/shared";

export const input = css({
  padding: `${utils.remConverter(10)} ${utils.remConverter(15)}`,
  borderRadius: 8,
  border: `1px solid ${colors.LINES_GREY}`,
  background: colors.TERTIARY_DARK,
  marginTop: 10,
  ...typography.LABELS_16,
  color: colors.INPUT_FADED,
  ":focus": {
    boxShadow: "none",
    outline: "none",
  },
  "::placeholder": {
    color: colors.INPUT_FADED,
  },
});
