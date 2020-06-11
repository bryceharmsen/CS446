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
        <RectButton style={this.props.style} onPress={this.props.onPress}>
            <View style={{ flexDirection: 'row' }}>
            <View style={styles.iconContainer}>
                <AntDesign name={this.props.icon} size={22} color="rgba(0,0,0,1)" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{this.props.label}</Text>
            </View>
            </View>
        </RectButton>
        );
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        marginRight: 12
    },
    textContainer: {
        height: 20
    },
    text: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center',
        marginTop: 1,
    }
});