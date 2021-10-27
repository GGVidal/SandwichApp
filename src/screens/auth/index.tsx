import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootStackParams';
import MainContainer from '../../main/Container';

type authScreenProp = StackNavigationProp<RootStackParamsList, 'Auth'>;

const AuthScreen = () => {
  const navigation = useNavigation<authScreenProp>();
  return (
    <MainContainer>
      <Text>2 Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
    </MainContainer>
  );
};
export default AuthScreen;
