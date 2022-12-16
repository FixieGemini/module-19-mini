// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => 
    openDB('rando-db', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('rando-db')) {
                console.log('database already exists')
                return;
            }
            db.createObjectStore('rando-db', {keyPath: 'id', autoIncrement: true});
            console.log('database created');
        },
    });




// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    const nameDb= await openDB('name', 1);
    const tx = nameDb.transaction('name', 'readwrite');
    const store = tx.objectStore('name');
    const request = store.add({ name: content });
    const result = await request;
    console.log('Data saved to database', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  
};

initdb();
