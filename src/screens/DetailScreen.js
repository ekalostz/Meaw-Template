import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import BackButton from '../components/BackButton';
import ImgCustom from '../components/ImgCustom';

const DetailScreen = ({ navigation }) => (
  
  <Background>
    <Toolbar>รายละเอียดแมว</Toolbar>
    <BackButton goBack={() => navigation.navigate('ListScreen')} />
    <ImgCustom Resource={navigation.getParam('ImgSource')} children={navigation.getParam('ImgTitle')} />
    <Header>อีเมล : {localStorage.getItem('email')}</Header>
    <Header>รหัสผ่าน : {localStorage.getItem('password')}</Header>
  </Background>
);

export default memo(DetailScreen);
