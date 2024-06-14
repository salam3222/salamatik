// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LineChatIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.59 15.979c-1.186.933-3.763 1.67-4.627 1.799.247-.648 1.353-2.334 1.111-3.89l-.013-.05c-1.145-1.232-1.839-2.847-1.839-4.616 0-3.866 3.317-7 7.408-7 4.09 0 7.407 3.134 7.407 7s-3.316 7-7.407 7m-2.04-.243a8.6 8.6 0 002.04.243m-2.04-.243l.025-.019c.64.17 1.316.262 2.015.262"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LineChatIconIcon;
/* prettier-ignore-end */
