import { ReactNode } from "react";
import { bagel } from "@/fonts/fonts";

interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  backgroundColor = "#FF5500",
  textColor = "white",
  padding = "10px 20px",
  borderRadius = "0px",
  fontSize = "18px",
  onClick,
  className = "",
}: ButtonProps) {
  const style: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    padding,
    borderRadius,
    fontSize,
    border: "none",
    cursor: "pointer",
    width: "100%",
  };
  return (
    <button
      style={style}
      className={`${bagel.className} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
