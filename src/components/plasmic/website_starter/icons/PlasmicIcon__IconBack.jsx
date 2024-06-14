// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconBackIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.49 12.844a.973.973 0 010-1.688l9.85-5.992c.715-.435 1.66.046 1.66.844v11.984c0 .798-.945 1.279-1.66.844l-9.85-5.992z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBackIcon;
/* prettier-ignore-end */
