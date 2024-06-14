// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FilledFileIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
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
          "M6.454 21.185c-.546 0-1.64-.196-1.64-1.635V5.487c0-.545.329-1.635 1.64-1.635h7.048l6.72 6.704v8.994c0 .545-.328 1.635-1.639 1.635H6.453zm11.965-10.629h-4.917V5.651l4.917 4.905z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilledFileIconIcon;
/* prettier-ignore-end */
