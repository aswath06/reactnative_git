import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home_Appbar from '../components/homepage/home_appbar';
import Home_details from '../components/homepage/home_details';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home_Appbar text="Home" onPress={null} />
      <Home_details/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },

});
