// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BatteryIcon(props) {
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
          "M2.159 4.409A2.25 2.25 0 013.75 3.75h9A2.25 2.25 0 0115 6v.129a2.25 2.25 0 011.5 2.121v1.5a2.25 2.25 0 01-1.5 2.121V12a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 011.5 12V6c0-.597.237-1.169.659-1.591zm1.591.841A.75.75 0 003 6v6a.75.75 0 00.75.75h9a.75.75 0 00.75-.75v-.75a.75.75 0 01.75-.75.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75.75.75 0 01-.75-.75V6a.75.75 0 00-.75-.75h-9zm1.5 1.5A.75.75 0 016 7.5v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3 0A.75.75 0 019 7.5v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3 0a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BatteryIcon;
/* prettier-ignore-end */
