import React, { Component } from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';

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
          this.setState({ height: null });
      } else {
          this.setState({ height: 0 });
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
                      onPress={this.props.toggleModal.bind(this, item)}>
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
  categoryItem: {
      paddingVertical: 20,
      paddingHorizontal: 30,
      height: 60,
      marginBottom: 0.5,
      backgroundColor: 'orange'
  },
  categoryText: {
      fontSize: 18
  },
  topicItem: {
      paddingVertical: 15,
      paddingHorizontal: 40,
      height: 50,
      marginBottom: 0.5,
      backgroundColor: "#cecece"
  },
  topicText: {
      fontSize: 16
  }
});