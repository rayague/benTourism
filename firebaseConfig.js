import {initializeApp} from 'firebase/app';
import {getAnalytics, isSupported} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCb_devZGuq_x-O2YBSdb3U4BP2-IGk6aE',
  authDomain: 'benintourism-303b4.firebaseapp.com',
  projectId: 'benintourism-303b4',
  storageBucket: 'benintourism-303b4.appspot.com',
  messagingSenderId: '6073415926',
  appId: '1:6073415926:web:c4e60cca700746f18e14d7',
  measurementId: 'G-NBT8ZHDKN1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conditionally initialize Analytics based on IndexedDB support (optional)
isSupported().then(supported => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
});

// Initialize Firestore and Auth with persistence
const db = getFirestore(app);
const initializedAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {initializedAuth, db};
