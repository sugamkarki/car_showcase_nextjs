"use client";
import { FC, MouseEventHandler } from "react";
import Image from "next/image";
interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
