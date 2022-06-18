import auth from '@react-native-firebase/auth';
import {getRequest} from './request';

export async function api_signup(email, password) {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    /* handle error */

    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
    throw error.code;
  }
}

export async function api_login(email, password) {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    /* handle error */

    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
    throw error.code;
  }
}

export async function api_forkifySearch(search) {
  try {
    const result = await getRequest(
      'https://forkify-api.herokuapp.com/api/search?q=' + search,
    );
    return result;
  } catch (error) {
    /* handle error */
    console.error(error);
    throw error;
  }
}

export async function api_forkifyGet(id) {
  try {
    const result = await getRequest(
      'https://forkify-api.herokuapp.com/api/get?rId=' + id,
    );
    return result;
  } catch (error) {
    /* handle error */
    console.error(error);
    throw error;
  }
}
