import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet, 
} from 'react-native';
import fakeDB from '../data/fakeDB.json';
import JournalEntry from '../components/JournalEntry';

export default class JournalMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.journals
        };
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) =>
                    <JournalEntry 
                        data={item}
                    />
                }
            />
        )
    }
}
     
    
const styles = StyleSheet.create ({
container: {
    alignItems: 'center',
},
text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'black'
}
});