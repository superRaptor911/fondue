import React from 'react';
import {Image, Text, View} from 'react-native';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import heart from '../media/heart.png';

const CardItem = ({title, imageUrl, author}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: imageUrl}} />

      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.authorText}>{author}</Text>
      </View>
      <Image source={heart} style={styles.heart} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    height: 112,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    marginTop: 13,
  },
  image: {
    width: 78,
    height: 93,
    marginRight: 13,
  },
  titleText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
    color: '#522115',
  },

  authorText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#522115',
  },
  heart: {
    height: 23,
    width: 23,
    marginLeft: 'auto',
  },
});

export default CardItem;
