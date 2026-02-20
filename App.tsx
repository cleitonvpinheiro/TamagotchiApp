import React, { useEffect } from 'react';
import { View } from 'react-native';
import { initDB } from './src/services/database';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
};

export default App;

