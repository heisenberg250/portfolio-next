import { SerializedStyles } from "@emotion/react";
import { FC } from "react";
import { card, cardCaption, coverImage, floatingIconBox } from "./style";
import Image from "next/image";
import Button from "../Button";
import { mixins, typography, utils } from "@styles/shared";

interface CardProps {
  coverBg: string;
  style?: SerializedStyles;
  floatingIcon?: JSX.Element;
  description: string;
  cta: {
    text: string;
    onClick: () => void;
  };
}

const Card: FC<CardProps> = ({
  coverBg,
  style,
  floatingIcon,
  description,
  cta,
}) => {
  return (
    <article css={[card, style]}>
      <figure css={coverImage}>
        <Image
          src={coverBg}
          alt="coverImage"
          layout="responsive"
          width="100%"
          height="45%"
          priority
        />
        <div css={floatingIconBox}>{floatingIcon}</div>
      </figure>
      <figcaption css={cardCaption}>
        <h3 css={[typography.BODY_18, mixins.textFaded]}>{description}</h3>
        <Button onClick={cta.onClick} type="default" style={utils.mt(25)}>
          {cta.text}
        </Button>
      </figcaption>
    </article>
  );
};

export default Card;
