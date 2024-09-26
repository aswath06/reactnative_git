import React from 'react'

const Days = () => {
  return (
    <View style={styles.contentContainer}>
        <TouchableOpacity
        style={styles.pro_nav}
        onPress={() => navigation.navigate('Profile')} >
        <Text style={[styles.text, { padding: 15 }]}>Sun</Text>
        <Text style={[styles.text, { padding: 15 }]}>Mon</Text>
        
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
text: {
        fontWeight: '90',
        fontSize: 10,
        color: 'white',
       
      },
})

export default Days
