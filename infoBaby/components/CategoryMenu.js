import React, { Component } from 'react';
import {
    LayoutAnimation,
    FlatList,
    StyleSheet,
    View,
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

    toggleModal = items => {
        this.state.modalVisible = !this.state.modalVisible;
        console.log(`toggling visibility to ${this.state.modalVisible}`);
        console.log('items', items);

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
                <ModalTemplate></ModalTemplate>
                    <FlatList 
                        data={this.state.data}
                        keyExtractor={item => item.name}
                        renderItem={({ item, index }) => 
                            <ExpandableItem
                                category={item}
                                onClickFunction={
                                    this.updateExpansion.bind(this, item)
                                }
                                toggleModal={
                                    this.toggleModal
                                }
                            />
                        }
                    />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});