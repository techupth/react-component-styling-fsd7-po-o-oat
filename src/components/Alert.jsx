/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frownIcon from "../assets/frown.png";
import checkCircleIcon from "../assets/checkcircle.png";
import alertCircleIcon from "../assets/alertcircle.png";
import alertTriangleIcon from "../assets/alerttriangle.png";

const alertStyles = (bgColor) => css`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${bgColor};
  color: gray;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
`;

// กำหนดข้อมูล alert ต่างๆ
const alerts = [
  {
    type: "error",
    message: "This is error alart box",
    bgColor: "#F9C8C8",
    icon: frownIcon,
  },
  {
    type: "warning",
    message: "This is warning alert box",
    bgColor: "#F9D9C8",
    icon: alertTriangleIcon,
  },
  {
    type: "info",
    message: "This is info alert box",
    bgColor: "#F9EBC8",
    icon: alertCircleIcon,
  },
  {
    type: "success",
    message: "This is success alert box",
    bgColor: "#CEF7CD",
    icon: checkCircleIcon,
  },
];

// สร้าง AlertBox component
const AlertBox = ({ type, message, bgColor, icon }) => {
  return (
    <div css={alertStyles(bgColor)}>
      <img src={icon} alt={`${type} icon`} /> {/* ใช้ภาพที่ถูก import มา */}
      <span>{message}</span>
    </div>
  );
};

// export AlertBox และ alerts array
export { AlertBox, alerts };
