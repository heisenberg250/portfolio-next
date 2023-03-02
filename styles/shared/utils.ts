import { css } from "@emotion/react";

const utils = {
  remConverter: (value: number) => {
    return `${value / 16}rem`;
  },
  widthPercentage: (value: number) => {
    return css({
      width: `${value}%`,
    });
  },
  heightPercentage: (value: number) => {
    return css({
      height: `${value}%`,
    });
  },
  ml: (value: number) => {
    return css({
      marginLeft: `${utils.remConverter(value)}`,
    });
  },
  mr: (value: number) => {
    return css({
      marginRight: `${utils.remConverter(value)}`,
    });
  },
  mt: (value: number) => {
    return css({
      marginTop: `${utils.remConverter(value)}`,
    });
  },
  mb: (value: number) => {
    return css({
      marginBottom: `${utils.remConverter(value)}`,
    });
  },
  pl: (value: number) => {
    return css({
      paddingLeft: `${utils.remConverter(value)}`,
    });
  },
  pr: (value: number) => {
    return css({
      paddingRight: `${utils.remConverter(value)}`,
    });
  },
  pt: (value: number) => {
    return css({
      paddingTop: `${utils.remConverter(value)}`,
    });
  },
  pb: (value: number) => {
    return css({
      paddingBottom: `${utils.remConverter(value)}`,
    });
  },
};

export default utils;
