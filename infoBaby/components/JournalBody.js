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
    button: {
        backgroundColor: 'grey',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 1,
        marginBottom: 1,
        borderColor: '#ededed',
    },
    addButton: {
        position:'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#aaaaaa',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderColor: '#ededed',
        marginBottom: 5,
        marginRight: 5,
        borderRadius: 5
    }
});