import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
import TabContainer from './TabContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: 'Tab 1', content: 'Some text 1' },
        { title: 'Tab 2', content: 'Some text 2' },
        { title: 'Tab 3', content: 'Some text 3' },
      ],
      currentTab: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { tabs } = this.state;
    this.setState({ currentTab: tabs[0].title });
  }

  handleClick(value) {
    this.setState({ currentTab: value });
  }

  render() {
    const { currentTab, tabs } = this.state;
    return (
      <div className="tab-wrapper">
        <Tabs onClick={this.handleClick}>
          {childProps => tabs.map((item) => {
            let className = null;

            if (item.title === currentTab) {
              className = 'active';
            }

            return (
              <Tab
                key={item.title}
                className={className}
                tabTitle={item.title}
                onClick={childProps}
              />
            );
          })}
        </Tabs>
        <TabContainer currentTab={currentTab} tabs={tabs} />
      </div>
    );
  }
}

export default App;
