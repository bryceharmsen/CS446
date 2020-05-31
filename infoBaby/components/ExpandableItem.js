import React, { Component } from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';
import ModalTemplate from './ModalTemplate';

export default class ExpandableItem extends Component {
  constructor() {
      super();
      this.state = {
          height: 0,
          modalVisible: false
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

  toggleModal() {
    this.state.modalVisible = !this.state.modalVisible;
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
                      onPress={this.toggleModal()}>
                      <Text style={styles.topicText}>{item.name}</Text>
                      <ModalTemplate modalVisible={this.state.modalVisible}></ModalTemplate>
                  </TouchableOpacity>
              }
          />
          </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
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