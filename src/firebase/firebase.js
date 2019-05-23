import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
 
/*
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 2300,
  createdAt: 988767
});

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
});

  console.log(expenses);
});
  
database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);
});

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 2300,
  createdAt: 988767
});

database.ref('expenses').push({
  description: 'Phone Bill',
  note: '',
  amount: 2000,
  createdAt: 9887675
});

database.ref('expenses').push({
  description: 'Food',
  note: '',
  amount: 5000,
  createdAt: 9879867876
}); 


 database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}); 

const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(29);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
  database.ref('age').set(31);
}, 10500);

database.ref('location')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data: ', e);
  });


database.ref().set({
  name: 'Rishi Shahi',
  age: 26,
  stressLevel: 6,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },  
  location: {
    city: 'Philadelphia',
    country: 'United States'
  },
  attributes: {
    height: 180,
    weight: 120
  }  
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This failed :', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

//database.ref('isSingle').set(null);


//database.ref().set('This is my data.');

//database.ref('age').set(27);
//database.ref('location/city').set('New York'); 

database.ref('attributes').set({
  height: 73,
  weight: 150
}).then(() => {
  console.log('Database updated!');
}).catch((e) => {
  console.log('error: ', e);
});

//console.log('I made a request to change the data.');
*/
/*
database.ref('isSingle')
.remove()
.then(() => {
  console.log('Data was removed');
}).catch((e) => {
  console.log('Did not remove data');
});
*/