import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import s from "./Checkbox.module.scss";

interface CheckboxI {
  value: boolean;
  name: string;
  label: string;
  onChange?: (event: React.MouseEvent<HTMLLabelElement>) => void;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
  completed?: boolean;
}

const Checkbox = ({
  name,
  value,
  onChange,
  label,
  className,
  labelClassName,
  disabled,
  completed,
}: CheckboxI) => {
  const clickHandler = (ev: React.MouseEvent<HTMLLabelElement>) => {
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(ev);
    }
  };

  return (
    <label
      htmlFor={name}
      className={classNames(
        s.checkbox,
        className || "",
        disabled && s.disabled,
      )}
      onClick={clickHandler}
      data-tooltip-id={`checkBox${name}`}
    >
      <input type="checkbox" name={name} defaultChecked={value} />
      <span
        className={classNames(
          s.checkboxMask,
          value && s.checked,
          disabled && s.disabled,
        )}
      >
        <FaCheck />
      </span>
      <span
        className={classNames(
          "noWrap",
          s.label,
          labelClassName,
          disabled && s.disabled,
          completed && s.completed,
        )}
      >
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
