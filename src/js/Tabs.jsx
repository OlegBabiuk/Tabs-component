/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

function Tabs({ onClick, children }) {
  return (
    <ul className="tabs">
      {children(onClick)}
    </ul>
  );
}

Tabs.propTypes = {
  children: PropTypes.func,
  onClick: PropTypes.func,
};

Tabs.defaultProps = {
  children: () => console.log("callback didn't pass"),
  onClick: () => console.log("onClick didn't pass"),
};

export default Tabs;
