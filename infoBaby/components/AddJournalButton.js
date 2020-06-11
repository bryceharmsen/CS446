import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default class AddJournalButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <RectButton style={styles.button} onPress={this.props.onPress}>
            <View style={{ flexDirection: 'row' }}>
            <View style={styles.buttonIconContainer}>
                <AntDesign name={this.props.icon} size={22} color="rgba(0,0,0,1)" />
            </View>
            <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>{this.props.label}</Text>
            </View>
            </View>
        </RectButton>
        );
    }
}

const styles = StyleSheet.create({
    buttonIconContainer: {
        marginRight: 12,
    },
    buttonTextContainer: {
        height: 12
    },
    button: {
        backgroundColor: 'grey',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 1,
        marginBottom: 1,
        borderColor: '#ededed',
    },
    text: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 1,
    }
});