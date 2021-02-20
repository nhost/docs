import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export function SvgMoon({ className }) {
  const classes = classNames(["fill-current", className]);
  return (
    <svg
      className={classes}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
}

SvgMoon.defaultProps = {
  className: "",
};

SvgMoon.propTypes = {
  className: PropTypes.string,
};
