import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const Block = ({ goTo, Resource, children }) => (
  <TouchableOpacity onPress={goTo} style={styles.container}>
    <Image style={styles.image} source={Resource} />
    <Text style={styles.txt}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 180
  },
  image: {
    width: 140,
    height: 140,
    borderColor: '#000',
    borderWidth: 2
  },
  txt:{
    width: 140,
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    height:25
  }
});

export default memo(Block);