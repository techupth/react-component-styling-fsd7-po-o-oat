/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../assets/icons/frown.svg"
import alertCircle from "../assets/icons/alert-circle.svg"
import alertTriangle from "../assets/icons/alert-triangle.svg"
import checkCircle from "../assets/icons/check-circle.svg"

const color = {
  error: "#F9C8C8",
  warning: "#F9D9C8",
  info: "#F9EBC8",
  success: "#CEF7CD",
};

const text = {
  error: "This is error alert box",
  warning: "This is warning alert box",
  info: "This is info alert box",
  success: "This is success alert box",
};

const icons = {
    error: frown,
    warning: alertTriangle,
    info: alertCircle,
    success: checkCircle,
}

export function Alert({ type }) {

    return (
    <div
      css={css`
        background-color: ${color[type]};
      `}
    >
      <img src={icons[type]}></img>{text[type]} 
    </div>
    
  );
}
