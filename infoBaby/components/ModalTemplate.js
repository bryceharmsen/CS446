import React, { Component } from 'react';
import { Modal, Text, TextHighlight, TouchableHighlight, View, StyleSheet} from 'react-native';


export default class ModalTemplate extends Component {
    constructor() {
        super();
        this.state = ({modalVisible : false,})
    }

    render(){       
        return(
            <View>
                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.modalVisible}
                    onRequestClose = { () => { console.log("Modal closed.")}}>
                    
                    <View style = {styles.modal}>
                        <Text style = {styles.text}>Modal is open!</Text>
                  
                        <TouchableHighlight onPress = {() => {
                             this.toggleModal(!this.props.modalVisible)}}>
                     
                            <Text style = {styles.text}>Close Modal</Text>
                        </TouchableHighlight>
                     </View>

                </Modal>

                <TouchableHighlight onPress = { () => {
                    this.toggleModal (!this.props.modalVisible)}}>

                    <Text style = {styles.text}> Close Modal</Text>    
                </TouchableHighlight>

            </View>
        ) 

    }

}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7021a',
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
})
