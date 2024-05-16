import { useState } from "react";
import { MouseEvent } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
  onReset: () => void;
}

const ButtonProva = ({ children, onClick, color, onReset }: Props) => {
  return (
    <button
      className={"btn btn-" + color}
      onClick={() => {
        onClick();
        onReset();
      }}
    >
      {children}
    </button>
  );
};

export default ButtonProva;
