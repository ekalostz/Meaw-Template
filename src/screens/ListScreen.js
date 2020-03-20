import React, { memo } from 'react';
import Background from '../components/Background';
import Toolbar from '../components/Toolbar';
import Block from '../components/Block';
import { View, StyleSheet, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const ListScreen = ({ navigation }) => (
  <Background>
    <Toolbar>แมวของฉัน</Toolbar>
    <ScrollView style={styles.scroll}>
      <View style={styles.row}>
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m1.jpg'), ImgTitle: 'แมว1'})} Resource={require('../assets/meaw/m1.jpg')} children='แมว1' />
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m2.jpg'), ImgTitle: 'แมว2'})} Resource={require('../assets/meaw/m2.jpg')} children='แมว2' />
      </View>
      <View style={styles.row}>
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m3.jpg'), ImgTitle: 'แมว3'})} Resource={require('../assets/meaw/m3.jpg')} children='แมว3' />
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m4.jpg'), ImgTitle: 'แมว4'})} Resource={require('../assets/meaw/m4.jpg')} children='แมว4' />
      </View>
      <View style={styles.row}>
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m5.jpg'), ImgTitle: 'แมว5'})} Resource={require('../assets/meaw/m5.jpg')} children='แมว5' />
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m6.jpg'), ImgTitle: 'แมว6'})} Resource={require('../assets/meaw/m6.jpg')} children='แมว6' />
      </View>
      <View style={styles.row}>
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m7.jpg'), ImgTitle: 'แมว7'})} Resource={require('../assets/meaw/m7.jpg')} children='แมว7' />
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m8.jpg'), ImgTitle: 'แมว8'})} Resource={require('../assets/meaw/m8.jpg')} children='แมว8' />
      </View>
      <View style={styles.row}>
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m9.jpg'), ImgTitle: 'แมว9'})} Resource={require('../assets/meaw/m9.jpg')} children='แมว9' />
        <Block goTo={() => navigation.navigate('DetailScreen', {ImgSource: require('../assets/meaw/m10.jpg'), ImgTitle: 'แมว10'})} Resource={require('../assets/meaw/m10.jpg')} children='แมว10' />
      </View>
      <View style={{height:50}}></View>
    </ScrollView>
  </Background>
);

const styles = StyleSheet.create({
  scroll:{
    top: 50 + getStatusBarHeight()
  },
  row:{
    flexDirection: 'row'
  }
});

export default memo(ListScreen);
