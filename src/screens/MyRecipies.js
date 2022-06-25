/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import CardItem from '../components/CardItem';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import SearchDropDown from '../components/SearchDropDown';
import NavBar from '../components/NavBar';
import {api_forkifySearch} from '../api/api';
import {LinearProgress} from '@rneui/themed';

const MyRecipies = ({navigation}) => {
  const [search, setSearch] = useState('ham');
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api_forkifySearch(search).then(result => {
      setRecipies([result.recipes[0]]);
      setLoading(false);
    });
  }, [search]);

  return (
    <View style={styles.root}>
      <View style={[styles.root, {paddingHorizontal: 23, paddingTop: 38}]}>
        <Text style={styles.titleText}>My Recipes</Text>
        {loading ? (
          <LinearProgress style={{marginVertical: 10}} />
        ) : (
          <ScrollView style={styles.ScrollView}>
            {recipies.map(item => (
              <CardItem
                item={item}
                key={item.recipe_id}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        )}

        <Button
          title="Create Recipe"
          onPress={() => navigation.navigate('CreateRecipe')}
        />
      </View>
      <NavBar navigation={navigation} page="MyRecipies" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFE5DA',
    flex: 1,
  },
  ScrollView: {
    maxHeight: '80%',
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

export default MyRecipies;
