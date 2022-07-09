import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

const NavBar = ({navigation, page}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Icon name={page === 'home' ? 'home' : 'home-outline'} type="ionicon" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LikedRecipes')}>
        <Icon
          name={page === 'LikedRecipes' ? 'heart' : 'heart-outline'}
          type="ionicon"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MyRecipies')}>
        <Icon
          name={page === 'MyRecipies' ? 'book' : 'book-outline'}
          type="ionicon"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
        <Icon
          name={page === 'MyAccount' ? 'person' : 'person-outline'}
          type="ionicon"
        />
      </TouchableOpacity>
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
    marginTop: 'auto',
  },
});

export default NavBar;
