import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {collection, query, where, getDocs} from 'firebase/firestore';
import {db} from '../firebaseConfig';
import LoadingOverlay from '../components/LoadingOverlay';
import * as ExpoCrypto from 'expo-crypto';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      if (!email) {
        Alert.alert('Erreur', 'Veuillez saisir votre email.');
        return;
      }

      // Rechercher l'utilisateur dans la collection 'User' par email
      const q = query(collection(db, 'User'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert('Erreur', 'Aucun utilisateur trouvé avec cet email.');
        return;
      }

      // Envoyer un email de réinitialisation de mot de passe à l'utilisateur
      const userData = querySnapshot.docs[0].data();
      const userId = userData.id; // ou tout autre identifiant unique de l'utilisateur
      // Ici, vous devez implémenter la logique d'envoi de l'email de réinitialisation de mot de passe

      Alert.alert(
        'Succès',
        'Un email de réinitialisation de mot de passe a été envoyé à votre adresse.',
      );

      // Rediriger l'utilisateur vers une page de confirmation ou de connexion
      navigation.navigate('Connexion', {screen: 'Login'});
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi de l'email de réinitialisation de mot de passe :",
        error,
      );
      Alert.alert(
        'Erreur',
        "Une erreur est survenue lors de l'envoi de l'email de réinitialisation de mot de passe.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={loading} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Réinitialisation du mot de passe</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Votre Email"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={handleForgotPassword}>
            <Text style={styles.buttonText}>
              Envoyer l'email de réinitialisation
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 7,
  },
  buttonView: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
