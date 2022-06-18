/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const Splash = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(usr) {
    setUser(usr);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!initializing) {
    user ? navigation.navigate('Dashboard') : navigation.navigate('Home');
  }
  return (
    <View style={styles.root}>
      <Text>GG</Text>
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

export default Splash;
