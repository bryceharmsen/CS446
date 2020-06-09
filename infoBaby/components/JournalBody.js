import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import JournalMenu from '../components/JournalMenu';

export default class JournalBody extends Component {
    
    render() {
        return (
        <View style={styles.container}>
            <JournalMenu></JournalMenu>
            <AddJournalButton
                style={styles.addButton}
                icon='pluscircle'
                label='Add Journal'
                onPress={() => addJournal()}
            />
        </View>
        );
  }
}

function AddJournalButton({ icon, label, onPress }) {
    return (
      <RectButton style={styles.jButton} onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.jButtonIconContainer}>
            <AntDesign name={icon} size={22} color="rgba(0,0,0,1)" />
          </View>
          <View style={styles.jButtonTextContainer}>
            <Text style={styles.jButtonText}>{label}</Text>
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
    jButtonIconContainer: {
        marginRight: 12,
    },
    jButton: {
        backgroundColor: 'grey',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 1,
        marginBottom: 1,
        borderColor: '#ededed',
    },
    jButtonText: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 1,
    },
    addButton: {
        position: 'absolute',
        bottom: 0,
        left: 0
    }
});