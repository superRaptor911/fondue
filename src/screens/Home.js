import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native';
import bgImg from '../media/home.png';
import logo from '../media/logo.png';

const Home = ({navigation}) => {
  return (
    <ImageBackground source={bgImg} style={styles.root}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFE5DA',
    flex: 1,
  },
  buttonContainer: {
    width: 190,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 441,
  },
  button: {
    backgroundColor: '#E07200',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    height: 47,
    justifyContent: 'center',
    marginTop: 13,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#FADCCF',
    textAlign: 'center',
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 65,
  },
});

export default Home;
