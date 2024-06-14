// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TailInIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 67"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6 57c0 3.214-1.765 7.679-5.294 8.571 0 0-.706 0-.706.715C0 67 .706 67 .706 67H6V57z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TailInIcon;
/* prettier-ignore-end */
