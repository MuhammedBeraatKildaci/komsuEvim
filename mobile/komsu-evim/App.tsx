import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default function App() {
  const { width, height } = Dimensions.get('window');

  console.log(width, height);
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <View style={styles.tabBar} >
        <View style={styles.tabBarItem} >
          <Icon name="person" size={24} color="#FFD601" />
          <Text style={styles.tabBarItemText}>Kullanıcı Girişi</Text>
        </View>
      </View>
      <View style={styles.signInContainer} >
        <Text style={styles.signInHeader}>Giriş Yap</Text>
        <View >
        <TextInput style={styles.signInInput} placeholder='E-posta' />
        <TextInput style={styles.signInInput} placeholder='Şifre' />
        <Button title='Giriş Yap' />
        <View style={styles.signInTextContainer} >
          <Text style={styles.signInTextLink}>Hesap Oluştur</Text>
          <Text style={styles.signInTextLink}>Şifremi Unuttum</Text>
        </View>
        </View>
      </View>
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
  tabBar: {
    backgroundColor: '#1E2938',
    height: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.07 : Dimensions.get('window').height * 0.06,
  },
  tabBarItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    paddingLeft: 10,
    height: Platform.OS === 'ios' ? Dimensions.get('window').height * 0.07 : Dimensions.get('window').height * 0.06,
  },
  tabBarItemText: {
    color: '#FFD601',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFD601',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  signInContainer: {
    padding: 20,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
  signInInput: {
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: '#FFD601',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  signInButtonText: {
    color: '#111828',
  },
  signInHeader: {
    color: '#FFD601',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 40,
    padding: 20,
  },
  signInTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  signInTextLink: {
    color: '#FFD601',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
