import React from 'react';
import { TouchableWithoutFeedback, View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FullScreenLayoutProps = ViewProps & {
  children: React.ReactNode;
};


const FullScreenLayoutComponent: React.FC<FullScreenLayoutProps> = ({ children, ...rest }) => {
  return (
    <SafeAreaView {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default FullScreenLayoutComponent;

