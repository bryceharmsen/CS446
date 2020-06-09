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
        return(
            <View style={styles.container}>
                <Modal animationType = {"slide"} transparent = {true}
                    visible = {this.props.isVisible}
                    onBackdropPress = {this.props.toggleModal}
                    onRequestClose = {this.props.toggleModal}>
                    
                    <View style = {styles.modal}>
                    
                        <Text style = {styles.titleText}>{this.props.title} </Text>

                        <Text style = {styles.text}> {this.props.info} </Text>
                  
                        
                        <Button style={styles.closeButton} title= "close" onPress = {()=> this.props.toggleModal()}/>
                     
                    </View>
                    
                </Modal>

            </View>
        ) 

    }

}


const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        padding: 10
    },
    modal: {
        alignSelf: 'center',
        backgroundColor: "#ffffff",
        marginTop: 70,
        marginBottom: 70,
        padding: 10,
        borderRadius: 10,
        flex: 1,
        width: '90%',
        alignItems: 'center',
        borderWidth: 1
    },
    text: {
        color: '#3f2949',
        fontSize: 16,
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'flex-start'
    }, 
    titleText: {
        color: '#000255',
        fontSize: 24,
        alignItems: 'flex-start'
    },
    closeButton: {

    }
})
