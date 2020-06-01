import React, { Component } from 'react';
import {
    LayoutAnimation,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    View,
    Text
} from 'react-native';
import ExpandableItem from './ExpandableItem';
import ModalTemplate from './ModalTemplate';
import fakeDB from '../data/fakeDB.json';

export default class CategoryMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.categories
        };
    }
    toggleModal() {
        this.state.modalVisible = !this.state.modalVisible;
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
                <ModalTemplate>
                    <FlatList 
                        data={this.state.data}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => 
                            <ExpandableItem
                                category={item}
                                onClickFunction={
                                    this.updateExpansion.bind(this, item),
                                    this.toggleModal()
                                }
                            />
                        }
                    />
                </ModalTemplate>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});