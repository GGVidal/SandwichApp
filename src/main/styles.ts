import styled from 'styled-components/native';
import {ContainerProps} from './typings';

export const Container = styled.View<ContainerProps>`
  align-items: center;
  background-color: #272727;
  height: 100%;
  flex: 1;
  justify-content: center;
`;
export const SafeArea = styled.SafeAreaView`
  background-color: #272727;
`;
