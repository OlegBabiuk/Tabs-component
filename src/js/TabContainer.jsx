/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function TabContainer(props) {
  const { currentTab, tabs } = props;
  const currentTabObj = tabs.find(item => (
    item.title === currentTab));

  if (!currentTabObj) {
    return null;
  }

  return (
    <div className="content-box">
      {currentTabObj.content}
    </div>
  );
}

TabContainer.propTypes = {
  currentTab: PropTypes.string,
  tabs: PropTypes.array,
};

TabContainer.defaultProps = {
  currentTab: 'No text',
  tabs: [],
};

export default TabContainer;
