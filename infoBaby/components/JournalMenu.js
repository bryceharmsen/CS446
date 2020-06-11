import React, { Component } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import JournalEntry from '../components/JournalEntry';
import InputModal from './InputModal';

export default class JournalMenu extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
            modalContent: null
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.journals !== nextProps.journals
            || this.state.isVisible !== nextState.isVisible) {
            return true;
        }
        return false;
    }

    toggleModal = (content) => {
        this.setState({ isVisible: !this.state.isVisible })
        if (content) this.setState({ modalContent: content })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.journals}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <JournalEntry 
                            journal={item}
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