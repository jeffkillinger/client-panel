import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

const firebaseConfig = {
  apiKey: "AIzaSyD0T4Eaw_2_TKwyAUGPwU9OQ_uCaISu3KM",
  authDomain: "reactclientpanel-a84f0.firebaseapp.com",
  databaseURL: "https://reactclientpanel-a84f0.firebaseio.com",
  projectId: "reactclientpanel-a84f0",
  storageBucket: "reactclientpanel-a84f0.appspot.com",
  messagingSenderId: "797321990993"
};


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};


// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

// Check for settings in localStorage
if(localStorage.getItem('settings') == null) {
  // Default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: true
  }

  // Set to localStorage
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

// Create initial state
const initialState = {settings: JSON.parse(localStorage.getItem('settings'))};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(
  reactReduxFirebase(firebase),
));

export default store;
