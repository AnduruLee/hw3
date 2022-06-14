import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text style={{color: `white`, fontSize: 100, fontWeight: 'bold'}}>I am rich</Text>
        <Text style={{color: `white`, fontSize: 100,  fontWeight: 'bold'}}>I deserv it</Text>
        <Text style={{color: `white`, fontSize: 100,  fontWeight: 'bold'}}> I am good,</Text>
        <Text style={{color: `white`, fontSize: 100, fontWeight: 'bold'}}>healthy & successful</Text> 
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `#000000`,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
  });