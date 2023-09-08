import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, Input } from 'react-native-elements';


function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Icon style={{ marginBottom: 70, marginTop: 120 }}
        name='person-circle-outline'
        type='ionicon'
        size={100}
      />

      <Text style={{ marginLeft: 40, alignSelf: 'flex-start', fontSize: 20 }}>Login</Text>

      <Input style={{ marginBottom: 10 }}
        placeholder='Email'
      />

      <Text style={{ marginLeft: 40, alignSelf: 'flex-start', fontSize: 20 }}>Senha</Text>

      <Input style={{ marginBottom: 10 }}
        placeholder='Senha'
      />

      <Button style={{ marginBottom: 50 }}
        onPress={() => navigation.navigate('ListaContatos')}
        title="Login"
        color="#5588ff"
        accessibilityLabel="naviButton"
      />

      <Button
        onPress={() => navigation.navigate('ListaContatos')}
        title="Cadastre-se"
        color="#ee2255"
        accessibilityLabel="naviButton"
      />


    </View>
  );
}

const Stack = createNativeStackNavigator();

export default Login;