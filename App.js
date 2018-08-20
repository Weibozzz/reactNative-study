import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selectedTab:'home'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require("./res/images/ic_favorite.png")} />}
          renderSelectedIcon={() => <Image source={require("./res/images/ic_favorite.png")} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home2' })}>
          <Text>kjhdf</Text>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home2'}
          title="Home"
          renderIcon={() => <Image source={require("./res/images/ic_favorite.png")} />}
          renderSelectedIcon={() => <Image source={require("./res/images/ic_favorite.png")} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Text>kjhdf2</Text>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
