// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SignalIcon(props) {
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
          "M14.9 4a.9.9 0 10-1.8 0v10a.9.9 0 101.8 0V4zM8.2 9.3a.9.9 0 00-1.8 0V14a.9.9 0 101.8 0V9.3zM4 11.1a.9.9 0 01.9.9v2a.9.9 0 11-1.8 0v-2a.9.9 0 01.9-.9zm7.6-4.4a.9.9 0 10-1.8 0V14a.9.9 0 001.8 0V6.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SignalIcon;
/* prettier-ignore-end */
