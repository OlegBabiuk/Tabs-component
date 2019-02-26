/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

function Tab({ onClick, tabTitle, className }) {
  const myClassName = className || '';
  return (
    <li
      onClick={() => onClick(tabTitle)}
      className={myClassName}
    >
      {tabTitle}
    </li>
  );
}

Tab.propTypes = {
  className: PropTypes.string,
  tabTitle: PropTypes.string,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  className: '',
  tabTitle: '',
  onClick: () => console.log("onClick didn't pass"),
};

export default Tab;
