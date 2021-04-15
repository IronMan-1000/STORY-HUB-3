import * as React from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity,ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import database from '../config';
const image = { uri: "https://raw.githubusercontent.com/IronMan-1000/STORY-HUB-IMAGES/main/2f1c605195fe12118930d64d4137984e.jpg" };
export default class ReadStory extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  retriveStories = async () => {
    const allStories = await database
      .collection('Story')
      .where('Author', 'Story', 'Title')
      .get(); 

    if (allStories.docs.length === 0) {
      {
        Alert.alert('UNAVAILABLE');
        this.setState({
          search: '',
        });
      }
    } else {
      allStories.docs.map((doc) => {
        var story = doc.data();
        if (story===this.state.search){
            return story;
        }
      });
    }
  
  };

  render() {
    return (
      <View>
      <ImageBackground source={image} style={styles.image}>
       <TouchableOpacity>
          <Text style={styles.body1}>📚STORY-HUB</Text>
        </TouchableOpacity>
        <SearchBar
          placeholder="SEARCH STORIES"
          onChangeText={(text) => this.setState({ search: text.toLowerCase() })}
          value={this.state.search}
        />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    color: 'pink',
    backgroundColor: 'blue',
    textAlign: 'center',
    marginTop: 200,
  },
   body1: {
    backgroundColor: 'lightblue',
    color: 'yellow',
    textAlign: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    width: 200,
    fontSize: 25,
    padding: 10,
    marginBottom: 300,
    marginTop: 100

  },
   image: {
    flex: 1,
    resizeMode: "fill",
  }
});
