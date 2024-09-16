import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Keyboard, TouchableWithoutFeedback, View, ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type FullScreenLayoutProps = ViewProps & {
  children: React.ReactNode;
};


const GradientContainer: React.FC<FullScreenLayoutProps> = ({ children, ...rest }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#FFF0C8', '#C8DEFF', '#FFC8E2']}
      style={{ width: width, height: height }}
      className='w-full h-full'
      {...rest}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {children}
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default GradientContainer;


