import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';
import ArrowBack from '../../assets/icons/arrowback';

function Home_Appbar({text, onPress}) {
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity onPress={onPress}>
          <ArrowBack />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    padding: 10,
    height: 60,
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    color: 'white',
  },
});

export default Home_Appbar;
