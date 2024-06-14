// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Messages2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.313 11.22l.26 2.107a.663.663 0 01-1 .653l-2.306-1.373c-.16-.094-.2-.294-.114-.454a4.21 4.21 0 00.514-2c0-2.44-2.094-4.426-4.667-4.426-.527 0-1.04.08-1.52.24a.337.337 0 01-.427-.4C3.66 3.14 5.993 1.333 8.78 1.333c3.253 0 5.887 2.46 5.887 5.494 0 1.8-.927 3.393-2.354 4.393z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.667 10.153a3.24 3.24 0 01-.787 2.107c-.66.8-1.707 1.313-2.88 1.313l-1.74 1.034c-.293.18-.667-.067-.627-.407l.167-1.313c-.893-.62-1.467-1.614-1.467-2.734 0-1.173.627-2.206 1.587-2.82A3.789 3.789 0 015 6.727c2.027 0 3.667 1.533 3.667 3.426z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Messages2Icon;
/* prettier-ignore-end */
