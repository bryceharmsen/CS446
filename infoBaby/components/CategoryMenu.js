import React, { Component } from 'react';
import {
    LayoutAnimation,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StyleSheet,
    View,
    Text } from 'react-native';
import fakeDB from '../data/fakeDB.json';

export default class CategoryMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.categories
        };
    }
    updateLayout = item => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...this.state.data];
        array.map((placeItem, placeIndex) =>
          placeItem.name === item.name
            ? (array[placeIndex]['isExpanded'] = !array[placeIndex]['isExpanded'])
            : (array[placeIndex]['isExpanded'] = false)
        );
        this.setState(() => {
            return {
                data: array,
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.data}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => 
                        <ExpandableItemComponent 
                            item={item}
                            onClickFunction={this.updateLayout.bind(this, item)}
                        />
                    }
                />
            </View>
        )
    }
}

class ExpandableItemComponent extends Component {
    //Custom Component for the Expandable List
    constructor() {
        super();
        this.state = {
            layoutHeight: 0,
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.item.isExpanded) {
            this.setState(() => {
                return {
                    layoutHeight: null,
                };
            });
        } else {
            this.setState(() => {
                return {
                    layoutHeight: 0,
                };
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.layoutHeight !== nextState.layoutHeight) {
            return true;
        }
        return false;
    }

    render() {
        return (
        <View>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.props.onClickFunction}
                style={styles.header}>
            <Text style={styles.text}>{this.props.item.name}</Text>
            </TouchableOpacity>
            <View
                style={{
                    height: this.state.layoutHeight,
                    overflow: 'hidden',
                }}
            >
            {/*Content under the header of the Expandable List Item*/}
            {this.props.item.topics.map((item, key) => (
                <TouchableOpacity
                    key={key}
                    style={styles.content}
                    onPress={() => alert('Put modal pop-up action here')}>
                    <Text style={styles.text}>{item.name}</Text>
                    <View style={styles.separator} />
                </TouchableOpacity>
            ))}
            </View>
        </View>
        );
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
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
        fontSize: 18
    }
});