import * as SQLite from 'react-native-sqlite-storage';
import { Pet } from '../types/types';

const db = SQLite.openDatabase(
  {
    name: 'pets.db',  // Nome do banco de dados
    location: 'default',  // Localização do banco de dados
  },
  () => {
    console.log('Database opened successfully');
  },
  error => {
    console.log('Error opening database:', error);
  }
);

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS pets (id TEXT PRIMARY KEY, name TEXT, image TEXT, hunger INTEGER, sleep INTEGER, fun INTEGER, status TEXT);'
    );
  });
};

export const insertPet = (pet: Pet) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO pets (id, name, image, hunger, sleep, fun, status) VALUES (?, ?, ?, ?, ?, ?, ?);',
    [pet.id, pet.name, pet.image, pet.hunger, pet.sleep, pet.fun, pet.status]);
  });
};

export const loadPets = (setPets: (pets: Pet[]) => void) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM pets', [], (tx, results) => {
      const petsArray: Pet[] = [];

      for (let i = 0; i < results.rows.length; i++) {
        const row = results.rows.item(i);
        petsArray.push({
          id: row.id,
          name: row.name,
          image: row.image,
          hunger: row.hunger,
          sleep: row.sleep,
          fun: row.fun,
          status: row.status,
        });
      }
      
      setPets(petsArray);
    });
  });
};