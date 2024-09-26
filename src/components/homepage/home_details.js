import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home_details() {
  const navigation = useNavigation();

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Homepage</Text>
      <TouchableOpacity
        style={styles.pro_nav}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={[styles.text, { padding: 15 }]}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
  },
  pro_nav: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 15,
  },
});
