import * as React from 'react';
import { StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const [usuarios, setUsuarios] = React.useState([]);
  const [carregado, setCarregado] = React.useState(true);



  //para ler a API sera necessário um elemento inical chamado use effect
  React.useEffect(() => {
    fetch("http://192.168.56.1/revisao/services/cliente/exibir.php")
      .then((response) => response.json())
      .then((filmes) => setUsuarios(filmes.dados))

      .catch((error) => console.log(error))
      .finally(() => setCarregado(false));
  }, [])
  return (
    <View style={styles.container}>
      {  carregado ? (
        <ActivityIndicator />
      ) : (
          <FlatList
            data={usuarios}
            renderItem={({ item }) => (

              <Text>{item.nome} </Text>

            )}
            keyExtractor={({ idcliente }, index) => idcliente} />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
