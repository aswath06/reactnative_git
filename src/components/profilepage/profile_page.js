import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home_Appbar from '../homepage/home_appbar'
import Profile_details from './details'
import { useNavigation } from '@react-navigation/native'

export default function Profile_page() {
  const navigation = useNavigation()
  return (
    <View>
      <Home_Appbar text="Profile" onPress={ () => navigation.navigate('Home')} />
      <Profile_details/>
    </View>
  )
}

const styles = StyleSheet.create({})