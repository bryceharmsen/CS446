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
            <TouchableOpacity style={styles.ageItem} onPress={() => this.props.navigation.navigate('Categories')}>
               <Text style = {styles.ageText}>
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
   ageItem : {
      paddingVertical: 20,
      paddingHorizontal: 30,
      height: 60,
      marginBottom: 0.5,
      backgroundColor: 'lightblue',
   },
   ageText: {
      fontSize: 18,
   }
});