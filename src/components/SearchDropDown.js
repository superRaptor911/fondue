/* eslint-disable react-native/no-inline-styles */
import SearchableDropdown from 'react-native-searchable-dropdown';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CardItem from '../components/CardItem';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';

var items = [
  {id: 0, name: 'carrot'},
  {id: 1, name: 'broccoli'},
  {id: 2, name: 'asparagus'},
  {id: 3, name: 'cauliflower'},
  {id: 4, name: 'corn'},
  {id: 5, name: 'cucumber'},
  {id: 6, name: 'green pepper'},
  {id: 7, name: 'lettuce'},
  {id: 8, name: 'mushrooms'},
  {id: 9, name: 'onion'},
  {id: 10, name: 'potato'},
  {id: 11, name: 'pumpkin'},
  {id: 12, name: 'red pepper'},
  {id: 13, name: 'tomato'},
  {id: 14, name: 'beetroot'},
  {id: 15, name: 'brussel sprouts'},
  {id: 16, name: 'peas'},
  {id: 17, name: 'zucchini'},
  {id: 18, name: 'radish'},
  {id: 19, name: 'sweet potato'},
  {id: 20, name: 'artichoke'},
  {id: 21, name: 'leek'},
  {id: 22, name: 'cabbage'},
  {id: 23, name: 'celery'},
  {id: 24, name: 'chili'},
  {id: 25, name: 'garlic'},
  {id: 26, name: 'basil'},
  {id: 27, name: 'coriander'},
  {id: 28, name: 'parsley'},
  {id: 29, name: 'dill'},
  {id: 30, name: 'rosemary'},
  {id: 31, name: 'oregano'},
  {id: 32, name: 'cinnamon'},
  {id: 33, name: 'saffron'},
  {id: 34, name: 'green bean'},
  {id: 35, name: 'bean'},
  {id: 36, name: 'chickpea'},
  {id: 37, name: 'lentil'},
  {id: 38, name: 'apple'},
  {id: 39, name: 'apricot'},
  {id: 40, name: 'avocado'},
  {id: 41, name: 'banana'},
  {id: 42, name: 'blackberry'},
  {id: 43, name: 'blackcurrant'},
  {id: 44, name: 'blueberry'},
  {id: 45, name: 'boysenberry'},
  {id: 46, name: 'cherry'},
  {id: 47, name: 'coconut'},
  {id: 48, name: 'fig'},
  {id: 49, name: 'grape'},
  {id: 50, name: 'grapefruit'},
  {id: 51, name: 'kiwifruit'},
  {id: 52, name: 'lemon'},
  {id: 53, name: 'lime'},
  {id: 54, name: 'lychee'},
  {id: 55, name: 'mandarin'},
  {id: 56, name: 'mango'},
  {id: 57, name: 'melon'},
  {id: 58, name: 'nectarine'},
  {id: 59, name: 'orange'},
  {id: 60, name: 'papaya'},
  {id: 61, name: 'passion fruit'},
  {id: 62, name: 'peach'},
  {id: 63, name: 'pear'},
  {id: 64, name: 'pineapple'},
  {id: 65, name: 'plum'},
  {id: 66, name: 'pomegranate'},
  {id: 67, name: 'quince'},
  {id: 68, name: 'raspberry'},
  {id: 69, name: 'strawberry'},
  {id: 70, name: 'watermelon'},
  {id: 71, name: 'salad'},
  {id: 72, name: 'pizza'},
  {id: 73, name: 'pasta'},
  {id: 74, name: 'popcorn'},
  {id: 75, name: 'lobster'},
  {id: 76, name: 'steak'},
  {id: 77, name: 'bbq'},
  {id: 78, name: 'pudding'},
  {id: 79, name: 'hamburger'},
  {id: 80, name: 'pie'},
  {id: 81, name: 'cake'},
  {id: 82, name: 'sausage'},
  {id: 83, name: 'tacos'},
  {id: 84, name: 'kebab'},
  {id: 85, name: 'poutine'},
  {id: 86, name: 'seafood'},
  {id: 87, name: 'chips'},
  {id: 88, name: 'fries'},
  {id: 89, name: 'masala'},
  {id: 90, name: 'paella'},
  {id: 91, name: 'som tam'},
  {id: 92, name: 'chicken'},
  {id: 93, name: 'toast'},
  {id: 94, name: 'marzipan'},
  {id: 95, name: 'tofu'},
  {id: 96, name: 'ketchup'},
  {id: 97, name: 'hummus'},
  {id: 98, name: 'chili'},
  {id: 99, name: 'maple syrup'},
  {id: 100, name: 'parma ham'},
  {id: 101, name: 'fajitas'},
  {id: 102, name: 'champ'},
  {id: 103, name: 'lasagna'},
  {id: 104, name: 'poke'},
  {id: 105, name: 'chocolate'},
  {id: 106, name: 'croissant'},
  {id: 107, name: 'arepas'},
  {id: 108, name: 'bunny chow'},
  {id: 109, name: 'pierogi'},
  {id: 110, name: 'donuts'},
  {id: 111, name: 'rendang'},
  {id: 112, name: 'sushi'},
  {id: 113, name: 'ice cream'},
  {id: 114, name: 'duck'},
  {id: 115, name: 'curry'},
  {id: 116, name: 'beef'},
  {id: 117, name: 'goat'},
  {id: 118, name: 'lamb'},
  {id: 119, name: 'turkey'},
  {id: 120, name: 'pork'},
  {id: 121, name: 'fish'},
  {id: 122, name: 'crab'},
  {id: 123, name: 'bacon'},
  {id: 124, name: 'ham'},
  {id: 125, name: 'pepperoni'},
  {id: 126, name: 'salami'},
  {id: 127, name: 'ribs'},
];

const SearchDropDown = ({setSelectedItem}) => {
  const [selectedText, setSelectedText] = useState();

  return (
    <SearchableDropdown
      onItemSelect={item => {
        setSelectedItem(item.name);
        setSelectedText(item.name);
      }}
      containerStyle={styles.root}
      onRemoveItem={(item, index) => {
        setSelectedItem('');
      }}
      itemStyle={{
        padding: 10,
        marginTop: 2,
        backgroundColor: '#ddd',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 5,
      }}
      itemTextStyle={{color: '#222'}}
      itemsContainerStyle={{maxHeight: 140}}
      items={items}
      defaultIndex={2}
      resetValue={false}
      textInputProps={{
        placeholder: 'placeholder',
        underlineColorAndroid: 'transparent',
        style: {
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          color: 'black',
        },
        value: selectedText,
        onTextChange: text => setSelectedText(text),
      }}
      listProps={{
        nestedScrollEnabled: true,
      }}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    padding: 12,
    marginTop: 10,
  },
});

export default SearchDropDown;
