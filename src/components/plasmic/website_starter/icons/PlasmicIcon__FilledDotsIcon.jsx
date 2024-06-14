// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FilledDotsIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.778 5.111a1.704 1.704 0 11-3.408 0 1.704 1.704 0 013.408 0zm0 5.963a1.704 1.704 0 11-3.408 0 1.704 1.704 0 013.408 0zm0 5.963a1.704 1.704 0 11-3.408 0 1.704 1.704 0 013.408 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilledDotsIconIcon;
/* prettier-ignore-end */
