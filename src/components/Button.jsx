/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const color = {
  Primary: "#074EE8",
  Secondary: "#07A4E8",
  Error: "#DE5753",
  Success: "#26B795",
};

export function Button({ type }) {
  return (
    <button
      css={css`
        background-color : ${color[type]};
        color : white;
        `}
    >Large</button>
  );
}


