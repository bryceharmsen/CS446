import React, { Component } from 'react';
import {
    LayoutAnimation,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native';
import ExpandableItem from './ExpandableItem';
import ModalTemplate from './ModalTemplate';
import fakeDB from '../data/fakeDB.json';
import { AntDesign } from '@expo/vector-icons';

export default class CategoryMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.categories,
            isVisible: false,
            modalContent: '',
            modalTitle: ''
        };
    }


    toggleModal = (content) => {
        this.setState({isVisible: !this.state.isVisible})
        if (content) this.setState({modalContent: content.body, modalTitle: content.name})  
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
                <TouchableOpacity 
                    style={styles.header}
                    onPress={() => this.props.navigation.navigate('Ages')}
                >
                    <Text style={styles.headerText}><AntDesign name={'left'} size={styles.headerText.fontSize} rgba={'(0,0,0,1)'}/> Ages</Text>
                </TouchableOpacity>
                <FlatList 
                    data={this.state.data}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => 
                        <ExpandableItem
                            category={item}
                            onClickFunction={
                                this.updateExpansion.bind(this, item)
                            }
                            toggleModal = {
                                this.toggleModal
                            }
                        />
                    }
                />
                <SafeAreaView>
                    <ModalTemplate  
                        toggleModal = {this.toggleModal}
                        isVisible = {this.state.isVisible}
                        title = {this.state.modalTitle} 
                        info = {this.state.modalContent}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 50,
        padding: 10
    },
    headerText: {
        fontSize: 16
    }
});