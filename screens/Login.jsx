import React, {useState, useContext} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../AuthContext';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../firebaseConfig';
import LoadingOverlay from '../components/LoadingOverlay';
import * as ExpoCrypto from 'expo-crypto';
import ForgotPassword from './ForgotPassword';

const facebook = require('../assets/picture7.jpg');

export default function Login() {
  const navigation = useNavigation();
  const setIsAuthenticated = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        Alert.alert(
          'Erreur',
          'Veuillez saisir votre email et votre mot de passe.',
        );
        setLoading(false);
        return;
      }

      // Rechercher l'utilisateur dans la collection 'User' par email
      const q = query(collection(db, 'User'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert('Erreur', 'Aucun utilisateur trouvé avec cet email.');
        setLoading(false);
        return;
      }

      // Récupérer les données de l'utilisateur
      const userData = querySnapshot.docs[0].data();

      // Récupérer le mot de passe haché stocké dans la base de données
      const hashedPasswordFromDB = userData.password;

      // Hasher le mot de passe entré par l'utilisateur
      const hashedPassword = await ExpoCrypto.digestStringAsync(
        ExpoCrypto.CryptoDigestAlgorithm.SHA256,
        password,
        {encoding: ExpoCrypto.CryptoEncoding.HEX},
      );

      // Comparer les mots de passe hachés
      if (hashedPassword === hashedPasswordFromDB) {
        // Authentification réussie
        setIsAuthenticated(true);
        navigation.navigate('Bienvenu', {screen: 'RegisteredHome'});
      } else {
        // Mot de passe incorrect
        Alert.alert('Erreur', 'Mot de passe incorrect.');
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification :", error);
      Alert.alert(
        'Erreur',
        "Une erreur est survenue lors de l'authentification.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={loading} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={facebook} style={styles.image} resizeMode="contain" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Votre Email"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Votre Mot de Passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.rememberView}>
          <View>
            <Pressable onPress={ForgotPassword}>
              <Text style={styles.forgetText}>Mot de passe oublié?</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Se Connecter</Text>
          </Pressable>
        </View>
        <Text
          style={styles.footerText}
          onPress={() =>
            navigation.navigate('Inscription', {screen: 'Register'})
          }>
          Pas de compte ? <Text style={styles.signup}>S'inscrire</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 300,
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: '100%',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 15,
    textAlign: 'center',
    marginHorizontal: 'auto',
  },
  button: {
    backgroundColor: '#4CAF50',
    height: 45,
    borderColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 50,
  },
  forgetText: {
    color: 'red',
    fontWeight: 'bold',
  },
  footerText: {
    color: 'red',
    fontWeight: 'bold',
  },
  signup: {
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
