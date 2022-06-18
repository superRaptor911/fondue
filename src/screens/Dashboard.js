/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CardItem from '../components/CardItem';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import SearchDropDown from '../components/SearchDropDown';
import NavBar from '../components/NavBar';
import {api_forkifySearch} from '../api/api';
import {LinearProgress} from '@rneui/themed';

const Dashboard = ({navigation}) => {
  const [search, setSearch] = useState('ham');
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api_forkifySearch(search).then(result => {
      setRecipies(result.recipes);
      setLoading(false);
    });
  }, [search]);

  return (
    <View style={styles.root}>
      <View style={[styles.root, {paddingHorizontal: 23, paddingTop: 38}]}>
        <Text style={styles.titleText}>Hello buddy!</Text>
        <Text style={styles.subTitle}>What do you want to cook today?</Text>
        <SearchDropDown setSelectedItem={setSearch} />
        {loading ? (
          <LinearProgress style={{marginVertical: 10}} />
        ) : (
          <ScrollView>
            {recipies.map(item => (
              <CardItem
                title={item.title}
                imageUrl={item.image_url}
                author={item.publisher}
                key={item.recipe_id}
              />
            ))}
          </ScrollView>
        )}
      </View>
      <NavBar navigation={navigation} page="home" />
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

export default Dashboard;
