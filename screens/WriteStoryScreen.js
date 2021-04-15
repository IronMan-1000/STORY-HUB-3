import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config';
const image = { uri: "https://raw.githubusercontent.com/IronMan-1000/STORY-HUB-IMAGES/main/2f1c605195fe12118930d64d4137984e.jpg" };
export default class WriteStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textEntered: '',
      title: '',
      author: '',
    };
  }

  submitButton = () => {
    db.collection('Story').add({
      Title: this.state.title,
      Author: this.state.author,
      Story: this.state.textEntered,
    });
    this.setState({
      textEntered: '',
      title: '',
      author: '',
    });
    ToastAndroid.show('YOUR STORY HAS BEEN SUBMITTED!!!📖✔', ToastAndroid.SHORT);
  };
  render() {
    return (
      <KeyboardAvoidingView>
      <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity>
          <Text style={styles.body}>📚STORY-HUB</Text>
        </TouchableOpacity>

        <TextInput
          value={this.state.title}
          placeholder="TITLE OF THE STORY"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          style={styles.t}
          placeholderTextColor="red"
        />

        <TextInput
          value={this.state.author}
          placeholder="AUTHOR"
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
          style={styles.a}
          placeholderTextColor="red"
        />
        <TextInput
          value={this.state.textEntered}
          placeholder="STORY"
          onChangeText={(text) => {
            this.setState({
              textEntered: text,
            });
          }}
          placeholderTextColor="red"
          multiline={true}
          style={styles.story}
        />
        <View>
          <TouchableOpacity onPress={this.submitButton}>
            <Text
              style={{
                color: '#AF4228',
                alignSelf: 'center',
                backgroundColor: 'yellow',
                borderRadius: 2,
                borderColor: 'black',
                borderWidth: 2,
                padding: 10,
                fontWeight: 'bold',
                marginTop: 105
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'lightblue',
    color: 'yellow',
    textAlign: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    width: 200,
    fontSize: 25,
    padding: 10,
    
  },
  t: {
    borderColor: 'green',
    borderRadius: 1,
    borderWidth: 2,
    marginTop: 30,
    padding: 10,
  },
  a: {
    padding: 5,
    marginTop: 30,
    borderRadius: 2,
    borderColor: 'green',
    borderWidth: 2,
  },
  story: {
    paddingBottom: 190,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 2,
    marginTop: 20,
  },
   image: {
    flex: 1,
    resizeMode: "fill",
  }
});
