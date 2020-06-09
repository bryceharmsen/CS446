import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JournalBody from '../components/JournalBody';
export default class JournalsScreen extends Component {

  render() {
    return (
      <JournalBody></JournalBody>
    );
  }
  
}