/* eslint-disable react-native/no-inline-styles */
import {LinearProgress} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Text, View} from 'react-native';
import {api_forkifyGet} from '../api/api';
import NavBar from '../components/NavBar';

const ViewRecipes = ({route, navigation}) => {
  const {item} = route.params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (!item.isCustom) {
      api_forkifyGet(item.recipe_id).then(data => setRecipe(data.recipe));
    } else {
      setRecipe(item);
    }
  }, [item]);

  if (!recipe) {
    return (
      <View style={styles.root}>
        <LinearProgress style={{marginVertical: 10}} />
      </View>
    );
  }

  const handlePress = () => {
    Linking.openURL(recipe.source_url).catch(err =>
      console.error('An error occurred', err),
    );
  };

  return (
    <View style={styles.root}>
      <ImageBackground style={styles.image} source={{uri: recipe.image_url}}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{recipe.title}</Text>
          <Text style={styles.headingSubText}>{recipe.publisher}</Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.contentContainer}>
        <Text style={styles.headingText2}>Ingredients</Text>
        {recipe.ingredients.map((itm, id) => (
          <Text key={id} style={styles.headingSubText}>
            {'*  ' + itm}
          </Text>
        ))}
        <Text style={styles.headingText2}>Preparation Method</Text>
        <View style={{marginRight: 24, marginBottom: 30}}>
          {item.isCustom ? (
            <Text style={styles.headingSubText}>{item.method}</Text>
          ) : (
            <Button title="View Recipe" onPress={handlePress} />
          )}
        </View>
      </ScrollView>
      <NavBar navigation={navigation} page="" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFE5DA',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 251,
  },
  headingContainer: {
    paddingHorizontal: 22,
    paddingVertical: 12,
    marginTop: 152,
    backgroundColor: 'rgba(255, 229, 218, 0.6)',
  },
  headingText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    color: '#522115',
  },
  headingSubText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#522115',
  },
  contentContainer: {
    marginLeft: 25,
  },
  headingText2: {
    marginTop: 19,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 22,
    color: '#522115',
    marginBottom: 10,
  },
});

export default ViewRecipes;
