import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,} from 'react-native';
import Postagem from './source/telas/Postagem/Postagem';
import Topo from './source/telas/Topo/Topo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topo />
      <Postagem></Postagem>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
