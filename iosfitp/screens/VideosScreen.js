import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Image, View, WebView, Platform, ScrollView } from 'react-native';

export default class AudioScreen extends Component {
  render() {
    return (
      <ScrollView>
        <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/CpiqJMblxwQ' }}
            />
        <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/JQb7JvEckmk' }}
            />
        <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/Wxc8AzXFCK4' }}
            />
        <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/Yg-qdOpIFq8' }}
            />
        <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/qHr73v-_K3U' }}
            />

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

WebViewContainer: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,

    marginTop: 10,
    marginBottom: 10,

  }
  
});