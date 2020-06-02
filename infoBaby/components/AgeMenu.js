import React, { Component } from 'react';
import {
    TouchableOpacity,
    FlatList,
    StyleSheet, 
    View, 
    Text} from 'react-native'
import fakeDB from '../data/fakeDB.json';
import AgeButton from '../components/AgeButton'
import CategoryMenu from './CategoryMenu';

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
                <AgeButton name={item} navigation={this.props.navigation}></AgeButton>
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