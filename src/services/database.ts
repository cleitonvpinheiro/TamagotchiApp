import { Pet } from '../types/types';

let petsStore: Pet[] = [];

export const initDB = () => {};

export const insertPet = (pet: Pet) => {
  petsStore.push(pet);
};

export const loadPets = (setPets: (pets: Pet[]) => void) => {
  setPets([...petsStore]);
};
