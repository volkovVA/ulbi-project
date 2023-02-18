import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(cls.button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  )
};
