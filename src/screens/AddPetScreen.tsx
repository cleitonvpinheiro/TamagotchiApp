import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { insertPet } from '../services/database';

const AddPetScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const savePet = () => {
    const newPet = {
      id: new Date().toString(),
      name,
      image,
      hunger: 100,
      sleep: 100,
      fun: 100,
      status: 'Muito Bem',
    };
    insertPet(newPet);
    navigation.navigate('PetList'); // Voltar para a listagem após salvar
  };

  return (
    <View>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <Button title="Escolher Imagem" onPress={() => { /* Implementar escolha de imagem */ }} />
      {image && <Image source={{ uri: image }} />}
      <Button title="Salvar" onPress={savePet} />
    </View>
  );
};

export default AddPetScreen;
