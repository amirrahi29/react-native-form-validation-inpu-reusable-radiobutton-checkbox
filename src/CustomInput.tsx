import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChangeText }) => {
  return (
    <View>
      <Text style={{ color: 'black' }}>{label}: {value}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'black'}
        cursorColor={'black'}
        onChangeText={onChangeText}
        value={value}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          marginTop: 8,
          borderRadius: 8,
          padding: 8,
          color: 'black'
        }}
      />
    </View>
  );
};

export default InputField;
