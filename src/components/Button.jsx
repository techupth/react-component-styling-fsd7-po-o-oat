
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button({ type }) {
  if (type === "Primary") {
    return (
      <button
        css={css`
          padding-right: 16px;
          padding-left: 16px;
          background-color: #074ee8;
          font-size: 16px;
          color: white;
          width:170px;
          heigth:50px;
        `}
      >
        Button
      </button>
    );
  } else {
    return (
      <button
        css={css`
          padding-right: 16px;
          padding-left: 16px;
          background-color: #07a4e8;
          font-size: 16px;
          color: white;
          width: 170px;
          heigth: 50px;
        `}
      >
        Button
      </button>
    );
  }
}
