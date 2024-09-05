import React, { useEffect, useState } from 'react';
import { FlatList, Button, View, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // Certifique-se de que esta importação está correta
import { RootStackParamList } from '../navigation/AppNavigator';
import { loadPets } from '../services/database';
import PetItem from '../components/PetItem';

type Pet = {
  id: string;
  name: string;
  image: string;
  hunger: number;
  sleep: number;
  fun: number;
  status: string;
};

type PetListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PetList'>;
};

const PetListScreen: React.FC<PetListScreenProps> = ({ navigation }) => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    loadPets(setPets);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Adicionar Bichinho" onPress={() => navigation.navigate('AddPet')} />
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PetItem
            name={item.name}
            hunger={item.hunger}
            sleep={item.sleep}
            fun={item.fun}
            status={item.status}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default PetListScreen;
