/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
import {api_likeRecipe} from '../api/api';

const CardItem = ({navigation, item, liked, onLikePressed}) => {
  const {
    title,
    image_url: imageUrl,
    publisher: author,
    recipe_id: recipeId,
  } = item;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ViewRecipes', {
          item: item,
        });
      }}>
      <View style={styles.root}>
        <Image style={styles.image} source={{uri: imageUrl}} />

        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <Text style={styles.authorText}>{author}</Text>
        </View>
        {/* <Image source={heart} style={styles.heart} /> */}

        <TouchableOpacity
          onPress={() => {
            api_likeRecipe(item, liked).then(
              () => onLikePressed && onLikePressed(),
            );
          }}>
          <Icon name={liked ? 'heart' : 'heart-outline'} type="ionicon" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
  },

  authorText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#522115',
    marginTop: 'auto',
  },
  heart: {
    height: 23,
    width: 23,
    marginLeft: 'auto',
  },
});

export default CardItem;
