import React, { Component } from 'react';
import { Modal, Text, TextHighlight, TouchableOpacity, View, StyleSheet} from 'react-native';


export default class ModalTemplate extends Component {
    constructor() {
        super();
        this.state = ({modalVisible : false,})
    }

    toggleModal() {
        this.state.modalVisible = false;
    }

    render(){       
        return(
                <Modal animationType = {"slide"} transparent = {false}
                    style = {styles.modal}
                    visible = {this.state.modalVisible}
                    presentationStyle = {"overFullScreen"}
                    onRequestClose = { () => { console.log("Modal closed.")}}>
                    
                    
                        <Text style = {styles.text}>Modal is open!</Text>
                  
                        
                        <TouchableOpacity 
                        onPress = {() => {this.toggleModal()}}
                        >
                     
                            <Text style = {styles.text}>Close Modal</Text>
                        </TouchableOpacity>
                        

                </Modal>
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
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#7C7C7C',
        padding: 100
    },
    text: {
        color: '#3f2949',
        marginTop: 10
    }
})
