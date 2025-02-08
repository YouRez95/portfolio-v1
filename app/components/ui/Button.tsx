import { ReactNode } from "react";
import { bagel } from "@/fonts/fonts";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  onClick?: () => void;
  className?: string;
  cursor?: string;
  loading?: boolean;
}

export default function Button({
  children,
  backgroundColor = "#FF5500",
  textColor = "white",
  padding = "10px 20px",
  borderRadius = "0px",
  type = "button",
  fontSize = "18px",
  cursor = "pointer",
  onClick,
  className = "",
  loading,
}: ButtonProps) {
  const style: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    padding,
    borderRadius,
    fontSize,
    border: "none",
    cursor,
    width: "100%",
  };
  return (
    <button
      type={type}
      style={style}
      className={`${bagel.className} ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {children}
    </button>
  );
}
