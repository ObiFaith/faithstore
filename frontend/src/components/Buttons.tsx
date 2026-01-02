import type { BtnProps } from "./type";
import { Link } from "react-router-dom";

const Btn = ({ to, leftIcon, text, rightIcon, btn = "btn_dark" }: BtnProps) => {
  const btnElement = (
    <>
      {leftIcon && <img src={leftIcon} alt={leftIcon} />} {text}
      {rightIcon && <img src={rightIcon} alt={rightIcon} />}
    </>
  );
  return to ? (
    <Link className={`btn ${btn} flex gap-3`} to={to}>
      {btnElement}
    </Link>
  ) : (
    <button type="submit" className="btn btn_red">
      {btnElement}
    </button>
  );
};

export default Btn;
