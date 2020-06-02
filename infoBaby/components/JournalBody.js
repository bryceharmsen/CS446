import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalMenu from '../components/JournalMenu';

export default class JournalBody extends Component {
    
    render() {
        return (
        <View>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <JournalMenu></JournalMenu>
            </ScrollView>
            <AddJournalButton
                style={styles.addButton}
                icon='pluscircleo'
                label='Add Journal'
                onPress={() => addJournal()}
            />
        </View>
        );
  }
}

function AddJournalButton({ icon, label, onPress, isLastOption }) {
    return (
      <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.optionIconContainer}>
            <AntDesign name={icon} size={22} color="rgba(0,0,0,0.35)" />
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>{label}</Text>
          </View>
        </View>
      </RectButton>
    );
}

function addJournal() {
    console.log('adding journal...')
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 1,
        marginBottom: 1,
        borderColor: '#ededed',
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
    addButton: {
        position: 'absolute',
        bottom: 5
    }
});