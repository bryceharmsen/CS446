import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/infobaby-icon.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>InfoBaby</Text>
        </View>

      </ScrollView>

    </View>
  );
}

function SearchBar() {
  return (
    <View>
      <View style={styles.filler}></View>
      <TextInput style={styles.searchBar}>
        <AntDesign name={'search1'} size={15} color="rgba(0,0,0,0.35)" />
      </TextInput>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  title: {
    marginTop: 15,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
  },
  filler: {
    marginBottom: 40
  },
  searchBar: {
    textAlignVertical: 'center',
    borderWidth: 0.5,
    marginLeft: 50,
    marginRight: 50,
    paddingLeft: 10,
    borderRadius: 30
  }
});
