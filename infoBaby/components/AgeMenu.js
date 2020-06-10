import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native'
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
        padding: 25,
        color: 'black'
    }
});