import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  isLoading?: boolean;
  disabled?: boolean;
}

const StyledText = styled(Text);

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  isLoading = false,
  disabled = false,
}) => {
  const baseClasses = 'py-4 px-8 rounded-md';

  const variantClasses = {
    primary: 'bg-black rounded-md ',
    secondary: 'bg-blue-600  ',
    ghost: "bg-transparent border border-gray-500 rounded-md",
    danger: 'bg-red-500',
  };

  const disabledClasses = 'bg-gray-400';
  let textClasses = ''

  switch (variant) {
    case 'primary':
      textClasses = 'text-gray-200 ';
      break;

    case 'secondary':
      textClasses = 'text-white ';
      break;

    default:
      break;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${baseClasses} ${disabled ? disabledClasses : variantClasses[variant]} `}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <StyledText className={`${textClasses} text-center font-semibold`}>{title}</StyledText>
      )}
    </TouchableOpacity>
  )
};

export default CustomButton;

