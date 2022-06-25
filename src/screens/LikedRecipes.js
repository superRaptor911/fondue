/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import CardItem from '../components/CardItem';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import SearchDropDown from '../components/SearchDropDown';
import NavBar from '../components/NavBar';
import {api_forkifySearch, api_getLikedRecipies} from '../api/api';
import {LinearProgress} from '@rneui/themed';

const LikedRecipes = ({navigation}) => {
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadLikedRecipes().then(() => {
      setLoading(false);
    });
  }, []);

  const loadLikedRecipes = async () => {
    const liked = await api_getLikedRecipies();
    if (liked) {
      const keys = Object.keys(liked);
      const list = keys.map(key => liked[key]).filter(item => Boolean(item));
      setRecipies(list);
    }
  };
  return (
    <View style={styles.root}>
      <View style={[styles.root, {paddingHorizontal: 23, paddingTop: 38}]}>
        <Text style={styles.titleText}>Liked Recipes</Text>
        {loading ? (
          <LinearProgress style={{marginVertical: 10}} />
        ) : (
          <ScrollView>
            {recipies.map(item => (
              <CardItem
                item={item}
                key={item.recipe_id}
                navigation={navigation}
                liked={true}
                onLikePressed={loadLikedRecipes}
              />
            ))}
          </ScrollView>
        )}
      </View>
      <NavBar navigation={navigation} page="LikedRecipes" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFE5DA',
    flex: 1,
  },
  titleText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#522115',
  },
  subTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#E07200',
  },
});

export default LikedRecipes;
