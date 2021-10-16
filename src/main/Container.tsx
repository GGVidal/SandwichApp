import React from 'react';
import {Container} from './styles';
import {ContainerProps} from './typings';
const MainContainer: React.FC<ContainerProps> = ({children, ...props}) => (
  <Container {...props}>{children}</Container>
);

export default MainContainer;
