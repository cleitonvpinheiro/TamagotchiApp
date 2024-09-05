import React, { useEffect } from 'react';
import { initDB } from './src/services/database'; // Inicialização do banco de dados
import AppNavigator from './src/navigation/AppNavigator'; 
import PetList from './src/components/PetList';

const App: React.FC = () => {
  useEffect(() => {
    initDB(); // Inicializa o banco de dados
  }, []);

  return (
    <div>
      <PetList />
      <AppNavigator />
    </div>
  );
};

export default App;

