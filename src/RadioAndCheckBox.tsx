import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'

const RadioAndCheckBox = () => {

  const [gender, setGender] = useState(0);
  const [language, setLanguage] = useState({
    'Hindi': false,
    'English': false,
    'Math': false,
    'Science': false,
    'Econonics': false,
    'Social Science': false,
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

      {/* radio buttons */}
      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={() => setGender(0)} style={{ margin: 16 }}>
          <View style={styles.outer}>
            {gender === 0 && <View style={styles.inner}></View>}
          </View>
          <Text style={{ color: 'black' }}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setGender(1)} style={{ margin: 16 }}>
          <View style={styles.outer}>
            {gender === 1 && <View style={styles.inner}></View>}
          </View>
          <Text style={{ color: 'black' }}>Female</Text>
        </TouchableOpacity>

      </View>

      {/* checkbox */}

      <View style={{ width: '100%' }}>

        <CheckBox
          style={{ padding: 10 }}
          onClick={() => setLanguage({ ...language, Hindi: !language.Hindi })}
          isChecked={language.Hindi}
          rightText="Hindi"
          rightTextStyle={{ color: language.Hindi ? 'green' : 'black' }}
          checkedCheckBoxColor='green'
          uncheckedCheckBoxColor='red'
        />

        <CheckBox
          style={{ padding: 10 }}
          onClick={() => setLanguage({ ...language, English: !language.English })}
          isChecked={language.English}
          rightText="English"
          rightTextStyle={{ color: language.English ? 'green' : 'black' }}
        />

        <CheckBox
          style={{ padding: 10 }}
          onClick={() => setLanguage({ ...language, Math: !language.Math })}
          isChecked={language.Math}
          rightText="Math"
          rightTextStyle={{ color: language.Math ? 'green' : 'black' }}
        />

        <CheckBox
          style={{ padding: 10 }}
          onClick={() => setLanguage({ ...language, Science: !language.Science })}
          isChecked={language.Science}
          rightText="Science"
          rightTextStyle={{ color: language.Science ? 'green' : 'black' }}
        />

        <CheckBox
          style={{ padding: 10 }}
          onClick={() => setLanguage({ ...language, "Social Science": !language['Social Science'] })}
          isChecked={language['Social Science']}
          rightText="Social Science"
          rightTextStyle={{ color: language['Social Science'] ? 'green' : 'black' }}
        />

      </View>

    </View>
  )
}

export default RadioAndCheckBox


const styles = StyleSheet.create({
  outer: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
    height: 16,
    width: 16,
    backgroundColor: 'grey',
    borderRadius: 100
  }
})