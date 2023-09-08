import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ListaContatos({ navigation }) {
  return (
    <View style={{ alignItems: 'center' }}>

      <View style={{ backgroundColor: 'blue', flex: 2}}>
        <Text style={{ fontSize: 30}}>Lista de Contatos</Text>
      </View>

      <Button
        onPress={() => navigation.navigate('Login')}
        title="Botão Verde"
        color="#54aa23"
        accessibilityLabel="naviButton"
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default ListaContatos;