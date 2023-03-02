import { SerializedStyles } from "@emotion/react";
import { mixins, typography } from "@styles/shared";
import { FC } from "react";
import { input } from "./style";

interface InputProps {
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (value: string | number) => void;
  style?: SerializedStyles;
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  style,
}) => {
  return (
    <div css={style}>
      <label css={[typography.LABELS_16, mixins.textFaded]}>{label}</label>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            const { value } = e.target;
            onChange(value);
          }}
          placeholder={placeholder}
          css={input}
        />
      </div>
    </div>
  );
};

export default Input;
