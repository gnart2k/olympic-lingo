import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, TextInput, KeyboardType } from 'react-native';
import { styled } from 'nativewind';

interface CustomInputProps {
  placeholder: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  isLoading?: boolean;
  disabled?: boolean;
  onChangeText?: (e: any) => void;
  className?: string;
  onBlur?: (e: any) => void;
  onFocus?: () => void;
  value?: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
}

const StyledText = styled(Text);

const CustomInput: React.FC<CustomInputProps> = ({
  className,
  onChangeText,
  placeholder,
  onPress,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  onBlur,
  onFocus,
  value,
  keyboardType,
  secureTextEntry
}) => {
  const baseClasses = 'py-4 px-3 my-1';
  const variantClasses = {
    primary: 'border rounded-md border-blue-600',
    secondary: 'bg-gray-500',
    ghost: "bg-transparent border border-gray-500 rounded-md",
    danger: 'bg-red-500',
  };

  const disabledClasses = 'bg-gray-400';
  let textClasses = ''

  switch (variant) {
    case 'primary':
      textClasses = 'text-gray-200 ';
      break;

    default:
      break;
  }

  return (
    <TextInput
      onPress={onPress}
      className={`${baseClasses} ${className} ${disabled ? disabledClasses : variantClasses[variant]}`}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      keyboardType={keyboardType as KeyboardType}
      secureTextEntry={secureTextEntry}

    />
  )
};

export default CustomInput;


