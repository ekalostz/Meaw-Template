import React, { memo, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { emailValidator, passwordValidator } from '../core/utils';
import 'localstorage-polyfill'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);

    navigation.navigate('ListScreen');
  };

  return (
    <Background>

      <Logo />

      <TextInput
        label="อีเมล"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="รหัสผ่าน"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        ล็อคอิน
      </Button>
    </Background>
  );
};

export default memo(LoginScreen);
