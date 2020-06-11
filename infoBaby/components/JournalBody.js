import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import JournalMenu from '../components/JournalMenu';
import AddJournalButton from '../components/AddJournalButton';

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
    contentContainer: {
        paddingTop: 15,
    },
    addButton: {
        
    }
});