import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputField from './CustomInput';

interface FormValue {
  name: string;
  email: string;
}

const App = () => {

  const [formValue, setFormValue] = useState<FormValue>({
    name: '',
    email: '',
  });

  const handleForm = (text: String, property: keyof FormValue) => {
    setFormValue({ ...formValue, [property]: text });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

      <Image source={require('./assets/male.png')} style={{ height: 100, width: 100 }} />

      <View style={{ width: '90%', marginTop: 30 }}>

        <InputField
          label='Name'
          placeholder='Enter name'
          value={formValue.name}
          onChangeText={(text: String) => handleForm(text, 'name')}
        />

        <InputField
          label='Email'
          placeholder='Enter email'
          value={formValue.email}
          onChangeText={(text: String) => handleForm(text, 'email')}
        />

        <TouchableOpacity style={{
          backgroundColor: 'black', padding: 8, marginTop: 16, justifyContent: 'center', alignItems: 'center',
          borderRadius: 8
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default App