import React from 'react';
import {Image, Text, View} from 'react-native';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import heart from '../media/heart.png';
import {Icon} from '@rneui/themed';

const NavBar = ({navigation, page}) => {
  return (
    <View style={styles.root}>
      <Icon name={page === 'home' ? 'home' : 'home-outline'} type="ionicon" />
      <Icon
        name={page === 'liked' ? 'heart' : 'heart-outline'}
        type="ionicon"
      />
      <Icon name="book-outline" type="ionicon" />
      <Icon name="person-outline" type="ionicon" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: '#FFFFFF',
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default NavBar;
