import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import AgeMenu from "../components/AgeMenu"

export default class AgesScreen extends Component {

  render() {
    return(
      <AgeMenu navigation={this.props.navigation}></AgeMenu>
    )
  }
}

const styles = StyleSheet.create({
  
});
