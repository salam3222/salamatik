// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FilledViewIcon2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.15 4.5C5.31 4.5 2.7 7.35 2.7 8.85c0 1.5 2.61 4.35 6.45 4.35 3.84 0 6.45-3 6.45-4.35 0-1.5-2.61-4.35-6.45-4.35zm.037 7.425a3.037 3.037 0 100-6.075 3.037 3.037 0 000 6.075z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M11.1 8.887a1.912 1.912 0 11-3.825 0 1.912 1.912 0 013.825 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilledViewIcon2Icon;
/* prettier-ignore-end */
