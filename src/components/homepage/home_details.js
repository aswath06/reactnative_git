import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home_details() {
  const navigation = useNavigation();

  return (
    <View style={styles.contentContainer}>
      <Text style={styles.text}>Manage Your Tasks</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'black',
  },
  text: {
    fontWeight: '900',
    fontSize: 50,
    color: 'white',
    paddingTop:30,
  },
  pro_nav: {
    margin: 15,
    borderColor: 'white',
    borderWidth: 1.5,
    borderRadius: 15,

  },
});
