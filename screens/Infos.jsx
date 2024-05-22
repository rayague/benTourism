import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import InfoFoods from '../components/InfoFoods';
import CulturesList from '../components/CulturesList';
import Map from '../components/Map';

const Infos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapLoaded, setMapLoaded] = useState(true);

  // const handleMapLoaded = () => {
  //   setMapLoaded(true);
  // };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mapContainer}>
          <Map />
        </View>
        {/* <View style={styles.container}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Rechercher une ville..."
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />
        </View> */}
        <InfoFoods />
        <CulturesList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  mapContainer: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 350, // La carte occupera la moitié de la hauteur de l'écran
    width: '100%', // La carte occupera toute la largeur disponible
    backgroundColor: '#ddd',
  },
  map: {
    height: 200,
    width: 200,
  },
});

export default Infos;
