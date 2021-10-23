// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './views/Login';
import Cadastro from './views/Cadastro';
import CadastroContato from './views/CadastroContato';
import ListaContatos from './views/ListaContatos';
import AlterarExcluir from './views/AlterarExcluir';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroContato" component={CadastroContato} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} />
        <Stack.Screen name="AlterarExcluir" component={AlterarExcluir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
