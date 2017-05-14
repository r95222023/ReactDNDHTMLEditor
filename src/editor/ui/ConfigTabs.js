import React from 'react';
import {Tabs, Tab} from '../../material-ui/Tabs';
import {getPath} from '../../common/snippets'

const styles = {
  headline: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: 400,
  },
};
function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export default class ConfigTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {path, content} = this.props;
    // let block = getPath(content, path);
    const type =  getPath(content, path).type;
    return (
      <Tabs>
        <Tab label="Item One" >
          <div>
            <h2 style={styles.headline}>Tab One</h2>
            <p>
              This is an example tab.
            </p>
            <p>
              You can put any sort of HTML or react component in here. It even keeps the component state!
            </p>
          </div>
        </Tab>
        <Tab label="Item Two" >
          <div>
            <h2 style={styles.headline}>Tab Two</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
        <Tab
          label="onActive"
          data-route="/home"
          onActive={handleActive}
        >
          <div>
            <h2 style={styles.headline}>Tab Three</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
