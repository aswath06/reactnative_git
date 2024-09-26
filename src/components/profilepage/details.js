import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Profile_details() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Crayon'd Workshop</Text>
        <Text style={styles.text}>Git push and pull task</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  contentContainer: {
    height: '85%',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
  },
});
