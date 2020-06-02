import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet, 
    View, 
    Text
} from 'react-native'


export default class JournalEntry extends Component {
    constructor() {
        super();

    }

    render() {
        return (
           <View style = {styles.container}>
              <TouchableOpacity activeOpacity={0.6} OnPress={this.props.onPress}>
                 <Text style = {styles.text}>
                    {this.props.data.title}
                 </Text>
              </TouchableOpacity>
           </View>
        )
    }
}
     
    
const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    text: {
        marginBottom: 1,
        padding: 25,
        backgroundColor: 'lightgreen'
    }
});