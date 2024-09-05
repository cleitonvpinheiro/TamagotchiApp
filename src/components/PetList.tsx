// src/components/PetList.tsx
import React, { useState, useEffect } from 'react';
import { Pet } from '../types/types'; // Ajuste o caminho se necessário
import { loadPets } from '../services/database'; // Ajuste o caminho se necessário

const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    loadPets(setPets);
  }, []);

  return (
    <div>
      <h1>Pet List</h1>
      {pets.length === 0 ? (
        <p>No pets found.</p>
      ) : (
        pets.map(pet => (
          <div key={pet.id}>
            <h2>{pet.name}</h2>
            <img src={pet.image} alt={pet.name} />
            <p>Status: {pet.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PetList;
