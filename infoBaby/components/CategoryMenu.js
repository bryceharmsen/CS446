import React, { Component } from 'react';
import {
    LayoutAnimation,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    View,
    Text
} from 'react-native';
import fakeDB from '../data/fakeDB.json';

export default class CategoryMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.categories
        };
    }
    updateExpansion = category => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const categories = [...this.state.data];
        categories.map(currCategory =>
          currCategory.name === category.name
            ? currCategory.isExpanded = !currCategory.isExpanded
            : currCategory.isExpanded = false
        );
        this.setState(() => {
            return { data: categories };
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
                            category={item}
                            onClickFunction={
                                this.updateExpansion.bind(this, item)
                            }
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
            height: 0,
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.category.isExpanded) {
            this.setState(() => {
                return {
                    height: null,
                };
            });
        } else {
            this.setState(() => {
                return {
                    height: 0,
                };
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.height !== nextState.height) {
            return true;
        }
        return false;
    }

    render() {
        return (
        <View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.props.onClickFunction}
                style={styles.categoryItem}>
                <Text style={styles.categoryText}>{this.props.category.name}</Text>
            </TouchableOpacity>
            <View
                style={{
                    height: this.state.height,
                    overflow: 'hidden',
                }}
            >
            <FlatList
                data={this.props.category.topics}
                keyExtractor={item => item.name}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        key={item.name}
                        style={styles.topicItem}
                        onPress={() => alert('Put modal pop-up action here')}>
                        <Text style={styles.topicText}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    categoryItem: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        height: 60,
        borderBottomWidth: 0.5
    },
    categoryText: {
        fontSize: 18
    },
    topicItem: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        height: 50,
        borderBottomWidth: 0.5,
        backgroundColor: "lightgray",
    },
    topicText: {
        fontSize: 16
    }
});