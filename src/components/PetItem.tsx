import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PetItemProps {
  name: string;
  hunger: number;
  sleep: number;
  fun: number;
  status: string;
  image: string;
}

const PetItem: React.FC<PetItemProps> = ({ name, hunger, sleep, fun, status, image }) => (
  <View style={styles.container}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text>{name}</Text>
    <Text>Fome: {hunger}</Text>
    <Text>Sono: {sleep}</Text>
    <Text>Diversão: {fun}</Text>
    <Text>Status: {status}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1 },
  image: { width: 50, height: 50, borderRadius: 25 },
});

export default PetItem;
