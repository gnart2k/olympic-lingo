import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from 'nativewind';
import CustomButton from '../components/ui/Button';
import CustomInput from '../components/ui/Input';
import FullScreenLayoutComponent from '../components/ui/FullScreenLayoutComponent';
import GradientContainer from '../components/ui/GradientContainer';
import { authAction } from '../utils/AuthAction';

// Styled components using NativeWind
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, 'Username must be at least 4 characters')
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: values => {
      // Handle form submission
      console.log(values);
    },
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const result = await authAction('/hello');
        const a = await fetch(`{api/auth/hello}`)
        console.log(await a.text())
      } catch (error) {
        console.log(error)
        // console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <GradientContainer className='flex justify-center items-center'>
      <FullScreenLayoutComponent className='w-10/12'>
        <StyledText className="text-2xl text-blue-700 text-center font-bold mb-4">Create Account</StyledText>
        <StyledText className="text-sm text-gray-500 mb-4 text-center">
          Create new account to access our product
        </StyledText>

        <CustomInput
          className="border border-gray-300 p-2 mb-2"
          placeholder="Username"
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <StyledText className="text-red-500">{formik.errors.username}</StyledText>
        ) : null}

        <CustomInput
          className="border border-gray-300 p-2 mb-2"
          placeholder="Email"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          keyboardType="email-address"
        />
        {formik.touched.email && formik.errors.email ? (
          <StyledText className="text-red-500">{formik.errors.email}</StyledText>
        ) : null}

        <CustomInput
          className="border border-gray-300 p-2 mb-2"
          placeholder="Password"
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          secureTextEntry
        />
        {formik.touched.password && formik.errors.password ? (
          <StyledText className="text-red-500">{formik.errors.password}</StyledText>
        ) : null}

        <View className='mt-2' />
        <Text>{data}</Text>

        <CustomButton variant='secondary' title="Register" onPress={formik.handleSubmit} />
      </FullScreenLayoutComponent>
    </GradientContainer>
  );
};

export default Register;
