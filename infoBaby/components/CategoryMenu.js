import React, { Component } from 'react';
import {
    LayoutAnimation,
    Button,
    FlatList,
    StyleSheet,
    SafeAreaView,
    View,
} from 'react-native';
import ExpandableItem from './ExpandableItem';
import ModalTemplate from './ModalTemplate';
import fakeDB from '../data/fakeDB.json';

export default class CategoryMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.categories,
            isVisible: false
        };
        //this.createModal();
    }


    toggleModal = () => {
        console.log('hhaha')
        this.setState({isVisible: !this.state.isVisible})
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

    //temporary "show modal" button to test modal pop-up
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView>
                <ModalTemplate  
                    toggleModal = {this.toggleModal}
                    isVisible = {this.state.isVisible}
                    title = {'Hello there'} 
                    info = {'This is the information'}
                    >

                </ModalTemplate>
                </SafeAreaView>
                <Button title = "show modal" onPress={ () => {this.toggleModal()}}/>
                    <FlatList 
                        data={this.state.data}
                        keyExtractor={item => item.name}
                        renderItem={({ item, index }) => 
                            <ExpandableItem
                                category={item}
                                onClickFunction={
                                    this.updateExpansion.bind(this, item)
                                }
                                toggleModal = {
                                    this.toggleModal.bind(this, item)
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