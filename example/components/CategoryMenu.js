import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

export default class CategoryMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={[
                        { key: 'Food Allergies' },
                        { key: 'Motor Development' },
                        { key: 'Common Illnesses' },
                        { key: 'Products' },
                    ]}
                    renderItem={({ item }) => <Item text={item.key} />}
                />
            </View>
        )
    }
}

function Item({ text }) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        height: 60,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 14
    }
});