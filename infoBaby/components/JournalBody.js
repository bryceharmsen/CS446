import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import JournalMenu from '../components/JournalMenu';
import AddJournalButton from '../components/AddJournalButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class JournalBody extends Component {
    
    render() {
        return (
        <View style={styles.container}>
            <JournalMenu/>
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

function addJournal() {
    console.log('adding journal...')
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    addButton: {
        position:'absolute',
        top: '10%',
        right: 0
    }
});