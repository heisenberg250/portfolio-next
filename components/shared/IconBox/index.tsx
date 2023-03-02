import { SerializedStyles } from "@emotion/react";
import { FC } from "react";
import Image from "next/image";
import { iconBox } from "./style";
import { mixins } from "@styles/shared";

interface IconBoxProps {
  icon: string;
  bgColor?: string;
  style?: SerializedStyles;
}

const IconBox: FC<IconBoxProps> = ({ icon, bgColor, style }) => {
  return (
    <div
      css={[
        iconBox,
        mixins.flexAlignItemsCenter,
        mixins.flexJustifyContentCenter,
        style,
        {
          background: bgColor,
        },
      ]}
    >
      <Image src={icon} alt="tech_icon" />
    </div>
  );
};

export default IconBox;
