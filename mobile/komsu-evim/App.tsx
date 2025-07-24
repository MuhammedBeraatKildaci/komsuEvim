import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import SignUp from './screens/SignUp';

export default function App() {
  const { width, height } = Dimensions.get('window');

  console.log(width, height);
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111828',
    flex: 1,
  },
  statusBar: {
    backgroundColor: '#fff',
    height: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.05 : Dimensions.get('window').height * 0.05,
  },
  
});
