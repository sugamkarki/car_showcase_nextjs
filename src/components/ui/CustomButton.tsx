"use client";
import { FC, MouseEventHandler } from "react";
import Image from "next/image";
interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  disabled?: boolean;
  textStyles?: string;
  rightIcon?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
  disabled = false,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={disabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            alt="Right Icon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
