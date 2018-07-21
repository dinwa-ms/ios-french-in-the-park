import React from 'react';
import { View, WebView, Platform, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links Videos',
  };

  render() {
    const url = 'https://www.youtube.com/embed/JQb7JvEckmk';
    return (
      <WebView
        source={{
          uri: url,
        }}
        onNavigationStateChange={this.onNavigationStateChange}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        style={{ flex: 1 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },

  WebViewContainer: {
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
  },

});
