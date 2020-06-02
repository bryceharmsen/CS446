import React, { Component } from 'react';
import {
    TouchableOpacity,
    FlatList,
    StyleSheet, 
    View, 
    Text} from 'react-native'
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
            keyExtractor={item => item.title}
            renderItem={({ item }) =>
                <JournalEntry data={item}></JournalEntry>
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
     })