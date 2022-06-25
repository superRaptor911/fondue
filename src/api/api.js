import auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';
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
    let result = await getRequest(
      'https://forkify-api.herokuapp.com/api/search?q=' + search,
    );

    const doc = await firestore().collection('recipes').doc(search).get();
    const result2 = doc.data();
    if (result2) {
      const keys = Object.keys(result2);
      const list = keys.map(key => result2[key]);
      result.recipes = [...result.recipes, ...list];
    }

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

export async function api_getLikedRecipies() {
  try {
    const doc = await firestore()
      .collection('likes')
      .doc(auth().currentUser.email)
      .get();

    const result = doc.data();
    return result;
  } catch (error) {
    /* handle error */
    console.error(error);
    throw error;
  }
}

export async function api_likeRecipe(item, prevValue) {
  try {
    const obj = {};
    obj[item.recipe_id] = prevValue ? null : item;

    console.log(auth().currentUser.email);
    await firestore()
      .collection('likes')
      .doc(auth().currentUser.email)
      .set(obj, {merge: true});
  } catch (error) {
    /* handle error */
    console.error(error);
    throw error;
  }
}

export async function api_createRecipe(
  title,
  imageUrl,
  ingredients,
  method,
  tag,
) {
  try {
    const uid = uuid.v4();
    const recipe = {
      isCustom: true,
      title: title,
      image_url: imageUrl,
      ingredients: ingredients,
      method: method,
      publisher: auth().currentUser.email,
      recipe_id: uid,
    };

    const obj = {};
    obj[uid] = recipe;

    await firestore().collection('recipes').doc(tag).set(obj, {merge: true});
  } catch (error) {
    /* handle error */
    console.error(error);
    throw error;
  }
}
