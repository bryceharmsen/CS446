import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';
import fakeDB from '../data/fakeDB.json';

export default class RandomNumber extends Component{ 
    constructor(){
        super();
        
        this.state={

            data: fakeDB.Tips, currentID: 0

        };
    }


GenerateRandomNumber=()=>{

let RandomNumber = Math.floor(Math.random() * this.state.data.length);

this.setState({

    currentID : RandomNumber

})

}
    //This comes up as red when I don't put the ; after render
    render() {

        return (

            <View style ={styles.MainContainer}>

            <Text style={styles.text}>{this.state.data[this.state.currentID].info}</Text>

            <Button title="Pro tip" onPress={this.GenerateRandomNumber} />

            </View>

        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    text: {
        fontSize: 20 
    }
    
});