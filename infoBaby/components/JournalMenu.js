import React, { Component } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import fakeDB from '../data/fakeDB.json';
import JournalEntry from '../components/JournalEntry';
import InputModal from './InputModal';

export default class JournalMenu extends Component {
    constructor() {
        super();
        this.state = {
            data: fakeDB.journals,
            isVisible: false,
            modalContent: null
        };
    }

    toggleModal = (content) => {
        this.setState({ isVisible: !this.state.isVisible })
        if (content) this.setState({ modalContent: content })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <JournalEntry 
                            data={item}
                            toggleModal={this.toggleModal}
                        />
                    }
                />
                <InputModal
                    isVisible={this.state.isVisible}
                    toggleModal={this.toggleModal}
                    title={this.state.modalContent && this.state.modalContent.title}
                    info={this.state.modalContent && this.state.modalContent.entry}
                />
            </View>
        )
    }
}