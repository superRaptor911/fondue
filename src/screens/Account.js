/* eslint-disable react-native/no-inline-styles */
import auth from '@react-native-firebase/auth';
import {LinearProgress} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {Icon} from '@rneui/themed';
import {
  Button,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native';
import NavBar from '../components/NavBar';

const MyAccount = ({navigation}) => {
  return (
    <View style={styles.root}>
      <View style={styles.image}>
        <View style={styles.headingContainer}>
          <Icon name="person-outline" type="ionicon" size={64} color="white" />
          <Text style={styles.title}>{auth().currentUser.email}</Text>
        </View>
      </View>

      <View style={styles.flexContainer}>
        <View style={styles.circle}>
          <Icon name="book-outline" type="ionicon" color="white" />
        </View>

        <View style={styles.circle}>
          <Icon name="heart" type="ionicon" color="white" />
        </View>

        <View style={styles.circle}>
          <Icon name="notifications" type="ionicon" color="white" />
        </View>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity
          onPress={() => {
            auth()
              .signOut()
              .then(() => navigation.navigate('Login'));
          }}>
          <View style={styles.itemContainer}>
            <Icon name="notifications" type="ionicon" />
            <Text style={styles.itemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <NavBar navigation={navigation} page="MyAccount" />
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
    height: 216,
    paddingTop: 64,
    backgroundColor: 'rgba(82, 33, 21, 0.59)',
  },
  headingContainer: {
    margin: 'auto',
  },

  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#522115',
    borderWidth: 1,
    borderColor: '#522115',
    borderStyle: 'solid',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    marginHorizontal: 44,
    marginTop: 18,
    justifyContent: 'space-between',
  },
  container2: {
    margin: 22,
  },
  itemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    flexDirection: 'row',
    paddingVertical: 14,
    paddingLeft: 24,
  },
  itemText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    color: '#522115',
    marginLeft: 15,
  },
});

export default MyAccount;
