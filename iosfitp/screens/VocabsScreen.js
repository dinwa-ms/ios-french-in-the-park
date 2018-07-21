import React from 'react';
import { Alert, AppRegistry, Button, Text, View, WebView, Platform, ScrollView, StyleSheet, 
          FlatList, SectionList, TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Constants, Audio } from 'expo';
import jsonData from '../assets/text/text.json';



const words = jsonData.words;

const wordpair = [{key: 'word', en: 'a bird'},
                  {key: 'un escargot', en: 'a snail'},
                  {key: 'un canard', en: 'a duck'},
                  {key: 'un poisson', en: 'a fish'},
                  {key: 'un elephant', en: 'an elephant'},
                  {key: 'un guépard', en: 'a cheetah'},
                  {key: 'un insecte', en: 'an insect'}];

class VocabsScreen extends React.Component {

  _onPressText(word) {
    Alert.alert(word)
  }

  static navigationOptions = {
    title: 'Vocabs',
  };

  render() {
    return (
      <View style={styles.button}>
        <Button
          title={this.props.title}
          onPress={()=>this._onPressText(this.props.en)}
        />
      </View>
    )
    
  }
}


export default class LotsOfButtons extends React.Component {

  constructor(props)
    {
      super(props);
      this.audioPlayer = new Audio.Sound();
    }

  render() {

    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Lesson One', data: words},
            // {title: 'Lesson Two', data: words},
          ]}
          renderItem={({item}) => <VocabsScreen title={item.fr} en={item.en}/>}
          renderSectionHeader={({section}) => 
            <View style={styles.sectionHeader}>
              <TouchableHighlight 
                onPress={async () => {
                  try {
                    await this.audioPlayer.unloadAsync();
                    await this.audioPlayer.loadAsync(require('../assets/audios/FoodSong.mp3'));
                    await this.audioPlayer.playAsync(); 
                  } catch(error) {
                    console.error(error);
                  }
                }} 
                onLongPress={async () => {
                  try {
                    await this.audioPlayer.unloadAsync();
                  } catch(error) {
                    console.error(error);
                  }
                }} >
                <View style={styles.sectionHeader}>
                  <Text>{section.title}</Text>
                </View>
              </TouchableHighlight>
            </View>
          }
          keyExtractor={(item, index) => index}
        />

      </View>

    );
  }
}



const styles = StyleSheet.create({
  mp3: {
   paddingBottom: 10,
  },
  container: {
   flex: 1,
   flexDirection: 'column',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  button: {
    // flex: 0,
    // flexDirection: 'row',
    height: 50,
    flexWrap: 'wrap',
  },
});
