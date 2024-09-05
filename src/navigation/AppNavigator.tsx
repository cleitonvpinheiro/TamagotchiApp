import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Certifique-se de que esta importação está correta
import { NavigationContainer } from '@react-navigation/native';
import PetListScreen from '../screens/PetListScreen';
import AddPetScreen from '../screens/AddPetScreen';
import React from 'react';

export type RootStackParamList = {
  PetList: undefined;
  AddPet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PetList" component={PetListScreen} />
        <Stack.Screen name="AddPet" component={AddPetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
