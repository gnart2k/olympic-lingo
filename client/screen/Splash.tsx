import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Image, Text, Dimensions, SafeAreaViewBase, SafeAreaView, Button, Pressable } from 'react-native'
import CustomButton from '../components/ui/Button';

type Props = {}

export default function Splash({ navigation }: any) {
  const { width, height } = Dimensions.get('window');

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#FFF0C8', '#C8DEFF', '#FFC8E2']}
      style={{ width: width, height: height }}
      className='flex flex-col items-center justify-center'
    >
      <Image source={require('../assets/splash_page/splash_logo.png')} />
      <Text className='text-3xl mt-8 font-bold text-center mx-12'>The most powerful bot of Trang</Text>
      <Text className='text-gray-400 text-lg mt-3'>The most trusted and fast chatbot ever</Text>
      <View className='flex-row items-center justify-around mt-4'>
        <View className='mr-6'>
          <CustomButton
            title="Sign Up"
            variant="primary"
            onPress={() => { navigation.navigate('Register') }}
          />
        </View>
        <CustomButton
          title="Sign In"
          variant="ghost"
        />
      </View>

    </LinearGradient>
  )
}

