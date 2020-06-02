import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import CategoryMenu from '../components/CategoryMenu';

export default class CategoriesScreen extends Component {
  render(){
    return (
      <CategoryMenu navigation={this.props.navigation}></CategoryMenu>
    );
  }
}