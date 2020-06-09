import React, { Component } from 'react';
import {
    Modal,
    Button,
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export default class ModalTemplate extends Component {
    constructor(props) {
        super(props);  
    }


    render(){ 
        console.log('rendering template');   
        console.log(this.props.isVisible);   
        return(
            <View >
                <Modal animationType = {"slide"} transparent = {true}
                    visible = {this.props.isVisible}
                    onBackdropPress = {this.props.toggleModal}
                    onRequestClose = {this.props.toggleModal}>
                    
                    <View style = {styles.modal}>
                    
                        <Text style = {styles.titleText}>{this.props.title} </Text>

                        <Text style = {styles.text}> {this.props.info} </Text>
                  
                        
                        <Button title= "close" onPress = {()=> this.props.toggleModal()}/>
                     
                    </View>
                    
                </Modal>

            </View>
        ) 

    }

}


const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 10
    },
    modal: {
        backgroundColor: "#ffffff",
        margin: 10, 
        padding: 10,
        borderRadius: 10,
        flex: 1,
        width: "80%",
        alignItems: 'center'
    },
    text: {
        color: '#3f2949',
        fontSize: 13,
        marginTop: 20,
        alignItems: 'center'
    }, 
    titleText: {
        color: '#000255',
        fontSize: 28,
        alignItems: 'flex-start'
    }
})
