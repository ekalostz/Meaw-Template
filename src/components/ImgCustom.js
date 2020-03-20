import React, { memo } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const ImgCustom = ({ Resource, children }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={Resource}/>
    <Text style={styles.txt}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '70%',
    top: 30 + getStatusBarHeight()
  },
  image: {
    width: '100%',
    height: '70%',
    borderColor: '#000',
    borderWidth: 2
  },
  txt:{
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    height:36
  }
});

export default memo(ImgCustom);