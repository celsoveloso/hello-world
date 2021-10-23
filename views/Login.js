import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const Login = props => {
  const [usuario, setUser] = useState('');
  const [senha, setPassword] = useState('');
  return (
    <ScrollView style={styles.backGround}>
      <View style={styles.viewLogin}>
        <Image
          source={require('../images/logo.jpeg')}
          style={styles.logoShape}
        />
      </View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={usuario => setUser(usuario)}
        defaultValue={usuario}
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={senha => setPassword(senha)}
        defaultValue={senha}
      />
      <Button
        onPress={() => props.navigation.navigate('ListaContatos')}
        title="Login"
        color="blue"
      />
      <Button
        onPress={() => props.navigation.navigate('Cadastro')}
        title="Cadastre-se"
        color="red"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  backGround: {
    padding: 50,
    backgroundColor: '#e7ddd7',
  },
  logoShape: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginLeft: 40,
    marginBottom: 16,
  },
  viewLogin: {
    width: 100,
    marginTop: 100,
    display: 'flex',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 8,
  },
  button: {
    width: 50,
    color: '#2196F3',
  },
});

export default Login;
