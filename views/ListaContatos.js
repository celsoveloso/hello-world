import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableHighlight,
  Button,
} from 'react-native';

export default function ListaContatos(props) {
  let lista = [
    {nome: 'Devin', numero: '(81) 8866-4477'},
    {nome: 'Dan', numero: '(81) 8866-4477'},
    {nome: 'Dominic', numero: '(81) 8866-4477'},
    {nome: 'Jackson', numero: '(81) 8866-4477'},
  ];
  return (
    <View>
      <View style={styles.buttonCreate}>
        <Text style={styles.title}>Lista de Contatos</Text>
        <Button
          style={styles.buttonShape}
          title="Adicionar Contato"
          onPress={() => props.navigation.navigate('CadastroContato')}
        />
      </View>

      <FlatList
        data={lista}
        renderItem={({item}) => (
          <View>
            <TouchableHighlight
              onPress={() => props.navigation.navigate('AlterarExcluir')}>
              <Text style={styles.item}>
                {item.nome} -- {item.numero}{' '}
              </Text>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 25,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    paddingRight: 16,
    backgroundColor: '#1870f6',
    height: 60,
    color: 'white',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonCreate: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonShape: {
    backgroundColor: 'red',
  },
});
