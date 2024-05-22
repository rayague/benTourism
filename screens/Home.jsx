import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from '../components/FlatCards';
import ElevatedCards from '../components/ElevatedCards';
import Fanceycard from '../components/Fanceycard';
import ActionCard from '../components/ActionCard';
import BottomList from '../components/BottomList';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <Fanceycard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
