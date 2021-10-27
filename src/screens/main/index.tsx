import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootStackParams';
import MainContainer from '../../main/Container';

type mainScreenProp = StackNavigationProp<RootStackParamsList, 'Main'>;

function MainScreen() {
  const navigation = useNavigation<mainScreenProp>();
  return (
    <MainContainer>
      <Text>Main Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Auth')} />
    </MainContainer>
  );
}

export default MainScreen;
