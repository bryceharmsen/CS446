import React, { Component } from 'react';
import {
    TouchableOpacity,
    FlatList,
    StyleSheet, 
    View, 
    Text} from 'react-native'
import fakeDB from '../data/fakeDB.json';
import AgeButton from '../components/AgeButton'

export default class AgeMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.ages
        };


    }
    render() {
        return (
            <FlatList
            data={this.state.data}
            keyExtractor={item => item}
            renderItem={({ item }) =>
                <AgeButton name={item}></AgeButton>
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