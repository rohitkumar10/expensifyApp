import * as firebase from 'firebase' 

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database()

export { firebase, db as default}

// db.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val() 
//         })
//     })
//     console.log(expenses)
// }, (e) => {
//     console.log('error')
// })

// db.ref('expenses').push({
//     description: 'Rent',
//     note: 'Left to pay',
//     amount: 3500,
//     createdAt: 101
// })

// db.ref('expenses').push({
//     description: 'Water bill',
//     note: 'Left to pay',
//     amount: 3500,
//     createdAt: 122
// })

// db.ref('expenses').push({
//     description: 'Gas bill',
//     note: 'Left to pay',
//     amount: 3500,
//     createdAt: 456
// })

// db.ref().set({
//     name: 'Kid',
//     age: 20,
//     isSingle: true,
//     location: {
//         city: 'Buxar',
//         country: 'India'
//     }
// })

// db.ref('attribute/height').set(161)
// db.ref('attribute/weight').set(80)

// db.ref('isSingle').remove().then(() => {
//     console.log('Removed')
// }).catch((e) => {
//     console.log('failed')
// })

// db.ref().once('value').then((snapshot) => {
//    console.log(snapshot.val())
// }).catch((e) => {
//     console.log('Error')
// })
