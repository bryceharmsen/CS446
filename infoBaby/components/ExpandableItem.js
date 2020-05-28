import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default class ExpandableItem extends Component {
    constructor() {
        super();
        this.state = {
            layoutHeight: 0
        }
    }

    render() {
        return (
            <View>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.props.onClickFunction}
              style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{this.props.item.category_name}</Text>
            </TouchableOpacity>
            <View
              style={{
                height: this.state.layoutHeight,
                overflow: 'hidden',
              }}>
              {/*Content under the header of the Expandable List Item*/}
              {this.props.item.subcategory.map((item, key) => (
                <TouchableOpacity
                  key={key}
                  style={styles.content}
                  onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
                  <Text style={styles.text}>
                    {key}. {item.val}
                  </Text>
                  <View style={styles.separator} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    categoryContainer: {

    },
    categoryText: {

    }
})