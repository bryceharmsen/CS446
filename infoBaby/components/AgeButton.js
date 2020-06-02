import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet, 
    View, 
    Text} from 'react-native'


export default class AgeButton extends Component {
    constructor() {
        super();

    }

   render() {
      return (
         <View style = {styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Categories')}>
               <Text style = {styles.text}>
                  {this.props.name}
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
      borderBottomWidth: 0.5,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'lightblue'
   }
});