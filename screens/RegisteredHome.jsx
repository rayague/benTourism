import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from '../dashboard/components/FlatCards';
import ElevatedCards from '../dashboard/components/ElevatedCards';
import Fanceycard from '../dashboard/components/Fanceycard';
import ActionCard from '../dashboard/components/ActionCard';
// import BottomList from './components/BottomList';

export default function RegisteredHome() {
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
