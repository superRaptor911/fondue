/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {api_signup} from '../api/api';

const Signup = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const handlePress = () => {
    if (password !== password2) {
      setError('Password not matching');
      return;
    }

    if (password.length < 6) {
      setError('Password should be longer than 6 chars');
      return;
    }

    api_signup(email, password)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(e => {
        setError(e);
      });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Fondue</Text>

      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.topButton1}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButton2}>
          <Text style={styles.buttonText2}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        {error !== '' && <Text style={styles.errorText}>{error} </Text>}
        <Text style={styles.labelText}>Full Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setName(e)}
          value={name}
        />

        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setEmail(e)}
          value={email}
        />

        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setPassword(e)}
          secureTextEntry
          value={password}
        />

        <Text style={styles.labelText}>Confirm password</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setPassword2(e)}
          secureTextEntry
          value={password2}
        />

        <TouchableOpacity
          style={styles.buttonMAin}
          onPress={() => handlePress()}>
          <Text style={styles.buttonText2}>Signup</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.labelText, {textAlign: 'center', marginTop: 10}]}>
        Already have an account? LOGIN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFE5DA',
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 38,
    lineHeight: 57,
    color: '#522115',
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 33,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(82, 33, 21, 0.59)',
    borderStyle: 'solid',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 31,
    paddingVertical: 36,
    marginHorizontal: 38,
  },
  labelText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#522115',
  },
  input: {
    backgroundColor: '#FFE5DA',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'solid',
    marginBottom: 20,
    color: 'black',
  },
  topContainer: {
    marginHorizontal: 38,
    flexDirection: 'row',
  },
  topButton1: {
    backgroundColor: '#FFE5DA',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'solid',
    width: '50%',
    height: 60,
    justifyContent: 'center',
  },
  topButton2: {
    backgroundColor: '#522115',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'solid',
    width: '50%',
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    color: '#522115',
    textAlign: 'center',
  },
  buttonText2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    color: '#FFE5DA',
    textAlign: 'center',
  },

  buttonMAin: {
    backgroundColor: '#522115',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    height: 60,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
  },
});

export default Signup;
