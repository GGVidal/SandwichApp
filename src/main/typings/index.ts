import {ReactNode} from 'react';
import {ViewProps} from 'react-native';

export interface ContainerProps extends ViewProps {
  children: ReactNode;
}
