import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Toolbar = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: -40,
    right: -40,
    textAlign: 'center',
    textAlignVertical: 'center',
    height:50,
    fontSize: 30,
    color: '#fff',
    backgroundColor: '#434F6F',
    fontWeight: 'bold'
  },
});

export default memo(Toolbar);