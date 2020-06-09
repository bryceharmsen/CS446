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

    onPress = data => {
        console.log("Journal Pressed", data);
    }

    render() {
        return (
           <View style = {styles.container}>
              <TouchableOpacity style={styles.journalItem} activeOpacity={0.6} OnPress={this.onPress(this.props.data)}>
                 <Text style = {styles.journalText}>
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
    journalItem: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        height: 60,
        marginBottom: 0.5,
        backgroundColor: 'lightgreen'
    },
    journalText: {
        fontSize: 18
    }
});