import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import JournalMenu from '../components/JournalMenu';
import AddJournalButton from '../components/AddJournalButton';
import fakeDB from '../data/fakeDB.json';

export default class JournalBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journals: fakeDB.journals
        }
    }

    addJournal() {
        let newJournal = this.state.journals[this.state.journals.length - 1];
        let newIdx = newJournal.id + 1;
        newJournal = {
            id: newIdx,
            title: 'New Journal ' + newIdx,
            entry: ''
        }
        let journals = JSON.parse(JSON.stringify(this.state.journals));
        journals.push(newJournal);
        this.setState({journals: journals});
    }

    render() {
        return (
        <View style={styles.container}>
            <JournalMenu
                journals={this.state.journals}
            />
            <AddJournalButton
                style={styles.addButton}
                icon='pluscircle'
                label='Add Journal'
                onPress={() => this.addJournal()}
            />
        </View>
        );
    }
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