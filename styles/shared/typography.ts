import { CSSObject } from "@emotion/react";
import { colors, utils } from "@styles/shared";

interface Styles {
  [key: string]: CSSObject;
}

const typography: Styles = {
  HEADLINE_62: {
    fontFamily: "Fira Code",
    fontStyle: "normal",
    fontWeight: 450,
    fontSize: `${utils.remConverter(62)}`,
    lineHeight: "81px",
    color: colors.PRIMARY_LIGHT,
  },
  SUB_HEADING_32: {
    fontFamily: "Fira Code",
    fontStyle: "normal",
    fontWeight: 450,
    fontSize: `${utils.remConverter(32)}`,
    lineHeight: "42px",
    color: colors.PRIMARY_LIGHT,
  },
  BODY_18: {
    fontFamily: "Fira Code",
    fontStyle: "normal",
    fontWeight: 450,
    fontSize: `${utils.remConverter(18)}`,
    lineHeight: "24px",
    color: colors.PRIMARY_LIGHT,
  },
  LABELS_16: {
    fontFamily: "Fira Code",
    fontStyle: "normal",
    fontWeight: 450,
    fontSize: `${utils.remConverter(16)}`,
    lineHeight: "21px",
    color: colors.PRIMARY_LIGHT,
  },
  CODE_SNIPPETS_14: {
    fontFamily: "Fira Code",
    fontStyle: "normal",
    fontWeight: 450,
    fontSize: `${utils.remConverter(14)}`,
    lineHeight: "21px",
    color: colors.PRIMARY_LIGHT,
  },
};
export default typography;
