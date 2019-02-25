import React from 'react';
import Tab from './Tab';
import TabContainer from './TabContainer';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Tab />
        <TabContainer />
      </>
    );
  }
}

export default Tabs;
