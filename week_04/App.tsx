import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './style';
import { Layout } from './src/components/Tiki/Layout';

export default function App() {
  return (
    <View style={styles.container}>
      <Layout/>
    </View>
  );
}

