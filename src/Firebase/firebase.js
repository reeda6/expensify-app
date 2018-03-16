import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyD8mqN2fjp-KEbd4GdK7_lNaXRxms2pTJk",
    authDomain: "expensify-798ce.firebaseapp.com",
    databaseURL: "https://expensify-798ce.firebaseio.com",
    projectId: "expensify-798ce",
    storageBucket: "expensify-798ce.appspot.com",
    messagingSenderId: "541110191254"

}

firebase.initializeApp(config);

firebase.database().ref().set({
  name:'Alex Reed',
  age:26,
  isSingle:true,
  location:{
    city:'Philly',
    country:'US'
  }
});

firebase.database().ref('attributes').set({
  height:59,
  weight:155
})
