import { SerializedStyles } from "@emotion/react";
import { FC, useState } from "react";
import { checkedCheckmark, checkmark, container } from "./style";

interface CheckBoxProps {
  label?: string | JSX.Element;
  value: string;
  checked?: boolean;
  onChange?: (value: string, checked: boolean) => void;
  style?: SerializedStyles;
}

const CheckBox: FC<CheckBoxProps> = ({
  label,
  value,
  checked,
  onChange,
  style,
}) => {
  const [selected, setSelected] = useState(checked);
  return (
    <label css={[container, style]}>
      {label}
      <input
        type="checkbox"
        value={value}
        onChange={(e) => {
          const { value, checked } = e.target;
          onChange && onChange(value, checked);
          setSelected(!selected);
        }}
      />
      <span css={[checkmark, selected && checkedCheckmark]}></span>
    </label>
  );
};

export default CheckBox;
