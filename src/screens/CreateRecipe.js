import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {View} from 'react-native';
import {api_createRecipe} from '../api/api';

const CreateRecipe = ({navigation}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [titleText, setTitleText] = useState('');
  const [method, setMethod] = useState('');
  const [tag, setTag] = useState('ham');

  const updateIngredients = (text, id) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[id] = text;
    setIngredients(updatedIngredients);
  };

  const addIngredients = () => {
    setIngredients([...ingredients, '']);
  };

  const onSubmit = () => {
    api_createRecipe(titleText, imageUrl, ingredients, method, tag).then(() =>
      navigation.navigate('Dashboard'),
    );
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.labelText}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setTitleText(e)}
        value={titleText}
      />

      <Text style={styles.labelText}>Image url</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setImageUrl(e)}
        value={imageUrl}
      />

      {ingredients.map((item, id) => (
        <View key={id}>
          <Text style={styles.labelText}>Ingredient {id + 1}</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => updateIngredients(e, id)}
            value={item}
          />
        </View>
      ))}

      <Button title="+ Add Ingredient" onPress={addIngredients} />

      <Text style={styles.labelText}>Method of preperation</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setMethod(e)}
        value={method}
      />

      <Button title="Submit" onPress={onSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFE5DA',
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: '#FFE5DA',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'solid',
    marginBottom: 20,
    color: 'black',
  },
  labelText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#522115',
    marginTop: 10,
  },
});

export default CreateRecipe;
