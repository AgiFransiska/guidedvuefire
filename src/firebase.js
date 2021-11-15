import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({databaseURL : 'https://guidedvuefire0411-57c87-default-rtdb.firebaseio.com/'})
    .database()


export const drinkRef = db.ref('drinks')









